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
  title: "Cent Home Health LLC | Compassionate Home Care in Houston",
  description: "Professional in-home healthcare services including personal care, companion care, dementia care, respite care, and more. Serving Greater Houston, TX.",
  metadataBase: new URL("https://centhomehealth.org"),
  icons: {
    icon: [
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/cent-logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://centhomehealth.org",
    title: "Cent Home Health LLC | Compassionate Home Care in Houston",
    description: "Professional in-home healthcare services including personal care, companion care, dementia care, respite care, and more. Serving Greater Houston, TX.",
    siteName: "Cent Home Health LLC",
    images: [
      {
        url: "/cent-logo.png",
        width: 1200,
        height: 630,
        alt: "Cent Home Health LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cent Home Health LLC | Compassionate Home Care in Houston",
    description: "Professional in-home healthcare services. Serving Greater Houston, TX.",
    images: ["/cent-logo.png"],
  },
  keywords: [
    "home health care Houston",
    "personal care services Houston",
    "companion care",
    "dementia care Houston",
    "respite care",
    "in-home healthcare Texas",
    "Cent Home Health",
  ],
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
