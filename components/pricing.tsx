"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Companion Care",
    description: "For personal assistance and companionship",
    features: ["4 hours/day service", "Meal preparation", "Light housekeeping", "Companionship & errands", "Flexible scheduling"],
    cta: "Inquire Now",
    highlighted: false,
  },
  {
    name: "Skilled Nursing",
    description: "For medical care and health monitoring",
    features: [
      "Certified nursing care",
      "Medication management",
      "Wound care & dressing",
      "Health monitoring",
      "Care coordination",
      "24/7 availability",
      "Post-surgical care",
    ],
    cta: "Schedule Assessment",
    highlighted: true,
  },
  {
    name: "Comprehensive Care",
    description: "For complete health management",
    features: [
      "All Skilled Nursing services",
      "Physical therapy",
      "Occupational therapy",
      "Specialized memory care",
      "Case management",
      "Family support services",
      "Care plan customization",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-24 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Care Plans</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-cal-sans)" }}
          >
            Flexible Care Plans
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Personalized care options tailored to your specific needs. Call for competitive pricing and insurance
            verification.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-slate-950 shadow-2xl scale-[1.02]"
                  : "bg-white border border-stone-200 hover:border-teal-200"
              }`}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 to-transparent pointer-events-none" />
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-teal-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                    Most Requested
                  </div>
                </>
              )}

              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className={`mb-6 pb-6 border-b ${plan.highlighted ? "border-slate-800" : "border-stone-100"}`}>
                  <span className={`text-3xl font-bold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                    Custom
                  </span>
                  <p className={`text-xs mt-1 ${plan.highlighted ? "text-slate-500" : "text-slate-400"}`}>
                    Pricing based on your specific needs
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.highlighted ? "bg-teal-500/20" : "bg-teal-50 border border-teal-100"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${plan.highlighted ? "text-teal-400" : "text-teal-600"}`}
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className={plan.highlighted ? "text-slate-300" : "text-slate-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full font-semibold ${
                    plan.highlighted
                      ? "shimmer-btn bg-teal-500 text-white hover:bg-teal-400 border-0"
                      : "bg-slate-900 text-white hover:bg-slate-800 border-0"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
