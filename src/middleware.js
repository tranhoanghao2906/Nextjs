import { NextRequest } from "next/server";

export function middleware(req){
    console.log("req:", req);


    //Nhung thong tin get tu cookie phai luu xuong cookie luc login thanh cong
    //localStoprage chi su dung duoc owr client
    // doi voiw nextjs ,check middleware o sever phair dung cookie
    const token = req.cookies.det('accessToken');//lay tokrn tu cookie
    const role = req.cookies.get("userRole")

    if (!token && req.nextUrl.pathname.startsWith("/admin")){
        return NextRequest.redirect(new URL("/login", req.url));

    }

    //kiem tra co du quyen vao admin hay khong
      if (token && role === "user"){
        return NextRequest.redirect(new URL("/home", req.url));

    }

    return NextRequest.next();

}


export const config = {
    matcher: ["/admin/:path*","/profile/:path*"],
}