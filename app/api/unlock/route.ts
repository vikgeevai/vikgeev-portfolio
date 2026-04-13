import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === process.env.PORTFOLIO_PASSWORD) {
    const res = NextResponse.json({ success: true })
    res.cookies.set('portfolio_unlocked', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
      sameSite: 'lax',
    })
    return res
  }

  return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
}
