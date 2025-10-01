import { FaFacebook, FaInstagram, FaTiktok  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex justify-center">
            <a href="/">
              <img src="/assets/lick-logo-blk.png" alt="Lick Logo" className="h-8" />
            </a>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Lick is a premium ice cream brand that offers a variety of delicious and unique flavors in-store near you!
            </p>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 font-medium">
            <li>
                <a className="text-gray-700 transition hover:text-[#18498a]" href="/"> Home </a>
            </li>
            <li>
                <a className="text-gray-700 transition hover:text-[#18498a]" href="/our-products"> Our Products </a>
            </li>
            <li>
                <a className="text-gray-700 transition hover:text-[#18498a]" href="/our-history"> Our History </a>
            </li>
            <li>
                <a className="text-gray-700 transition hover:text-[#18498a]" href="/news"> News </a>
            </li>
            <li>
                <a className="text-gray-700 transition hover:text-[#18498a]" href="/where-to-buy"> Where to Buy </a>
            </li>
            </ul>

            <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
                <a className="text-gray-700 transition hover:text-[#18498a]">
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="w-6 h-6"/>
                </a>
            </li>
            <li>
                <a className="text-gray-700 transition hover:text-[#18498a]">
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="w-6 h-6"/>
                </a>
            </li>
            <li>
                <a className="text-gray-700 transition hover:text-[#18498a]">
                    <span className="sr-only">Twitter</span>
                    <FaXTwitter className="w-6 h-6"/>
                </a>
            </li>
            <li>
                <a className="text-gray-700 transition hover:text-[#18498a]">
                <span className="sr-only">TikTok</span>
                <FaTiktok className="w-6 h-6"/>
                </a>
            </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
