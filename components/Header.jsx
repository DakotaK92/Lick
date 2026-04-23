import Link from "next/link";
import Image from "next/image";

import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#18498a]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/lick-logo.png"
            alt="Lick logo"
            width={170}
            height={44}
            priority
            className="h-8 w-auto lg:h-10"
          />
        </Link>
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
