"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Users, Coffee, Home, Stethoscope, Activity, Wind } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Skilled Nursing Care",
    description:
      "Licensed clinicians providing medication management, wound care, chronic disease monitoring, and post-surgical support.",
    check: "Licensed clinicians",
  },
  {
    icon: Heart,
    title: "Home Health Aide Services",
    description:
      "Compassionate assistance with bathing, dressing, grooming, mobility, and personal hygiene while preserving dignity.",
    check: "Dignity-focused care",
  },
  {
    icon: Activity,
    title: "Therapy Services",
    description:
      "Physical, Occupational, and Speech Therapy to improve strength, mobility, and communication at home.",
    check: "PT, OT & Speech",
  },
  {
    icon: Users,
    title: "Companion Care",
    description:
      "Meaningful companionship and social engagement that reduces isolation and promotes emotional well-being.",
    check: "Emotionally supportive",
  },
  {
    icon: Coffee,
    title: "Respite Care",
    description:
      "Reliable short-term care so family caregivers can rest while their loved one receives attentive support.",
    check: "Flexible scheduling",
  },
  {
    icon: Home,
    title: "Homemaker & Housekeeping",
    description:
      "Meal prep, laundry, light cleaning, and household tasks to maintain a safe and comfortable home.",
    check: "Safe environment",
  },
  {
    icon: Wind,
    title: "Respiratory Care",
    description:
      "Specialized respiratory support including oxygen therapy, COPD management, breathing treatments, and nebulizer administration at home.",
    check: "Trained professionals",
  },
]

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#5C8A35] font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 max-w-xl"
            style={{ fontFamily: "var(--font-cal-sans)" }}
          >
            Comprehensive Care Services
          </h2>
          <p className="text-slate-500 max-w-xl leading-relaxed">
            Professional healthcare services delivered with compassion, from nursing care to personal assistance.
          </p>
        </motion.div>

        {/* Hero image card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-[#0B1A07] rounded-3xl overflow-hidden mb-4 min-h-[280px]"
        >
          <img
            src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877336/5_mqhjqe.png"
            alt="Professional home care"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A07]/90 via-[#0B1A07]/60 to-transparent" />
          <div className="relative z-10 p-10 sm:p-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5C8A35]/20 border border-[#5C8A35]/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7AAD46]" />
              <span className="text-[#7AAD46] text-xs font-semibold">Serving Greater Houston</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cal-sans)" }}>
              Care That Comes to You
            </h3>
            <p className="text-[#8FA878] text-lg leading-relaxed">
              Every service is tailored to meet individual needs—delivered with respect, warmth, and clinical excellence.
            </p>
          </div>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.07 }}
                className="bg-stone-50 rounded-3xl p-7 border border-stone-200 hover:border-[#5C8A35]/30 hover:bg-[#EEF6E0]/30 transition-all duration-300 group"
              >
                <div className="inline-flex p-3 rounded-2xl bg-slate-100 border border-slate-200 mb-5 group-hover:bg-[#EEF6E0] group-hover:border-[#5C8A35]/30 transition-colors">
                  <Icon className="w-5 h-5 text-slate-600 group-hover:text-[#5C8A35] transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#5C8A35]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#5C8A35] text-xs">✓</span>
                  </div>
                  <span className="text-sm text-slate-600 font-medium">{service.check}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
