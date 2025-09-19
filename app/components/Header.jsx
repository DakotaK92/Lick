import React from 'react'

const Header = () => {
  return (
    <header className='py-8 xl:py-12'>
        <div className="container mx-auto flex justify-between items-center bg-slate-400">
            <h1>My Website</h1>
            <nav>
                <ul className="flex space-x-4">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
