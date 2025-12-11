import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactRequest = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;
    const { name, email, message } = body;

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
      subject: "New contact form submission",
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
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

