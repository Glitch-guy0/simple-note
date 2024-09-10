import { NextRequest, NextResponse } from "next/server";

import { responseStatus } from "@/utils/interfaces/api";
import Connect from "@/utils/database/dbConnect";



export async function DELETE(request: NextRequest){

    const reqData = await request.json();
    const delid = reqData.data.id;
    // delete notes
    const connection = await Connect();

    await connection?.query(`DELETE FROM notes WHERE createdAt = ?;`, [delid])
    .then(() => {
        const resmessage: responseStatus = {
            message: "deleted successfully",
            status: true
        }
        connection?.end();
        return NextResponse.json(resmessage);
    }).catch(err => {
        console.error("something went wrong!!");
    })
}

