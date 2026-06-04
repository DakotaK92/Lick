import { Gift, Mail, Sparkles, Star } from "lucide-react";

export const metadata = {
  title: "Rewards | Lick",
  description: "Register for Lick rewards and unlock member-only perks.",
};

export default function RewardsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-5">
            <p className="section-kicker">Lickin Rewards</p>
            <h1 className="section-title">
              Register for sweet perks before your next scoop run.
            </h1>
            <p className="section-copy">
              This starter registration page is ready for a future database or
              email provider. For now, it gives the rewards ad a real destination
              and shows what the signup experience can become.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-[var(--color-cream)] p-5">
                <Gift className="h-6 w-6 text-[#18498a]" />
                <h2 className="mt-4 font-black text-slate-950">Birthday Treats</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Celebrate with a member-only scoop reward.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-cream)] p-5">
                <Sparkles className="h-6 w-6 text-[#18498a]" />
                <h2 className="mt-4 font-black text-slate-950">Early Drops</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Preview seasonal flavors before the public launch.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-cream)] p-5">
                <Star className="h-6 w-6 text-[#18498a]" />
                <h2 className="mt-4 font-black text-slate-950">Flavor Votes</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Help choose which limited flavors return next.
                </p>
              </div>
            </div>
          </div>

          <form className="rounded-[2rem] bg-[#18498a] p-7 text-white shadow-[0_24px_70px_rgba(17,24,39,0.14)]">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Mail className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                  Register
                </p>
                <h2 className="text-2xl font-black">Join the list</h2>
              </div>
            </div>

            <label className="mt-7 block text-sm font-bold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#ffd566] focus:ring-4 focus:ring-[#ffd566]/30"
              placeholder="Your name"
            />

            <label className="mt-5 block text-sm font-bold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#ffd566] focus:ring-4 focus:ring-[#ffd566]/30"
              placeholder="you@example.com"
            />

            <label className="mt-5 block text-sm font-bold" htmlFor="favorite">
              Favorite flavor
            </label>
            <select
              id="favorite"
              name="favorite"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#ffd566] focus:ring-4 focus:ring-[#ffd566]/30"
              defaultValue=""
            >
              <option value="" disabled>
                Choose one
              </option>
              <option>Confetti Funfetti</option>
              <option>Strawberries & Cream</option>
              <option>Blueberry Lemon Crisp</option>
              <option>Cookies & Cream</option>
            </select>

            <button
              type="button"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#ffd566] px-5 py-4 font-black text-slate-950 transition hover:bg-[#ffc846]"
            >
              Register for rewards
            </button>

            <p className="mt-4 text-center text-sm leading-6 text-white/65">
              This demo form is ready to be wired to MongoDB, Resend, or another
              signup provider later.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
