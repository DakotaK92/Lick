import MobileNav from "./MobileNav"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-4 xl:py-6 bg-[#18498a]">
      <div className="container mx-auto flex align-items items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img src="/assets/lick-logo.png" 
          alt="lick-logo" 
          className="h-6 xl:h-10" />
        </a>
        {/* Navigation */}
        <Nav />
        <MobileNav />
        
      </div>
    </header>
  )
}

export default Header
