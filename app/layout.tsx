import type React from "react"
import type { Metadata } from "next"
import { Bellefair } from "next/font/google"
import "./globals.css"

// Load Bellefair font with Next.js font system
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bellefair",
})

export const metadata: Metadata = {
  title: "Deyvid & Zori - Wedding",
  description: "Join us for our special day - September 20, 2025",
  generator: "v0.dev",
  keywords: ["wedding", "Deyvid", "Zori", "September 2025", "celebration"],
  authors: [{ name: "Deyvid & Zori" }],
  openGraph: {
    title: "Deyvid & Zori - Wedding",
    description: "Join us for our special day - September 20, 2025",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={bellefair.variable}>
      <body className={bellefair.className}>{children}</body>
    </html>
  )
}
