import db from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { name } = await request.json();

    return new Promise((resolve) => {
        db.serialize(() => {
            // Create the categories table if it doesn't exist
            db.run(
                `CREATE TABLE IF NOT EXISTS categories (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT UNIQUE
                )`,
                (err) => {
                    if (err) {
                        console.error(err.message);
                        resolve(NextResponse.json({ error: 'Error Creating Table Categories' }, { status: 500 }));
                        return;
                    }

                    // Check if category with the given name already exists
                    db.get(`SELECT id FROM categories WHERE name = ?`, [name], (err, row) => {
                        if (err) {
                            console.error(err.message);
                            resolve(NextResponse.json({ error: 'Error Checking Category Existence' }, { status: 500 }));
                            return;
                        }

                        if (row) {
                            resolve(NextResponse.json({ error: 'Category already exists' }, { status: 400 }));
                            return;
                        }

                        // Insert new category
                        let query = `INSERT INTO categories(name) VALUES(?)`;
                        db.run(query, [name], function (err) {
                            if (err) {
                                console.error(err.message);
                                resolve(NextResponse.json({ error: 'Error Inserting Category' }, { status: 500 }));
                                return;
                            }

                            const id = this.lastID;
                            console.log(`Row Inserted, ID ${id}`);

                            // Close the database connection after insertion
                            db.close((err) => {
                                if (err) {
                                    console.error(err.message);
                                    resolve(NextResponse.json({ error: "Failed to close the database connection" }, { status: 500 }));
                                    return;
                                }
                                console.log("Closed the database connection.");
                                resolve(NextResponse.json({ message: "Category inserted successfully", id: id }, { status: 200 }));
                            });
                        });
                    });
                }
            );
        });
    });
}
