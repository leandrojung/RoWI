# Rowi Maschinenservice — Website

Vollständige Website für Rowi Maschinenservice (Inhaber Robert Wikarek), Fachbetrieb für
Service, Wartung und Verkauf von Steinbearbeitungsmaschinen in Heiden (Münsterland),
deutschlandweit im Einsatz.

Umgesetzt mit **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Projekt lokal starten

```bash
npm install
npm run dev
```

Die Seite läuft dann unter `http://localhost:3000`.

```bash
npm run build   # Produktions-Build (inkl. Typecheck)
npm run start   # Produktions-Server nach dem Build
npm run lint    # ESLint
```

## Struktur

- `src/app/*` – Seiten (App Router), eine Route pro URL aus der Sitemap-Vorgabe.
  `leistungen/[slug]` und `aktuelles/[slug]` sind dynamische Routen mit
  `generateStaticParams`, die zur Build-Zeit als statische Seiten erzeugt werden
  (jede Leistung und jeder Blogartikel bekommt dadurch trotzdem eine eigene,
  einzeln optimierte URL, H1 und Meta-Daten).
- `src/components/*` – wiederverwendbare UI-Bausteine (Header, Footer, Formular,
  Cookie-Consent-Tool, FAQ-Akkordeon usw.).
- `src/lib/*` – zentrale Inhalte/Daten: `site-config.ts` (NAP-Daten, USPs, Hersteller),
  `services-data.ts` (die 8 Leistungsseiten), `faq-data.ts`, `blog-data.ts`, `schema.ts`
  (JSON-LD-Generatoren). Änderungen an Texten/Kontaktdaten werden hier zentral gepflegt.

## Wichtiger Hinweis zum Kontaktformular

Das Kontaktformular (`src/components/ContactForm.tsx` → `src/app/api/contact/route.ts`)
validiert Anfragen und zeigt eine Erfolgsmeldung, **verschickt aber aktuell keine
E-Mail**, da noch kein Versanddienst angebunden ist. Vor Live-Gang muss in
`src/app/api/contact/route.ts` ein echter Versandweg ergänzt werden (z. B. SMTP über
das Hostinger-Postfach oder ein Dienst wie Resend/Postmark). Siehe TODO-Kommentar
in der Datei.

---

## Abschluss-Checkliste vor Live-Gang

### Rechtlich verbindlich zu klären (siehe auch Prompt-Vorgabe „NOCH OFFEN")

- [ ] **Hosting-Anbieter final bestätigen** und in der Datenschutzerklärung
      (`src/app/datenschutz/page.tsx`, Abschnitt 4) eintragen, inkl. Hinweis auf den
      Auftragsverarbeitungsvertrag.
- [ ] **E-Mail-Versand für das Kontaktformular anbinden** (siehe oben) und den
      eingesetzten Dienst als Auftragsverarbeiter in der Datenschutzerklärung
      (Abschnitt 9) ergänzen, falls ein externer Dienst genutzt wird.
- [ ] **Rechtsform des Unternehmens** bestätigen (aktuell „Einzelunternehmen" als
      Annahme im Impressum hinterlegt, `src/app/impressum/page.tsx`).
- [ ] **Handelsregisternummer** ergänzen, falls vorhanden (Impressum).
- [ ] **Mitarbeiterzahl** klären — relevant für die gesetzliche Pflicht zur Bestellung
      eines Datenschutzbeauftragten (Datenschutzerklärung, Abschnitt 12).
- [ ] **Google Analytics / weiteres Tracking:** Aktuell ist auf der Website **kein**
      Tracking eingebunden und die Datenschutzerklärung beschreibt entsprechend nur
      technisch notwendige Cookies. Falls künftig Analytics eingesetzt werden soll,
      müssen vorher die Cookie-Kategorie „Statistik" im Consent-Tool
      (`src/components/cookie-consent/`) sowie ein neuer Abschnitt in der
      Datenschutzerklärung ergänzt werden — **nicht ohne vorherige Einwilligung aktivieren.**
- [ ] Beide Muster-Hinweise (Impressum & Datenschutzerklärung) beachten: Vor
      Veröffentlichung sollte eine rechtliche Prüfung der Texte erfolgen.

### Inhaltlich von Robert Wikarek zu bestätigen

- [ ] **Stundensatz / Preise:** Aktuell steht überall „Preise auf Anfrage" (kein
      Stundensatz veröffentlicht), da die 74 €/Std. aus den AGB nicht datiert und
      damit nicht sicher aktuell sind. Sobald bestätigt, kann ein Preis ergänzt werden.
- [ ] **Service-Hotline 0173 3082859:** Aktualität bestätigen; ggf. als WhatsApp-Nummer
      einbinden (aktuell nirgends auf der Seite verwendet, siehe `site-config.ts`).
- [ ] **USPs** (`src/lib/site-config.ts`, `usps`) gegenlesen/bestätigen.
- [ ] **Schwerpunktregionen** innerhalb „deutschlandweit" ergänzen, falls vorhanden
      (`src/app/einsatzgebiet/page.tsx`).
- [ ] **Zertifikate/Qualifikationen** über die Industriemechaniker-Ausbildung hinaus
      ergänzen, falls vorhanden.
- [ ] **Weitere Mitarbeiter** neben Robert Wikarek? Aktuell wird er als alleiniger
      Ansprechpartner dargestellt.
- [ ] **Anzahl der Google-Bewertungen** ergänzen (aktuell nur „5,0 Sterne" ohne Anzahl,
      auch bewusst ohne Anzahl im JSON-LD-Schema ausgegeben, siehe `src/lib/schema.ts`).
- [ ] **Echte Kundenstimmen** für die Bewertungen-Seite (`src/app/bewertungen/page.tsx`)
      — aktuell als klar gekennzeichnete Platzhalter hinterlegt.
- [ ] **Echte Fotos** von Werkstatt/Maschinen/Robert Wikarek bei der Arbeit einsetzen —
      aktuell mit konkret formulierten Platzhalter-Bildbeschreibungen vorbereitet
      (z. B. im Hero der Startseite, `src/app/page.tsx`).
- [ ] **Echtes Firmenlogo** einbinden (`public/logo.svg` ist aktuell eine einfache
      Platzhalter-Nachbildung der beschriebenen Wortmarke).
- [ ] Geo-Koordinaten in `src/lib/site-config.ts` (`geo`) vor Live-Gang exakt
      verifizieren (aktuell eine Näherung für Heiden).

### Technisch vor Live-Gang

- [ ] Produktivdomain in `siteConfig.url` bestätigen (aktuell `www.rowi-maschinenservice.de`).
- [ ] Kontaktformular-Versand anbinden (siehe oben).
- [ ] Google Search Console mit der `sitemap.xml` verbinden.
