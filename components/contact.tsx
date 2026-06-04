"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: Phone, title: "Phone", value: "(945) 337-0540", link: "tel:9453370540" },
    { icon: Mail, title: "Email", value: "Cent@centhomehealth.org", link: "mailto:Cent@centhomehealth.org" },
    { icon: MapPin, title: "Service Areas", value: "Greater Houston Area", link: "#" },
  ]

  return (
    <section id="contact" className="py-24 px-4 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#5C8A35] font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-cal-sans)" }}
          >
            Get in Touch
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Ready to learn more about our services? Contact us for a free consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left dark panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-[#0B1A07] rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#3A6224]/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-[#6A8558] text-sm mb-10">We&apos;re here to help. Reach out any time.</p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a key={index} href={info.link} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-[#5C8A35]/10 border border-[#5C8A35]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5C8A35]/20 transition-colors">
                        <Icon className="w-5 h-5 text-[#7AAD46]" />
                      </div>
                      <div>
                        <p className="text-[#6A8558] text-xs uppercase tracking-wider font-medium mb-1">
                          {info.title}
                        </p>
                        <p className="text-white font-medium group-hover:text-[#7AAD46] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-[#1E3310]">
                <p className="text-[#6A8558] text-xs mb-3">Available 24/7 for urgent care inquiries</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#7AAD46] pulse-glow" />
                  <span className="text-[#7AAD46] text-sm font-medium">Online & Available Now</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-stone-50 rounded-3xl p-8 sm:p-10 border border-stone-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-[#EEF6E0] border border-[#5C8A35]/30 rounded-xl text-[#3A6224] text-sm"
              >
                Thank you! We&apos;ll be in touch soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white border-stone-300 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-white border-stone-300 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                  Phone
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(945) 000-0000"
                  className="bg-white border-stone-300 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your care needs..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C8A35] focus:border-[#5C8A35] resize-none bg-white text-sm"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full py-3 font-semibold shimmer-btn border-0"
              >
                Send Message
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
