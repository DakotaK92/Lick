"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroEvents = [
  {
    eyebrow: "Seasonal Event",
    title: "Summer Scoop Fest",
    description:
      "A weekend of limited flavors, tasting flights, and first access to the newest Lick freezer drops.",
    image: "/assets/images/family-sharing.jpeg",
    primaryHref: "/store",
    primaryCta: "Shop event treats",
    secondaryHref: "/news",
    secondaryCta: "See event news",
  },
  {
    eyebrow: "Member Night",
    title: "Rewards Flavor Vote",
    description:
      "Rewards members get to sample the next batch and help choose which flavor returns to the menu.",
    image: "/assets/images/membershipCards.jpg",
    primaryHref: "/rewards",
    primaryCta: "Join rewards",
    secondaryHref: "/our-products",
    secondaryCta: "Preview flavors",
  },
  {
    eyebrow: "Pop-Up Stop",
    title: "Popsicles In The Park",
    description:
      "Catch the Lick cart for fruit pops, scoop packs, and sunny-day merch at the next community pop-up.",
    image: "/assets/images/seasonal-icecream.jpg",
    primaryHref: "/where-to-buy",
    primaryCta: "Find the pop-up",
    secondaryHref: "/store",
    secondaryCta: "Grab popsicles",
  },
];

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = heroEvents[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroEvents.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? heroEvents.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % heroEvents.length);
  };

  return (
    <section className="relative min-h-[calc(100svh-88px)] overflow-hidden bg-[#18498a] text-white">
      {heroEvents.map((event, index) => (
        <Image
          key={event.title}
          src={event.image}
          alt={event.title}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-[#123a6f]/62" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(10,31,61,0.86),_rgba(10,31,61,0.44)_48%,_rgba(10,31,61,0.18))]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] max-w-7xl flex-col justify-end px-6 pb-10 pt-16 lg:px-10 lg:pb-14">
        <div className="max-w-3xl pb-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ffd566]">
            {activeEvent.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
            {activeEvent.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
            {activeEvent.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={activeEvent.primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-[#ffd566] px-7 py-4 text-base font-black text-slate-950 transition hover:bg-[#ffb900]"
            >
              {activeEvent.primaryCta}
            </Link>
            <Link
              href={activeEvent.secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              {activeEvent.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            {heroEvents.map((event, index) => (
              <button
                key={event.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-10 bg-[#ffd566]"
                    : "w-3 bg-white/45 hover:bg-white/70"
                }`}
                aria-label={`Show ${event.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 transition hover:bg-white/20"
              aria-label="Previous event"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 transition hover:bg-white/20"
              aria-label="Next event"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
