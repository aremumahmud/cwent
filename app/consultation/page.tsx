"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle2, ArrowRight, Phone, Clock, Shield, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const benefits = [
  { icon: Heart, text: "Free, no-obligation care assessment" },
  { icon: Shield, text: "Personalized care plan tailored to your needs" },
  { icon: Clock, text: "Flexible scheduling — we work around you" },
  { icon: Star, text: "Speak directly with our care coordinators" },
]

const steps = [
  { num: "01", title: "Book Your Slot", desc: "Fill out the form and choose a time that works for you." },
  { num: "02", title: "We'll Reach Out", desc: "A care coordinator will confirm your consultation within 24 hours." },
  { num: "03", title: "Free Assessment", desc: "We'll discuss your loved one's needs and build a personalized plan." },
  { num: "04", title: "Care Begins", desc: "Once you're ready, we match you with the right caregiver and start." },
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

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    relationship: "",
    careNeeds: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || "Something went wrong. Please try again.")
      } else {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", relationship: "", careNeeds: "", preferredDate: "", preferredTime: "", message: "" })
        setTimeout(() => setSubmitted(false), 8000)
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
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
            <span className="text-sm text-[#7AAD46] font-medium">100% Free — No Obligation</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cal-sans)" }}
          >
            Book Your Free{" "}
            <span className="bg-gradient-to-r from-[#7AAD46] to-[#5C8A35] bg-clip-text text-transparent">
              Consultation
            </span>
          </h1>
          <p className="text-[#8FA878] text-lg leading-relaxed mb-8">
            Let's talk about your care needs. A Cent Home Health coordinator will reach out to build a personalized plan for your loved one.
          </p>
          <a href="tel:9453370540" className="inline-flex items-center gap-2 text-[#7AAD46] font-semibold hover:text-[#5C8A35] transition-colors">
            <Phone className="w-4 h-4" />
            Prefer to call? (945) 337-0540
          </a>
        </Section>
      </section>

      {/* Benefits + How it works */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Benefits */}
            <Section>
              <p className="text-[#5C8A35] font-semibold text-sm uppercase tracking-widest mb-4">What You Get</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: "var(--font-cal-sans)" }}>
                Your Free Consultation Includes
              </h2>
              <div className="space-y-4">
                {benefits.map((b) => {
                  const Icon = b.icon
                  return (
                    <div key={b.text} className="flex items-center gap-4 bg-stone-50 border border-stone-200 rounded-2xl p-5">
                      <div className="w-10 h-10 rounded-xl bg-[#EEF6E0] border border-[#5C8A35]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#5C8A35]" strokeWidth={1.5} />
                      </div>
                      <p className="text-slate-700 font-medium">{b.text}</p>
                    </div>
                  )
                })}
              </div>
              {/* Image */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-stone-200 h-52">
                <img
                  src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877345/1_ay7xjz.png"
                  alt="Care consultation"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </Section>

            {/* How it works */}
            <Section>
              <p className="text-[#5C8A35] font-semibold text-sm uppercase tracking-widest mb-4">The Process</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: "var(--font-cal-sans)" }}>
                How It Works
              </h2>
              <div className="space-y-2">
                {steps.map((step, i) => (
                  <div key={step.num} className="flex items-start gap-5 py-5 border-b border-stone-200 last:border-0">
                    <span className="text-3xl font-bold text-stone-200 leading-none min-w-[3rem]">{step.num}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Form */}
          <Section>
            <div className="bg-[#0B1A07] rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Dark left */}
                <div className="lg:col-span-2 relative overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877759/4_ahktyo.png"
                    alt="Care"
                    className="w-full h-64 lg:h-full object-cover object-center opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1A07] hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A07] to-transparent lg:hidden" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 hidden lg:block">
                    <h3 className="text-white text-xl font-bold mb-2">We're Here for You</h3>
                    <p className="text-[#6A8558] text-sm leading-relaxed mb-6">Every family deserves compassionate, expert care. Let us help you find the right fit.</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#7AAD46] pulse-glow" />
                      <span className="text-[#7AAD46] text-sm font-medium">Available 24/7</span>
                    </div>
                  </div>
                </div>

                {/* Form side */}
                <div className="lg:col-span-3 p-8 sm:p-10">
                  <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Consultation</h3>
                  <p className="text-[#6A8558] text-sm mb-8">Fill in your details and we'll confirm within 24 hours.</p>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-[#EEF6E0] border border-[#5C8A35]/30 rounded-xl flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#5C8A35] flex-shrink-0" />
                      <p className="text-[#3A6224] text-sm font-medium">Request received! Check your email — we'll confirm shortly.</p>
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50/10 border border-red-400/30 rounded-xl flex items-center gap-3"
                    >
                      <p className="text-red-400 text-sm">{error}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#8FA878] mb-2 uppercase tracking-wider">Your Name</label>
                        <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required className="bg-[#122008] border-[#1E3310] text-white placeholder:text-[#3A5A22] rounded-xl focus:ring-[#5C8A35] focus:border-[#5C8A35]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#8FA878] mb-2 uppercase tracking-wider">Phone</label>
                        <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(945) 000-0000" required className="bg-[#122008] border-[#1E3310] text-white placeholder:text-[#3A5A22] rounded-xl focus:ring-[#5C8A35] focus:border-[#5C8A35]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#8FA878] mb-2 uppercase tracking-wider">Email</label>
                      <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="bg-[#122008] border-[#1E3310] text-white placeholder:text-[#3A5A22] rounded-xl focus:ring-[#5C8A35] focus:border-[#5C8A35]" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#8FA878] mb-2 uppercase tracking-wider">Your Role</label>
                        <select name="relationship" value={formData.relationship} onChange={handleChange} className="w-full px-4 py-2.5 border border-[#1E3310] rounded-xl bg-[#122008] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#5C8A35] focus:border-[#5C8A35]">
                          <option value="">Select one</option>
                          <option value="self">Care Recipient (Myself)</option>
                          <option value="family">Family Member</option>
                          <option value="caregiver">Professional Caregiver</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#8FA878] mb-2 uppercase tracking-wider">Care Needed</label>
                        <select name="careNeeds" value={formData.careNeeds} onChange={handleChange} className="w-full px-4 py-2.5 border border-[#1E3310] rounded-xl bg-[#122008] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#5C8A35] focus:border-[#5C8A35]">
                          <option value="">Select service</option>
                          <option value="personal">Personal Care</option>
                          <option value="companion">Companion Care</option>
                          <option value="dementia">Dementia Care</option>
                          <option value="respite">Respite Care</option>
                          <option value="meals">Meal Preparation</option>
                          <option value="housekeeping">Light Housekeeping</option>
                          <option value="unsure">Not Sure Yet</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#8FA878] mb-2 uppercase tracking-wider">Preferred Date</label>
                        <Input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="bg-[#122008] border-[#1E3310] text-white rounded-xl focus:ring-[#5C8A35] focus:border-[#5C8A35]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#8FA878] mb-2 uppercase tracking-wider">Preferred Time</label>
                        <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full px-4 py-2.5 border border-[#1E3310] rounded-xl bg-[#122008] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#5C8A35] focus:border-[#5C8A35]">
                          <option value="">Any time</option>
                          <option value="morning">Morning (9am – 12pm)</option>
                          <option value="afternoon">Afternoon (12pm – 4pm)</option>
                          <option value="evening">Evening (4pm – 7pm)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#8FA878] mb-2 uppercase tracking-wider">Additional Notes</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us anything else that might help us prepare..."
                        rows={3}
                        className="w-full px-4 py-3 border border-[#1E3310] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C8A35] focus:border-[#5C8A35] resize-none bg-[#122008] text-white placeholder:text-[#3A5A22] text-sm"
                      />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full py-3 font-semibold shimmer-btn border-0 h-12 text-base disabled:opacity-60">
                      {loading ? "Submitting..." : "Request My Free Consultation"}
                      {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
                    </Button>
                    <p className="text-[#3A5A22] text-xs text-center">
                      By submitting, you agree to be contacted by our team. No spam, ever.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
