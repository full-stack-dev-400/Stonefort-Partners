import './css/style.css'

import { Inter } from 'next/font/google'
import StickyTickerTape from "@/components/trading/StickyTickerTape";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Stonefort Securities',
  description: 'Stonefort securities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-inter antialiased bg-black text-slate-100 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}

          {/* Spacer so the bottom sticky bar doesn't overlap page content */}
          <div style={{ height: 64 }} aria-hidden="true" />
        </div>

        <StickyTickerTape />
      </body>
    </html>
  )
}
