"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(945) 337-0540",
    sub: "Call or text anytime",
    link: "tel:9453370540",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Cent@centhomehealth.org",
    sub: "We respond within 24 hours",
    link: "mailto:Cent@centhomehealth.org",
  },
  {
    icon: MapPin,
    title: "Service Areas",
    value: "Greater Houston Area",
    sub: "Houston, Katy, Sugarland & more",
    link: "#",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "24 / 7",
    sub: "Always here for urgent inquiries",
    link: "#",
  },
]

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <main className="min-h-screen bg-[#0B1A07]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden bg-[#0B1A07]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#5C8A35]/10 rounded-full blur-[120px]" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <Section className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122008]/80 border border-[#5C8A35]/40 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#7AAD46] pulse-glow" />
            <span className="text-sm text-[#7AAD46] font-medium">We'd love to hear from you</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cal-sans)" }}
          >
            Get in{" "}
            <span className="bg-gradient-to-r from-[#7AAD46] to-[#5C8A35] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-[#8FA878] text-lg leading-relaxed">
            Whether you have questions about our services or are ready to begin care, our team is here to help every step of the way.
          </p>
        </Section>
      </section>

      {/* Contact cards */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <Section key={info.title}>
                  <a
                    href={info.link}
                    className="block bg-stone-50 border border-stone-200 rounded-3xl p-7 hover:border-[#5C8A35]/30 hover:bg-[#EEF6E0]/30 transition-all duration-300 group h-full"
                  >
                    <div className="inline-flex p-3 rounded-2xl bg-[#EEF6E0] border border-[#5C8A35]/20 mb-5 group-hover:bg-[#5C8A35]/10 transition-colors">
                      <Icon className="w-5 h-5 text-[#5C8A35]" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{info.title}</p>
                    <p className="font-bold text-slate-900 text-lg mb-1 group-hover:text-[#4A7228] transition-colors">{info.value}</p>
                    <p className="text-slate-400 text-sm">{info.sub}</p>
                  </a>
                </Section>
              )
            })}
          </div>

          {/* Form + image */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Dark left panel */}
            <Section className="lg:col-span-2">
              <div className="bg-[#0B1A07] rounded-3xl overflow-hidden h-full relative">
                <img
                  src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877693/8_gieaft.png"
                  alt="Care team"
                  className="w-full h-56 object-cover object-center opacity-50"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
                  <p className="text-[#6A8558] text-sm mb-8">We're here to help. Reach out any time.</p>
                  <div className="space-y-6">
                    {contactInfo.slice(0, 3).map((info) => {
                      const Icon = info.icon
                      return (
                        <a key={info.title} href={info.link} className="flex items-start gap-4 group">
                          <div className="w-10 h-10 rounded-xl bg-[#5C8A35]/10 border border-[#5C8A35]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5C8A35]/20 transition-colors">
                            <Icon className="w-4 h-4 text-[#7AAD46]" />
                          </div>
                          <div>
                            <p className="text-[#6A8558] text-xs uppercase tracking-wider mb-0.5">{info.title}</p>
                            <p className="text-white font-medium text-sm group-hover:text-[#7AAD46] transition-colors">{info.value}</p>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                  <div className="mt-10 pt-8 border-t border-[#1E3310] flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#7AAD46] pulse-glow" />
                    <span className="text-[#7AAD46] text-sm font-medium">Online & Available Now</span>
                  </div>
                </div>
              </div>
            </Section>

            {/* Form */}
            <Section className="lg:col-span-3">
              <div className="bg-stone-50 rounded-3xl p-8 sm:p-10 border border-stone-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
                <p className="text-slate-400 text-sm mb-8">We'll get back to you within 24 hours.</p>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-[#EEF6E0] border border-[#5C8A35]/30 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#5C8A35] flex-shrink-0" />
                    <p className="text-[#3A6224] text-sm font-medium">Message sent! We'll be in touch soon.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Name</label>
                      <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="bg-white border-stone-300 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Email</label>
                      <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="bg-white border-stone-300 rounded-xl" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Phone</label>
                      <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(945) 000-0000" className="bg-white border-stone-300 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C8A35] focus:border-[#5C8A35] bg-white text-sm text-slate-700"
                      >
                        <option value="">Select a topic</option>
                        <option value="services">Services Inquiry</option>
                        <option value="insurance">Insurance Questions</option>
                        <option value="consultation">Free Consultation</option>
                        <option value="employment">Employment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C8A35] focus:border-[#5C8A35] resize-none bg-white text-sm"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full py-3 font-semibold shimmer-btn border-0">
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
            </Section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
