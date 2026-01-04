import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { CartItem } from '@/types';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const FREE_SHIPPING_THRESHOLD = 60;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const itemsJson = formData.get('items') as string;
    const country = (formData.get('country') as string) || 'FR';

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

    // Calculate subtotal
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Calculate shipping
    const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 5.9;

    // Create line items for Stripe
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
            description: item.weight || undefined,
            metadata: {
              type: item.type,
              productId: item.productId || '',
              packId: item.packId || '',
            },
          },
          unit_amount: Math.round(item.price * 100), // Stripe uses cents
        },
        quantity: item.quantity,
      })
    );

    // Add shipping as a line item if not free
    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Livraison Standard',
            description: 'Colissimo suivi - 3-5 jours ouvrés',
          },
          unit_amount: Math.round(shippingCost * 100),
        },
        quantity: 1,
      });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'CH', 'LU', 'DE', 'ES', 'IT', 'PT', 'NL', 'AT'],
      },
      billing_address_collection: 'required',
      locale: 'fr',
      metadata: {
        items: JSON.stringify(
          items.map((i) => ({
            id: i.id,
            type: i.type,
            name: i.name,
            quantity: i.quantity,
            price: i.price,
          }))
        ),
      },
      custom_text: {
        shipping_address: {
          message:
            'Livraison gratuite dès 60€ d\'achat. Expédition sous 48h.',
        },
        submit: {
          message:
            'Les produits RootsRemedy sont des plantes traditionnelles destinées au bien-être et ne remplacent pas un avis médical.',
        },
      },
    });

    // Redirect to Stripe Checkout
    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.redirect(
      new URL('/cart?error=checkout_failed', request.url)
    );
  }
}
