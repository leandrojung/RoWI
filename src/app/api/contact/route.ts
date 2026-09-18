import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site-config";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  anliegen?: string;
  message?: string;
  privacy?: string;
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
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message || !payload.privacy) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "E-Mail-Adresse ist ungültig." }, { status: 400 });
  }
  if (message.length > 5000 || name.length > 200) {
    return NextResponse.json({ error: "Eingabe zu lang." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO } = process.env;

  // Ohne hinterlegte SMTP-Zugangsdaten kann serverseitig nicht versendet werden.
  // Das Formular fällt dann im Browser auf einen vorausgefüllten E-Mail-Entwurf
  // zurück, damit keine Anfrage verloren geht.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    return NextResponse.json(
      { error: "mail_not_configured", fallback: "mailto" },
      { status: 503 }
    );
  }

  const anliegen = payload.anliegen?.trim() || "Sonstiges";
  const phone = payload.phone?.trim() || "—";

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 465),
    secure: Number(SMTP_PORT ?? 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  const lines = [
    `Anliegen: ${anliegen}`,
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone}`,
    "",
    message,
  ];

  try {
    await transporter.sendMail({
      from: `"${siteConfig.name} Website" <${SMTP_USER}>`,
      to: CONTACT_TO ?? siteConfig.contact.email,
      replyTo: `"${name}" <${email}>`,
      subject: `Website-Anfrage: ${anliegen} — ${name}`,
      text: lines.join("\n"),
      html: `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">
        <tr><td><strong>Anliegen</strong></td><td>${escapeHtml(anliegen)}</td></tr>
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>E-Mail</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Telefon</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td valign="top"><strong>Nachricht</strong></td><td>${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
      </table>`,
    });
  } catch (error) {
    console.error("Versand der Kontaktanfrage fehlgeschlagen:", error);
    return NextResponse.json({ error: "send_failed", fallback: "mailto" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
