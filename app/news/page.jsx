import Image from "next/image";

const updates = [
  {
    category: "Seasonal Drop",
    title: "Confetti Funfetti arrives this Friday",
    description:
      "A bright product launch post gives the homepage and social channels something concrete to point toward.",
    image: "/assets/images/icecreamImg1.png",
  },
  {
    category: "Community",
    title: "Flavor voting opens for rewards members",
    description:
      "Invite your audience into the process and let them choose what returns next month.",
    image: "/assets/images/family-sharing.jpeg",
  },
  {
    category: "Merch",
    title: "New pint club tote lands with the spring collection",
    description:
      "Merch stories work especially well when paired with member perks and limited availability.",
    image: "/assets/images/membershipCards.jpg",
  },
];

export const metadata = {
  title: "News | Lick",
  description: "See the latest flavor launches, events, and merch updates from Lick.",
};

export default function NewsPage() {
  return (
    <main className="bg-[var(--color-cream)]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="max-w-3xl space-y-4">
          <p className="section-kicker">News</p>
          <h1 className="section-title">Give the brand a publishing rhythm.</h1>
          <p className="section-copy">
            A simple news page helps justify repeat visits. Later, this can be
            backed by MDX, a CMS, or a lightweight JSON feed without changing
            the overall layout.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {updates.map((update) => (
            <article
              key={update.title}
              className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(17,24,39,0.08)] ring-1 ring-slate-200/70"
            >
              <div className="relative h-64">
                <Image
                  src={update.image}
                  alt={update.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b61d6a]">
                  {update.category}
                </p>
                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  {update.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {update.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
