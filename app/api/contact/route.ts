import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = schema.parse(body)

    // If RESEND_API_KEY is configured, send via Resend
    // Otherwise, log and return success (for dev/fallback)
    const resendKey = process.env.RESEND_API_KEY

    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['glnahuel17@gmail.com'],
          subject: `[Portfolio] New message from ${name}`,
          html: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
          reply_to: email,
        }),
      })

      if (!res.ok) {
        return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
      }
    } else {
      // Dev mode: just log
      console.log('[Contact Form]', { name, email, message })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: err.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
