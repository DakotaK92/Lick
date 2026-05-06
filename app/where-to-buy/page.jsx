import Link from "next/link";

const locations = [
  {
    name: "Downtown Scoop Bar",
    address: "120 Main Street, Nashville, TN 37201",
    details: "Open late, walk-up window, rewards check-in available.",
    hours: "Mon-Sun, 12 PM - 10 PM",
    tag: "Best for cones",
    mapQuery: "120 Main Street, Nashville, TN 37201",
  },
  {
    name: "Northside Market Freezer",
    address: "418 Jefferson Street, Nashville, TN 37208",
    details: "Best for pint pickup and seasonal take-home releases.",
    hours: "Daily, 10 AM - 9 PM",
    tag: "Best for pints",
    mapQuery: "418 Jefferson Street, Nashville, TN 37208",
  },
  {
    name: "Festival Pop-Up Cart",
    address: "Riverfront Park, Nashville, TN 37213",
    details: "Rotating schedule for community events, catering, and weekend drops.",
    hours: "Fri-Sun, event schedule varies",
    tag: "Best for events",
    mapQuery: "Riverfront Park, Nashville, TN 37213",
  },
];

const featuredLocation = locations[0];
const embeddedMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  featuredLocation.mapQuery
)}&z=14&output=embed`;

export const metadata = {
  title: "Where to Buy | Lick",
  description: "Find where to grab a cone, pick up a pint, or catch a Lick pop-up.",
};

export default function WhereToBuyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 rounded-[2.5rem] bg-[#18498a] px-8 py-10 text-white lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-14">
          <div className="space-y-4">
            <p className="section-kicker text-white">Where to Buy</p>
            <h1 className="text-4xl font-black sm:text-5xl">
              Make it easy to go from craving to checkout.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/82">
              Find a location near you!
            </p>
            <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75">
                Featured stop
              </p>
              <h2 className="mt-3 text-2xl font-bold">{featuredLocation.name}</h2>
              <p className="mt-2 text-white/78">{featuredLocation.address}</p>
              <p className="mt-2 text-white/78">{featuredLocation.hours}</p>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  featuredLocation.mapQuery
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#18498a] transition hover:bg-[#ffd566]"
              >
                Open in Google Maps
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white shadow-[0_24px_70px_rgba(17,24,39,0.18)]">
            <iframe
              title={`${featuredLocation.name} map`}
              src={embeddedMapUrl}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mb-10 max-w-3xl space-y-3">
          <p className="section-kicker">Locator Options</p>
          <h2 className="section-title">Three store types, one simple map flow.</h2>
          <p className="section-copy">
            Each card can later be connected to live inventory, filters, or a
            user-selected map panel. For now, every location opens directly in
            Google Maps for directions.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {locations.map((location) => (
            <article
              key={location.name}
              className="flex h-full flex-col rounded-[2rem] bg-[var(--color-cream)] p-7 shadow-[0_24px_70px_rgba(17,24,39,0.08)] ring-1 ring-slate-200/70"
            >
              <span className="inline-flex w-fit rounded-full bg-[#18498a]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#18498a]">
                {location.tag}
              </span>
              <h3 className="mt-5 text-2xl font-bold text-slate-950">
                {location.name}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {location.details}
              </p>
              <p className="mt-5 text-sm font-semibold text-slate-900">
                {location.address}
              </p>
              <p className="mt-2 text-sm text-slate-600">{location.hours}</p>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  location.mapQuery
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center rounded-full bg-[#18498a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123a6f]"
              >
                Get directions
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
