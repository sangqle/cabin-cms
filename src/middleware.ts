import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log('Call from middleware')
  const response = NextResponse.next()
  return response;
}