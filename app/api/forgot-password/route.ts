import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

interface ForgotPasswordResponse {
  success: boolean
  message?: string
  // Only returned in development for testing without email service
  resetLink?: string
}

export async function POST(req: NextRequest): Promise<NextResponse<ForgotPasswordResponse>> {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ success: false, message: 'Email is required.' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase().trim() } })

    // Always return success to prevent email enumeration attacks
    if (!user) {
      return NextResponse.json({
        success: true,
        message: 'If that email exists, a reset link has been sent.',
      })
    }

    const token = crypto.randomBytes(32).toString('hex')
    const expiry = new Date(Date.now() + 1000 * 60 * 60) // 1 hour

    await prisma.user.update({
      where: { id: user.id },
      data: { resetToken: token, resetTokenExpiry: expiry },
    })

    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
    const resetLink = `${baseUrl}/reset-password?token=${token}`

    // TODO: Replace with real email (Resend, Nodemailer, etc.)
    // await sendEmail({ to: email, subject: 'SiteSync Password Reset', resetLink })

    const isDev = process.env.NODE_ENV !== 'production'

    return NextResponse.json({
      success: true,
      message: 'If that email exists, a reset link has been sent.',
      ...(isDev ? { resetLink } : {}),
    })
  } catch (error) {
    console.error('[forgot-password]', error)
    return NextResponse.json({ success: false, message: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
