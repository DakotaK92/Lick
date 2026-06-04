import Link from "next/link";

export const metadata = {
  title: "Checkout Canceled | Lick",
};

export default function StoreCancelPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
        <p className="section-kicker">Checkout Canceled</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">
          Your scoop is still waiting.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Nothing was charged. You can head back to the store and keep browsing.
        </p>
        <Link
          href="/store"
          className="mt-8 inline-flex rounded-full bg-[#18498a] px-6 py-4 font-semibold text-white transition hover:bg-[#123a6f]"
        >
          Return to store
        </Link>
      </section>
    </main>
  );
}
