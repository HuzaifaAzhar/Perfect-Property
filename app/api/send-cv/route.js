import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const file = formData.get("cv");

    if (!file) {
      return Response.json(
        { error: "CV file is required" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com", // ✅ FREE ZOHO SMTP
      port: 587,
      secure: false, // SSL
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: `"CV Submission" <${process.env.ZOHO_SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New CV Submission — ${subject}`,
      html: `
        <h2>New CV Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
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
