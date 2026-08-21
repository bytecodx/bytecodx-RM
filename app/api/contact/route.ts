import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, projectType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "bytecodx@gmail.com";

    // Resend Email Payload
    const emailData = {
      from: "ByteCodx Contact Form <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: email,
      subject: `🚀 New Project Request: ${name} ${company ? `(${company})` : ""}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background-color: #020407; color: #ffffff; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #0A0F1A; border: 1px solid #00BFFF; border-radius: 12px; padding: 24px; }
            h2 { color: #00BFFF; border-bottom: 1px solid #1A2535; padding-bottom: 12px; margin-top: 0; }
            .field { margin-bottom: 16px; }
            .label { font-size: 12px; color: #6B7A99; text-transform: uppercase; letter-spacing: 1px; }
            .value { font-size: 15px; color: #ffffff; font-weight: bold; margin-top: 4px; }
            .message-box { background: #1A2535; padding: 16px; border-radius: 8px; border-left: 4px solid #00FF88; margin-top: 16px; color: #94A3B8; line-height: 1.6; }
            .footer { font-size: 12px; color: #6B7A99; margin-top: 24px; text-center: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>ByteCodx@ai — New Project Request</h2>
            
            <div class="field">
              <div class="label">Client Name</div>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #00E5FF;">${email}</a></div>
            </div>

            ${company ? `
            <div class="field">
              <div class="label">Business / Company</div>
              <div class="value">${company}</div>
            </div>` : ""}

            ${phone ? `
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">${phone}</div>
            </div>` : ""}

            ${projectType ? `
            <div class="field">
              <div class="label">Project Type</div>
              <div class="value" style="color: #00FF88;">${projectType}</div>
            </div>` : ""}

            ${budget ? `
            <div class="field">
              <div class="label">Budget Range</div>
              <div class="value" style="color: #00FF88;">${budget}</div>
            </div>` : ""}

            <div class="field">
              <div class="label">Project Details / Message</div>
              <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
            </div>

            <div class="footer">
              Sent automatically from ByteCodx@ai website contact form
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    const resendResult = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API Error:", resendResult);
      return NextResponse.json(
        { error: resendResult.message || "Failed to send email via Resend." },
        { status: resendResponse.status }
      );
    }

    return NextResponse.json({ success: true, id: resendResult.id });
  } catch (error: any) {
    console.error("Contact Form Route Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
