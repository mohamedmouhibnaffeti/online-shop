import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar'
import './globals.css'
import ShoppingCartModal from './Components/ShoppingCartModal'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medit-Distribution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
          <Navbar />
          <ShoppingCartModal />
          {children}
          <Footer />
      </body>
    </html>
  )
}
