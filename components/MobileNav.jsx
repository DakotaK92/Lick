'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MdOutlineMenuOpen } from "react-icons/md";
import Image from "next/image";

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
];

const isActiveLink = (pathname, path) => {
  if (path === "/") {
    return pathname === "/";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
};

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center md:hidden">
        <MdOutlineMenuOpen className="text-[32px] text-white"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col border-l-0 bg-[#18498a] p-6 text-white">
        <Link href="/" className='mt-16 flex justify-center'>
            <Image
              src="/assets/lick-logo.png"
              alt="Lick logo"
              width={170}
              height={44}
              className="h-10 w-auto"
            />
        </Link>
        <nav className='mt-10 flex flex-col gap-2'>
            {links.map((link, index) => {
                const isActive = isActiveLink(pathname, link.path);

                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        aria-current={isActive ? "page" : undefined}
                        className={`rounded-2xl border px-4 py-3 capitalize font-semibold transition-all ${
                          isActive
                            ? "border-white bg-white text-[#18498a] shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
                            : "border-transparent text-white/88 hover:border-white/15 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav
