// Zentrale Unternehmensdaten (NAP) und feste Kundendaten.
// Änderungen hier wirken sich auf die gesamte Website inkl. Schema Markup aus.

export const siteConfig = {
  name: "Rowi Maschinenservice",
  legalName: "Rowi Maschinenservice — Robert Wikarek",
  owner: "Robert Wikarek",
  claim: "Ihr Fachbetrieb für Steinbearbeitungsmaschinen",
  domain: "www.rowi-maschinenservice.de",
  url: "https://www.rowi-maschinenservice.de",

  address: {
    street: "Friesenstr. 30b",
    zip: "46359",
    city: "Heiden",
    region: "Nordrhein-Westfalen",
    country: "DE",
    countryName: "Deutschland",
  },

  // Ungefähre Geo-Koordinaten für Heiden (Friesenstraße), für LocalBusiness-Schema.
  // [TODO] Vor Live-Gang exakte Koordinaten über einen Geokodierungsdienst verifizieren.
  geo: {
    latitude: 51.8607,
    longitude: 6.9639,
  },

  contact: {
    // Hauptnummer für alle CTAs auf der Website
    phone: "+49 173 3082859",
    phoneDisplay: "0173 3082859",
    phoneHref: "tel:+491733082859",
    whatsappHref: "https://wa.me/491733082859",
    // Festnetz und Fax bleiben für Impressum und Kontaktseite erhalten
    landline: "+49 2867 2319951",
    landlineDisplay: "+49 (0)2867 / 231 99 51",
    landlineHref: "tel:+4928672319951",
    fax: "+49 2867 2319964",
    faxDisplay: "+49 (0)2867 / 231 99 64",
    email: "info@rowi-maschinenservice.de",
  },

  vatId: "DE 240411078",

  openingHours: {
    label: "Mo–Sa, 8–18 Uhr",
    labelLong: "Montag bis Samstag, 8:00–18:00 Uhr",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },

  links: {
    googleBusinessProfile: "https://share.google/Kn0QSnCAiTDoqaf8K",
    googleMaps:
      "https://www.google.com/maps?vet=10CAAQoqAOahcKEwi4xoKKm_iWAxUAAAAAHQAAAAAQBQ..i&client=safari&fvr=1&pvq=Cg0vZy8xMWZscnhjMDJnIgoKBHJvd2kQAhgD&lqi=CgRyb3dpSM6Alv7KrYCACFoKEAAYACIEcm93aZIBDG1hY2hpbmVfc2hvcA&cs=0&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KXcbNMC8X7hHMaQJdgX63_Mh&daddr=Friesenstraße+30b,+46359+Heiden",
    instagram: "https://www.instagram.com/rowi_maschinenservice/",
  },

  social: {
    instagramHandle: "rowi_maschinenservice",
  },

  rating: {
    value: 5.0,
    // [TODO] Anzahl der Google-Bewertungen ergänzen, sobald von Robert bestätigt.
    countKnown: false,
    count: null as number | null,
  },

  founding: {
    inIndustrySince: 2001,
    selfEmployedSince: 2012,
  },
};

export const usps = [
  {
    icon: "clock",
    title: "20+ Jahre Erfahrung",
    description: "Seit 2001 an Steinbearbeitungsmaschinen, seit 2012 selbstständig.",
  },
  {
    icon: "wrench",
    title: "Industriemechaniker",
    description: "Ausgebildet in Betriebstechnik — Mechanik, Pneumatik, Steuerung.",
  },
  {
    icon: "target",
    title: "Nur Steinbearbeitung",
    description: "Kein Allround-Service. Ein Fach, und das richtig.",
  },
  {
    icon: "star",
    title: "5,0 Sterne bei Google",
    description: "Kunden aus der Steinindustrie bewerten mit Bestnote.",
  },
  {
    icon: "layers",
    title: "Alles aus einer Hand",
    description: "Reparatur, Wartung, Ersatzteile, Schulung, An- und Verkauf.",
  },
];

export const targetAudience = [
  "Steinmetze",
  "Bildhauer",
  "natursteinverarbeitende Betriebe",
  "Baumärkte",
];

export const manufacturerGroups = [
  {
    category: "Sägen & Fräsen",
    icon: "saw",
    names: ["Löffler", "Kolb", "M. Kolb", "Thibaut", "Burkhardt"],
  },
  {
    category: "Poliermaschinen & Kantenbearbeitung",
    icon: "polish",
    names: ["Comandulli", "Marmo Meccanica", "Fickert & Winterling", "Denver"],
  },
  {
    category: "Anlagen & Handling",
    icon: "crane",
    names: ["Steup", "Spielvogel", "EuroMasiv", "Schmidt & Exner", "Hensel", "Schlatter"],
  },
  {
    category: "Wasser, Pumpen & Absaugung",
    icon: "water",
    names: ["Seitz Pumpen", "Eich Wasseraufbereitung", "Martini Aeroimpianti"],
  },
];

export const manufacturers = manufacturerGroups.flatMap((group) => group.names);

export const processSteps = [
  {
    step: "1",
    title: "Anruf oder Nachricht",
    description: "Sie schildern kurz, was los ist — Telefon, WhatsApp oder Formular.",
  },
  {
    step: "2",
    title: "Einschätzung",
    description: "Wir grenzen die Ursache ein und stimmen das Vorgehen ab.",
  },
  {
    step: "3",
    title: "Einsatz",
    description: "Werkstatt in Heiden oder mobil bei Ihnen — deutschlandweit.",
  },
  {
    step: "4",
    title: "Montagezettel",
    description: "Unterschrieben, transparent, nachvollziehbar abgerechnet.",
  },
];

export const navigationMain = [
  { label: "Startseite", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Werkstatt", href: "/werkstatt" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Hersteller", href: "/maschinen-hersteller" },
  { label: "Einsatzgebiet", href: "/einsatzgebiet" },
  { label: "Aktuelles", href: "/aktuelles" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerLegalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Cookie-Einstellungen", href: "/cookie-einstellungen" },
];

export const footerServiceLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Bewertungen", href: "/bewertungen" },
  { label: "Einsatzgebiet", href: "/einsatzgebiet" },
  { label: "Kontakt", href: "/kontakt" },
];
