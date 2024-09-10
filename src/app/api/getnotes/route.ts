import Connect from "@/utils/database/dbConnect";
import { notes } from "@/utils/interfaces/api";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest){

    try{

        const connection = await Connect();
        const query = `SELECT * FROM notes ORDER BY createdAt DESC;`
        const result = await connection?.query(query);
        connection?.end();
        return NextResponse.json(result);

    }catch(err){
        console.error("something went wrong!!");
    }
}