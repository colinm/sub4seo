import nodemailer from "nodemailer";

export interface ReferralFormData {
  // Referring person
  referrerName: string;
  referrerPhone: string;
  referrerEmail: string;
  // Referred person
  refereeName: string;
  refereePhone: string;
  refereeEmail: string;
  // Additional info
  message: string;
}

function createTransporter() {
  if (process.env.MAIL_HOST === "localhost") {
    return nodemailer.createTransport({
      host: "localhost",
      port: parseInt(process.env.MAIL_PORT || "25"),
      secure: false,
      tls: { rejectUnauthorized: false },
    });
  }

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

export async function sendReferralEmail(data: ReferralFormData): Promise<void> {
  const transporter = createTransporter();
  const recipients = process.env.CONTACT_EMAIL_TO || "colinm@vos.live";

  const fromEmail =
    process.env.MAIL_FROM ||
    process.env.SMTP_FROM ||
    `"Suburban Construction Website" <${process.env.SMTP_USER || "noreply@suburban-construction.local"}>`;

  const htmlBody = `
    <h2>New Referral Submission — Suburban Construction</h2>

    <h3 style="color:#2a2e40;">Referring Person</h3>
    <table style="border-collapse: collapse; width: 100%; margin-bottom: 16px;">
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.referrerName}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${data.referrerPhone}">${data.referrerPhone}</a></td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${data.referrerEmail}">${data.referrerEmail}</a></td></tr>
    </table>

    <h3 style="color:#2a2e40;">Referred Person</h3>
    <table style="border-collapse: collapse; width: 100%; margin-bottom: 16px;">
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.refereeName}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${data.refereePhone}">${data.refereePhone}</a></td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${data.refereeEmail}">${data.refereeEmail}</a></td></tr>
    </table>

    <h3 style="color:#2a2e40;">What They May Need</h3>
    <p style="padding: 8px; border: 1px solid #ddd;">${data.message.replace(/\n/g, "<br/>")}</p>
  `;

  const textBody = `
New Referral Submission — Suburban Construction

REFERRING PERSON
Name: ${data.referrerName}
Phone: ${data.referrerPhone}
Email: ${data.referrerEmail}

REFERRED PERSON
Name: ${data.refereeName}
Phone: ${data.refereePhone}
Email: ${data.refereeEmail}

WHAT THEY MAY NEED
${data.message}
  `;

  await transporter.sendMail({
    from: fromEmail,
    to: recipients,
    replyTo: data.referrerEmail,
    subject: `New referral from ${data.referrerName} — ${data.refereeName}`,
    html: htmlBody,
    text: textBody,
  });
}
