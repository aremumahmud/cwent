"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "500+", label: "Families Served" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Availability" },
  { value: "100%", label: "Satisfaction" },
]

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden bg-[#0B1A07]">
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#5C8A35]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#3A6224]/8 rounded-full blur-[100px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122008]/80 border border-[#5C8A35]/40 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#7AAD46] pulse-glow" />
              <span className="text-sm text-[#7AAD46] font-medium">Serving Houston & Surrounding Areas</span>
            </motion.div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]"
              style={{ fontFamily: "var(--font-cal-sans), sans-serif" }}
            >
              <span className="block overflow-hidden pb-1">
                <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={0}>
                  Compassionate
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  className="block bg-gradient-to-r from-[#7AAD46] to-[#5C8A35] bg-clip-text text-transparent"
                  variants={textRevealVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  Home Health Care
                </motion.span>
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-[#8FA878] max-w-xl mb-10 leading-relaxed"
            >
              Professional in-home healthcare services with compassion and expertise. Dedicated to helping you or your
              loved ones maintain independence and dignity.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-12"
            >
              <Button
                size="lg"
                className="shimmer-btn bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-[#5C8A35]/25 border-0"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base font-medium border-[#1E3310] text-[#8FA878] hover:bg-[#122008] hover:text-white bg-transparent"
              >
                <Phone className="mr-2 w-4 h-4" />
                (945) 337-0540
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center -space-x-2">
                {[
                  "https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877800/8_ninj7a.png",
                  "https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877847/1_p8ciht.png",
                  "https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877800/2_nzvckc.png",
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt="Care team member"
                    className="w-10 h-10 rounded-full border-2 border-[#0B1A07] object-cover object-top"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-[#6A8558]">
                  Trusted by <span className="text-white font-semibold">500+</span> families
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main large image */}
            <div className="relative rounded-3xl overflow-hidden border border-[#1E3310] shadow-2xl shadow-black/40 h-[420px]">
              <img
                src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877759/4_ahktyo.png"
                alt="Professional home care"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A07]/60 via-transparent to-transparent" />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-[#0B1A07]/80 backdrop-blur-sm rounded-2xl px-4 py-3 border border-[#1E3310]">
                <div className="w-2 h-2 rounded-full bg-[#7AAD46] pulse-glow flex-shrink-0" />
                <p className="text-white text-sm font-medium">Compassionate care, right at home</p>
              </div>
            </div>

            {/* Two smaller images */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="rounded-2xl overflow-hidden border border-[#1E3310] h-[160px]">
                <img
                  src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877693/8_gieaft.png"
                  alt="Home health care team"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#1E3310] h-[160px]">
                <img
                  src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877345/1_ay7xjz.png"
                  alt="Senior care"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -top-4 -right-4 bg-[#122008] border border-[#1E3310] rounded-2xl px-5 py-4 shadow-xl"
            >
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-xs text-[#6A8558]">Families Served</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats grid — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 border border-[#1E3310] rounded-2xl overflow-hidden mt-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 + i * 0.1 }}
              className="px-6 py-5 bg-[#122008]/80 text-center border-r border-[#1E3310] last:border-r-0"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-[#6A8558]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
