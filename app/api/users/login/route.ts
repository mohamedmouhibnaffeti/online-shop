import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import db from "@/lib/ConnectDB";

export async function POST(request: Request){
    try{
        const {email, password} = await request.json()

        db.run("BEGIN TRANSACTION")

        const user = await new Promise<any>((resolve, reject) => {
            db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(row)
            })
        })
        db.run("COMMIT")
        if(!user){
            return NextResponse.json({message: "User not found"}, {status: 400})    
        }
        else{
            const match = await bcrypt.compare(password, user.password)
            if(!match){
                return NextResponse.json({message: "Incorrect Password"}, {status: 400})
            }else{    
                return NextResponse.json({user: user}, {status: 200})
            }
        }
    }catch(err){
        console.log(err)
        return NextResponse.json({message: "Internal Server Error."}, {status: 500})
    }
}