import { NextResponse } from "next/server";
import { headers } from 'next/headers'
export async function POST(req, res) {
return NextResponse.json({
  message: "prefix Done with Bearer , and add it as a new Authorization header.!"
})
}
