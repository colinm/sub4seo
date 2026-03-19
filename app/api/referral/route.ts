import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendReferralEmail } from '@/lib/email/sendReferralEmail'

const schema = z.object({
  referrerName: z.string().min(1),
  referrerPhone: z.string().min(1),
  referrerEmail: z.string().email(),
  refereeName: z.string().min(1),
  refereePhone: z.string().min(1),
  refereeEmail: z.string().email(),
  message: z.string().min(1),
  // Honeypot — must be empty
  reasonss: z.string().max(0).optional().default(''),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (body.reasonss && body.reasonss.length > 0) {
      return NextResponse.json({ error: 'Submission blocked' }, { status: 422 })
    }

    const data = schema.parse(body)

    await sendReferralEmail(data)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Referral form error:', err)
    return NextResponse.json({ error: 'Failed to send referral' }, { status: 500 })
  }
}
