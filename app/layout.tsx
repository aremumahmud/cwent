import type React from "react"
import type { Metadata } from "next"
import { Manrope, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const calSans = Sora({
  subsets: ["latin"],
  variable: "--font-cal-sans",
  display: "swap",
  weight: ["600"],
})

const instrumentSans = Sora({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cent Home Health LLC - Professional Home Healthcare Services",
  description: "Compassionate, professional home healthcare services in Houston, Sugarland, Katy, and surrounding areas. Nursing care, personal assistance, and specialized therapy services.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${manrope.variable} ${calSans.variable} ${instrumentSans.variable} font-sans antialiased bg-white text-gray-900`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
