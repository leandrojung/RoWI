export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  dateDisplay: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  content: { heading?: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "wartung-steinbearbeitungsmaschinen-worauf-achten",
    title: "Worauf Sie bei der Wartung von Steinbearbeitungsmaschinen achten sollten",
    excerpt:
      "Steinstaub, Wasser und Dauerbelastung setzen Steinbearbeitungsmaschinen stark zu. Diese Punkte sollten bei der Wartung nicht fehlen.",
    date: "2026-08-04",
    dateDisplay: "4. August 2026",
    category: "Wartung",
    metaTitle: "Wartung von Steinbearbeitungsmaschinen: Worauf achten? | Rowi Maschinenservice",
    metaDescription:
      "Worauf es bei der Wartung von Steinbearbeitungsmaschinen ankommt: Verschleißteile, Wasseraufbereitung, Steuerung und Dokumentation im Überblick.",
    content: [
      {
        paragraphs: [
          "Steinbearbeitungsmaschinen laufen unter Bedingungen, denen viele andere Maschinen so nicht ausgesetzt sind: feiner, abrasiver Steinstaub, ständiger Kontakt mit Wasser zur Kühlung, hohe Vibration und oft mehrschichtiger Dauerbetrieb. Wer hier auf regelmäßige Wartung verzichtet, riskiert nicht nur Ausfälle, sondern auch spürbare Qualitätseinbußen bei der Bearbeitung.",
        ],
      },
      {
        heading: "Verschleißteile im Blick behalten",
        paragraphs: [
          "Sägeblätter, Lager, Führungen und Dichtungen unterliegen bei Steinbearbeitungsmaschinen einem überdurchschnittlichen Verschleiß. Eine regelmäßige Sichtprüfung und der rechtzeitige Austausch verhindern, dass kleinere Abnutzungen zu größeren Folgeschäden an angrenzenden Bauteilen führen.",
        ],
      },
      {
        heading: "Wasseraufbereitung nicht vergessen",
        paragraphs: [
          "Die Kühlung mit Wasser ist bei den meisten Bearbeitungsverfahren unverzichtbar — und gleichzeitig eine häufig unterschätzte Fehlerquelle. Verschmutzte Filter, verstopfte Leitungen oder eine unzureichend gewartete Wasseraufbereitung können sowohl die Kühlleistung als auch die Standzeit von Sägeblatt und Werkzeug beeinträchtigen.",
        ],
      },
      {
        heading: "Steuerung und Elektronik einbeziehen",
        paragraphs: [
          "Bei modernen, CNC-gesteuerten Maschinen gehört auch die Steuerungstechnik zur Wartung dazu: Sind Fehlermeldungen bekannt und dokumentiert? Laufen Achsen sauber und ohne Schleppfehler? Eine Wartung, die sich nur auf die Mechanik konzentriert, lässt hier ein wichtiges Feld aus.",
        ],
      },
      {
        heading: "Wartung dokumentieren",
        paragraphs: [
          "Eine nachvollziehbare Dokumentation jeder Wartung hilft, Muster zu erkennen — etwa wenn ein bestimmtes Bauteil wiederholt auffällig wird. Das erleichtert nicht nur künftige Wartungen, sondern auch die Entscheidung, wann sich eine Reparatur noch lohnt und wann ein Austausch sinnvoller ist.",
          "Rowi Maschinenservice übernimmt die Wartung von Steinbearbeitungsmaschinen zahlreicher namhafter Hersteller — in der Werkstatt in Heiden oder mobil deutschlandweit bei Ihnen vor Ort.",
        ],
      },
    ],
  },
  {
    slug: "passenden-service-partner-steinbearbeitungsmaschinen-finden",
    title: "So finden Sie den passenden Service-Partner für Ihre Steinbearbeitungsmaschinen",
    excerpt:
      "Nicht jeder Maschinenservice kennt sich mit Steinbearbeitungsmaschinen wirklich aus. Diese Kriterien helfen bei der Auswahl.",
    date: "2026-07-18",
    dateDisplay: "18. Juli 2026",
    category: "Ratgeber",
    metaTitle: "Service-Partner für Steinbearbeitungsmaschinen finden | Rowi Maschinenservice",
    metaDescription:
      "Worauf Sie bei der Auswahl eines Service-Partners für Steinbearbeitungsmaschinen achten sollten: Spezialisierung, Erreichbarkeit, Transparenz und mehr.",
    content: [
      {
        paragraphs: [
          "Ein „Maschinenservice für alles“ ist bei Steinbearbeitungsmaschinen selten die beste Wahl. Sägen, Fräsen, Poliermaschinen und Bearbeitungszentren für Naturstein haben spezifische Anforderungen, die sich deutlich von klassischem Maschinenbau unterscheiden. Wer hier einen Partner sucht, sollte gezielt auf einige Punkte achten.",
        ],
      },
      {
        heading: "Spezialisierung statt Generalisten-Anspruch",
        paragraphs: [
          "Ein Service-Partner, der sich auf Steinbearbeitungsmaschinen fokussiert, kennt typische Schwachstellen, herstellerspezifische Eigenheiten und die besonderen Belastungen durch Steinstaub und Wasser aus der täglichen Praxis — nicht nur aus dem Datenblatt.",
        ],
      },
      {
        heading: "Erfahrung mit mehreren Herstellern",
        paragraphs: [
          "Viele Betriebe setzen im Lauf der Jahre Maschinen unterschiedlicher Hersteller ein. Ein Service-Partner, der mit mehreren Marken vertraut ist, erspart Ihnen mehrere separate Ansprechpartner und sorgt für kürzere Wege bei Reparatur, Wartung und Ersatzteilbeschaffung.",
        ],
      },
      {
        heading: "Erreichbarkeit im Ernstfall",
        paragraphs: [
          "Ein Maschinenausfall kündigt sich selten an. Wichtig ist deshalb, wie ein Service-Partner mit dringenden Fällen umgeht: Gibt es einen Sofortdienst mit kurzen Reaktionszeiten, oder landet die Anfrage in einer langen Warteschlange?",
        ],
      },
      {
        heading: "Transparente Abrechnung",
        paragraphs: [
          "Nachvollziehbare Preise und eine klare Dokumentation der erbrachten Leistungen — etwa über einen unterschriebenen Montagezettel — schaffen Vertrauen und vermeiden Diskussionen im Nachhinein.",
          "Rowi Maschinenservice ist auf Steinbearbeitungsmaschinen spezialisiert, bietet Service für zahlreiche namhafte Hersteller aus einer Hand und ist sowohl in Heiden als auch deutschlandweit im Einsatz.",
        ],
      },
    ],
  },
  {
    slug: "haeufige-fragen-reparatur-ersatzteilbeschaffung",
    title: "Häufige Fragen rund um Reparatur und Ersatzteilbeschaffung",
    excerpt:
      "Original- oder Alternativteil? Wie schnell geht eine Reparatur? Antworten auf die häufigsten Fragen unserer Kunden.",
    date: "2026-06-02",
    dateDisplay: "2. Juni 2026",
    category: "Reparatur",
    metaTitle: "Häufige Fragen zu Reparatur & Ersatzteilen | Rowi Maschinenservice",
    metaDescription:
      "Antworten auf häufige Fragen zur Reparatur von Steinbearbeitungsmaschinen und zur Ersatzteilbeschaffung — original oder Alternativteil, Ablauf, Kosten.",
    content: [
      {
        paragraphs: [
          "Bei Reparaturen und der Ersatzteilbeschaffung für Steinbearbeitungsmaschinen tauchen im Kundengespräch immer wieder ähnliche Fragen auf. Die wichtigsten davon sind hier zusammengefasst.",
        ],
      },
      {
        heading: "Original- oder Alternativteil — was ist besser?",
        paragraphs: [
          "Das hängt vom Einzelfall ab. Originalteile passen garantiert exakt, können aber teurer und je nach Hersteller mit längeren Lieferzeiten verbunden sein. Geprüfte Alternativteile sind oft kostengünstiger und schneller verfügbar. Welche Variante sinnvoll ist, wird transparent besprochen, statt pauschal die teurere Option zu empfehlen.",
        ],
      },
      {
        heading: "Wie lange dauert eine Reparatur?",
        paragraphs: [
          "Das lässt sich pauschal nicht beantworten — es hängt vom Defekt, der Verfügbarkeit benötigter Ersatzteile und der Zugänglichkeit der Maschine ab. Nach der Diagnose erhalten Sie eine realistische Einschätzung zum weiteren Vorgehen.",
        ],
      },
      {
        heading: "Muss ich die Maschine zur Reparatur transportieren?",
        paragraphs: [
          "Nicht zwingend. Viele Reparaturen erfolgen mobil direkt bei Ihnen vor Ort. Bei bestimmten Defekten kann ein Transport in die Werkstatt in Heiden sinnvoll sein — das wird im Einzelfall gemeinsam entschieden.",
        ],
      },
      {
        heading: "Was, wenn die Ursache des Defekts unklar ist?",
        paragraphs: [
          "Dann steht zunächst eine systematische Fehlersuche am Anfang, um die tatsächliche Ursache zu finden, statt nur Symptome zu beheben.",
        ],
      },
      {
        heading: "Wie erfahre ich, was die Reparatur gekostet hat?",
        paragraphs: [
          "Nach Abschluss der Arbeiten erhalten Sie einen unterschriebenen Montagezettel, der die erbrachten Leistungen transparent dokumentiert und als Abrechnungsgrundlage dient.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
