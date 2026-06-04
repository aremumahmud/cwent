"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const testimonials = [
    {
      quote:
        "Cent Home Health provided exceptional care for my mother with dementia—their team was patient, attentive, and truly compassionate every step of the way.",
      author: "Reef C.",
      location: "Katy, TX",
      rating: 5,
    },
    {
      quote:
        "The caregivers are professional, reliable, and treat my father with such respect. We couldn't ask for better support.",
      author: "Maria S.",
      location: "Houston, TX",
      rating: 5,
    },
    {
      quote:
        "Cent Home Health made it possible for my parent to stay at home safely. Their personalized approach really made all the difference.",
      author: "James T.",
      location: "Sugarland, TX",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#5C8A35] font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-cal-sans)" }}
          >
            What Families Say
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Real stories from families who trust Cent Home Health with their loved ones.
          </p>
        </motion.div>

        {/* Featured large testimonial — split layout with image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0B1A07] rounded-3xl mb-6 relative overflow-hidden grid grid-cols-1 lg:grid-cols-5"
        >
          {/* Image side */}
          <div className="lg:col-span-2 h-64 lg:h-auto relative overflow-hidden">
            <img
              src="https://res.cloudinary.com/ds5yshxqc/image/upload/v1779877345/1_ay7xjz.png"
              alt="Care recipient"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1A07] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A07] to-transparent lg:hidden" />
          </div>

          {/* Text side */}
          <div className="lg:col-span-3 p-10 sm:p-14 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3A6224]/20 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <Quote className="w-10 h-10 text-[#5C8A35]/30 mb-6" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-8">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-white">{testimonials[0].author}</p>
                <p className="text-[#6A8558] text-sm">{testimonials[0].location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two smaller testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-[#5C8A35]/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EEF6E0] border border-[#5C8A35]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4A7228] font-bold text-xs">{testimonial.author[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{testimonial.author}</p>
                  <p className="text-slate-400 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
