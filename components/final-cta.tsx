"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4 bg-[#0B1A07] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A6224]/25 via-[#0B1A07] to-[#0B1A07]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#5C8A35]/50 to-transparent" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122008]/80 border border-[#5C8A35]/40 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#7AAD46] pulse-glow" />
          <span className="text-sm text-[#7AAD46] font-medium">Available 24/7 for urgent inquiries</span>
        </div>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-cal-sans)" }}
        >
          Ready to Get Quality Care?
        </h2>
        <p className="text-lg sm:text-xl text-[#8FA878] mb-10 max-w-2xl mx-auto leading-relaxed">
          Our compassionate team is ready to help. Contact us today for a free consultation and assessment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="shimmer-btn bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-[#5C8A35]/20 border-0"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Now: (945) 337-0540
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-14 text-base font-medium border-[#1E3310] text-[#8FA878] hover:bg-[#122008] hover:text-white bg-transparent"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
