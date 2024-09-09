import { notes } from "@/utils/interfaces/api";
import { NextRequest, NextResponse } from "next/server";


export function GET(req: NextRequest){
    const date = Date.now();
    const notes = [
        {
            message: "note 1",
            createdAt: date+10
        }, 
        {
            message: "note 2",
            createdAt: date+20
        },
        {
            message: "note 3",
            createdAt: date+30
        }
    ]
    
    return NextResponse.json(notes);
}