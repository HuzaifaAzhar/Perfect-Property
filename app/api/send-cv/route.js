import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject") || "General Enquiry";
    const message = formData.get("message");
    const file = formData.get("cv"); // may be null

    let attachments = [];

    // ✅ Only process CV if it exists
    if (file && typeof file === "object" && "arrayBuffer" in file) {
      const buffer = Buffer.from(await file.arrayBuffer());

      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.ZOHO_SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email || undefined,
      subject: attachments.length
        ? `New CV Submission — ${subject}`
        : `New Contact Enquiry`,
      html: `
        <h2>${attachments.length ? "New CV Submission" : "New Contact Enquiry"}</h2>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
      attachments,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Zoho SMTP Error:", error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
