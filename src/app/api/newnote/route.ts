import { responseStatus } from "@/utils/interfaces/api";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest){
    const uriPath = request.nextUrl.pathname;
    var resmessage: responseStatus;
    console.log(uriPath)

    const requestBody = await request.json();

    console.log(requestBody);
    resmessage = {
        message: "ok",
        status: true
    }
    // add to database logic here
    return NextResponse.json(resmessage, {status: 200});
}
