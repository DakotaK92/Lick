import './globals.css'
import { Outfit } from 'next/font/google';

import Header from './components/Header';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
})
 
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