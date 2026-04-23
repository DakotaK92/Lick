import { FaFacebook, FaInstagram, FaTiktok  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Products", href: "/our-products" },
  { name: "Our History", href: "/our-history" },
  { name: "News", href: "/news" },
  { name: "Where to Buy", href: "/where-to-buy" },
];

const socialItems = [
  { name: "Facebook", href: "https://facebook.com", icon: FaFacebook },
  { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { name: "X", href: "https://x.com", icon: FaXTwitter },
  { name: "TikTok", href: "https://tiktok.com", icon: FaTiktok },
];

const Footer = () => {
  return (
    <footer className="bg-[#fff4ea]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="grid gap-10 rounded-[2.25rem] bg-white px-8 py-10 shadow-[0_24px_70px_rgba(17,24,39,0.08)] ring-1 ring-slate-200/70 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <Link href="/" className="inline-flex">
                  <Image
                    src="/assets/lick-logo-blk.png"
                    alt="Lick logo"
                    width={170}
                    height={44}
                    className="h-8 w-auto"
                  />
                </Link>

                <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                  Lick brings playful flavors, pint drops, and a neighborhood
                  feel to every scoop. This footer now supports the rest of the
                  site instead of just filling space.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#18498a]">
                    Explore
                  </h3>
                  <ul className="mt-4 space-y-3 font-medium text-slate-700">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          className="transition hover:text-[#18498a]"
                          href={item.href}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#18498a]">
                    Follow Along
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {socialItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <li key={item.name}>
                          <a
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#18498a]/8 text-[#18498a] transition hover:bg-[#18498a] hover:text-white"
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={item.name}
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
