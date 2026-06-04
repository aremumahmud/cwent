"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Shield, Star, Users, Sparkles, HandHeart, Clock, Leaf } from "lucide-react"

const values = [
  { label: "Compassionate Care", icon: Heart },
  { label: "Dignity & Respect", icon: Star },
  { label: "Family-Centered", icon: Users },
  { label: "Trusted & Reliable", icon: Shield },
  { label: "Personalized Attention", icon: Sparkles },
  { label: "Gentle & Kind", icon: HandHeart },
  { label: "Always Available", icon: Clock },
  { label: "Holistic Wellness", icon: Leaf },
]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-14 overflow-hidden bg-[#EEF6E0] border-y border-[#5C8A35]/20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <p className="text-xs text-[#5C8A35] uppercase tracking-[0.25em] font-semibold">
          What We Stand For
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#EEF6E0] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#EEF6E0] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...values, ...values].map((v, i) => {
            const Icon = v.icon
            return (
              <div
                key={i}
                className="flex items-center gap-3 mx-4 px-6 py-3 rounded-full bg-white border border-[#5C8A35]/20 shadow-sm flex-shrink-0 group"
              >
                <div className="w-7 h-7 rounded-full bg-[#5C8A35]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-[#5C8A35]" />
                </div>
                <span className="text-sm font-semibold text-[#3A6224] whitespace-nowrap">
                  {v.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
