import Stripe from "stripe";
import { NextResponse } from "next/server";

import { getStoreProducts } from "@/lib/store-products";

export async function POST(request) {
  const formData = await request.formData();
  const rawCart = formData.get("cart");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;
  let cart = [];

  try {
    cart = JSON.parse(rawCart || "[]");
  } catch {
    cart = [];
  }

  const validCart = cart
    .map((item) => ({
      id: item.id,
      quantity: Number(item.quantity),
    }))
    .filter((item) => item.id && Number.isInteger(item.quantity) && item.quantity > 0);

  if (!validCart.length) {
    return NextResponse.redirect(new URL("/store?error=empty-cart", siteUrl), {
      status: 303,
    });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.redirect(new URL("/store?error=stripe-not-configured", siteUrl), {
      status: 303,
    });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const products = await getStoreProducts();
  const lineItems = validCart
    .map((item) => {
      const product = products.find((candidate) => candidate.id === item.id);

      if (!product) {
        return null;
      }

      return {
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: product.priceInCents,
          product_data: {
            name: product.name,
            description: product.description,
          },
        },
      };
    })
    .filter(Boolean);

  if (!lineItems.length) {
    return NextResponse.redirect(new URL("/store?error=missing-products", siteUrl), {
      status: 303,
    });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    success_url: `${siteUrl}/store/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/store/cancel`,
    metadata: {
      cart: JSON.stringify(validCart),
    },
  });

  return NextResponse.redirect(session.url, { status: 303 });
}
