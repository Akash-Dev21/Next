import User from "@/Models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { DbConnect } from "@/dbConfig/dbConfig";

DbConnect();

export async function POST(request : NextRequest) {                                 // POST is http request , in Place of POTS we can use GET , PUT etc according to use . 
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        const{username,email,password} = reqBody;
        
        const user = await User.findOne({email});

        if(user) {
            return NextResponse.json({error : "user already exists"},{status:400});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        

        const newUser = new User({
            username,
            email,
            password : hashedPassword
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message : "user created Successfully!",
            success : true,
            savedUser
        });

    } catch (error : any) {
        return NextResponse.json({
            error : error.message
        },
        {
            status : 500
        })
    }
}