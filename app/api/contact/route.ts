import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

// Contact form endpoint. Each message is emailed to omoniyi@tosyntra.com
// through Namecheap Private Email's SMTP server, with the visitor set as
// Reply-To so you can answer straight from your inbox.
//
// Set in Vercel > Project > Settings > Environment Variables:
//   SMTP_PASSWORD  the password of the omoniyi@tosyntra.com mailbox (required)
//   SMTP_USER      defaults to omoniyi@tosyntra.com
//   SMTP_HOST      defaults to mail.privateemail.com
//   SMTP_PORT      defaults to 465
//   CONTACT_TO     defaults to omoniyi@tosyntra.com

export const runtime = "nodejs";

const topics = [
  "Hiring a GTM engineer",
  "GTM engineering project",
  "Automation or AI agent",
  "Outbound setup",
  "Analytics or dashboards",
  "Partnership",
  "Something else",
];

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "The form data could not be read. Please try again." }, { status: 400 });
  }

  // Honeypot: real people never fill this hidden field
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name, 120).replace(/[\r\n]+/g, " "),
    email: clean(body.email, 200),
    company: clean(body.company, 160).replace(/[\r\n]+/g, " "),
    topic: topics.includes(clean(body.topic, 80)) ? clean(body.topic, 80) : "Something else",
    message: clean(body.message, 5000),
  };

  if (!lead.name || !lead.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ error: "Add your name, a valid email address and a message." }, { status: 422 });
  }

  const user = process.env.SMTP_USER || site.email;
  const pass = process.env.SMTP_PASSWORD;
  if (!pass) {
    return NextResponse.json({ error: "not-configured" }, { status: 503 });
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "mail.privateemail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Company", lead.company || "Not given"],
    ["Topic", lead.topic],
  ];

  try {
    await transporter.sendMail({
      from: `"Tosyntra website" <${user}>`,
      to: process.env.CONTACT_TO || site.email,
      replyTo: `"${lead.name.replace(/"/g, "")}" <${lead.email}>`,
      subject: `New enquiry: ${lead.topic} from ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${lead.message}\n\nSent from the contact form on ${site.url}`,
      html: `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">${rows
        .map(([k, v]) => `<tr><td style="color:#5d6e67">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
        .join("")}</table><p style="font-family:sans-serif;font-size:15px;white-space:pre-wrap">${escapeHtml(
        lead.message,
      )}</p><p style="font-family:sans-serif;font-size:12px;color:#5d6e67">Sent from the contact form on ${site.url}. Reply to this email to answer ${escapeHtml(
        lead.name,
      )} directly.</p>`,
    });
  } catch {
    return NextResponse.json({ error: "not-delivered" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
