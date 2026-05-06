"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "our products",
        path: "/our-products",
    },
    {
        name: "our history",
        path: "/our-history",
    },
    {
        name: "news",
        path: "/news",
    },
    {
        name: "where to buy",
        path: "/where-to-buy",
    }
]

const isActiveLink = (pathname, path) => {
  if (path === "/") {
    return pathname === "/";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
};
 
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center gap-7 text-white md:flex">
      {links.map((link, index) => {
        const isActive = isActiveLink(pathname, link.path);

        return (
            <Link
              href={link.path}
              key={index}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-full border px-4 py-2 capitalize font-semibold transition-all ${
                isActive
                  ? "border-white bg-white text-[#18498a] shadow-[0_10px_30px_rgba(255,255,255,0.22)]"
                  : "border-transparent text-white/82 hover:border-white/15 hover:bg-white/10 hover:text-white"
              }`}
            >
                {link.name}
            </Link>
        )
      })}
    </nav>
  )
}

export default Nav
