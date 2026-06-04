"use client";

import Image from "next/image";
import Link from "next/link";
import { Gift, Minus, Plus, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

import { formatPrice } from "@/lib/format-price";

const storeSections = [
  {
    title: "Ice Cream",
    description:
      "Pints, scoop packs, and freezer kits for the classic Lick experience.",
    categories: ["Pints", "Scoop Packs", "Kits"],
  },
  {
    title: "Popsicles",
    description:
      "Bright frozen pops made for quick treats, summer runs, and party coolers.",
    categories: ["Popsicles"],
  },
  {
    title: "Merch",
    description:
      "Totes, starter kits, and reward-ready extras for the people who rep Lick between scoops.",
    categories: ["Merch"],
  },
];

export default function StoreClient({ products }) {
  const [cart, setCart] = useState([]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = useMemo(
    () =>
      cart.reduce((total, item) => {
        const product = products.find((candidate) => candidate.id === item.id);

        return total + (product?.priceInCents || 0) * item.quantity;
      }, 0),
    [cart, products]
  );

  const cartItems = cart
    .map((item) => {
      const product = products.find((candidate) => candidate.id === item.id);

      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const addToCart = (productId) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === productId);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { id: productId, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((currentCart) => {
      if (quantity <= 0) {
        return currentCart.filter((item) => item.id !== productId);
      }

      return currentCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-start">
          <div>
            <div className="max-w-3xl space-y-4">
              <p className="section-kicker">Lick Store</p>
              <h1 className="section-title">
                Shop pints, scoop packs, and sweet little extras.
              </h1>
            </div>

            <Link
              href="/rewards"
              className="mt-10 grid overflow-hidden rounded-[2rem] bg-[#123a6f] text-white shadow-[0_24px_70px_rgba(17,24,39,0.12)] transition hover:-translate-y-1 hover:bg-[#18498a] md:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="p-7 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#ffd566]">
                  <Gift className="h-4 w-4" />
                  Lickin Rewards
                </div>
                <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                  Register today and unlock member-only scoops.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">
                  Get birthday treats, early seasonal drops, and first dibs on
                  new pint flavors before they hit the freezer.
                </p>
                <span className="mt-6 inline-flex rounded-full bg-[#ffd566] px-5 py-3 text-sm font-black text-slate-950">
                  Join rewards
                </span>
              </div>
              <div className="relative min-h-64">
                <Image
                  src="/assets/images/membershipCards.jpg"
                  alt="Lick rewards membership cards"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 36rem, 100vw"
                />
              </div>
            </Link>

            <div className="mt-12 space-y-14">
              {storeSections.map((section) => {
                const sectionProducts = products.filter((product) =>
                  section.categories.includes(product.category)
                );

                if (!sectionProducts.length) {
                  return null;
                }

                return (
                  <section key={section.title}>
                    <div className="mb-6 max-w-2xl">
                      <h2 className="text-3xl font-black text-slate-950">
                        {section.title}
                      </h2>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {section.description}
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {sectionProducts.map((product) => (
                        <article
                          key={product.id}
                          className="flex h-full flex-col rounded-[2rem] bg-[var(--color-cream)] p-6 shadow-[0_24px_70px_rgba(17,24,39,0.08)] ring-1 ring-slate-200/70"
                        >
                          <div className="overflow-hidden rounded-[1.5rem] bg-white">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={720}
                              height={560}
                              className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>

                          <span className="mt-5 inline-flex w-fit rounded-full bg-[#18498a]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#18498a]">
                            {product.category}
                          </span>
                          <h3 className="mt-4 text-2xl font-black text-slate-950">
                            {product.name}
                          </h3>
                          <p className="mt-3 text-base leading-7 text-slate-600">
                            {product.description}
                          </p>

                          <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                            <p className="text-xl font-black text-slate-950">
                              {formatPrice(product.priceInCents)}
                            </p>
                            <button
                              type="button"
                              onClick={() => addToCart(product.id)}
                              className="inline-flex items-center gap-2 rounded-full bg-[#18498a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123a6f]"
                            >
                              <Plus className="h-4 w-4" />
                              Add
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>

          <aside className="sticky top-28 flex max-h-[calc(100vh-8rem)] flex-col rounded-[2rem] bg-[#18498a] p-6 text-white shadow-[0_24px_70px_rgba(17,24,39,0.14)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                  Cart
                </p>
                <h2 className="mt-1 text-2xl font-black">Your treats</h2>
              </div>
              <div className="relative">
                <ShoppingCart className="h-7 w-7" />
                <span className="absolute -right-3 -top-3 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ffb900] px-2 text-xs font-black text-slate-950">
                  {cartCount}
                </span>
              </div>
            </div>

            {cartItems.length === 0 ? (
              <p className="mt-8 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-white/78">
                Your cart is empty. Add a pint, scoop pack, or some swag items to
                start checkout.
              </p>
            ) : (
              <div className="cart-scroll mt-6 min-h-0 flex-1 space-y-4 overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="mt-1 text-sm text-white/72">
                          {formatPrice(item.priceInCents)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 0)}
                        className="rounded-full p-2 text-white/72 transition hover:bg-white/10 hover:text-white"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/18"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center font-bold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/18"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 border-t border-white/15 pt-5">
              <div className="flex items-center justify-between text-lg font-black">
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <form action="/api/checkout" method="POST" className="mt-5">
                <input
                  type="hidden"
                  name="cart"
                  value={JSON.stringify(
                    cart.map((item) => ({
                      id: item.id,
                      quantity: item.quantity,
                    }))
                  )}
                />
                <button
                  type="submit"
                  disabled={cartItems.length === 0}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ffb900] px-5 py-4 font-black text-slate-950 transition hover:bg-[#ffb900] disabled:cursor-not-allowed disabled:bg-white/20 disabled:text-white/45"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Checkout
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
