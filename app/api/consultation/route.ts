import { NextRequest, NextResponse } from "next/server"

const RELATIONSHIP_LABELS: Record<string, string> = {
  self: "Care Recipient (Myself)",
  family: "Family Member",
  caregiver: "Professional Caregiver",
  other: "Other",
}

const CARE_LABELS: Record<string, string> = {
  personal: "Personal Care",
  companion: "Companion Care",
  dementia: "Dementia Care",
  respite: "Respite Care",
  meals: "Meal Preparation",
  housekeeping: "Light Housekeeping",
  unsure: "Not Sure Yet",
}

const TIME_LABELS: Record<string, string> = {
  morning: "Morning (9am – 12pm)",
  afternoon: "Afternoon (12pm – 4pm)",
  evening: "Evening (4pm – 7pm)",
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, relationship, careNeeds, preferredDate, preferredTime, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email, and phone are required." }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY
    const senderEmail = process.env.BREVO_SENDER_EMAIL
    const senderName = process.env.BREVO_SENDER_NAME
    const notifyEmail = process.env.NOTIFY_EMAIL
    const notifyName = process.env.NOTIFY_NAME

    if (!apiKey || !senderEmail || !notifyEmail) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 })
    }

    const relationshipLabel = RELATIONSHIP_LABELS[relationship] || relationship || "Not specified"
    const careLabel = CARE_LABELS[careNeeds] || careNeeds || "Not specified"
    const timeLabel = TIME_LABELS[preferredTime] || preferredTime || "Any time"
    const dateLabel = preferredDate || "Not specified"

    // 1. Notification to the business
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
        <div style="background: #0B1A07; padding: 32px; text-align: center;">
          <h1 style="color: #7AAD46; margin: 0; font-size: 22px;">New Consultation Request</h1>
          <p style="color: #6A8558; margin: 8px 0 0;">Cent Home Health Website</p>
        </div>
        <div style="padding: 32px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 160px; font-weight: bold;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #5C8A35;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #5C8A35;">${phone}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Role</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${relationshipLabel}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Care Needed</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${careLabel}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Preferred Date</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${dateLabel}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Preferred Time</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${timeLabel}</td></tr>
            ${message ? `<tr><td style="padding: 10px 0; color: #666; font-weight: bold; vertical-align: top;">Notes</td><td style="padding: 10px 0; color: #333; white-space: pre-wrap;">${message}</td></tr>` : ""}
          </table>
        </div>
        <div style="background: #f9f9f9; padding: 20px 32px; text-align: center; border-top: 1px solid #eee;">
          <a href="tel:${phone}" style="display: inline-block; background: #5C8A35; color: white; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 14px; margin-right: 10px;">Call ${name}</a>
          <a href="mailto:${email}" style="display: inline-block; background: #0B1A07; color: white; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 14px;">Email ${name}</a>
        </div>
      </div>
    `

    // 2. Confirmation to the user
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
        <div style="background: #0B1A07; padding: 32px; text-align: center;">
          <h1 style="color: #7AAD46; margin: 0; font-size: 24px;">Your consultation is booked!</h1>
          <p style="color: #6A8558; margin: 10px 0 0;">Cent Home Health LLC</p>
        </div>
        <div style="padding: 32px; background: #ffffff;">
          <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
          <p style="color: #555; font-size: 15px; line-height: 1.7;">Thank you for requesting a free consultation with Cent Home Health. We've received your details and a care coordinator will reach out to confirm your appointment within <strong>24 hours</strong>.</p>
          <div style="background: #EEF6E0; border: 1px solid #5C8A35; border-radius: 10px; padding: 20px; margin: 24px 0;">
            <p style="color: #3A6224; font-size: 14px; font-weight: bold; margin: 0 0 12px;">Your request details:</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #4A7228;">
              <tr><td style="padding: 4px 0; font-weight: bold; width: 140px;">Service needed:</td><td>${careLabel}</td></tr>
              <tr><td style="padding: 4px 0; font-weight: bold;">Preferred date:</td><td>${dateLabel}</td></tr>
              <tr><td style="padding: 4px 0; font-weight: bold;">Preferred time:</td><td>${timeLabel}</td></tr>
            </table>
          </div>
          <p style="color: #555; font-size: 15px; line-height: 1.7;">Need to speak with us right away? We're here for you:</p>
          <p style="margin: 0;"><a href="tel:9453370540" style="color: #5C8A35; font-weight: bold; font-size: 20px; text-decoration: none;">(945) 337-0540</a></p>
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
          subject: `New Consultation Request — ${name} (${careLabel})`,
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
          subject: "Your free consultation is confirmed — Cent Home Health",
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
    console.error("Consultation API error:", error)
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
  }
}
