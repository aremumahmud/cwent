"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Wind, CheckCircle2, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const bullets = [
  "Oxygen therapy monitoring and management",
  "COPD and chronic respiratory disease support",
  "Breathing treatments and nebulizer administration",
  "Respiratory assessments and oxygen saturation monitoring",
  "Post-hospital respiratory recovery care",
  "Airway clearance techniques and pulmonary health support",
  "Education on inhaler, oxygen, and equipment use",
  "Coordination with physicians for ongoing care plans",
]

export function RespiratoryCare() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF6E0] border border-[#5C8A35]/20">
            <Wind className="w-3.5 h-3.5 text-[#5C8A35]" />
            <span className="text-xs font-semibold text-[#5C8A35] uppercase tracking-widest">Specialized Service</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-xl h-[420px]">
              <img
                src="/1.png"
                alt="Respiratory care nurse with patient"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0B1A07]/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating second image */}
            <div className="absolute -bottom-8 -right-6 w-52 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/2.png"
                alt="Patient receiving oxygen therapy"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating stat badge */}
            <div className="absolute top-6 -right-4 bg-[#0B1A07] text-white rounded-2xl px-5 py-3 shadow-lg border border-[#1E3310]">
              <p className="text-xs text-[#6A8558] mb-0.5">Available</p>
              <p className="text-sm font-bold text-[#7AAD46]">24 / 7</p>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:pl-4"
          >
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight"
              style={{ fontFamily: "var(--font-cal-sans)" }}
            >
              Respiratory{" "}
              <span className="bg-gradient-to-r from-[#5C8A35] to-[#7AAD46] bg-clip-text text-transparent">
                Care at Home
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Specialized respiratory support provided by trained healthcare professionals to help patients manage breathing conditions, improve lung function, and maintain comfort and independence at home.
            </p>

            <ul className="space-y-3 mb-10">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#5C8A35] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/consultation">
                <Button className="shimmer-btn bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full px-7 h-11 font-semibold border-0">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="tel:9453370540">
                <Button variant="outline" className="rounded-full px-7 h-11 border-stone-300 text-slate-700 hover:bg-stone-50 bg-transparent font-medium">
                  <Phone className="mr-2 w-4 h-4" />
                  (945) 337-0540
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
