import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactRequest = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing email credentials in environment variables.");
      return NextResponse.json(
        { error: "Email is not configured on the server." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const recipient = process.env.CEO_EMAIL || process.env.EMAIL_USER;

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `New contact enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${
          phone
            ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>`
            : ""
        }
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}

