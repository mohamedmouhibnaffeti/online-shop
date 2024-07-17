import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/ConnectDB";

export async function GET(request: NextRequest){
    try {
        const newState = request.nextUrl.searchParams.get("state")
        const commandID = request.nextUrl.searchParams.get("id")

        db.run("BEGIN TRANSACTION")
        
        await new Promise<void>((resolve, reject) =>{
            db.run(`UPDATE commandes SET state = ? WHERE id = ?`, [newState, commandID], (err) => {
                if(err){
                    reject(err)
                    return
                }
                resolve()
            })
        })
        
        db.run("COMMIT")

        return NextResponse.json({message: "Command Updated Successfully"}, {status: 200})
    }catch(err){
        return NextResponse.json({message: "Internal Server Error."}, {status: 500})
    }
}