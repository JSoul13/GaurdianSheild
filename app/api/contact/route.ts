import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.()
    const { name, email, phone, inquiryType, message } = body ?? {}

    // Validate required fields
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    const contact = await prisma?.contact?.create?.({
      data: {
        name: name ?? '',
        email: email ?? '',
        phone: phone ?? '',
        inquiryType: inquiryType ?? '',
        message: message ?? '',
        status: 'new'
      }
    })

    return NextResponse.json(
      { success: true, id: contact?.id ?? '' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
