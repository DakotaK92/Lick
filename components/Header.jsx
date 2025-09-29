import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-4 xl:py-6 bg-[#18498a]">
      <div className="container mx-auto flex align-items items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img src="/assets/lick-logo.png" 
          alt="lick-logo" 
          className="p-2 rounded-md w-32 md:w-40 lg:w-48"
        />
        </a>
        {/* Navigation */}
        <Nav />
        {/* Hamburger? */}
        
      </div>
    </header>
  )
}

export default Header
