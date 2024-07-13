import db from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, description, category } = await request.json();

        // Enable foreign key constraints
        db.run("PRAGMA foreign_keys = ON");

        // Start transaction
        db.run("BEGIN TRANSACTION");

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
            db.run("ROLLBACK"); // Rollback transaction
            return NextResponse.json({ error: 'Article already exists' }, { status: 400 });
        }

        // Insert new article
        await new Promise<void>((resolve, reject) => {
            const query = `INSERT INTO articles(name, description, category) VALUES(?, ?, ?)`;
            db.run(query, [name, description, category], function (err) {
                if (err) {
                    console.error("Error inserting article:", err.message);
                    if (err.message.includes("FOREIGN KEY constraint failed")) {
                        reject(new Error("Foreign key constraint violation"));
                    } else {
                        reject(err);
                    }
                    return;
                }
                const id = this.lastID;
                console.log(`Article inserted, ID: ${id}`);
                resolve();
            });
        });

        // Commit transaction
        db.run("COMMIT");

        return NextResponse.json({ message: "Article inserted successfully" }, { status: 200 });
    } catch (error: any) {
        console.error("Error processing request:", error.message);
        db.run("ROLLBACK"); // Rollback transaction on error

        // specific error cases
        if (error.message === "Foreign key constraint violation") {
            return NextResponse.json({ error: 'Foreign key constraint violated' }, { status: 400 });
        } else {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }
    }
}
