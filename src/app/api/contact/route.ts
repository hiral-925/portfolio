import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email HTML template
    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #1d4ed8, #7c3aed); padding: 32px 40px; text-align: center; }
            .header h1 { color: #fff; margin: 0; font-size: 24px; font-weight: 700; }
            .header p  { color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px; }
            .body { padding: 36px 40px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #6b7280; font-weight: 600; margin-bottom: 4px; }
            .value { font-size: 15px; color: #111827; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 16px; }
            .message-value { white-space: pre-wrap; line-height: 1.7; }
            .footer { background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 20px 40px; text-align: center; font-size: 12px; color: #9ca3af; }
            .badge { display: inline-block; background: #dbeafe; color: #1d4ed8; border-radius: 999px; padding: 3px 12px; font-size: 12px; font-weight: 600; margin-bottom: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Portfolio Message</h1>
              <p>Someone reached out via your contact form</p>
            </div>
            <div class="body">
              <div class="badge">Portfolio Contact Form</div>

              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color:#1d4ed8;">${email}</a></div>
              </div>

              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject || '(No subject)'}</div>
              </div>

              <div class="field">
                <div class="label">Message</div>
                <div class="value message-value">${message}</div>
              </div>
            </div>
            <div class="footer">
              Sent from your portfolio at hiralthummar.dev &nbsp;·&nbsp; ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </div>
          </div>
        </body>
      </html>
    `;

    // Send mail to yourself
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `📬 New message from ${name}: ${subject || 'Portfolio Contact'}`,
      html: htmlBody,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Hiral Thummar" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 🙏`,
      html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8" /></head>
          <body style="font-family:'Segoe UI',Arial,sans-serif;background:#f4f4f4;margin:0;padding:0;">
            <div style="max-width:560px;margin:30px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
              <div style="background:linear-gradient(135deg,#1d4ed8,#7c3aed);padding:32px 40px;text-align:center;">
                <h1 style="color:#fff;margin:0;font-size:22px;">Hey ${name}! 👋</h1>
                <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:14px;">I received your message</p>
              </div>
              <div style="padding:32px 40px;color:#374151;font-size:15px;line-height:1.8;">
                <p>Thanks for getting in touch! I've received your message and will get back to you within <strong>24 hours</strong>.</p>
                <p>In the meantime, feel free to connect with me on <a href="https://linkedin.com/in/hiral-thummar-585643297/" style="color:#1d4ed8;">LinkedIn</a>.</p>
                <p style="margin-top:28px;">Best regards,<br/><strong>Hiral Thummar</strong><br/><span style="color:#6b7280;font-size:13px;">MERN Stack Developer</span></p>
              </div>
              <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 40px;text-align:center;font-size:12px;color:#9ca3af;">
                This is an automated reply. Please do not reply to this email.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
