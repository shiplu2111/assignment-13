import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export function middleware(req) {
   
    if (req.nextUrl.pathname.startsWith('/api/incoming-request')) {
       const response = NextResponse.next();
       response.headers.set("token", `Bearer-${req.headers.get('token')}`);
       return response;
    }
}
