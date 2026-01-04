import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from '@/lib/prisma';
import { generateOrderNumber } from '@/lib/utils';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;

      try {
        // Parse items from metadata
        const itemsData = session.metadata?.items
          ? JSON.parse(session.metadata.items)
          : [];

        // Get shipping address
        const shippingDetails = session.shipping_details;
        const shippingAddress = shippingDetails?.address
          ? {
              name: shippingDetails.name || '',
              address: `${shippingDetails.address.line1}${
                shippingDetails.address.line2
                  ? `, ${shippingDetails.address.line2}`
                  : ''
              }`,
              city: shippingDetails.address.city || '',
              postalCode: shippingDetails.address.postal_code || '',
              country: shippingDetails.address.country || '',
            }
          : {
              name: '',
              address: '',
              city: '',
              postalCode: '',
              country: '',
            };

        // Calculate totals
        const subtotal = itemsData.reduce(
          (total: number, item: { price: number; quantity: number }) =>
            total + item.price * item.quantity,
          0
        );
        const total = (session.amount_total || 0) / 100;
        const shippingCost = total - subtotal;

        // Create order in database
        const order = await prisma.order.create({
          data: {
            orderNumber: generateOrderNumber(),
            status: 'PAID',
            email: session.customer_email || session.customer_details?.email || '',
            shippingAddress,
            subtotal,
            shippingCost: shippingCost > 0 ? shippingCost : 0,
            total,
            currency: session.currency?.toUpperCase() || 'EUR',
            stripeSessionId: session.id,
            stripePaymentId: session.payment_intent as string,
            items: {
              create: itemsData.map(
                (item: {
                  id: string;
                  type: string;
                  name: string;
                  quantity: number;
                  price: number;
                }) => ({
                  name: item.name,
                  price: item.price,
                  quantity: item.quantity,
                  productId: item.type === 'product' ? item.id.replace('product-', '') : null,
                  packId: item.type === 'pack' ? item.id.replace('pack-', '') : null,
                })
              ),
            },
          },
        });

        console.log('Order created:', order.orderNumber);

        // TODO: Send confirmation email
        // await sendOrderConfirmationEmail(order);

      } catch (error) {
        console.error('Error creating order:', error);
        // Don't return error - Stripe will retry
      }
      break;
    }

    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('Payment failed:', paymentIntent.id);
      // Could update order status if it exists
      break;
    }

    case 'charge.refunded': {
      const charge = event.data.object as Stripe.Charge;
      console.log('Charge refunded:', charge.id);

      // Update order status to refunded
      try {
        await prisma.order.updateMany({
          where: { stripePaymentId: charge.payment_intent as string },
          data: { status: 'REFUNDED' },
        });
      } catch (error) {
        console.error('Error updating refunded order:', error);
      }
      break;
    }

    default:
      console.log('Unhandled event type:', event.type);
  }

  return NextResponse.json({ received: true });
}
