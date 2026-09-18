"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";

const anliegenOptions = [
  "Reparatur",
  "Wartung",
  "Sofortdienst",
  "Ersatzteile",
  "Schulung",
  "An- und Verkauf",
  "Sonstiges",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: für Menschen unsichtbares Feld, das Formular-Bots häufig ausfüllen.
    if (data.get("website")) {
      setStatus("success");
      return;
    }

    const nextErrors: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const privacy = data.get("privacy");

    if (!name) nextErrors.name = "Bitte geben Sie Ihren Namen an.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    }
    if (!message) nextErrors.message = "Bitte beschreiben Sie kurz Ihr Anliegen.";
    if (!privacy) nextErrors.privacy = "Bitte bestätigen Sie den Hinweis zum Datenschutz.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!response.ok) throw new Error("Versand fehlgeschlagen");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-border bg-surface-muted p-6">
        <h3 className="text-lg font-semibold text-ink">Vielen Dank für Ihre Anfrage!</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Ihre Nachricht ist bei uns eingegangen. Wir melden uns schnellstmöglich bei Ihnen zurück. Bei
          dringenden Anliegen erreichen Sie uns auch telefonisch während unserer Öffnungszeiten.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby={`${formId}-privacy-note`}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Bitte freilassen</label>
        <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-sm font-semibold text-ink">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className="mt-1 w-full rounded-md border border-border px-3 py-2.5 text-ink focus:border-accent"
          />
          {errors.name && (
            <p id={`${formId}-name-error`} role="alert" className="mt-1 text-sm text-accent">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className="block text-sm font-semibold text-ink">
            Telefonnummer
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1 w-full rounded-md border border-border px-3 py-2.5 text-ink focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className="block text-sm font-semibold text-ink">
          E-Mail <span aria-hidden="true">*</span>
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          className="mt-1 w-full rounded-md border border-border px-3 py-2.5 text-ink focus:border-accent"
        />
        {errors.email && (
          <p id={`${formId}-email-error`} role="alert" className="mt-1 text-sm text-accent">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-anliegen`} className="block text-sm font-semibold text-ink">
          Anliegen
        </label>
        <select
          id={`${formId}-anliegen`}
          name="anliegen"
          defaultValue={anliegenOptions[0]}
          className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2.5 text-ink focus:border-accent"
        >
          {anliegenOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="block text-sm font-semibold text-ink">
          Nachricht <span aria-hidden="true">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className="mt-1 w-full rounded-md border border-border px-3 py-2.5 text-ink focus:border-accent"
        />
        {errors.message && (
          <p id={`${formId}-message-error`} role="alert" className="mt-1 text-sm text-accent">
            {errors.message}
          </p>
        )}
      </div>

      <div id={`${formId}-privacy-note`} className="text-sm text-ink-soft">
        Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Details dazu finden Sie in
        unserer{" "}
        <Link href="/datenschutz" className="underline hover:text-accent">
          Datenschutzerklärung
        </Link>
        .
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink">
          <input
            name="privacy"
            type="checkbox"
            required
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? `${formId}-privacy-error` : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-border text-accent focus-visible:outline focus-visible:outline-3 focus-visible:outline-accent"
          />
          <span>
            Ich habe die Hinweise zum Datenschutz zur Kenntnis genommen und bin mit der Verarbeitung meiner
            Angaben zur Bearbeitung meiner Anfrage einverstanden. <span aria-hidden="true">*</span>
          </span>
        </label>
        {errors.privacy && (
          <p id={`${formId}-privacy-error`} role="alert" className="mt-1 text-sm text-accent">
            {errors.privacy}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-accent">
          Beim Versand ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns
          telefonisch.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-white transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Wird gesendet…" : "Anfrage absenden"}
      </button>
    </form>
  );
}
