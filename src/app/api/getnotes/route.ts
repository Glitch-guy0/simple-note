import Connect from "@/utils/database/dbConnect";
import { notes } from "@/utils/interfaces/api";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests to /api/getnotes
 * Returns a list of notes sorted by createdAt DESC
 * @param {NextRequest} req - The request object
 * @returns {NextResponse} - The response object
 */
export async function GET(req: NextRequest){
    const connection = await Connect();
    let data:notes = [];
    try{
        const query = `SELECT * FROM notes ORDER BY createdAt DESC;`
        await connection?.query(query)
        .then(value => {
            for(const row of value) {
                let bigint = row.createdAt.toString();
                bigint = bigint.slice(0, -1)+"0";
                bigint = parseInt(bigint)
                data.push({
                    id: row.id as number,
                    createdAt: bigint,
                    message: row.message as string
                })
            }
        })
        .catch(err => {
            console.error(err);
        })

    }catch(err){
        console.error(err);
    }finally{
        connection?.end();
        return NextResponse.json(data);
    }
}