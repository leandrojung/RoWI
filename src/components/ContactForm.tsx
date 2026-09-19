"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import Icon from "./Icon";
import LiquidButton from "./ui/LiquidButton";
import { siteConfig } from "@/lib/site-config";

const anliegenOptions = [
  "Reparatur",
  "Wartung",
  "Sofortdienst",
  "Ersatzteile",
  "Schulung",
  "An- und Verkauf",
  "Sonstiges",
];

type Status = "idle" | "submitting" | "success" | "mailto" | "error";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  anliegen: string;
  message: string;
};

function buildMailtoHref({ name, email, phone, anliegen, message }: FormValues) {
  const body = [
    `Anliegen: ${anliegen}`,
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone || "—"}`,
    "",
    message,
  ].join("\n");

  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `Anfrage: ${anliegen} — ${name}`
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mailtoHref, setMailtoHref] = useState("");
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

    const values: FormValues = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      anliegen: String(data.get("anliegen") || "Sonstiges"),
      message: String(data.get("message") || "").trim(),
    };

    const nextErrors: Record<string, string> = {};
    if (!values.name) nextErrors.name = "Bitte geben Sie Ihren Namen an.";
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    }
    if (!values.message) nextErrors.message = "Bitte beschreiben Sie kurz Ihr Anliegen.";
    if (!data.get("privacy")) nextErrors.privacy = "Bitte bestätigen Sie den Hinweis zum Datenschutz.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, privacy: "on" }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const result = await response.json().catch(() => ({}));
      if (result?.fallback === "mailto") {
        // Serverseitiger Versand nicht verfügbar: vorausgefüllten E-Mail-Entwurf öffnen,
        // damit die Anfrage trotzdem ankommt.
        const href = buildMailtoHref(values);
        setMailtoHref(href);
        setStatus("mailto");
        window.location.href = href;
        return;
      }

      setStatus("error");
    } catch {
      const href = buildMailtoHref(values);
      setMailtoHref(href);
      setStatus("mailto");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-border bg-white p-7 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Icon name="check" size={28} strokeWidth={2.4} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink">Anfrage ist raus</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Wir melden uns schnellstmöglich zurück. Eilt es? Dann rufen Sie einfach direkt an.
        </p>
        <a
          href={siteConfig.contact.phoneHref}
          className="mt-5 inline-flex items-center gap-2 font-bold text-accent hover:underline"
        >
          <Icon name="phone" size={18} />
          {siteConfig.contact.phoneDisplay}
        </a>
      </div>
    );
  }

  if (status === "mailto") {
    return (
      <div role="status" className="rounded-xl border border-border bg-white p-7">
        <h3 className="text-lg font-bold text-ink">E-Mail-Programm geöffnet</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Ihre Angaben wurden in eine E-Mail übernommen. Bitte senden Sie diese ab — dann ist Ihre Anfrage bei
          uns. Falls sich nichts geöffnet hat:
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <LiquidButton
            href={mailtoHref}
            rounded={8}
            padding="12px 20px"
            blobSize={58}
            className="text-sm"
          >
            <Icon name="mail" size={16} />
            E-Mail erneut öffnen
          </LiquidButton>
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center justify-center gap-2 rounded-lg border-2 border-ink px-5 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-white"
          >
            <Icon name="phone" size={16} />
            Lieber anrufen
          </a>
        </div>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 text-ink transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Bitte freilassen</label>
        <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-sm font-semibold text-ink">
            Name <span aria-hidden="true" className="text-accent">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id={`${formId}-name-error`} role="alert" className="mt-1.5 text-sm font-medium text-accent">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className="block text-sm font-semibold text-ink">
            Telefonnummer
          </label>
          <input id={`${formId}-phone`} name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className="block text-sm font-semibold text-ink">
          E-Mail <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          className={fieldClass}
        />
        {errors.email && (
          <p id={`${formId}-email-error`} role="alert" className="mt-1.5 text-sm font-medium text-accent">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-anliegen`} className="block text-sm font-semibold text-ink">
          Anliegen
        </label>
        <select id={`${formId}-anliegen`} name="anliegen" defaultValue={anliegenOptions[0]} className={fieldClass}>
          {anliegenOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="block text-sm font-semibold text-ink">
          Nachricht <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
          placeholder="Maschinentyp, Baujahr und was genau passiert ist"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className={fieldClass}
        />
        {errors.message && (
          <p id={`${formId}-message-error`} role="alert" className="mt-1.5 text-sm font-medium text-accent">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
          <input
            name="privacy"
            type="checkbox"
            required
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? `${formId}-privacy-error` : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-border accent-[color:var(--color-accent)]"
          />
          <span>
            Ich habe die{" "}
            <Link href="/datenschutz" className="underline hover:text-accent">
              Datenschutzhinweise
            </Link>{" "}
            gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.{" "}
            <span aria-hidden="true" className="text-accent">*</span>
          </span>
        </label>
        {errors.privacy && (
          <p id={`${formId}-privacy-error`} role="alert" className="mt-1.5 text-sm font-medium text-accent">
            {errors.privacy}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-accent/10 p-4 text-sm font-medium text-accent">
          Der Versand hat nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns an unter{" "}
          {siteConfig.contact.phoneDisplay}.
        </p>
      )}

      <LiquidButton
        as="button"
        type="submit"
        disabled={status === "submitting"}
        rounded={12}
        padding="16px 24px"
        blobSize={76}
        className="w-full text-base"
      >
        {status === "submitting" ? (
          "Wird gesendet…"
        ) : (
          <>
            <Icon name="mail" size={20} />
            Anfrage absenden
          </>
        )}
      </LiquidButton>
    </form>
  );
}
