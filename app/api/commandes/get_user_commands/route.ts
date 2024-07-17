import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/ConnectDB";

export async function GET(request: NextRequest) {
    try{
        const email = request.nextUrl.searchParams.get("email")
        
        db.run("BEGIN TRANSACTION")

        const commandes = await new Promise<any>((resolve, reject) => {
            db.all(`SELECT * FROM commandes WHERE user = ?`, [email], (err, row) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(row)
            })
        })

        db.run("COMMIT")

        return NextResponse.json({commandes: commandes}, {status: 200})
    }catch(err){
        return NextResponse.json({message: "Internal Server Error"}, {status: 500})
    }
}