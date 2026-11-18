import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic server-side validation
    if (!data.institutionName || !data.contactPerson || !data.phone || !data.email) {
      return NextResponse.json(
        { error: "Missing required institutional contact fields" },
        { status: 400 }
      );
    }

    // In production, integrate with email (e.g. Resend / SendGrid / Nodemailer)
    // or forward to school CRM / Slack webhook / Google Sheets.
    console.log("=== NEW EDUONE INSTITUTIONAL ENQUIRY ===");
    console.log("Time:", new Date().toISOString());
    console.log("Payload:", JSON.stringify(data, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry logged successfully. Institutional team will review.",
        enquiryId: `EDU-${Date.now().toString(36).toUpperCase()}`,
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
