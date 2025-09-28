"use client"

import Link from "next/link";

const links = [
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
  return (
    <nav className="flex gap-8 text-black items-center">
      {links.map((link, index) => {
        return (
            <Link href={link.path} key={index} className={`${link.path} capitalize font-medium`}>
                {link.name}
            </Link>
        )
      })}
    </nav>
  )
}

export default Nav
