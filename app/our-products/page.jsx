import Image from "next/image";

const products = [
  {
    name: "Cone Counter Favorites",
    description:
      "Our front-of-house menu mixes nostalgic classics with playful signature scoops.",
    items: ["Birthday Cake", "Cookies & Cream", "Chocolate Fudge Swirl"],
    image: "/assets/images/icecreamImg2.jpg",
  },
  {
    name: "Pint Freezer Lineup",
    description:
      "Take-home pints that make the brand visible beyond the store and support repeat visits.",
    items: ["Confetti Funfetti", "Strawberries & Cream", "Salted Caramel Crunch"],
    image: "/assets/images/icecreamPintImg1.jpg",
  },
  {
    name: "Limited Drops",
    description:
      "Seasonal drops keep the menu alive and give your news page something meaningful to promote.",
    items: ["Peach Cobbler", "Blueberry Lemon Crisp", "Holiday Peppermint Bark"],
    image: "/assets/images/icecreamIllustration.jpg",
  },
];

export const metadata = {
  title: "Our Products | Lick",
  description: "Browse signature scoops, pints, and seasonal flavors from Lick.",
};

export default function Products() {
  return (
    <main className="bg-[var(--color-cream)]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="max-w-3xl space-y-4">
          <p className="section-kicker">Our Products</p>
          <h1 className="section-title">A menu designed to be both craveable and expandable.</h1>
          <p className="section-copy">
            This page gives the brand a real product story: what customers can
            buy now, what rotates seasonally, and where the catalog can grow
            later into ordering, filtering, and flavor detail pages.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(17,24,39,0.08)] ring-1 ring-slate-200/70 lg:grid-cols-2"
            >
              <div
                className={`order-2 p-8 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#18498a]">
                  Category {index + 1}
                </p>
                <h2 className="mt-3 text-3xl font-black text-slate-950">
                  {product.name}
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                  {product.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {product.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-[#18498a] px-4 py-4 text-sm font-semibold text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={1200}
                  height={900}
                  className="h-full min-h-72 w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
