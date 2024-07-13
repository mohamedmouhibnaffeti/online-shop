import sqlite3 from "sqlite3"
const db = new sqlite3.Database(
    "./Database.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err)=>{
        if(err){
            return console.error(err.message)
        }
        console.log('Connected to database')
    }
)

export default db