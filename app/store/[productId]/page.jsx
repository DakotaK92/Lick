import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShoppingBag } from "lucide-react";

import { formatPrice, getStoreProduct, getStoreProducts } from "@/lib/store-products";

export async function generateStaticParams() {
  const products = await getStoreProducts();

  return products.map((product) => ({
    productId: product.id,
  }));
}

export async function generateMetadata({ params }) {
  const product = await getStoreProduct(params.productId);

  if (!product) {
    return {
      title: "Product Not Found | Lick",
    };
  }

  return {
    title: `${product.name} | Lick Store`,
    description: product.description,
  };
}

export default async function StoreProductPage({ params }) {
  const product = await getStoreProduct(params.productId);

  if (!product) {
    notFound();
  }

  const gallery = product.gallery?.length ? product.gallery : [product.image];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <Link
          href="/store"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#18498a] hover:text-[#18498a]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to store
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-4">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-[var(--color-cream)]">
              <Image
                src={gallery[0]}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {gallery.slice(1, 3).map((image) => (
                <div
                  key={image}
                  className="relative min-h-64 overflow-hidden rounded-[1.5rem] bg-[var(--color-cream)]"
                >
                  <Image
                    src={image}
                    alt={`${product.name} detail`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 25vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[var(--color-cream)] p-8 shadow-[0_24px_70px_rgba(17,24,39,0.08)] ring-1 ring-slate-200/70">
            <p className="section-kicker">{product.category}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {product.longDescription || product.description}
            </p>

            {product.ingredients?.length > 0 && (
              <div className="mt-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#18498a]">
                  Flavor Notes
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-3xl font-black text-slate-950">
                {formatPrice(product.priceInCents)}
              </p>
              <form action="/api/checkout" method="POST">
                <input
                  type="hidden"
                  name="cart"
                  value={JSON.stringify([{ id: product.id, quantity: 1 }])}
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18498a] px-6 py-4 font-black text-white transition hover:bg-[#123a6f]"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
