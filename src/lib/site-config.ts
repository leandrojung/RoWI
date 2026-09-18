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
    phone: "+49 2867 2319951",
    phoneDisplay: "+49 (0)2867 / 231 99 51",
    phoneHref: "tel:+4928672319951",
    fax: "+49 2867 2319964",
    faxDisplay: "+49 (0)2867 / 231 99 64",
    email: "info@rowi-maschinenservice.de",
    // [TODO] Aktualität mit Robert bestätigen. Eignet sich laut Vorgabe ggf. auch als WhatsApp-Nummer.
    serviceHotline: "0173 3082859",
    serviceHotlineHref: "tel:+491733082859",
  },

  vatId: "DE 240411078",

  openingHours: {
    label: "Montag bis Samstag, 8:00–18:00 Uhr",
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
    // Bis zur Bestätigung wird im Schema Markup bewusst kein reviewCount ausgegeben,
    // da AggregateRating ohne bestätigte Anzahl nicht korrekt ausgezeichnet werden darf.
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
    title: "Über 20 Jahre Branchenerfahrung",
    description:
      "Seit 2001 im Kundendienst für Steinbearbeitungsmaschinen unterwegs, seit 2012 selbstständig mit rowi Maschinenservice.",
  },
  {
    title: "Ausgebildeter Industriemechaniker",
    description:
      "Fachrichtung Betriebstechnik — fundiertes technisches Verständnis für mechanische, pneumatische und elektronische Baugruppen.",
  },
  {
    title: "Spezialist statt Generalist",
    description:
      "Kein Maschinenservice für alles, sondern Fokus auf Steinbearbeitungsmaschinen — Service für zahlreiche namhafte Hersteller aus einer Hand.",
  },
  {
    title: "5,0 Sterne bei Google",
    description: "Durchgehend zufriedene Kunden aus der Steinindustrie bewerten die Zusammenarbeit mit Bestnote.",
  },
  {
    title: "Alles aus einer Hand",
    description:
      "Reparatur, Wartung, Ersatzteile, Schulung sowie An- und Verkauf — ein Ansprechpartner für den gesamten Maschinenlebenszyklus.",
  },
];

export const targetAudience = [
  "Steinmetze",
  "Bildhauer",
  "natursteinverarbeitende Betriebe",
  "Baumärkte",
];

export const manufacturers = [
  "Löffler",
  "Kolb",
  "M. Kolb",
  "Denver",
  "Comandulli",
  "Thibaut",
  "Steup",
  "Fickert & Winterling",
  "Spielvogel",
  "EuroMasiv",
  "Schmidt & Exner",
  "Burkhardt",
  "Hensel",
  "Schlatter",
  "Marmo Meccanica",
  "Seitz Pumpen",
  "Eich Wasseraufbereitung",
  "Martini Aeroimpianti",
];

export const processSteps = [
  {
    step: "1",
    title: "Anfrage stellen",
    description: "Sie schildern uns Ihr Anliegen — telefonisch, per E-Mail oder über das Kontaktformular.",
  },
  {
    step: "2",
    title: "Diagnose & Rückmeldung",
    description: "Wir klären den Sachverhalt, geben eine erste Einschätzung und stimmen das weitere Vorgehen ab.",
  },
  {
    step: "3",
    title: "Termin & Einsatz",
    description: "Vor-Ort-Einsatz in Heiden/Münsterland oder deutschlandweit, je nach Aufwand und Dringlichkeit.",
  },
  {
    step: "4",
    title: "Abschluss per Montagezettel",
    description: "Nach getaner Arbeit erhalten Sie einen unterschriebenen Montagezettel als transparente Abrechnungsgrundlage.",
  },
];

export const navigationMain = [
  { label: "Startseite", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  {
    label: "Leistungen",
    href: "/leistungen",
  },
  { label: "Maschinen & Hersteller", href: "/maschinen-hersteller" },
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
