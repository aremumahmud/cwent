"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Cent Home Health website (centhomehealth.org) and any related services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, users, and clients of Cent Home Health LLC.`,
  },
  {
    title: "2. Services Description",
    content: `Cent Home Health LLC provides in-home healthcare services including, but not limited to, personal care, companion care, dementia care, respite care, meal preparation, and light housekeeping. Services are subject to availability in your geographic area and are provided pursuant to a separate service agreement signed by the client or their authorized representative.`,
  },
  {
    title: "3. Eligibility and Account Registration",
    content: `To request services or submit information through this website, you must be at least 18 years of age or the legal guardian of the care recipient. You agree to provide accurate, complete, and current information. Cent Home Health LLC reserves the right to refuse service to anyone for any reason at any time, consistent with applicable law.`,
  },
  {
    title: "4. Communications Consent",
    content: `By submitting your contact information through this website—including our consultation form, contact form, or any other inquiry form—you expressly consent to receive communications from Cent Home Health LLC, including:\n\n• Phone calls (including automated or pre-recorded calls) to the number you provide\n• SMS/text messages regarding your inquiry or service request\n• Emails related to our services, updates, and follow-up communications\n\nMessage and data rates may apply. You may opt out of SMS communications at any time by replying STOP. You may opt out of email communications by clicking the unsubscribe link in any email we send. Opting out of marketing communications does not affect communications necessary for the provision of services you have requested. By providing your phone number, you confirm that you are the account holder or have authority to consent on behalf of the account holder.`,
  },
  {
    title: "5. TCPA Compliance",
    content: `Cent Home Health LLC complies with the Telephone Consumer Protection Act (TCPA). We will not place automated marketing calls or send marketing text messages to your number without your prior express written consent. The consent you provide through our website forms constitutes your written consent under the TCPA for us to contact you at the number provided, including via autodialer or prerecorded message, for informational and service-related purposes. This consent is not a condition of purchasing any goods or services.`,
  },
  {
    title: "6. Website Use and Intellectual Property",
    content: `All content on this website—including text, images, logos, graphics, and design—is the property of Cent Home Health LLC or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written permission. You are granted a limited, non-exclusive, non-transferable license to access and use this website for personal, non-commercial purposes only.`,
  },
  {
    title: "7. Disclaimer of Warranties",
    content: `This website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. Cent Home Health LLC does not warrant that the website will be error-free, uninterrupted, or free of viruses or other harmful components. Information on this site is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for medical guidance.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the fullest extent permitted by law, Cent Home Health LLC, its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services. Our total liability to you for any claim arising from your use of this site shall not exceed the amount paid by you to us in the three months preceding the claim.`,
  },
  {
    title: "9. Third-Party Links",
    content: `This website may contain links to third-party websites. These links are provided for your convenience only. Cent Home Health LLC has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.`,
  },
  {
    title: "10. Privacy",
    content: `Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.`,
  },
  {
    title: "11. Governing Law and Dispute Resolution",
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in Harris County, Texas, in accordance with the rules of the American Arbitration Association, unless you opt out of arbitration within 30 days of your first use of our services by emailing Cent@centhomehealth.org.`,
  },
  {
    title: "12. Changes to These Terms",
    content: `Cent Home Health LLC reserves the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date. Your continued use of the website after any modifications constitutes your acceptance of the revised terms.`,
  },
  {
    title: "13. Contact Information",
    content: `If you have any questions about these Terms and Conditions, please contact us:\n\nCent Home Health LLC\nPhone: (945) 337-0540\nEmail: Cent@centhomehealth.org\nService Area: Greater Houston, Texas`,
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B1A07]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-4 bg-[#0B1A07]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5C8A35]/8 rounded-full blur-[100px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <p className="text-[#7AAD46] font-semibold text-sm uppercase tracking-widest mb-4">Legal</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-cal-sans)" }}
          >
            Terms & Conditions
          </h1>
          <p className="text-[#6A8558]">
            Effective Date: January 1, 2024 &nbsp;·&nbsp; Last Updated: March 1, 2024
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-slate max-w-none"
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-12 p-6 bg-[#EEF6E0] border border-[#5C8A35]/20 rounded-2xl">
              Please read these Terms and Conditions carefully before using our website or services. These terms govern your use of the Cent Home Health website and describe your rights and obligations as a user.
            </p>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  className="pb-10 border-b border-stone-100 last:border-0"
                >
                  <h2
                    className="text-xl font-bold text-slate-900 mb-4"
                    style={{ fontFamily: "var(--font-cal-sans)" }}
                  >
                    {section.title}
                  </h2>
                  <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
