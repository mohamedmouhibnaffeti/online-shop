import db from "@/lib/ConnectDB";
import { NextResponse } from "next/server";



export async function GET(request: Request) {
    return new Promise((resolve) => {
        db.serialize(() => {
            // Create the items table if it doesn't exist
            db.run(
                `CREATE TABLE IF NOT EXISTS items (
                    id INTEGER PRIMARY KEY,
                    name TEXT,
                    description TEXT,
                    img TEXT
                )`,
                (err) => {
                    if (err) {
                        console.error(err.message);
                        resolve(NextResponse.json({ error: "Failed to create table" }, { status: 500 }));
                        return;
                    }
                    console.log("Created items table.");

                    // Clear the existing data in the items table
                    db.run(`DELETE FROM items`, (err) => {
                        if (err) {
                            console.error(err.message);
                            resolve(NextResponse.json({ error: "Failed to delete rows" }, { status: 500 }));
                            return;
                        }
                        console.log("All rows deleted from items");

                        // Insert new data into the items table
                        const items = [
                            [
                                "Oshawott",
                                "Basic Pokemon. HP 60. Surprise Attack 20. Flip a coin. If heads, this attack does 10 more damage. Water Gun 30. Weakness: Lightning x2. Resistance: none. Retreat Cost: 1.",
                                "/collection/item1.png"
                            ],
                            [
                                "Riolu",
                                "Basic Pokemon. HP 60. Quick Attack 10. Flip a coin. If heads, this attack does 10 more damage. Weakness: Fighting x2. Resistance: none. Retreat Cost: 1.",
                                "/collection/item2.png"
                            ],
                            [
                                "Snivy",
                                "Basic Pokemon. HP 60. Slam 20. Weakness: Fire x2. Resistance: Water -20. Retreat Cost: 1.",
                                "/collection/item3.png"
                            ],
                            [
                                "Zorua",
                                "Basic Pokemon. HP 60. Stampede 10. Ram 20. Weakness: Fighting x2, Resistance: Psychic -20. Retreat Cost: 1.",
                                "/collection/item4.png"
                            ]
                        ];

                        const insertSql = `INSERT INTO items(name, description, img) VALUES(?, ?, ?)`;

                        items.forEach((item) => {
                            db.run(insertSql, item, function (err) {
                                if (err) {
                                    console.error(err.message);
                                } else {
                                    const id = this.lastID; // get the id of the last inserted row
                                    console.log(`Rows inserted, ID ${id}`);
                                }
                            });
                        });

                        // Close the database connection after all insertions are done
                        db.close((err) => {
                            if (err) {
                                console.error(err.message);
                                resolve(NextResponse.json({ error: "Failed to close the database connection" }, { status: 500 }));
                                return;
                            }
                            console.log("Closed the database connection.");
                            resolve(NextResponse.json({ message: "Database initialized and items inserted" }, { status: 200 }));
                        });
                    });
                }
            );
        });
    });
}
