import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactEmail } from '@/lib/email/sendContactEmail'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().optional().default(''),
  phone: z.string().min(1),
  city: z.string().optional().default(''),
  state: z.string().optional().default(''),
  zip: z.string().optional().default(''),
  besttimetocall: z.string().optional().default(''),
  service: z.string().optional().default(''),
  message: z.string().optional().default(''),
  // Honeypot — must be empty
  reasonss: z.string().max(0, 'Bot detected').optional().default(''),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot check
    if (body.reasonss && body.reasonss.length > 0) {
      return NextResponse.json({ error: 'Submission blocked' }, { status: 422 })
    }

    const data = schema.parse(body)

    await sendContactEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      state: data.state,
      zip: data.zip,
      besttimetocall: data.besttimetocall,
      service: data.service,
      message: data.message,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
