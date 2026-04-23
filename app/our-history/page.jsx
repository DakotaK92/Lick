const milestones = [
  {
    year: "2019",
    title: "The first freezer test",
    description:
      "Lick started with a small batch experiment and a goal to make dessert feel brighter, more social, and more memorable.",
  },
  {
    year: "2022",
    title: "Neighborhood favorite",
    description:
      "Pop-ups and local tastings helped shape the menu, the mascot, and the playful tone of the brand.",
  },
  {
    year: "Now",
    title: "Growing beyond the counter",
    description:
      "The next chapter is digital: a stronger site, more structured flavor launches, and a better path from discovery to purchase.",
  },
];

export const metadata = {
  title: "Our History | Lick",
  description: "Learn how Lick grew from a playful flavor idea into a brand with room to expand.",
};

export default function HistoryPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="section-kicker">Our History</p>
            <h1 className="section-title">A fun brand lands harder when the story feels real.</h1>
          </div>
          <p className="section-copy">
            This page turns a placeholder into a narrative anchor. Customers,
            partners, and future employers all get a clearer sense of the
            project when there&apos;s context behind the visuals.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {milestones.map((milestone) => (
            <article
              key={milestone.year}
              className="rounded-[2rem] bg-[var(--color-cream)] p-8 shadow-[0_24px_70px_rgba(17,24,39,0.08)] ring-1 ring-slate-200/70"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#18498a]">
                {milestone.year}
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                {milestone.title}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                {milestone.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
