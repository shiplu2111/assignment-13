import { NextResponse } from 'next/server'

export async function GET(req, res) {
    const theme = req.cookies.get('theme');
    return NextResponse.json({theme:theme })
    
}
