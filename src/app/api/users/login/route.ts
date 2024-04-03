import User from "@/Models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { DbConnect } from "@/dbConfig/dbConfig";
import jwt from "jsonwebtoken"

DbConnect();

export async function POST(request : NextRequest) {                                 // POST is http request , in Place of POTS we can use GET , PUT etc according to use . 
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        const{email,password} = reqBody;
        
        const user = await User.findOne({email});

        if(!user) {
            return NextResponse.json({error : "Email not found , please login first "},{status:400});
        }

        const passwordCheck = await bcrypt.compare(password,user.password);

        if(!passwordCheck) {
            return NextResponse.json({error : "Icorrect email or password "},{status:400});
        }

        const tokenData = {
            id : user._id,
            username : user.username,
            email : user.email
        }

        const token = await jwt.sign(tokenData,"MYNEXTSECRET",{expiresIn : "1d"});
        console.log(token);

        const response = NextResponse.json({
            message : "Login Successful",
            success : true 
        })

        response.cookies.set("token",token)
        return response;

    } catch (error : any) {
        return NextResponse.json({
            error : error.message
        },
        {
            status : 500
        })
    }
}