import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { BentoGrid } from "@/components/bento-grid"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { FAQs } from "@/components/faqs"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#0B1A07]">
        <Navbar />
        <Hero />
        <LogoMarquee />
        <BentoGrid />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <FAQs />
        <Blog />
        <Contact />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
