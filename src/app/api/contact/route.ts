import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  anliegen?: string;
  message?: string;
  privacy?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (!payload.name || !payload.email || !payload.message || !payload.privacy) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }

  // [TODO vor Live-Gang] Es ist noch kein E-Mail-Versanddienst angebunden.
  // Diese Route validiert die Anfrage, versendet sie aber aktuell nicht weiter.
  // Vor dem Live-Gang muss hier ein Versandweg ergänzt werden, z. B.:
  // - SMTP-Versand über das Hostinger-Postfach info@rowi-maschinenservice.de, oder
  // - ein Formular-/Mail-Dienst wie Resend, Postmark oder Formspree.
  // Zugangsdaten dafür gehören in Umgebungsvariablen, niemals in den Quellcode.
  console.info("Kontaktanfrage empfangen (noch ohne E-Mail-Versand):", {
    name: payload.name,
    email: payload.email,
    anliegen: payload.anliegen,
  });

  return NextResponse.json({ ok: true });
}
