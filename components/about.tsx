"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Quote } from "lucide-react"

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const team: { name: string; title: string; bio: string; initials: string; photo: string | null }[] = [
    {
      name: "Dr. Obianuju Okafor",
      title: "Administrator & Founder",
      bio: "Dedicated to delivering compassionate, evidence-based care that promotes independence and dignity.",
      initials: "OO",
      photo: "/ceo.jpg",
    },
    {
      name: "Dr. Linda Ejem",
      title: "Administrator & Co-Founder",
      bio: "Committed to ensuring every client receives personalized, culturally responsive home health care.",
      initials: "LE",
      photo: "/founder2.jpg",
    },
  ]

  const pillars = [
    { label: "Evidence-Based", desc: "Practices & protocols" },
    { label: "Culturally Responsive", desc: "Inclusive care for all" },
    { label: "Family-Centered", desc: "Whole family support" },
    { label: "Dignity First", desc: "Respect in every visit" },
  ]

  const areas = ["Houston", "Sugarland", "Katy", "Missouri City", "Richmond", "Fulshear", "Pearland", "Humble", "Tomball"]

  return (
    <section id="about" className="py-24 px-4 bg-stone-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#5C8A35] font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cal-sans)" }}
            >
              About Cent Home Health
            </h2>
            <div className="relative pl-6 border-l-2 border-[#5C8A35]/40 mb-6">
              <Quote className="absolute -left-3 -top-1 w-5 h-5 text-[#5C8A35]" />
              <p className="text-[#4A7228] text-lg font-medium italic">
                Intentional Care, Right Here in Greater Houston
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Cent Home Health delivers compassionate, high-quality, and culturally responsive care that empowers
              individuals to live safely and independently at home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-slate-500 leading-relaxed mb-8">
              We are committed to promoting dignity, enhancing quality of life, and supporting families through
              evidence-based practices, skilled caregiving, and unwavering respect for every person we serve.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-[#5C8A35]/30 transition-colors"
                >
                  <div className="text-slate-900 font-semibold text-sm mb-1">{item.label}</div>
                  <div className="text-slate-400 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl border border-stone-200 hover:border-[#5C8A35]/30 transition-colors group overflow-hidden"
            >
              {/* Photo header */}
              {member.photo ? (
                <div className="h-[480px] overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-[480px] bg-[#EEF6E0] flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#5C8A35]/10 border-2 border-[#5C8A35]/20 flex items-center justify-center">
                    <span className="text-[#4A7228] text-2xl font-bold">{member.initials}</span>
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-[#5C8A35] text-sm font-semibold mb-3">{member.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 border border-stone-200"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-1">Service Areas</h3>
          <p className="text-slate-400 text-sm mb-6">We proudly serve the Greater Houston area</p>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <div
                key={area}
                className="px-4 py-2 rounded-full bg-stone-50 border border-stone-200 hover:border-[#5C8A35]/40 hover:bg-[#EEF6E0] transition-colors cursor-default"
              >
                <p className="text-slate-700 font-medium text-sm">{area}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
