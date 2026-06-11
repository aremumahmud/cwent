"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export function FAQs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What services does Cent Home Health offer?",
      answer:
        "We provide a wide range of home healthcare services including: Skilled Nursing Care, Medication Management, Wound Care, Chronic Disease Management, Post-Surgical Care, IV Therapy, Health Assessments, Physical Therapy, Occupational Therapy, Speech Therapy, Personal Care Assistance, Alzheimer's & Dementia Care, Respite Care, Companion Care, Palliative Care Support, Fall Prevention, Vital Signs Monitoring, Nutritional Guidance, and Care Coordination with Physicians and Specialists.",
    },
    {
      question: "Are your caregivers trained and certified?",
      answer:
        "Yes, all our caregivers are professionally trained and experienced in providing compassionate home health care. We maintain high standards of training and certification.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "We work with various insurance providers. Please contact us directly at (945) 337-0540 to discuss your specific insurance coverage.",
    },
    {
      question: "How do I schedule a consultation?",
      answer:
        "You can call us at (945) 337-0540 or email Cent@centhomehealth.org. We offer free consultations to discuss your care needs and find the right plan for you.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve the Greater Houston area including Houston, Sugarland, Katy, Missouri City, Richmond, Fulshear, Pearland, Humble, and Tomball.",
    },
    {
      question: "How flexible is your scheduling?",
      answer:
        "We offer flexible scheduling to accommodate your needs, whether you need daily support, weekly visits, or occasional care services.",
    },
  ]

  return (
    <section id="faqs" className="py-24 px-4 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-[#5C8A35] font-semibold text-sm uppercase tracking-widest mb-4">FAQ</p>
            <h2
              className="text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-cal-sans)" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Find answers to common questions about our services and how we can help.
            </p>
            <div className="bg-[#EEF6E0] border border-[#5C8A35]/20 rounded-2xl p-6">
              <p className="text-[#3A6224] font-semibold text-sm mb-2">Still have questions?</p>
              <p className="text-[#5C8A35] text-sm">
                Call us at{" "}
                <a href="tel:9453370540" className="font-bold underline">
                  (945) 337-0540
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right FAQs */}
          <div className="lg:col-span-3 space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  expandedIndex === index
                    ? "border-[#5C8A35]/30 bg-[#EEF6E0]/50"
                    : "border-stone-200 bg-stone-50"
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#EEF6E0]/30 transition-colors gap-4"
                >
                  <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      expandedIndex === index
                        ? "bg-[#5C8A35] text-white"
                        : "bg-stone-200 text-stone-500"
                    }`}
                  >
                    {expandedIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
