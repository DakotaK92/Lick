import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white p-6">
      <div className="container mx-auto flex align-items items-center">
        {/* Logo */}
        <a href="/">
          <img src="../../public/lick-logo.png" alt="lick-logo"/>
        </a>
        <Nav />   
      </div>
    </header>
  )
}

export default Header
