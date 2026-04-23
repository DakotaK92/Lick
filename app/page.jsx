import Image from "next/image";
import Link from "next/link";

const featuredFlavors = [
  {
    name: "Confetti Funfetti",
    description:
      "Birthday-cake ice cream packed with rainbow crumbs and a vanilla frosting swirl.",
    image: "/assets/images/icecreamImg1.png",
    accent: "bg-[#ffe1ef] text-[#a01759]",
  },
  {
    name: "Strawberries & Cream",
    description:
      "A fresh strawberry churn with ribbons of sweet cream and berry pieces in every scoop.",
    image: "/assets/images/icecreamImg2.jpg",
    accent: "bg-[#ffe7ec] text-[#a43b58]",
  },
  {
    name: "Pint Club Pick",
    description:
      "A members-only small-batch drop with rotating flavors and early access to seasonal launches.",
    image: "/assets/images/icecreamPintImg1.jpg",
    accent: "bg-[#ede7ff] text-[#43317d]",
  },
];

const perks = [
  {
    title: "Fresh Seasonal Drops",
    description:
      "We rotate flavors throughout the year so regulars always have something new to come back for.",
  },
  {
    title: "Rewards That Feel Worth It",
    description:
      "Birthday treats, pint previews, and member-only tasting nights turn a quick stop into a ritual.",
  },
  {
    title: "Made For Sharing",
    description:
      "Scoops, pints, merch, and community events all work together to make Lick feel like a neighborhood brand.",
  },
];

const highlights = [
  "Real ingredients and playful flavor combos",
  "Scoops, pints, merch, and loyalty perks",
  "Built for families, date nights, and dessert runs",
];

export default function Home() {
  return (
    <main className="bg-[var(--color-cream)] text-slate-900">
      <section className="relative overflow-hidden bg-[#18498a] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,201,92,0.22),_transparent_28%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-20">
          <div className="relative z-10 space-y-8">
            <span className="inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-white/90 uppercase">
              Small-batch joy, every scoop
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
                Ice cream that makes the whole day feel lighter.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                Lick is a playful neighborhood ice cream brand with bright
                flavors, seasonal drops, and a rewards program made for people
                who always come back for one more bite.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/our-products"
                className="inline-flex items-center justify-center rounded-full bg-[#ffd566] px-7 py-4 text-base font-bold text-slate-950 transition hover:bg-[#ffc846]"
              >
                Explore the menu
              </Link>
              <Link
                href="/where-to-buy"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Find a nearby scoop
              </Link>
            </div>
            <ul className="grid gap-3 pt-2 text-sm text-white/85 sm:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/14 bg-white/8 px-4 py-4 backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-white/12 blur-2xl" />
              <Image
                src="/assets/lick-mascot.png"
                alt="Lick mascot holding a cone"
                width={560}
                height={640}
                priority
                className="relative h-auto w-[min(100%,32rem)] drop-shadow-[0_28px_60px_rgba(0,0,0,0.28)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Why People Remember Lick</p>
            <h2 className="section-title">A brighter, bolder dessert brand.</h2>
            <p className="section-copy">
              The visuals are already fun. This is where the experience starts
              matching that energy with a clearer story, stronger calls to
              action, and a lineup worth browsing.
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex w-fit items-center rounded-full bg-[#18498a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123a6f]"
          >
            See what&apos;s new
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {perks.map((perk) => (
            <article
              key={perk.title}
              className="rounded-[2rem] bg-white p-7 shadow-[0_24px_70px_rgba(17,24,39,0.08)] ring-1 ring-slate-200/70"
            >
              <h3 className="text-2xl font-bold text-slate-950">{perk.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {perk.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Featured Flavors</p>
            <h2 className="section-title">A menu that feels worth talking about.</h2>
            <p className="section-copy">
              Give each product a personality. These cards can grow into a full
              catalog, seasonal menu, or order-ready storefront later.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredFlavors.map((flavor) => (
              <article
                key={flavor.name}
                className="overflow-hidden rounded-[2rem] bg-[var(--color-cream)] shadow-[0_24px_70px_rgba(17,24,39,0.08)] ring-1 ring-slate-200/60"
              >
                <div className={`px-5 py-3 text-sm font-semibold ${flavor.accent}`}>
                  Limited spotlight
                </div>
                <div className="space-y-5 p-6">
                  <div className="overflow-hidden rounded-[1.5rem] bg-white">
                    <Image
                      src={flavor.image}
                      alt={flavor.name}
                      width={640}
                      height={480}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">
                      {flavor.name}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {flavor.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 rounded-[2.5rem] bg-[#196149] px-8 py-10 text-white lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-14">
          <div className="space-y-4">
            <p className="section-kicker text-[#c8f0e0]">Rewards</p>
            <h2 className="text-4xl font-black sm:text-5xl">
              Turn regular customers into loyal regulars.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-white/82">
              Lickin&apos; Rewards can be more than a mention on the homepage.
              It can become a real growth loop with signup prompts, birthday
              offers, exclusive drops, and members-only flavor voting.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold">Birthday Scoops</h3>
              <p className="mt-2 text-white/78">
                Give members a free reward that feels celebratory, not generic.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold">Early Flavor Access</h3>
              <p className="mt-2 text-white/78">
                Let members preview the next seasonal pint before everyone else.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold">Exclusive Merch Drops</h3>
              <p className="mt-2 text-white/78">
                Reward the fans who want more than a cone with limited apparel
                and collectibles.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold">Community Polls</h3>
              <p className="mt-2 text-white/78">
                Invite members to help choose new flavors and seasonal returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#241f22] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
          <div className="max-w-2xl space-y-4">
            <p className="section-kicker text-[#f3cbe1]">Next Step</p>
            <h2 className="text-4xl font-black sm:text-5xl">
              Keep building the world around the brand.
            </h2>
            <p className="text-lg leading-8 text-white/78">
              The strongest follow-up improvements would be online ordering, a
              simple CMS for news and flavors, and a real store locator with
              filters for pints, cones, and merch.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/our-history"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 font-semibold text-slate-950 transition hover:bg-[#ffe7f1]"
            >
              Read the story
            </Link>
            <Link
              href="/where-to-buy"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              View locations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
