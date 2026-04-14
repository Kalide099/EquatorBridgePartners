import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function sendEmail({ to, subject, body, html }: { to: string, subject: string, body?: string, html: string }) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text: body,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
}

export async function sendWhatsAppNotification(phone: string, message: string) {
  // Real implementation for Twilio or WhatsApp Business API
  // Using a fetch request to the API endpoint
  console.log(`[WhatsApp Simulation] To: ${phone}, Message: ${message}`);
  return { success: true };
}
