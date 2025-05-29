import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

// Load Playfair Display font with Next.js font system
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "David & Zori - Wedding",
  description: "Join us for our special day",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className={playfair.className}>{children}</body>
    </html>
  )
}
