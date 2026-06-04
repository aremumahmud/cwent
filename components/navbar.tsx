"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

function isLightColor(rgb: string): boolean {
  const match = rgb.match(/\d+/g)
  if (!match) return false
  const [r, g, b] = match.map(Number)
  // Perceived luminance
  return (r * 299 + g * 587 + b * 114) / 1000 > 180
}

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLight, setIsLight] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function checkBackground() {
      // Sample color at the center-bottom of the navbar
      const y = 80
      const x = window.innerWidth / 2

      // Temporarily hide navbar so elementFromPoint finds what's behind it
      const header = navRef.current?.closest("header") as HTMLElement | null
      if (header) header.style.visibility = "hidden"
      const el = document.elementFromPoint(x, y) as HTMLElement | null
      if (header) header.style.visibility = ""

      if (!el) return
      const bg = window.getComputedStyle(el).backgroundColor
      setIsLight(isLightColor(bg))
    }

    checkBackground()
    window.addEventListener("scroll", checkBackground, { passive: true })
    return () => window.removeEventListener("scroll", checkBackground)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
    >
      <nav
        ref={navRef}
        className={`relative flex items-center justify-between px-4 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
          isLight
            ? "bg-white/80 border-stone-200 shadow-sm"
            : "bg-white/10 border-white/20"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
            <img
              src="/cent-logo.png"
              alt="Cent Home Health"
              className="h-9 w-9 object-contain"
            />
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                isLight
                  ? "text-slate-700 hover:text-slate-900"
                  : "text-white hover:text-white/80"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover"
                  className={`absolute inset-0 rounded-full ${isLight ? "bg-stone-100" : "bg-white/10"}`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="/consultation">
            <Button size="sm" className="shimmer-btn bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full px-4 border-0">
              Book a Consultation
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors ${isLight ? "text-slate-600 hover:text-slate-900" : "text-white hover:text-white/80"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-lg"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm text-slate-700 hover:text-slate-900 hover:bg-stone-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-stone-200 my-2" />
            <Button className="shimmer-btn bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full border-0">
              Book a Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
