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
    <nav className="flex gap-8 text-white">
      {links.map((link, index) => {
        return (
            <Link href={link.path} key={index} className={`${link.path === pathname && "text-white border-b-2 border-white"
            } capitalize font-medium hover:text-white transition-all`}>
                {link.name}
            </Link>
        )
      })}
    </nav>
  )
}

export default Nav
