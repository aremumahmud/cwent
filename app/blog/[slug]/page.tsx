"use client"

import { notFound } from "next/navigation"
import { use } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { posts } from "../data"

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-[#0B1A07]">
      <Navbar />

      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A07] via-[#0B1A07]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1.5 bg-[#5C8A35] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
              {post.category}
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-cal-sans)" }}
            >
              {post.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16">
          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-5 text-sm text-slate-400 pb-10 mb-10 border-b border-stone-200"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} read
            </div>
            <a href="/blog" className="ml-auto flex items-center gap-1.5 text-[#5C8A35] font-medium hover:text-[#4A7228] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </a>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-7"
          >
            {post.content.map((section, i) => {
              if (section.type === "intro") {
                return (
                  <p key={i} className="text-xl text-slate-600 leading-relaxed font-medium">
                    {section.text}
                  </p>
                )
              }
              if (section.type === "heading") {
                return (
                  <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 pt-2" style={{ fontFamily: "var(--font-cal-sans)" }}>
                    {section.text}
                  </h2>
                )
              }
              if (section.type === "paragraph") {
                return (
                  <p key={i} className="text-slate-600 leading-relaxed text-lg">
                    {section.text}
                  </p>
                )
              }
              if (section.type === "list") {
                return (
                  <ul key={i} className="space-y-3">
                    {section.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-600">
                        <span className="w-5 h-5 rounded-full bg-[#EEF6E0] border border-[#5C8A35]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#5C8A35] text-xs font-bold">✓</span>
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
              if (section.type === "quote") {
                return (
                  <blockquote key={i} className="relative pl-6 border-l-4 border-[#5C8A35] my-10">
                    <Quote className="absolute -left-1 -top-2 w-5 h-5 text-[#5C8A35]/40" />
                    <p className="text-xl text-[#4A7228] font-medium italic leading-relaxed">
                      {section.text}
                    </p>
                  </blockquote>
                )
              }
              if (section.type === "callout") {
                return (
                  <div key={i} className="bg-[#EEF6E0] border border-[#5C8A35]/20 rounded-2xl p-7 my-10">
                    <p className="text-[#3A6224] leading-relaxed mb-5">{section.text}</p>
                    <a href="/consultation">
                      <Button className="bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full border-0">
                        Book a Free Consultation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                )
              }
              return null
            })}
          </motion.div>

          {/* Author strip */}
          <div className="mt-16 pt-10 border-t border-stone-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EEF6E0] border border-[#5C8A35]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#4A7228] font-bold text-sm">CH</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">Cent Home Health</p>
                <p className="text-slate-400 text-xs">Compassionate Home Care — Greater Houston Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More articles */}
      <section className="bg-stone-50 py-20 px-4 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-cal-sans)" }}>
              More Articles
            </h2>
            <a href="/blog">
              <Button variant="outline" className="rounded-full border-stone-300 text-slate-600 hover:border-[#5C8A35]/40 hover:text-[#4A7228] bg-transparent">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-[#5C8A35]/30 hover:shadow-lg transition-all duration-300">
                <div className="h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-1 bg-[#EEF6E0] text-[#4A7228] text-xs font-semibold rounded-full border border-[#5C8A35]/20 mb-3">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-[#4A7228] transition-colors mb-2">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{p.date}</span>
                    <span>·</span>
                    <span>{p.readTime} read</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1A07] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A6224]/20 via-[#0B1A07] to-[#0B1A07] pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cal-sans)" }}>
            Ready to Start Care?
          </h2>
          <p className="text-[#8FA878] mb-8 leading-relaxed">
            Book a free, no-obligation consultation with our care team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/consultation">
              <Button size="lg" className="shimmer-btn bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full px-8 h-12 border-0">
                Book a Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-[#1E3310] text-[#8FA878] hover:bg-[#122008] hover:text-white bg-transparent">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
