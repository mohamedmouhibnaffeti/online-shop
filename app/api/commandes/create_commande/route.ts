import db from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        const { username, article } = await request.json()

        db.run("PRAGMA foreign_keys = ON")

        db.run("BEGIN TRANSACTION")

        await new Promise<void>((resolve, reject) => {
            db.run(`CREATE TABLE IF NOT EXISTS commandes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                state TEXT CHECK(state IN ('pending', 'confirmed', 'refused', 'delivred')),
                created_at TEXT DEFAULT (DATETIME('now')),
                username TEXT,
                article TEXT,
                FOREIGN KEY (username) references users(username)
                FOREIGN KEY (article) references articles(name)
            )`,
            (err)=>{
                if(err){
                    console.error("Failed to create articles table: ", err.message)
                    reject(err)
                    return
                }
                console.log("Created commande table")
                resolve()
            }
        )
        })

        await new Promise<void>((resolve, reject) => {
            const query = `INSERT INTO commandes(state, username, article) VALUES(?, ?, ?, ?)`
            db.run(query, ['pending', username, article], function(err){
                if(err){
                    console.error("Error inserting commande: ", err.message)
                    if(err.message.includes("FOREIGN KEY constraint failed")){
                        reject(new Error("Foreign key constraint violation"));
                    } else {
                        reject(err);
                    }
                    return;
                }
                const ID = this.lastID
                console.log(`commande inserted, ID: $${ID}`)
                resolve()
            })
        })
        db.run("COMMIT")
        return NextResponse.json({ message: "Commande inserted successfully" }, { status: 200 });
    }catch(err: any){
        console.error("Error processing request:", err.message);
        db.run("ROLLBACK"); // Rollback transaction on error

        // specific error cases
        if (err.message === "Foreign key constraint violation") {
            return NextResponse.json({ error: 'Foreign key constraint violated' }, { status: 400 });
        } else {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }
    }
}