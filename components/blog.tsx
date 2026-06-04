"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const posts = [
    {
      title: "Tips for Supporting Loved Ones with Dementia",
      excerpt: "Learn practical strategies for creating a safe, supportive environment for dementia care at home.",
      date: "March 15, 2024",
      category: "Care Tips",
      readTime: "5 min",
    },
    {
      title: "The Benefits of In-Home Care for Independence",
      excerpt:
        "Discover how professional home healthcare enables seniors to maintain their independence and quality of life.",
      date: "March 10, 2024",
      category: "Benefits",
      readTime: "6 min",
    },
    {
      title: "Creating a Safe Home Environment",
      excerpt: "Essential modifications and safety measures to make your home suitable for aging in place.",
      date: "March 5, 2024",
      category: "Home Safety",
      readTime: "7 min",
    },
    {
      title: "Understanding Respite Care Options",
      excerpt: "A comprehensive guide to respite care and how it can provide relief for family caregivers.",
      date: "February 28, 2024",
      category: "Caregiving",
      readTime: "5 min",
    },
    {
      title: "Nutrition and Wellness for Aging Adults",
      excerpt: "Practical nutrition tips to support health, energy, and well-being in your golden years.",
      date: "February 20, 2024",
      category: "Wellness",
      readTime: "6 min",
    },
    {
      title: "Building Trust with Your Home Care Provider",
      excerpt: "Key factors that create strong relationships between families and professional caregivers.",
      date: "February 15, 2024",
      category: "Care Relationships",
      readTime: "5 min",
    },
  ]

  return (
    <section id="blog" className="py-24 px-4 bg-stone-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-[#5C8A35] font-semibold text-sm uppercase tracking-widest mb-3">Blog</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-cal-sans)" }}
            >
              Latest Articles & Tips
            </h2>
          </div>
          <Button className="bg-[#0B1A07] text-white hover:bg-[#122008] rounded-full px-6 shrink-0 border-0">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-[#5C8A35]/30 hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              {/* Green top bar on hover */}
              <div className="h-0.5 bg-gradient-to-r from-[#7AAD46] to-[#5C8A35] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-7 flex-grow">
                <span className="inline-block px-3 py-1 bg-[#EEF6E0] text-[#4A7228] text-xs font-semibold rounded-full border border-[#5C8A35]/20 mb-5">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#4A7228] transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm mb-5 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </div>
              <div className="px-7 pb-7">
                <Button
                  variant="ghost"
                  className="group/btn text-[#5C8A35] hover:text-[#4A7228] hover:bg-[#EEF6E0] p-0 h-auto font-semibold flex items-center gap-2 text-sm"
                >
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
