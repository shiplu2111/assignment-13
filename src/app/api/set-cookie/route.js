import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import {headers} from 'next/headers';

export async function GET() {
   const theme = cookies().set({
        name: 'theme',
        value: 'dark',
        path: '/',
      });
    return theme;
}
