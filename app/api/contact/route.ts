import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY
    const senderEmail = process.env.BREVO_SENDER_EMAIL
    const senderName = process.env.BREVO_SENDER_NAME
    const notifyEmail = process.env.NOTIFY_EMAIL
    const notifyName = process.env.NOTIFY_NAME

    if (!apiKey || !senderEmail || !notifyEmail) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 })
    }

    // 1. Notification email to the business
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
        <div style="background: #0B1A07; padding: 32px; text-align: center;">
          <h1 style="color: #7AAD46; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
          <p style="color: #6A8558; margin: 8px 0 0;">Cent Home Health Website</p>
        </div>
        <div style="padding: 32px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 120px; font-weight: bold;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #5C8A35;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Subject</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${subject || "General Inquiry"}</td></tr>
            <tr><td style="padding: 10px 0; color: #666; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 10px 0; color: #333; white-space: pre-wrap;">${message}</td></tr>
          </table>
        </div>
        <div style="background: #f9f9f9; padding: 20px 32px; text-align: center; border-top: 1px solid #eee;">
          <a href="mailto:${email}" style="display: inline-block; background: #5C8A35; color: white; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 14px;">Reply to ${name}</a>
        </div>
      </div>
    `

    // 2. Confirmation email to the user
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
        <div style="background: #0B1A07; padding: 32px; text-align: center;">
          <h1 style="color: #7AAD46; margin: 0; font-size: 24px;">We received your message!</h1>
          <p style="color: #6A8558; margin: 10px 0 0;">Cent Home Health LLC</p>
        </div>
        <div style="padding: 32px; background: #ffffff;">
          <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
          <p style="color: #555; font-size: 15px; line-height: 1.7;">Thank you for reaching out to Cent Home Health. We've received your message and a member of our care team will get back to you within 24 hours.</p>
          <div style="background: #EEF6E0; border: 1px solid #5C8A35; border-radius: 10px; padding: 20px; margin: 24px 0;">
            <p style="color: #3A6224; font-size: 14px; margin: 0 0 6px; font-weight: bold;">Your message summary:</p>
            <p style="color: #4A7228; font-size: 14px; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #555; font-size: 15px; line-height: 1.7;">Need to speak with someone sooner? Call us directly:</p>
          <p style="margin: 0;"><a href="tel:9453370540" style="color: #5C8A35; font-weight: bold; font-size: 18px; text-decoration: none;">(945) 337-0540</a></p>
        </div>
        <div style="background: #0B1A07; padding: 20px 32px; text-align: center;">
          <p style="color: #6A8558; font-size: 12px; margin: 0;">Cent Home Health LLC &bull; Greater Houston, TX &bull; <a href="mailto:Cent@centhomehealth.org" style="color: #5C8A35;">Cent@centhomehealth.org</a></p>
        </div>
      </div>
    `

    const [notifyRes, confirmRes] = await Promise.all([
      fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: senderName, email: senderEmail },
          to: [{ email: notifyEmail, name: notifyName }],
          replyTo: { email, name },
          subject: `New Contact: ${subject || "General Inquiry"} — ${name}`,
          htmlContent: notificationHtml,
        }),
      }),
      fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: senderName, email: senderEmail },
          to: [{ email, name }],
          subject: "We got your message — Cent Home Health",
          htmlContent: confirmationHtml,
        }),
      }),
    ])

    if (!notifyRes.ok) {
      const err = await notifyRes.json()
      console.error("Brevo notification error:", err)
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
  }
}
