"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Quote, CheckCircle2, ArrowRight, Phone, Heart, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const pillars = [
  { label: "Evidence-Based", desc: "Practices rooted in clinical research and proven protocols." },
  { label: "Culturally Responsive", desc: "Inclusive, respectful care that honors every background." },
  { label: "Family-Centered", desc: "We support the whole family, not just the individual." },
  { label: "Dignity First", desc: "Every interaction is guided by respect and compassion." },
]

const team = [
  {
    name: "Dr. Obianuju Okafor",
    title: "Administrator & Founder",
    bio: "Dedicated to delivering compassionate, evidence-based care that promotes independence and dignity. Dr. Okafor brings a wealth of clinical experience and a deep commitment to culturally responsive healthcare.",
    photo: "/ceo.jpg",
    initials: "OO",
  },
  {
    name: "Dr. Linda Ejem",
    title: "Administrator & Co-Founder",
    bio: "Committed to ensuring every client receives personalized, culturally responsive home health care. Dr. Ejem's expertise in care coordination ensures every family receives seamless, high-quality support.",
    photo: null,
    initials: "LE",
  },
]

const values = [
  { icon: Heart, title: "Compassion", desc: "We care deeply for every person we serve." },
  { icon: Shield, title: "Integrity", desc: "Honest, transparent care you can trust." },
  { icon: Star, title: "Excellence", desc: "High clinical standards in every visit." },
  { icon: CheckCircle2, title: "Respect", desc: "Dignity is at the center of everything we do." },
]

const areas = ["Houston", "Sugarland", "Katy", "Missouri City", "Richmond", "Fulshear", "Pearland", "Humble", "Tomball"]

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
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
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Section>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122008]/80 border border-[#5C8A35]/40 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#7AAD46] pulse-glow" />
              <span className="text-sm text-[#7AAD46] font-medium">Our Story</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cal-sans)" }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-[#7AAD46] to-[#5C8A35] bg-clip-text text-transparent">
                Cent Home Health
              </span>
            </h1>
            <div className="relative pl-6 border-l-2 border-[#5C8A35]/40 mb-6">
              <Quote className="absolute -left-3 -top-1 w-5 h-5 text-[#5C8A35]" />
              <p className="text-[#7AAD46] text-xl font-medium italic">
                Intentional Care, Right Here in Greater Houston
              </p>
            </div>
            <p className="text-[#8FA878] text-lg leading-relaxed mb-8">
              Cent Home Health delivers compassionate, high-quality, and culturally responsive care that empowers individuals to live safely and independently at home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/consultation">
                <Button size="lg" className="shimmer-btn bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full px-8 h-12 border-0">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="tel:9453370540">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-[#1E3310] text-[#8FA878] hover:bg-[#122008] hover:text-white bg-transparent">
                  <Phone className="mr-2 w-4 h-4" />
                  (945) 337-0540
                </Button>
              </a>
            </div>
          </Section>

          {/* Hero image */}
          <Section>
            <div className="relative rounded-3xl overflow-hidden border border-[#1E3310] h-[460px]">
              <img
                src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877759/4_ahktyo.png"
                alt="Cent Home Health care"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A07]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-[#0B1A07]/80 backdrop-blur-sm rounded-2xl px-5 py-4 border border-[#1E3310]">
                <p className="text-white font-semibold text-sm mb-1">Licensed & Insured</p>
                <p className="text-[#6A8558] text-xs">Serving Houston families with clinical excellence since day one.</p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Section className="text-center mb-16">
            <p className="text-[#5C8A35] font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-cal-sans)" }}>
              Why We Do What We Do
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
              We are committed to promoting dignity, enhancing quality of life, and supporting families through evidence-based practices, skilled caregiving, and unwavering respect for every person we serve.
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <Section key={v.title}>
                  <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 h-full hover:border-[#5C8A35]/30 hover:bg-[#EEF6E0]/30 transition-all duration-300 group">
                    <div className="inline-flex p-3 rounded-2xl bg-[#EEF6E0] border border-[#5C8A35]/20 mb-5 group-hover:bg-[#5C8A35]/10 transition-colors">
                      <Icon className="w-6 h-6 text-[#5C8A35]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </Section>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="bg-stone-50 py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Section>
            <div className="rounded-3xl overflow-hidden border border-stone-200 h-[420px]">
              <img
                src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877800/8_ninj7a.png"
                alt="Care approach"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </Section>
          <Section>
            <p className="text-[#5C8A35] font-semibold text-sm uppercase tracking-widest mb-4">How We Work</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight" style={{ fontFamily: "var(--font-cal-sans)" }}>
              Our Care Pillars
            </h2>
            <div className="space-y-4">
              {pillars.map((p) => (
                <div key={p.label} className="flex items-start gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover:border-[#5C8A35]/30 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#5C8A35] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{p.label}</p>
                    <p className="text-slate-500 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Section className="text-center mb-16">
            <p className="text-[#5C8A35] font-semibold text-sm uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-cal-sans)" }}>
              Meet Our Team
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Founded by two dedicated healthcare professionals committed to raising the standard of home care in Houston.
            </p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <Section key={member.name}>
                <div className="bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden hover:border-[#5C8A35]/30 transition-colors group">
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
                      <div className="w-24 h-24 rounded-full bg-[#5C8A35]/10 border-2 border-[#5C8A35]/20 flex items-center justify-center">
                        <span className="text-[#4A7228] text-3xl font-bold">{member.initials}</span>
                      </div>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-[#5C8A35] font-semibold text-sm mb-4">{member.title}</p>
                    <p className="text-slate-500 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-[#0B1A07] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Section className="text-center mb-12">
            <p className="text-[#7AAD46] font-semibold text-sm uppercase tracking-widest mb-3">Coverage</p>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cal-sans)" }}>
              Where We Serve
            </h2>
            <p className="text-[#8FA878] max-w-xl mx-auto">
              Proudly serving families across the Greater Houston area.
            </p>
          </Section>
          <Section>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="px-6 py-3 rounded-full bg-[#122008] border border-[#1E3310] hover:border-[#5C8A35]/40 hover:bg-[#1E3310] transition-colors cursor-default"
                >
                  <p className="text-[#8FA878] font-medium text-sm">{area}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1A07] border-t border-[#1E3310] py-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A6224]/15 via-transparent to-transparent pointer-events-none" />
        <Section className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-cal-sans)" }}>
            Ready to Start Your Care Journey?
          </h2>
          <p className="text-[#8FA878] text-lg mb-10 leading-relaxed">
            Contact us today for a free consultation. We'll build a care plan that fits your loved one's needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/consultation">
              <Button size="lg" className="shimmer-btn bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full px-8 h-14 text-base font-medium border-0">
                Book a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-medium border-[#1E3310] text-[#8FA878] hover:bg-[#122008] hover:text-white bg-transparent">
                Contact Us
              </Button>
            </a>
          </div>
        </Section>
      </section>

      <Footer />
    </main>
  )
}
