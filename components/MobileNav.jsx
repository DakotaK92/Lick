'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MdOutlineMenuOpen } from "react-icons/md";

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

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center md:hidden">
        <MdOutlineMenuOpen className="text-[32px] text-white"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col p-2">
        {/* logo */}
        <a href="/" className='flex justify-center mt-20'>
            <img src="/assets/lick-logo.png" className="flex"/>
        </a>
        {/* nav */}
        <nav className='flex flex-col justify-center items-center gap-4 p-4'>
            {links.map((link, index) => {
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        // fix border accent color
                        className={`${link.path === pathname && "text-white border-b-2 border-white"
            } capitalize font-medium hover:text-white transition-all`}
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
