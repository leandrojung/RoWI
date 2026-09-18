import type { IconName } from "@/components/Icon";

export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  navLabel: string;
  /** Ein Halbsatz für Navigation und Karten */
  teaser: string;
  icon: IconName;
  /** Optionales Hervorhebungs-Label auf der Karte */
  badge?: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** Drei Kernaussagen statt langer Fließtextabsätze */
  highlights: { title: string; text: string }[];
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "reparatur",
    navLabel: "Reparatur",
    teaser: "Maschine defekt? Schnell wieder laufen.",
    icon: "wrench",
    h1: "Reparatur von Steinbearbeitungsmaschinen",
    metaTitle: "Reparatur von Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Fachgerechte Reparatur von Steinbearbeitungsmaschinen für Steinmetze und Natursteinbetriebe. Heiden und deutschlandweit. Jetzt anfragen.",
    intro: "Maschinenausfall heißt Produktionsstillstand. Wir bringen Ihre Maschine schnell und fachgerecht wieder zum Laufen.",
    highlights: [
      {
        title: "Jede Baugruppe",
        text: "Antrieb, Führung, Steuerung, Kühlung und Wasseraufbereitung — aus über 20 Jahren Praxis.",
      },
      {
        title: "Erst Diagnose, dann Rechnung",
        text: "Sie erfahren vorab, was zu tun ist und was es kostet. Keine Überraschungen.",
      },
      {
        title: "Werkstatt oder vor Ort",
        text: "In Heiden oder mobil in Ihrem Betrieb — je nachdem, was schneller geht.",
      },
    ],
    benefits: [
      "Ausgebildeter Industriemechaniker, kein Aushilfspersonal",
      "Erfahrung mit über 18 Herstellern",
      "Original- oder günstigere Alternativteile — Ihre Wahl",
      "Abschluss mit unterschriebenem Montagezettel",
    ],
    process: [
      { title: "Fehler melden", description: "Kurz schildern, was die Maschine macht — oder eben nicht." },
      { title: "Diagnose", description: "Ursache eingrenzen, Aufwand einschätzen." },
      { title: "Reparatur", description: "Instandsetzung inklusive benötigter Ersatzteile." },
      { title: "Funktionsprüfung", description: "Testlauf und Übergabe mit Montagezettel." },
    ],
    faqs: [
      {
        question: "Welche Maschinen reparieren Sie?",
        answer:
          "Sägen, Fräsen, Poliermaschinen und Bearbeitungszentren zahlreicher Hersteller — unter anderem Löffler, Kolb, Comandulli, Thibaut und Marmo Meccanica. Andere Marken gerne auf Anfrage.",
      },
      {
        question: "Kommen Sie auch in meinen Betrieb?",
        answer: "Ja, mobile Reparatur ist deutschlandweit möglich. Was sinnvoller ist, klären wir am Telefon.",
      },
      {
        question: "Was kostet eine Reparatur?",
        answer:
          "Das hängt von Defekt, Ersatzteilen und Anfahrt ab. Preise auf Anfrage, abgerechnet wird transparent nach unterschriebenem Montagezettel.",
      },
    ],
    relatedSlugs: ["fehlersuche", "ersatzteile", "sofortdienst"],
  },
  {
    slug: "wartung",
    navLabel: "Wartung",
    teaser: "Ausfälle verhindern, bevor sie teuer werden.",
    icon: "gear",
    h1: "Wartung von Steinbearbeitungsmaschinen",
    metaTitle: "Wartung von Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Regelmäßige Wartung verhindert teure Ausfälle. Wartungs-Service für Steinbearbeitungsmaschinen in Heiden und deutschlandweit.",
    intro: "Steinstaub, Wasser und Dauerbetrieb fressen jede Maschine. Planmäßige Wartung ist billiger als jeder Stillstand.",
    highlights: [
      {
        title: "Verschleiß früh erkennen",
        text: "Lager, Führungen, Dichtungen und Sägeblätter werden geprüft, bevor sie Folgeschäden verursachen.",
      },
      {
        title: "Wasser wird mitgedacht",
        text: "Kühlung und Wasseraufbereitung sind die meistunterschätzte Fehlerquelle — sie gehören dazu.",
      },
      {
        title: "Termin nach Ihrem Plan",
        text: "Wartung läuft dann, wenn sie Ihre Produktion am wenigsten stört.",
      },
    ],
    benefits: [
      "Weniger ungeplante Stillstände",
      "Längere Lebensdauer Ihrer Maschinen",
      "Gleichbleibende Bearbeitungsqualität",
      "Planbare Termine statt Notfälle",
    ],
    process: [
      { title: "Termin abstimmen", description: "Passend zu Ihrem Produktionsplan." },
      { title: "Durchsicht", description: "Mechanik, Antrieb, Steuerung, Wasseraufbereitung." },
      { title: "Einstellen", description: "Nachjustieren nach Herstellervorgabe und Praxis." },
      { title: "Protokoll", description: "Montagezettel plus Hinweis auf den nächsten Termin." },
    ],
    faqs: [
      {
        question: "Wie oft sollte gewartet werden?",
        answer:
          "Das hängt von Maschine und Auslastung ab. Im Mehrschichtbetrieb deutlich häufiger als bei gelegentlichem Einsatz — wir empfehlen Ihnen einen konkreten Rhythmus für Ihre Maschine.",
      },
      {
        question: "Auch Maschinen, die ich woanders gekauft habe?",
        answer: "Selbstverständlich. Woher die Maschine stammt, spielt keine Rolle.",
      },
    ],
    relatedSlugs: ["reparatur", "fehlersuche", "ersatzteile"],
  },
  {
    slug: "sofortdienst",
    navLabel: "Sofortdienst",
    teaser: "Produktion steht? Priorisierter Einsatz.",
    icon: "bolt",
    badge: "Kurze Reaktionszeit",
    h1: "Sofortdienst & Eilreparaturen",
    metaTitle: "Sofortdienst & Eilreparatur Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Maschinenausfall? Sofortdienst mit kurzen Reaktionszeiten für Steinbearbeitungsmaschinen — Heiden und deutschlandweit.",
    intro: "Wenn die Produktion steht, zählt jede Stunde. Dringende Fälle werden vorgezogen.",
    highlights: [
      {
        title: "Direkt am Telefon",
        text: "Erste Fehlereingrenzung sofort im Gespräch — manchmal ist das Problem damit schon gelöst.",
      },
      {
        title: "Vorgezogener Termin",
        text: "Akute Ausfälle werden vor regulären Aufträgen eingeplant.",
      },
      {
        title: "Auch weite Wege",
        text: "Der Sofortdienst gilt deutschlandweit, nicht nur im Münsterland.",
      },
    ],
    benefits: [
      "Priorisierte Bearbeitung bei Stillstand",
      "Ein Ansprechpartner, keine Warteschleife",
      "Telefonische Ersteinschätzung",
      "Auch per WhatsApp erreichbar",
    ],
    process: [
      { title: "Anrufen", description: "Direkt melden und „dringend“ sagen." },
      { title: "Einschätzen", description: "Fehler telefonisch eingrenzen, Dringlichkeit klären." },
      { title: "Anfahrt", description: "Kurzfristiger Termin, Werkstatt oder vor Ort." },
      { title: "Wieder laufen", description: "Instandsetzung und Übergabe." },
    ],
    faqs: [
      {
        question: "Was gilt als Notfall?",
        answer: "Alles, was Ihre Produktion akut stoppt. Im Zweifel einfach anrufen — wir schätzen es gemeinsam ein.",
      },
      {
        question: "Wie schnell sind Sie da?",
        answer:
          "Das hängt von Entfernung und Art des Defekts ab. Eine belastbare Aussage bekommen Sie direkt im Telefonat, keine leeren Versprechen vorab.",
      },
    ],
    relatedSlugs: ["reparatur", "fehlersuche", "ersatzteile"],
  },
  {
    slug: "maschinenaufstellung",
    navLabel: "Aufstellung",
    teaser: "Neu, umgezogen oder umgestellt.",
    icon: "install",
    h1: "Maschinenaufstellung, Inbetriebnahme & Umstellung",
    metaTitle: "Maschinenaufstellung & Inbetriebnahme | Rowi Maschinenservice",
    metaDescription:
      "Aufstellung, Inbetriebnahme und Umstellung von Steinbearbeitungsmaschinen — fachgerecht ausgerichtet, Heiden und deutschlandweit.",
    intro: "Eine Maschine ist nur so präzise wie ihre Aufstellung. Ausrichtung und Erstjustierung entscheiden über Standzeit und Ergebnis.",
    highlights: [
      {
        title: "Millimeterarbeit",
        text: "Ausrichtung und Erstjustierung bestimmen, wie sauber Ihre Maschine über Jahre arbeitet.",
      },
      {
        title: "Anschlüsse geprüft",
        text: "Strom, Wasser und Absaugung werden im Rahmen der Inbetriebnahme kontrolliert.",
      },
      {
        title: "Auch Umzüge",
        text: "Hallenumbau oder Standortwechsel: Demontage, Transportbegleitung, Wiederaufbau.",
      },
    ],
    benefits: [
      "Präzise Ausrichtung für saubere Ergebnisse",
      "Testlauf unter realen Bedingungen",
      "Einweisung direkt im Anschluss",
      "Ein Ansprechpartner bis zur späteren Wartung",
    ],
    process: [
      { title: "Vorabklärung", description: "Maschine, Standort und Anschlüsse besprechen." },
      { title: "Aufstellen", description: "Positionieren, ausrichten, anschließen." },
      { title: "In Betrieb nehmen", description: "Justieren, prüfen, Testlauf fahren." },
      { title: "Übergabe", description: "Einweisung und Montagezettel." },
    ],
    faqs: [
      {
        question: "Übernehmen Sie auch Umzüge bestehender Maschinen?",
        answer: "Ja — Demontage, Umstellung und Wiederinbetriebnahme gehören dazu.",
      },
      {
        question: "Ist eine Einweisung dabei?",
        answer:
          "Eine Grundeinweisung ja. Für tiefergehende CNC-Software-Themen gibt es ein eigenes Schulungsangebot.",
      },
    ],
    relatedSlugs: ["schulungen", "an-und-verkauf", "wartung"],
  },
  {
    slug: "fehlersuche",
    navLabel: "Fehlersuche",
    teaser: "Ursache finden statt Symptome behandeln.",
    icon: "search",
    h1: "Fehlersuche an Steinbearbeitungsmaschinen",
    metaTitle: "Fehlersuche Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Systematische Fehlersuche an Steinbearbeitungsmaschinen durch erfahrenen Industriemechaniker. Heiden und deutschlandweit.",
    intro: "Aussetzer, Fehlermeldungen, nachlassende Präzision: Wir finden die Ursache, statt am Symptom herumzuschrauben.",
    highlights: [
      {
        title: "Drei Ebenen",
        text: "Mechanik, Elektrik und Steuerung werden systematisch gegeneinander abgegrenzt.",
      },
      {
        title: "Klartext",
        text: "Sie bekommen eine verständliche Diagnose — kein Fachchinesisch, keine Vermutungen.",
      },
      {
        title: "Ehrliche Empfehlung",
        text: "Wenn sich eine Reparatur nicht mehr lohnt, sagen wir das auch.",
      },
    ],
    benefits: [
      "Systematisch statt Teiletausch auf Verdacht",
      "Verständliche Diagnose als Entscheidungsgrundlage",
      "Direkte Weiterbearbeitung auf Wunsch",
      "Erfahrung mit zahlreichen Herstellern",
    ],
    process: [
      { title: "Symptome schildern", description: "Wann tritt es auf, welche Meldungen erscheinen?" },
      { title: "Eingrenzen", description: "Mechanik, Elektrik und Steuerung prüfen." },
      { title: "Diagnose", description: "Ursache benennen, Optionen erklären." },
      { title: "Entscheiden", description: "Sie entscheiden — Reparatur, Ersatzteil oder Alternative." },
    ],
    faqs: [
      {
        question: "Geht das auch telefonisch?",
        answer:
          "Eine erste Eingrenzung oft ja. Eine belastbare Diagnose braucht in der Regel die Maschine vor Augen.",
      },
      {
        question: "Und wenn sich die Reparatur nicht lohnt?",
        answer:
          "Dann sagen wir das offen und zeigen Alternativen auf — zum Beispiel über den An- und Verkauf.",
      },
    ],
    relatedSlugs: ["reparatur", "ersatzteile", "sofortdienst"],
  },
  {
    slug: "ersatzteile",
    navLabel: "Ersatzteile",
    teaser: "Original oder günstige Alternative.",
    icon: "parts",
    h1: "Ersatzteile für Steinbearbeitungsmaschinen",
    metaTitle: "Ersatzteile für Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Ersatzteilbeschaffung inklusive Lieferung und Einbau. Original- oder kostengünstigere Alternativteile für Steinbearbeitungsmaschinen.",
    intro: "Über gewachsene Kontakte zu Herstellern und Zulieferern beschaffen wir auch Teile, die sonst schwer zu bekommen sind.",
    highlights: [
      {
        title: "Zwei Wege",
        text: "Originalteil vom Hersteller oder geprüfte Alternative — wir sagen ehrlich, was sich für Sie rechnet.",
      },
      {
        title: "Auch ältere Modelle",
        text: "Für viele Maschinen findet sich noch etwas, wo andere längst abwinken.",
      },
      {
        title: "Inklusive Einbau",
        text: "Auf Wunsch übernehmen wir Lieferung und fachgerechten Einbau gleich mit.",
      },
    ],
    benefits: [
      "Teile für zahlreiche Hersteller",
      "Original oder günstigere Alternative",
      "Lieferung und Einbau aus einer Hand",
      "Kurze Wege über einen Ansprechpartner",
    ],
    process: [
      { title: "Teil benennen", description: "Maschine, Modell und Teil — oder einfach den Defekt schildern." },
      { title: "Optionen prüfen", description: "Verfügbarkeit und sinnvolle Alternativen klären." },
      { title: "Beschaffen", description: "Bestellung und Lieferung." },
      { title: "Einbauen", description: "Auf Wunsch inklusive Montage und Funktionsprüfung." },
    ],
    faqs: [
      {
        question: "Auch für alte Maschinen?",
        answer:
          "Häufig ja — je nach Verfügbarkeit beim Hersteller oder über geprüfte Alternativteile. Fragen Sie mit Modellbezeichnung an.",
      },
      {
        question: "Original oder Alternative — was ist besser?",
        answer:
          "Kommt auf das Teil an. Originalteile passen garantiert, Alternativen sind oft günstiger und schneller da. Wir empfehlen nicht pauschal das Teurere.",
      },
    ],
    relatedSlugs: ["reparatur", "wartung", "fehlersuche"],
  },
  {
    slug: "schulungen",
    navLabel: "CNC-Schulungen",
    teaser: "Ihr Team sicher an der Steuerung.",
    icon: "training",
    h1: "CNC-Software-Schulungen & Einweisungen",
    metaTitle: "CNC-Software-Schulung Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Praxisnahe Schulungen und Einweisungen in die CNC-Software Ihrer Steinbearbeitungsmaschine — Heiden und deutschlandweit.",
    intro: "Eine moderne Maschine kann nur so viel wie die Person davor. Wir schulen direkt an Ihrer Anlage.",
    highlights: [
      {
        title: "An Ihrer Maschine",
        text: "Geschult wird an Ihrer Anlage mit Ihren echten Werkstücken — nicht an Beispielen aus dem Handbuch.",
      },
      {
        title: "Auf Ihr Team zugeschnitten",
        text: "Von der Grundeinweisung für Neue bis zu Programmierung und Störungsbehebung für Erfahrene.",
      },
      {
        title: "Weniger Fehlbedienung",
        text: "Sicherheit an der Steuerung verhindert genau die Schäden, die später teuer werden.",
      },
    ],
    benefits: [
      "Praxis statt Theorie",
      "Für neue und erfahrene Mitarbeiter",
      "Inhalte frei abstimmbar",
      "Direkt mit einer Inbetriebnahme kombinierbar",
    ],
    process: [
      { title: "Bedarf klären", description: "Maschine, Softwarestand und Kenntnisse im Team." },
      { title: "Termin planen", description: "Passend zum Betriebsablauf." },
      { title: "Schulen", description: "Direkt an der Maschine, mit echten Anwendungsfällen." },
      { title: "Nachfassen", description: "Offene Fragen klären, auch nach dem Termin." },
    ],
    faqs: [
      {
        question: "Für welche Steuerungen?",
        answer: "Nach der Software Ihrer konkreten Maschine. Nennen Sie bei der Anfrage Maschinentyp und Steuerung.",
      },
      {
        question: "Auch für Anfänger?",
        answer: "Ja, der Umfang richtet sich nach dem Wissensstand Ihres Teams.",
      },
    ],
    relatedSlugs: ["maschinenaufstellung", "an-und-verkauf", "wartung"],
  },
  {
    slug: "an-und-verkauf",
    navLabel: "An- & Verkauf",
    teaser: "Neu und gebraucht, ehrlich bewertet.",
    icon: "trade",
    h1: "An- und Verkauf von Steinbearbeitungsmaschinen",
    metaTitle: "Steinbearbeitungsmaschinen kaufen & verkaufen | Rowi Maschinenservice",
    metaDescription:
      "An- und Verkauf von Neu- und Gebrauchtmaschinen für die Steinbearbeitung, mit fachlicher Einschätzung statt Verkaufsdruck.",
    intro: "Wer täglich an diesen Maschinen schraubt, weiß, welche wirklich taugen. Diese Einschätzung bekommen Sie hier — auch wenn sie gegen einen Kauf spricht.",
    highlights: [
      {
        title: "Beratung ohne Druck",
        text: "Welche Maschine zu Werkstoff, Menge und Platz passt — und welche Sie sich sparen können.",
      },
      {
        title: "Gebrauchte realistisch bewertet",
        text: "Zustand einschätzen ist Alltagsgeschäft. Wir sehen, was ein Verkäufer gerne verschweigt.",
      },
      {
        title: "Auch Ihre Maschine",
        text: "Bei Umstellung oder Betriebsaufgabe helfen wir bei Bewertung und Verkauf.",
      },
    ],
    benefits: [
      "Fachliche Einschätzung statt Verkaufsdruck",
      "Neu- und Gebrauchtmaschinen",
      "Realistische Zustandsbewertung",
      "Aufstellung und Service aus derselben Hand",
    ],
    process: [
      { title: "Bedarf klären", description: "Was soll die Maschine können, welches Budget?" },
      { title: "Einschätzen", description: "Passende Modelle oder Zustandsbewertung Ihrer Maschine." },
      { title: "Abwickeln", description: "Kauf, Verkauf, Lieferung oder Abholung." },
      { title: "Aufstellen", description: "Auf Wunsch Inbetriebnahme und Einweisung." },
    ],
    faqs: [
      {
        question: "Haben Sie Gebrauchtmaschinen vorrätig?",
        answer: "Der Bestand wechselt. Fragen Sie mit Ihrem Bedarf an, dann sagen wir, was gerade verfügbar ist.",
      },
      {
        question: "Kann ich meine Maschine über Sie verkaufen?",
        answer: "Grundsätzlich ja. Melden Sie sich mit Maschine, Baujahr und Zustand.",
      },
    ],
    relatedSlugs: ["maschinenaufstellung", "schulungen", "wartung"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
