import { NextRequest, NextResponse } from 'next/server';

// Demo mode: Simplified webhook handler without Prisma/Stripe
// In production, this would integrate with Stripe and database

export async function POST(request: NextRequest) {
  // Demo mode: Just acknowledge the webhook
  console.log('Webhook received (demo mode)');

  try {
    const body = await request.text();
    console.log('Webhook body length:', body.length);

    // In production, this would:
    // 1. Verify Stripe signature
    // 2. Process the event (checkout.session.completed, etc.)
    // 3. Create order in database
    // 4. Send confirmation email

    return NextResponse.json({ received: true, mode: 'demo' });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
