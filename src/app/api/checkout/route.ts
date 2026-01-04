import { NextRequest, NextResponse } from 'next/server';
import { CartItem } from '@/types';

// Demo mode: Simplified checkout that redirects to success page
// In production, this would integrate with Stripe

const FREE_SHIPPING_THRESHOLD = 60;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const itemsJson = formData.get('items') as string;

    if (!itemsJson) {
      return NextResponse.redirect(
        new URL('/cart?error=empty', request.url)
      );
    }

    const items: CartItem[] = JSON.parse(itemsJson);

    if (items.length === 0) {
      return NextResponse.redirect(
        new URL('/cart?error=empty', request.url)
      );
    }

    // Calculate subtotal for demo display
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 5.9;
    const total = subtotal + shippingCost;

    console.log('Demo checkout:', { items: items.length, subtotal, total });

    // Demo mode: Redirect directly to success page with a demo session ID
    const demoSessionId = `demo_${Date.now()}`;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;

    return NextResponse.redirect(
      new URL(`/success?session_id=${demoSessionId}`, baseUrl),
      { status: 303 }
    );
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.redirect(
      new URL('/cart?error=checkout_failed', request.url)
    );
  }
}
