import { NextRequest, NextResponse } from "next/server";

import { responseStatus } from "@/utils/interfaces/api";



export function DELETE(request: NextRequest){

    // delete notes
    
    const retmess: responseStatus = {
        message: "ok",
        status: true
    }
    return NextResponse.json(retmess, {status: 200});
}

