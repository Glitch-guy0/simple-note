import Connect from "@/utils/database/dbConnect";
import { responseStatus } from "@/utils/interfaces/api";
import { NextRequest, NextResponse } from "next/server";
import { note } from "@/utils/interfaces/note";

export async function PUT(request: NextRequest){
    var resmessage: responseStatus;

    try{
        const connection = await Connect();
        const data:note = await request.json();
        const query = `INSERT INTO notes (message,createdAt) VALUES (?,?)`;
        await connection?.query(query, [data.message,data.createdAt])
        .then(result => {
            resmessage = {
                message: "successfull",
                status: true
            }
            return NextResponse.json(resmessage);
        })
        .catch(err => {
            resmessage = {
                message: "failed",
                status: false
            }
            return NextResponse.json(resmessage);
        });

        connection?.end();
        process.exit(0);
    }catch(err){
        console.error("something went wrong!!");
    }
}
