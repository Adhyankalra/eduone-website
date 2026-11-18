import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Server-side validation
    if (!data.institutionName || !data.contactPerson || !data.phone || !data.email) {
      return NextResponse.json(
        { error: "Missing required institutional contact fields" },
        { status: 400 }
      );
    }

    const enquiryId = `EDU-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    console.log("=== NEW EDUONE INSTITUTIONAL ENQUIRY ===");
    console.log(`Enquiry ID: ${enquiryId}`);
    console.log(`Timestamp: ${timestamp}`);
    console.log("Payload:", JSON.stringify(data, null, 2));

    // Optional: Forward to a webhook (Slack, Discord, Zapier, Make, Google Sheets) if configured in Vercel
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            enquiryId,
            timestamp,
            ...data,
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook notification error:", webhookErr);
      }
    }

    // Optional: Send email via Resend API if API key and recipient are configured in Vercel
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "enquiry@eduone.in";
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
            subject: `[New RFP] ${data.institutionName} - ${data.contactPerson}`,
            text: `New Institutional Enquiry:\n\nID: ${enquiryId}\nInstitution: ${data.institutionName}\nContact: ${data.contactPerson} (${data.designation || "Staff"})\nPhone: ${data.phone}\nEmail: ${data.email}\nCity: ${data.city || "Delhi NCR"}\nServices: ${Array.isArray(data.services) ? data.services.join(", ") : data.selectedSolutions?.join(", ") || "General Enquiry"}\nRequirement: ${data.estimatedRequirement || data.scopeDescription || "N/A"}\nMessage: ${data.message || "N/A"}`,
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
      { error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
