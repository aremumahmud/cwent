"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { posts } from "./data"

const categories = ["All", "Care Tips", "Wellness", "Dementia", "Family Support", "Home Safety", "Caregiving"]

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [search, setSearch] = useState("")

  const featured = posts.find((p) => p.featured)!
  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter(
      (p) =>
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
    )

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
            <span className="text-sm text-[#7AAD46] font-medium">Resources & Guides</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cal-sans)" }}
          >
            Care{" "}
            <span className="bg-gradient-to-r from-[#7AAD46] to-[#5C8A35] bg-clip-text text-transparent">
              Articles & Tips
            </span>
          </h1>
          <p className="text-[#8FA878] text-lg leading-relaxed">
            Expert guidance, practical advice, and compassionate insights to help you navigate home care for your loved ones.
          </p>
        </Section>
      </section>

      {/* Featured post */}
      <section className="bg-white pt-20 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Section>
            <a
              href={`/blog/${featured.slug}`}
              className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-stone-200 group cursor-pointer hover:border-[#5C8A35]/30 transition-colors"
            >
              <div className="h-72 lg:h-auto overflow-hidden relative">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1.5 rounded-full bg-[#5C8A35] text-white text-xs font-bold uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-stone-50">
                <span className="inline-block px-3 py-1 bg-[#EEF6E0] text-[#4A7228] text-xs font-semibold rounded-full border border-[#5C8A35]/20 mb-5 w-fit">
                  {featured.category}
                </span>
                <h2
                  className="text-3xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#4A7228] transition-colors"
                  style={{ fontFamily: "var(--font-cal-sans)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-8">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime} read
                  </div>
                </div>
                <Button className="w-fit bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full border-0">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </a>
          </Section>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-white pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Search + categories */}
          <Section className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between py-10 border-t border-stone-200 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-[#5C8A35] text-white border-[#5C8A35]"
                      : "bg-stone-50 text-slate-600 border-stone-200 hover:border-[#5C8A35]/30 hover:text-[#4A7228]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64 flex-shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-stone-50 border-stone-200 rounded-full text-sm"
              />
            </div>
          </Section>

          {filtered.length === 0 ? (
            <Section className="text-center py-20">
              <p className="text-slate-400 text-lg">No articles found. Try a different search or category.</p>
            </Section>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, index) => (
                <Section key={index}>
                  <a
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-[#5C8A35]/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="h-0.5 bg-gradient-to-r from-[#7AAD46] to-[#5C8A35] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-7 flex-grow flex flex-col">
                      <span className="inline-block px-3 py-1 bg-[#EEF6E0] text-[#4A7228] text-xs font-semibold rounded-full border border-[#5C8A35]/20 mb-4 w-fit">
                        {post.category}
                      </span>
                      <h3
                        className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#4A7228] transition-colors flex-grow"
                        style={{ fontFamily: "var(--font-cal-sans)" }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-5 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </div>
                        </div>
                        <span className="text-[#5C8A35] font-semibold text-sm flex items-center gap-1.5 group-hover:text-[#4A7228] transition-colors">
                          Read
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </a>
                </Section>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1A07] py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A6224]/20 via-[#0B1A07] to-[#0B1A07] pointer-events-none" />
        <Section className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-[#7AAD46] font-semibold text-sm uppercase tracking-widest mb-4">Have Questions?</p>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cal-sans)" }}>
            We're Here to Help
          </h2>
          <p className="text-[#8FA878] text-lg mb-10 leading-relaxed">
            Our team is happy to answer any questions. Reach out for a free consultation and personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/consultation">
              <Button size="lg" className="shimmer-btn bg-[#5C8A35] text-white hover:bg-[#4A7228] rounded-full px-8 h-12 text-base font-medium border-0">
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
        </Section>
      </section>

      <Footer />
    </main>
  )
}
