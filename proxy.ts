import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const cookie = request.cookies.get('portfolio_unlocked')
  if (cookie?.value === 'true') return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = '/unlock'
  url.searchParams.set('next', request.nextUrl.pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    '/work/uob-money-lock(.*)',
    '/work/safevue-ai(.*)',
    '/work/fwd-insurance(.*)',
    '/work/indian-life-memorial(.*)',
  ],
}
