"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const reasons = [
    {
      title: "Personalized Care Plans",
      description: "Tailored to each client's unique needs and preferences",
    },
    {
      title: "Compassionate Caregivers",
      description: "Trained professionals you can trust with your loved ones",
    },
    {
      title: "Reliable Support",
      description: "On-time service you can count on every single day",
    },
    {
      title: "Clear Communication",
      description: "Transparent updates with families at all times",
    },
    {
      title: "Flexible Scheduling",
      description: "Adaptable services that fit your routine and needs",
    },
    {
      title: "Safety & Dignity",
      description: "Strong focus on independence, respect, and well-being",
    },
  ]

  return (
    <section id="why-us" className="py-24 px-4 bg-[#0B1A07]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky heading + image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[#7AAD46] font-semibold text-sm uppercase tracking-widest mb-4">Why Choose Us</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cal-sans)" }}
            >
              Why Families Choose Us
            </h2>
            <p className="text-[#8FA878] text-lg leading-relaxed mb-8">
              Discover what sets Cent Home Health apart and why families trust us with their loved ones.
            </p>
            <div className="w-12 h-1 rounded-full bg-[#5C8A35] mb-10" />

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden border border-[#1E3310] h-[200px]">
                <img
                  src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877800/8_ninj7a.png"
                  alt="Home care"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#1E3310] h-[200px] mt-6">
                <img
                  src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877693/8_gieaft.png"
                  alt="Care team"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — numbered list */}
          <div>
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-6 py-6 border-b border-[#1E3310] last:border-0 group hover:pl-2 transition-all duration-300"
              >
                <span className="text-3xl font-bold text-[#1E3310] group-hover:text-[#3A6224] transition-colors leading-none mt-1 min-w-[2.5rem] select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{reason.title}</h3>
                  <p className="text-[#8FA878]">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
