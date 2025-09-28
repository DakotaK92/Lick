import './globals.css'
import { Outfit } from 'next/font/google';

import Header from './components/Header';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
})

export const metadata = {
  title: "Lick - Home",
  description: "Lick is a premium ice cream brand that offers a variety of delicious and unique flavors. Our ice cream is made with high-quality ingredients and is free from artificial preservatives and additives. We are committed to sustainability and ethical sourcing, ensuring that our products are not only good for you but also good for the planet.",
  icons: {
    /*
      Insert favicon link here if needed later
      icon: '/favicon.ico',
    */
  }
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}