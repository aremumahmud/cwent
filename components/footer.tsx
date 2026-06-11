"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Mail, Facebook, Linkedin } from "lucide-react"

const footerLinks = {
  Services: [
    { label: "Skilled Nursing Care", href: "/services" },
    { label: "Medication Management", href: "/services" },
    { label: "Wound Care", href: "/services" },
    { label: "Chronic Disease Management", href: "/services" },
    { label: "Post-Surgical Care", href: "/services" },
    { label: "IV Therapy & Injections", href: "/services" },
    { label: "Health Assessments & Monitoring", href: "/services" },
    { label: "Physical Therapy", href: "/services" },
    { label: "Occupational Therapy", href: "/services" },
    { label: "Speech Therapy", href: "/services" },
    { label: "Personal Care Assistance", href: "/services" },
    { label: "Alzheimer's & Dementia Care", href: "/services" },
    { label: "Respite Care", href: "/services" },
    { label: "Companion Care", href: "/services" },
    { label: "Palliative Care Support", href: "/services" },
    { label: "Fall Prevention", href: "/services" },
    { label: "Vital Signs Monitoring", href: "/services" },
    { label: "Nutritional Guidance", href: "/services" },
    { label: "Care Coordination", href: "/services" },
    { label: "Homemaker & Housekeeping", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Consultation", href: "/consultation" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="bg-[#0B1A07] border-t border-[#1E3310]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                <img src="/cent-logo.png" alt="Cent Home Health" className="h-8 w-8 object-contain" />
              </div>
            </a>
            <p className="text-sm text-[#6A8558] mb-5 leading-relaxed">
              Professional home healthcare with compassion and expertise. Serving Greater Houston.
            </p>
            <div className="space-y-3">
              <a
                href="tel:9453370540"
                className="flex items-center gap-2 text-xs text-[#6A8558] hover:text-[#7AAD46] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                (945) 337-0540
              </a>
              <a
                href="mailto:Cent@centhomehealth.org"
                className="flex items-center gap-2 text-xs text-[#6A8558] hover:text-[#7AAD46] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Cent@centhomehealth.org
              </a>
            </div>
          </div>

          {/* Services — spans 2 cols with 2-col internal grid */}
          <div className="col-span-2">
            <h4 className="text-xs font-semibold text-[#8FA878] uppercase tracking-wider mb-5">Services</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#6A8558] hover:text-[#7AAD46] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          {(["Company", "Legal"] as const).map((title) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-[#8FA878] uppercase tracking-wider mb-5">{title}</h4>
              <ul className="space-y-3">
                {footerLinks[title].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-[#6A8558] hover:text-[#7AAD46] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-[#1E3310] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-[#3A5A22]">
            &copy; {new Date().getFullYear()} Cent Home Health LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#122008] border border-[#1E3310] flex items-center justify-center text-[#6A8558] hover:text-[#7AAD46] hover:border-[#3A6224] transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#122008] border border-[#1E3310] flex items-center justify-center text-[#6A8558] hover:text-[#7AAD46] hover:border-[#3A6224] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
