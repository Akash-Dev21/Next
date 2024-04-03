import { NextRequest, NextResponse } from "next/server";

export function middleware (request : NextRequest) {
    const path = request.nextUrl.pathname;
    // console.log(request.nextUrl);

    const isPublicPath = path === '/login' || '/signup'
    const token = request.cookies.get('token')?.value || "" ;      // if token present then extract the value otherwise assign "" to token

    // if(isPublicPath && token) {
    //     return NextResponse.redirect(new URL ('/',request.nextUrl))
    // }

    // if(!isPublicPath && !token){
    //     return NextResponse.redirect(new URL('/',request.nextUrl));
    // }
}


// Matching 

export const config = {
    matcher : [
        '/',
        '/profile',                 // by using * we can protect all that comes after profile
        '/login',
        '/signup'
    ]
}