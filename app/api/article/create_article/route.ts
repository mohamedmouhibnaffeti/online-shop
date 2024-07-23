import db from "@/lib/ConnectDB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const images = [];
        images.push(data.get("image0") as File);
        images.push(data.get("image1") as File);

        // Convert images to binary
        const imageBuffer: any= []
        for(const image of images){
            const buffer = Buffer.from(await image.arrayBuffer())
            imageBuffer.push(buffer)
        }

        const name = data.get("name") as string;
        const description = data.get("description") as string;
        const category = data.get("category") as string;

        // Enable foreign key constraints
        await new Promise<void>((resolve, reject) => {
            db.run("PRAGMA foreign_keys = ON", (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });

        // Start transaction
        await new Promise<void>((resolve, reject) => {
            db.run("BEGIN TRANSACTION", (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });

        // Create articles table if not exists
        await new Promise<void>((resolve, reject) => {
            db.run(
                `CREATE TABLE IF NOT EXISTS articles (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT UNIQUE,
                    description TEXT,
                    category TEXT,
                    quantity NUMBER,
                    price REAL,
                    solde NUMBER,
                    images BLOB,
                    FOREIGN KEY (category) REFERENCES categories(name)
                )`,
                (err) => {
                    if (err) {
                        console.error("Failed to create articles table:", err.message);
                        reject(err);
                        return;
                    }
                    console.log("Created Articles Table");
                    resolve();
                }
            );
        });

        // Check if article already exists
        const existingArticle = await new Promise<boolean>((resolve, reject) => {
            db.get(`SELECT id FROM articles WHERE name = ?`, [name], (err, row) => {
                if (err) {
                    console.error("Error checking article existence:", err.message);
                    reject(err);
                    return;
                }
                resolve(!!row);
            });
        });

        if (existingArticle) {
            await new Promise<void>((resolve, reject) => {
                db.run("ROLLBACK", (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return NextResponse.json({ error: 'Article already exists' }, { status: 400 });
        }

        // Insert new article
        await new Promise<void>((resolve, reject) => {
            const query = `INSERT INTO articles(name, description, category, images) VALUES(?, ?, ?, ?)`;
            db.run(query, [name, description, category, Buffer.concat(imageBuffer)], function (err) {
                if (err) {
                    console.error("Error inserting article:", err.message);
                    if (err.message.includes("FOREIGN KEY constraint failed")) {
                        reject(new Error("Foreign key constraint violation"));
                    } else {
                        reject(err);
                    }
                    return;
                }
                console.log(`Article inserted, ID: ${this.lastID}`);
                resolve();
            });
        });

        // Commit transaction
        await new Promise<void>((resolve, reject) => {
            db.run("COMMIT", (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });

        return NextResponse.json({ message: "Article inserted successfully" }, { status: 200 });
    } catch (error: any) {
        console.error("Error processing request:", error.message);

        // Rollback transaction on error
        await new Promise<void>((resolve, reject) => {
            db.run("ROLLBACK", (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });

        // Specific error cases
        if (error.message === "Foreign key constraint violation") {
            return NextResponse.json({ error: 'Foreign key constraint violated' }, { status: 400 });
        } else {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }
    }
}
