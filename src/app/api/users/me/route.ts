import User from "@/Models/userModel";
import { DbConnect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

DbConnect();

export async function GET (request : NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id : userId}).select(" -password");
        return NextResponse.json({
            message : "User found",
            data : user
        })
    } catch (error : any) {
        return NextResponse.json({
            error : error.message
        },{
            status : 400
        })
    }
}