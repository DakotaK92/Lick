const locations = [
  {
    name: "Downtown Scoop Bar",
    details: "Open late, walk-up window, rewards check-in available.",
  },
  {
    name: "Northside Market Freezer",
    details: "Best for pint pickup and seasonal take-home releases.",
  },
  {
    name: "Festival Pop-Up Cart",
    details: "Rotating schedule for community events, catering, and weekend drops.",
  },
];

export const metadata = {
  title: "Where to Buy | Lick",
  description: "Find where to grab a cone, pick up a pint, or catch a Lick pop-up.",
};

export default function WhereToBuyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 rounded-[2.5rem] bg-[#18498a] px-8 py-10 text-white lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-14">
          <div className="space-y-4">
            <p className="section-kicker text-[#ffd8e9]">Where to Buy</p>
            <h1 className="text-4xl font-black sm:text-5xl">
              Make it easy to go from craving to checkout.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/82">
              This page can grow into a real locator with maps, hours, pickup
              options, and inventory filters. For now, it turns the route into
              a meaningful destination.
            </p>
          </div>
          <div className="grid gap-4">
            {locations.map((location) => (
              <article
                key={location.name}
                className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold">{location.name}</h2>
                <p className="mt-2 text-white/78">{location.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
