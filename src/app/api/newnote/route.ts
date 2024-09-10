import Connect from "@/utils/database/dbConnect";
import { responseStatus } from "@/utils/interfaces/api";
import { NextRequest, NextResponse } from "next/server";
import { note } from "@/utils/interfaces/note";

    /**
     * Handles PUT requests to /api/newnote
     * Creates a new note with the given message and createdAt
     * Returns a response with a status of true if successful, false otherwise
     * @param {NextRequest} request - The request containing the note to be created
     * @returns {NextResponse} - The response from the API
     */
export async function PUT(request: NextRequest){
    var resmessage: responseStatus = {
        message: "something went wrong!!",
        status: false
    }
    const connection = await Connect();
    const data:note = await request.json();
    try{
        const query = `INSERT INTO notes (message,createdAt) VALUES (?,?)`;
        await connection?.query(query, [data.message,data.createdAt])
        .then(() => {
            resmessage = {
                message: "created successfully",
                status: true
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
        
    catch(err){
        console.log(err);
    }finally{
        connection?.end();
        return NextResponse.json(resmessage);
    }
    
}
