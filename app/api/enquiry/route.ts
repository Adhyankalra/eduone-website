import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Map possible field variations between ContactForm and QuoteForm
    const contactPerson = (data.fullName || data.contactPerson || "").trim();
    const institutionName = (data.schoolName || data.institutionName || "").trim();
    const email = (data.workEmail || data.email || "").trim();
    const phone = (data.contactNumber || data.phone || "").trim();
    const serviceRequired = data.serviceRequired || (Array.isArray(data.services) ? data.services.join(", ") : data.selectedSolutions?.join(", ")) || "General Enquiry";
    const message = (data.message || data.scopeDescription || "").trim();

    // Server-side validation
    if (!contactPerson || !institutionName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required institutional contact fields. Please provide your full name, school name, work email, and contact number." },
        { status: 400 }
      );
    }

    const enquiryId = `EDU-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    console.log("=========================================");
    console.log("=== NEW EDUONE INSTITUTIONAL ENQUIRY ===");
    console.log(`Enquiry ID: ${enquiryId}`);
    console.log(`Timestamp: ${timestamp}`);
    console.log(`Institution: ${institutionName}`);
    console.log(`Contact: ${contactPerson} (${phone} / ${email})`);
    console.log(`Service Required: ${serviceRequired}`);
    console.log(`Message: ${message}`);
    console.log("=========================================");

    // Optional: Forward to a webhook (Slack, Discord, Zapier, Make, Google Sheets) if configured
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            enquiryId,
            timestamp,
            institutionName,
            contactPerson,
            email,
            phone,
            serviceRequired,
            message,
            raw: data,
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook notification dispatch error:", webhookErr);
      }
    }

    // Optional: Send email via Resend API if API key is configured in Vercel
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "cyber.itsolutions@gmail.com";
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "EDUONE Portal <onboarding@resend.dev>",
            to: [notificationEmail],
            subject: `[New RFP] ${institutionName} - ${contactPerson}`,
            text: `New Institutional Enquiry Received:\n\nTracking ID: ${enquiryId}\nTime: ${timestamp}\nSchool / Institution: ${institutionName}\nContact Person: ${contactPerson}\nPhone: ${phone}\nWork Email: ${email}\nService Category: ${serviceRequired}\nProject / Procurement Requirements:\n${message || "N/A"}`,
          }),
        });
      } catch (emailErr) {
        console.error("Email notification dispatch error:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry logged successfully. Institutional team will review.",
        enquiryId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry processing error:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please try again or contact us directly at cyber.itsolutions@gmail.com." },
      { status: 500 }
    );
  }
}
