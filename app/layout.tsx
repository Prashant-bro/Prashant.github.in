import "./globals.css"
import Navbar from "../components/Navbar"
import { Manrope, Space_Mono } from "next/font/google"
import type { ReactNode } from "react"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
})

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
})

type RootLayoutProps = {
  children: ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceMono.variable} antialiased`}>
        <Navbar />
        <div className="page-shell fade-in">{children}</div>
      </body>
    </html>
  )
}