import db from "@/lib/ConnectDB";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { createAccessToken, createRefreshToken } from "@/lib/functions/auth";

export async function POST(request: Request){
    try{
        const {name, lastname, confirmPasssword, password, email} = await request.json()

        db.run("PRAGMA foreign_keys = ON")

        db.run("BEGIN TRANSACTION")

        await new Promise<void>((resolve, reject) => {
            db.run(`
                    CREATE TABLE IF NOT EXISTS users (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT,
                        lastname TEXT,
                        email TEXT UNIQUE,
                        password TEXT
                    )`,
                    (err)=>{
                        if(err){
                            console.error("Failed to create users table")
                            reject(err)
                            return
                        }
                        console.log("User table created")
                        resolve()
                    }
                )
        })

        const existingUser = await new Promise<boolean>((resolve, reject)=>{
            db.get(`SELECT id FROM users WHERE email = ?`, [email], (err, row)=>{
                if(err){
                    console.error("Error checking user existance.")
                    reject(err)
                    return
                }
                resolve(!!row)
            })
        })

        if(existingUser){
            db.run("ROLLBACK")
            return NextResponse.json({error: "User with provided email already exists"}, {status: 400})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        await new Promise<void>((resolve, reject)=>{
            const query = `INSERT INTO users(name, lastname, email, password) VALUES(?, ?, ?, ?)`
            db.run(query, [name, lastname, email, hashedPassword], function(err){
                if(err){
                    console.error("Error creating user: ", err.message)
                    if(err.message.includes("FOREIGN KEY constraint failed")){
                        reject(new Error("Foreign key constraint violation"));
                    }else{
                        reject(err)
                    }
                }
                const id = this.lastID
                console.log(`article inserted, ID:${id}`)
                resolve()
            })
        })
        
        db.run("COMMIT")
        return NextResponse.json({ message: "user created successfully" }, { status: 200 })
    }catch(error: any){
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