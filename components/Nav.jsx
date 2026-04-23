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
 
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center gap-7 text-white md:flex">
      {links.map((link, index) => {
        return (
            <Link
              href={link.path}
              key={index}
              className={`rounded-full px-3 py-2 capitalize font-medium transition-all ${
                link.path === pathname
                  ? "bg-white/14 text-white"
                  : "text-white/82 hover:bg-white/10 hover:text-white"
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
