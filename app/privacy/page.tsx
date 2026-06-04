"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const sections = [
  {
    title: "1. Introduction",
    content: `Cent Home Health LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website (centhomehealth.org), use our services, or communicate with us. Please read this policy carefully. If you disagree with its terms, please discontinue use of our website.`,
  },
  {
    title: "2. Information We Collect",
    content: `We may collect the following categories of personal information:\n\nInformation You Provide Directly:\n• Name, email address, phone number, and mailing address\n• Details about your care needs or those of a loved one\n• Information submitted through contact, consultation, or inquiry forms\n• Communications you send us (email, phone, text)\n\nInformation Collected Automatically:\n• IP address and browser type\n• Pages visited, time spent on site, and referring URLs\n• Device identifiers and operating system\n• Cookies and similar tracking technologies\n\nInformation from Third Parties:\n• Referrals from healthcare providers or partner organizations (with your consent)`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your personal information for the following purposes:\n\n• To respond to your inquiries and provide requested information\n• To schedule and deliver home care services\n• To send you communications you have consented to, including calls, texts, and emails\n• To send appointment reminders and service updates\n• To improve our website and service offerings\n• To comply with legal obligations and protect our legal rights\n• To detect and prevent fraud or security incidents\n• To conduct internal business operations (billing, record-keeping, reporting)`,
  },
  {
    title: "4. Communications and Marketing",
    content: `With your consent, we may contact you via phone, SMS/text message, or email to follow up on inquiries, provide service information, and share relevant health care resources.\n\nSMS Messaging: If you consent to receive text messages, you may opt out at any time by replying STOP. Message frequency varies. Message and data rates may apply.\n\nEmail: You may unsubscribe from marketing emails at any time by clicking the unsubscribe link in any email or by contacting us directly. Transactional emails related to services you have requested cannot be opted out of while your service is active.\n\nPhone: You may request to be added to our internal Do Not Call list by contacting us at Cent@centhomehealth.org or (945) 337-0540.`,
  },
  {
    title: "5. How We Share Your Information",
    content: `We do not sell your personal information. We may share your information in the following limited circumstances:\n\nService Providers: We may share data with third-party vendors who assist us in operating our website, processing payments, or delivering services (e.g., scheduling software, email platforms). These vendors are contractually obligated to protect your information.\n\nHealthcare Partners: With your consent, we may share relevant information with physicians, nurses, or other care coordinators involved in your care.\n\nLegal Requirements: We may disclose your information if required by law, court order, or government authority, or to protect the safety and rights of Cent Home Health LLC, our employees, clients, or the public.\n\nBusiness Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.`,
  },
  {
    title: "6. HIPAA Compliance",
    content: `To the extent that Cent Home Health LLC creates, receives, maintains, or transmits Protected Health Information (PHI) as defined under the Health Insurance Portability and Accountability Act (HIPAA), we comply with applicable HIPAA Privacy and Security Rules. Our Notice of Privacy Practices, which governs the use and disclosure of PHI, is available upon request. For questions regarding your healthcare information rights, please contact us directly.`,
  },
  {
    title: "7. Cookies and Tracking Technologies",
    content: `Our website uses cookies and similar tracking technologies to enhance your experience. Cookies are small data files placed on your device. We use:\n\n• Essential cookies: Required for website functionality\n• Analytics cookies: To understand how visitors use our site (e.g., Google Analytics)\n• Marketing cookies: To deliver relevant content (where applicable)\n\nYou can control cookies through your browser settings. Disabling cookies may affect website functionality. We honor Do Not Track browser signals where technically feasible.`,
  },
  {
    title: "8. Data Retention",
    content: `We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Client care records are retained in accordance with Texas state healthcare regulations. When information is no longer needed, it is securely deleted or anonymized.`,
  },
  {
    title: "9. Security",
    content: `We implement administrative, technical, and physical security measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we take reasonable precautions to protect your data.`,
  },
  {
    title: "10. Your Rights and Choices",
    content: `Depending on applicable law, you may have the following rights regarding your personal information:\n\n• Access: Request a copy of the personal information we hold about you\n• Correction: Request that we correct inaccurate or incomplete information\n• Deletion: Request that we delete your personal information (subject to legal retention requirements)\n• Opt-Out: Opt out of marketing communications at any time\n• Data Portability: Request your data in a portable format\n\nTo exercise any of these rights, please contact us at Cent@centhomehealth.org. We will respond within 30 days.`,
  },
  {
    title: "11. Children's Privacy",
    content: `Our website and services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn we have inadvertently collected such information, we will delete it promptly. If you believe we have collected information from a child under 13, please contact us immediately.`,
  },
  {
    title: "12. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: "13. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page with a revised effective date. We encourage you to review this policy periodically. Your continued use of our website after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: "14. Contact Us",
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:\n\nCent Home Health LLC\nPhone: (945) 337-0540\nEmail: Cent@centhomehealth.org\nService Area: Greater Houston, Texas\n\nWe take privacy concerns seriously and will respond to your inquiry promptly.`,
  },
]

export default function PrivacyPage() {
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
            Privacy Policy
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
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-12 p-6 bg-[#EEF6E0] border border-[#5C8A35]/20 rounded-2xl">
              Your privacy matters to us. This policy explains exactly what information we collect, why we collect it, and how we use and protect it. We comply with applicable privacy laws including HIPAA, TCPA, and Texas state regulations.
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
