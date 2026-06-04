import Link from "next/link";

export const metadata = {
  title: "Order Confirmed | Lick",
};

export default function StoreSuccessPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
        <p className="section-kicker">Order Confirmed</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">
          Thanks for shopping with Lick.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Stripe has handled the payment flow. The next step would be saving
          order details to MongoDB through a Stripe webhook.
        </p>
        <Link
          href="/store"
          className="mt-8 inline-flex rounded-full bg-[#18498a] px-6 py-4 font-semibold text-white transition hover:bg-[#123a6f]"
        >
          Back to store
        </Link>
      </section>
    </main>
  );
}
