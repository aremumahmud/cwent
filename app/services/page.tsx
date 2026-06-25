"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Heart, Users, Coffee, Home, Stethoscope, Activity, Wind, ArrowRight, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Stethoscope,
    title: "Skilled Nursing Care",
    tagline: "Clinical excellence at home",
    description:
      "Professional nursing services provided by licensed clinicians, including medication management, wound care, chronic disease monitoring, post-surgical care, and health assessments to support recovery and independence.",
    details: [
      "Medication management and administration",
      "Wound care and dressing changes",
      "Chronic disease monitoring (Diabetes, COPD, Heart Disease)",
      "Post-surgical and post-hospital care",
      "Health assessments and vital signs monitoring",
    ],
    image: "https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877759/4_ahktyo.png",
    accent: "#5C8A35",
  },
  {
    icon: Heart,
    title: "Home Health Aide Services",
    tagline: "Dignity in every interaction",
    description:
      "Compassionate assistance with daily living activities such as bathing, dressing, grooming, mobility support, and personal hygiene while preserving dignity and comfort.",
    details: [
      "Bathing and personal hygiene assistance",
      "Dressing and grooming support",
      "Mobility and transfer assistance",
      "Skin and oral care",
      "Toileting and continence care",
    ],
    image: "https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877800/8_ninj7a.png",
    accent: "#5C8A35",
  },
  {
    icon: Activity,
    title: "Therapy Services",
    tagline: "Restore strength and independence",
    description:
      "Physical, Occupational, and Speech Therapy designed to improve strength, mobility, communication, and overall quality of life in the comfort of home.",
    details: [
      "Physical therapy for strength and mobility",
      "Occupational therapy for daily living skills",
      "Speech therapy for communication and swallowing",
      "Fall prevention and safety assessments",
      "Rehabilitation and recovery support",
    ],
    image: "https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877800/2_nzvckc.png",
    accent: "#5C8A35",
  },
  {
    icon: Users,
    title: "Companion Care",
    tagline: "Connection that matters",
    description:
      "Meaningful companionship and social engagement that helps reduce isolation, promote emotional well-being, and provide support with everyday activities.",
    details: [
      "Friendly conversation and emotional support",
      "Accompaniment to appointments and outings",
      "Hobby and activity engagement",
      "Reading, games, and social interaction",
      "Errands and light transportation",
    ],
    image: "https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877847/1_p8ciht.png",
    accent: "#5C8A35",
  },
  {
    icon: Coffee,
    title: "Respite Care",
    tagline: "Relief for the whole family",
    description:
      "Reliable short-term care that allows family caregivers to rest, recharge, or attend to personal responsibilities while ensuring their loved one receives attentive care.",
    details: [
      "Short-term and long-term coverage",
      "Flexible scheduling to suit your needs",
      "Seamless care continuity",
      "Emergency and planned respite",
      "Peace of mind for the whole family",
    ],
    image: "https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877693/8_gieaft.png",
    accent: "#5C8A35",
  },
  {
    icon: Home,
    title: "Homemaker & Light Housekeeping",
    tagline: "A safe, comfortable home",
    description:
      "Assistance with meal preparation, laundry, light cleaning, organization, and household tasks to maintain a safe, healthy, and comfortable living environment.",
    details: [
      "Meal preparation and nutritional support",
      "Laundry and linen changes",
      "Light cleaning and organization",
      "Grocery shopping and errands",
      "Home safety checks",
    ],
    image: "https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877336/5_mqhjqe.png",
    accent: "#5C8A35",
  },
  {
    icon: Wind,
    title: "Respiratory Care",
    tagline: "Breathe easier at home",
    description:
      "Specialized respiratory support provided by trained healthcare professionals to help patients manage breathing conditions, improve lung function, and maintain comfort and independence at home.",
    details: [
      "Oxygen therapy monitoring and management",
      "COPD and chronic respiratory disease support",
      "Breathing treatments and nebulizer administration",
      "Respiratory assessments and oxygen saturation monitoring",
      "Post-hospital respiratory recovery care",
      "Airway clearance techniques and pulmonary health support",
      "Education on inhaler, oxygen, and respiratory equipment use",
      "Coordination with physicians for ongoing respiratory care plans",
    ],
    image: "/1.png",
    accent: "#5C8A35",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const Icon = service.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-stone-200 bg-white ${
        isEven ? "" : "lg:[&>*:first-child]:order-2"
      }`}
    >
      {/* Image */}
      <div className="h-72 lg:h-auto overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-5 left-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#4A7228]">
            <Icon className="w-3.5 h-3.5" />
            {service.tagline}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 lg:p-14 flex flex-col justify-center">
        <div className="inline-flex p-3 rounded-2xl bg-[#EEF6E0] border border-[#5C8A35]/20 w-fit mb-6">
          <Icon className="w-6 h-6 text-[#5C8A35]" strokeWidth={1.5} />
        </div>
        <h2
          className="text-3xl font-bold text-slate-900 mb-3"
          style={{ fontFamily: "var(--font-cal-sans)" }}
        >
          {service.title}
        </h2>
        <p className="text-slate-500 leading-relaxed mb-8">{service.description}</p>
        <ul className="space-y-3 mb-8">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#5C8A35] flex-shrink-0" />
              <span className="text-slate-600 text-sm">{detail}</span>
            </li>
          ))}
        </ul>
        <Button
          className="w-fit bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full px-6 border-0"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main className="min-h-screen bg-[#0B1A07]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden bg-[#0B1A07]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#5C8A35]/10 rounded-full blur-[120px]" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122008]/80 border border-[#5C8A35]/40 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#7AAD46] pulse-glow" />
            <span className="text-sm text-[#7AAD46] font-medium">Serving Greater Houston, Missouri City & Richmond</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cal-sans)" }}
          >
            Our Care{" "}
            <span className="bg-gradient-to-r from-[#7AAD46] to-[#5C8A35] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg text-[#8FA878] leading-relaxed max-w-2xl mx-auto mb-10">
            Every service is designed around you—delivered with compassion, respect, and clinical excellence in the comfort of your own home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="shimmer-btn bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full px-8 h-12 text-base font-medium border-0"
            >
              Schedule a Free Consultation
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
          </div>
        </motion.div>
      </section>

      {/* Services list */}
      <section className="bg-stone-50 py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-[#0B1A07] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A6224]/20 via-[#0B1A07] to-[#0B1A07] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-cal-sans)" }}
          >
            Not Sure Where to Start?
          </h2>
          <p className="text-[#8FA878] text-lg mb-10 leading-relaxed">
            Our team will help you find the right care plan. Contact us today for a free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="shimmer-btn bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full px-8 h-14 text-base font-medium border-0"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: (945) 337-0540
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-base font-medium border-[#1E3310] text-[#8FA878] hover:bg-[#122008] hover:text-white bg-transparent"
            >
              Schedule Online
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
