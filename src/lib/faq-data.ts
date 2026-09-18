export type FaqCategory = {
  category: string;
  items: { question: string; answer: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Unternehmen",
    items: [
      {
        question: "Was macht Rowi Maschinenservice?",
        answer:
          "Rowi Maschinenservice ist ein Fachbetrieb für Service, Wartung, Reparatur und Verkauf von Steinbearbeitungsmaschinen. Inhaber Robert Wikarek ist ausgebildeter Industriemechaniker und seit 2001 in der Branche tätig, seit 2012 selbstständig.",
      },
      {
        question: "Ist Rowi Maschinenservice auf eine bestimmte Branche spezialisiert?",
        answer:
          "Ja, der Fokus liegt ausschließlich auf Steinbearbeitungsmaschinen. Zielgruppe sind Steinmetze, Bildhauer, natursteinverarbeitende Betriebe und Baumärkte.",
      },
      {
        question: "Wer ist mein Ansprechpartner?",
        answer:
          "Robert Wikarek ist Ihr direkter Ansprechpartner für alle Anliegen rund um Ihre Steinbearbeitungsmaschine.",
      },
    ],
  },
  {
    category: "Leistungen",
    items: [
      {
        question: "Welche Leistungen bietet Rowi Maschinenservice an?",
        answer:
          "Das Angebot umfasst Reparatur, Wartung, Sofortdienst bei Eilfällen, Maschinenaufstellung und Inbetriebnahme (inkl. Umstellung), Fehlersuche, Ersatzteilbeschaffung inklusive Lieferung und Einbau, CNC-Software-Schulungen sowie An- und Verkauf von Neu- und Gebrauchtmaschinen.",
      },
      {
        question: "Bieten Sie auch eine Online-Buchung an?",
        answer:
          "Nein, aktuell erfolgt die Terminvereinbarung persönlich per Telefon, E-Mail oder über das Kontaktformular.",
      },
    ],
  },
  {
    category: "Hersteller & Marken",
    items: [
      {
        question: "Für welche Hersteller bieten Sie Service an?",
        answer:
          "Service wird unter anderem für Maschinen von Löffler, Kolb, M. Kolb, Denver, Comandulli, Thibaut, Steup, Fickert & Winterling, Spielvogel, EuroMasiv, Schmidt & Exner, Burkhardt, Hensel, Schlatter, Marmo Meccanica, Seitz Pumpen, Eich Wasseraufbereitung und Martini Aeroimpianti angeboten. Service für weitere Hersteller ist auf Anfrage möglich.",
      },
      {
        question: "Was, wenn mein Maschinenhersteller nicht aufgeführt ist?",
        answer:
          "Einfach anfragen — Service für weitere Hersteller ist auf Anfrage möglich, auch wenn die Marke nicht in der Liste steht.",
      },
    ],
  },
  {
    category: "Preise",
    items: [
      {
        question: "Was kostet ein Service-Einsatz?",
        answer:
          "Aktuell gilt: Preise auf Anfrage. Die Abrechnung erfolgt transparent nach unterschriebenem Montagezettel, sodass für Sie jederzeit nachvollziehbar ist, welche Leistungen erbracht wurden.",
      },
      {
        question: "Warum steht kein fester Stundensatz auf der Website?",
        answer:
          "Da sich Preise ändern können und aktuell keine bestätigte, aktuelle Angabe vorliegt, wird bewusst auf einen festen Stundensatz verzichtet. Konkrete Preise erhalten Sie auf Anfrage.",
      },
    ],
  },
  {
    category: "Termine & Öffnungszeiten",
    items: [
      {
        question: "Wie sind die Öffnungszeiten?",
        answer: "Montag bis Samstag, 8:00–18:00 Uhr.",
      },
      {
        question: "Wie schnell bekomme ich einen Termin?",
        answer:
          "Das hängt von Art des Anliegens und aktueller Auslastung ab. Bei akuten Ausfällen steht der Sofortdienst mit priorisierter Bearbeitung zur Verfügung.",
      },
    ],
  },
  {
    category: "Einsatzgebiet",
    items: [
      {
        question: "Arbeitet Rowi Maschinenservice nur in Heiden?",
        answer:
          "Nein. Die Werkstatt und der Firmensitz befinden sich in Heiden im Münsterland, der mobile Service erfolgt jedoch deutschlandweit.",
      },
      {
        question: "Bis wohin fahren Sie für einen Vor-Ort-Einsatz?",
        answer:
          "Grundsätzlich deutschlandweit. Sprechen Sie uns zu Ihrem konkreten Standort und der Dringlichkeit an, dann wird der Einsatz entsprechend geplant.",
      },
    ],
  },
  {
    category: "Kontakt & Ablauf",
    items: [
      {
        question: "Wie läuft eine Beauftragung ab?",
        answer:
          "Nach Ihrer Anfrage folgt eine Diagnose bzw. Rückmeldung, anschließend die Terminvereinbarung und der Einsatz. Zum Abschluss erhalten Sie einen unterschriebenen Montagezettel als transparente Abrechnungsgrundlage.",
      },
      {
        question: "Was ist ein Montagezettel und wofür wird er benötigt?",
        answer:
          "Der Montagezettel dokumentiert die erbrachten Leistungen und wird nach Abschluss des Einsatzes von Ihnen unterschrieben. Er dient als transparente und nachvollziehbare Grundlage für die Abrechnung.",
      },
      {
        question: "Wie erreiche ich Rowi Maschinenservice am schnellsten?",
        answer:
          "Am schnellsten telefonisch unter +49 (0)2867 / 231 99 51 während der Öffnungszeiten. Alternativ per E-Mail an info@rowi-maschinenservice.de oder über das Kontaktformular.",
      },
    ],
  },
];

export const allFaqItems = faqCategories.flatMap((category) => category.items);
