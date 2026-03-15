import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  besttimetocall: string;
  service?: string;
  message: string;
}

function createTransporter() {
  // For localhost sendmail development
  if (
    process.env.NODE_ENV === "development" &&
    process.env.MAIL_HOST === "localhost"
  ) {
    return nodemailer.createTransport({
      host: process.env.MAIL_HOST || "localhost",
      port: parseInt(process.env.MAIL_PORT || "25"),
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  // Production SMTP configuration
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const transporter = createTransporter();

  const recipients = process.env.CONTACT_EMAIL_TO || "colinm@vos.live";

  const htmlBody = `
    <h2>New Contact Form Submission — Suburban Construction</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>City</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.city}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>State</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.state}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Zip</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.zip}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Best Time to Call</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.besttimetocall}</td></tr>
      ${data.service ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Service Interest</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.service}</td></tr>` : ""}
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.message.replace(/\n/g, "<br/>")}</td></tr>
    </table>
  `;

  const fromEmail =
    process.env.MAIL_FROM ||
    process.env.SMTP_FROM ||
    `"Suburban Construction Website" <${process.env.SMTP_USER || "noreply@suburban-construction.local"}>`;

  await transporter.sendMail({
    from: fromEmail,
    to: recipients,
    replyTo: data.email,
    subject: `New website contact message from ${data.name}`,
    html: htmlBody,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
City: ${data.city}
State: ${data.state}
Zip: ${data.zip}
Best Time to Call: ${data.besttimetocall}
${data.service ? `Service Interest: ${data.service}` : ""}
Message: ${data.message}
    `,
  });
}
