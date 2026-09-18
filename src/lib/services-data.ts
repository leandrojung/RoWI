export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  description: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "reparatur",
    navLabel: "Reparaturleistung",
    h1: "Reparatur von Steinbearbeitungsmaschinen – Rowi Maschinenservice",
    metaTitle: "Reparatur von Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Fachgerechte Reparatur von Steinbearbeitungsmaschinen für Steinmetze und Natursteinbetriebe. Service in Heiden und deutschlandweit. Jetzt anfragen.",
    intro:
      "Ein Maschinenausfall in der Steinbearbeitung bedeutet Stillstand in der Produktion. Rowi Maschinenservice repariert Steinbearbeitungsmaschinen namhafter Hersteller fachgerecht, nachvollziehbar dokumentiert und mit dem Ziel, Ihren Betrieb so schnell wie möglich wieder arbeitsfähig zu machen.",
    description: [
      "Ob mechanischer Defekt, Verschleiß an Antrieb oder Führung, ein Problem an der Steuerung oder ein Ausfall der Kühl- und Wasseraufbereitung: Als ausgebildeter Industriemechaniker mit Fachrichtung Betriebstechnik und über 20 Jahren Erfahrung im Service für Steinbearbeitungsmaschinen kenne ich die typischen Schwachstellen von Sägen, Fräsen, Poliermaschinen und Bearbeitungszentren aus der Praxis.",
      "Die Reparatur erfolgt nach einer sorgfältigen Fehlerdiagnose vor Ort. Sie erhalten vorab eine ehrliche Einschätzung zu Aufwand und Vorgehen, damit Sie die Entscheidung über Reparatur, Ersatzteilbeschaffung oder Alternativen selbst treffen können.",
    ],
    benefits: [
      "Fachgerechte Reparatur durch ausgebildeten Industriemechaniker",
      "Erfahrung mit Maschinen zahlreicher namhafter Hersteller aus einer Hand",
      "Transparente Rückmeldung vor Beginn der Arbeiten",
      "Reparatur vor Ort in der Werkstatt in Heiden oder mobil bei Ihnen im Betrieb",
      "Abschluss mit unterschriebenem Montagezettel als nachvollziehbare Abrechnungsgrundlage",
    ],
    process: [
      { title: "Fehlerbeschreibung", description: "Sie schildern das Problem telefonisch, per E-Mail oder über das Kontaktformular." },
      { title: "Diagnose", description: "Vor Ort oder nach Rücksprache wird die Ursache eingegrenzt und der Reparaturaufwand eingeschätzt." },
      { title: "Reparatur", description: "Durchführung der Reparatur inklusive notwendiger Ersatzteile, original oder als kostengünstigere Alternative." },
      { title: "Übergabe", description: "Funktionsprüfung und Übergabe mit unterschriebenem Montagezettel." },
    ],
    faqs: [
      {
        question: "Welche Steinbearbeitungsmaschinen reparieren Sie?",
        answer:
          "Reparaturen werden für Maschinen zahlreicher namhafter Hersteller angeboten, unter anderem Löffler, Kolb, Comandulli, Thibaut, Steup, Fickert & Winterling, Marmo Meccanica und weitere. Service für zusätzliche Hersteller ist auf Anfrage möglich.",
      },
      {
        question: "Reparieren Sie auch vor Ort in meinem Betrieb?",
        answer:
          "Ja, Reparatureinsätze erfolgen sowohl in der Werkstatt in Heiden als auch mobil deutschlandweit direkt bei Ihnen vor Ort — je nach Maschine, Defekt und Absprache.",
      },
      {
        question: "Wie schnell erhalte ich eine Rückmeldung?",
        answer:
          "Nach Ihrer Anfrage erfolgt in der Regel zeitnah eine erste Rückmeldung zur weiteren Vorgehensweise. Bei akutem Ausfall nennen Sie uns dies bitte direkt — für dringende Fälle gibt es den Sofortdienst.",
      },
      {
        question: "Was kostet eine Reparatur?",
        answer:
          "Die Kosten hängen von Aufwand, Ersatzteilen und Anfahrt ab. Aktuell gilt: Preise auf Anfrage, mit transparenter Abrechnung nach unterschriebenem Montagezettel.",
      },
    ],
    relatedSlugs: ["fehlersuche", "ersatzteile", "sofortdienst"],
  },
  {
    slug: "wartung",
    navLabel: "Wartungs-Service",
    h1: "Wartungs-Service für Steinbearbeitungsmaschinen – Rowi Maschinenservice",
    metaTitle: "Wartung von Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Regelmäßige Wartung von Steinbearbeitungsmaschinen verhindert Ausfälle. Wartungs-Service von Rowi Maschinenservice in Heiden und deutschlandweit.",
    intro:
      "Regelmäßige Wartung ist der wirksamste Schutz vor teuren Maschinenausfällen. Rowi Maschinenservice prüft, pflegt und stellt Steinbearbeitungsmaschinen so ein, dass sie zuverlässig und präzise laufen.",
    description: [
      "Steinbearbeitungsmaschinen sind hohen Belastungen ausgesetzt: Steinstaub, Wasser, ständige Vibration und hoher Verschleiß an Sägeblättern, Lagern und Führungen. Ohne planmäßige Wartung steigt das Risiko für ungeplante Ausfälle spürbar.",
      "Beim Wartungs-Service werden verschleißanfällige Bauteile geprüft, Einstellungen kontrolliert und nachjustiert sowie die Wasseraufbereitung und Kühlung mit einbezogen. Ziel ist, Probleme frühzeitig zu erkennen, bevor sie zum Stillstand führen.",
    ],
    benefits: [
      "Weniger ungeplante Ausfälle durch frühzeitiges Erkennen von Verschleiß",
      "Längere Lebensdauer Ihrer Maschinen",
      "Gleichbleibende Bearbeitungsqualität durch korrekt eingestellte Maschinen",
      "Wartung für Maschinen zahlreicher namhafter Hersteller aus einer Hand",
      "Planbare Einsätze, abgestimmt auf Ihren Betriebsablauf",
    ],
    process: [
      { title: "Terminabstimmung", description: "Ein Wartungstermin wird passend zu Ihrem Produktionsplan vereinbart." },
      { title: "Prüfung", description: "Mechanik, Antrieb, Steuerung, Wasseraufbereitung und Verschleißteile werden kontrolliert." },
      { title: "Einstellung & Pflege", description: "Nachjustierung und Wartungsarbeiten gemäß Herstellervorgaben und Praxiserfahrung." },
      { title: "Dokumentation", description: "Abschluss mit unterschriebenem Montagezettel und Hinweisen für die nächste Wartung." },
    ],
    faqs: [
      {
        question: "Wie oft sollte eine Steinbearbeitungsmaschine gewartet werden?",
        answer:
          "Das hängt von Maschinentyp, Auslastung und Einsatzbedingungen ab. Bei intensiver Nutzung empfiehlt sich eine deutlich engere Taktung als bei gelegentlichem Einsatz — sprechen Sie uns für eine konkrete Empfehlung zu Ihrer Maschine an.",
      },
      {
        question: "Warten Sie auch Maschinen, die nicht von Rowi verkauft wurden?",
        answer:
          "Ja, der Wartungs-Service richtet sich an Maschinen zahlreicher namhafter Hersteller, unabhängig davon, wo sie ursprünglich erworben wurden.",
      },
      {
        question: "Kann Wartung Reparaturen vermeiden?",
        answer:
          "Regelmäßige Wartung senkt das Risiko größerer Reparaturen deutlich, da Verschleiß frühzeitig erkannt und behoben werden kann, bevor Folgeschäden entstehen.",
      },
    ],
    relatedSlugs: ["reparatur", "fehlersuche", "ersatzteile"],
  },
  {
    slug: "sofortdienst",
    navLabel: "Sofortdienst & Eilreparaturen",
    h1: "Sofortdienst & Eilreparaturen für Steinbearbeitungsmaschinen – Rowi Maschinenservice",
    metaTitle: "Sofortdienst & Eilreparatur Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Maschinenausfall in der Steinbearbeitung? Sofortdienst und Eilreparaturen von Rowi Maschinenservice — schnelle Reaktionszeiten, Heiden und deutschlandweit.",
    intro:
      "Steht Ihre Produktion durch einen Maschinenausfall still, zählt jede Stunde. Der Sofortdienst von Rowi Maschinenservice ist auf kurze Reaktionszeiten bei dringenden Fällen ausgelegt.",
    description: [
      "Ein defektes Sägeblatt-Lager, ein Ausfall der Steuerung oder ein Problem in der Wasseraufbereitung kann im laufenden Betrieb schnell zum kompletten Stillstand führen. Für genau diese Fälle gibt es den Sofortdienst: priorisierte Bearbeitung Ihrer Anfrage und schnelle Terminfindung.",
      "Nach Ihrer Meldung wird zunächst telefonisch versucht, das Problem einzugrenzen. Je nach Situation folgt ein zeitnaher Vor-Ort-Termin in der Werkstatt in Heiden oder mobil bei Ihnen — deutschlandweit.",
    ],
    benefits: [
      "Kurze Reaktionszeiten bei dringenden Ausfällen",
      "Priorisierte Bearbeitung im Vergleich zu regulären Terminen",
      "Erste telefonische Einschätzung zur schnellen Fehlereingrenzung",
      "Mobiler Einsatz deutschlandweit möglich",
      "Direkter Ansprechpartner ohne Umwege über mehrere Stellen",
    ],
    process: [
      { title: "Sofortmeldung", description: "Rufen Sie direkt an oder schreiben Sie unter Angabe von \"dringend\" eine Nachricht." },
      { title: "Telefonische Ersteinschätzung", description: "Erste Fehlereingrenzung und Klärung der Dringlichkeit." },
      { title: "Priorisierter Einsatz", description: "Kurzfristige Terminvereinbarung für Werkstatt- oder Vor-Ort-Einsatz." },
      { title: "Abschluss", description: "Reparatur bzw. Sofortmaßnahme mit unterschriebenem Montagezettel." },
    ],
    faqs: [
      {
        question: "Was zählt als Notfall im Sofortdienst?",
        answer:
          "In der Regel jeder Maschinenausfall, der Ihre Produktion akut stoppt oder erheblich beeinträchtigt. Im Zweifel einfach anrufen und die Situation kurz schildern — die Priorität wird dann gemeinsam eingeschätzt.",
      },
      {
        question: "Ist der Sofortdienst auch außerhalb von Heiden verfügbar?",
        answer:
          "Ja, der Sofortdienst ist grundsätzlich deutschlandweit verfügbar. Die tatsächliche Reaktionszeit hängt von Entfernung, Auslastung und Art des Defekts ab.",
      },
      {
        question: "Fallen für den Sofortdienst zusätzliche Kosten an?",
        answer:
          "Zur genauen Preisgestaltung des Sofortdienstes bitte direkt anfragen. Grundsätzlich gilt: Preise auf Anfrage, transparente Abrechnung nach unterschriebenem Montagezettel.",
      },
    ],
    relatedSlugs: ["reparatur", "fehlersuche", "ersatzteile"],
  },
  {
    slug: "maschinenaufstellung",
    navLabel: "Maschinenaufstellung & Inbetriebnahme",
    h1: "Maschinenaufstellung, Inbetriebnahme & Umstellung – Rowi Maschinenservice",
    metaTitle: "Maschinenaufstellung & Inbetriebnahme Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Aufstellung, Inbetriebnahme und Umstellung von Steinbearbeitungsmaschinen durch Rowi Maschinenservice — fachgerecht, Heiden und deutschlandweit.",
    intro:
      "Ob Neuanschaffung, Standortwechsel oder Umbau der Werkshalle: Rowi Maschinenservice übernimmt die fachgerechte Aufstellung, Inbetriebnahme und Umstellung Ihrer Steinbearbeitungsmaschinen.",
    description: [
      "Eine Steinbearbeitungsmaschine ist nur so gut wie ihre Aufstellung. Ausrichtung, Anschluss an Strom, Wasser und Absaugung sowie die Erstjustierung entscheiden maßgeblich über Präzision und Standzeit. Bei der Inbetriebnahme werden alle relevanten Parameter geprüft und eingestellt, bevor die Maschine in den Produktivbetrieb geht.",
      "Auch bei der Umstellung bereits vorhandener Maschinen — etwa bei Hallenumbau, Standortwechsel oder veränderter Produktionsplanung — unterstützt Rowi Maschinenservice von der Demontage über den Transport bis zur erneuten Aufstellung und Wiederinbetriebnahme.",
    ],
    benefits: [
      "Fachgerechte Ausrichtung und Erstjustierung für präzise Bearbeitungsergebnisse",
      "Prüfung von Anschlüssen für Strom, Wasser und Absaugung im Rahmen der Inbetriebnahme",
      "Erfahrung mit Umstellung und Wiederinbetriebnahme bei Standort- oder Hallenwechsel",
      "Einweisung in die Bedienung im Anschluss an die Inbetriebnahme möglich",
      "Ein Ansprechpartner für Aufstellung, Umstellung und spätere Wartung",
    ],
    process: [
      { title: "Planung", description: "Abstimmung zu Maschine, Standort und technischen Anschlüssen vor dem Termin." },
      { title: "Aufstellung", description: "Positionierung, Ausrichtung und Anschluss der Maschine vor Ort." },
      { title: "Inbetriebnahme", description: "Erstjustierung, Funktionsprüfung und Testlauf unter Praxisbedingungen." },
      { title: "Übergabe", description: "Einweisung und Übergabe mit unterschriebenem Montagezettel." },
    ],
    faqs: [
      {
        question: "Übernehmen Sie auch die Umstellung bestehender Maschinen?",
        answer:
          "Ja, Umstellung und Wiederinbetriebnahme bei Standort- oder Hallenwechsel gehören zum Leistungsumfang dieses Bereichs.",
      },
      {
        question: "Ist eine Einweisung im Preis der Inbetriebnahme enthalten?",
        answer:
          "Eine grundlegende Einweisung in die Bedienung erfolgt im Anschluss an die Inbetriebnahme. Für umfangreichere Schulungen, insbesondere zur CNC-Software, gibt es ein eigenes Schulungsangebot.",
      },
      {
        question: "Übernehmen Sie auch Aufstellungen außerhalb von NRW?",
        answer:
          "Ja, Aufstellung, Inbetriebnahme und Umstellung erfolgen bei Bedarf deutschlandweit.",
      },
    ],
    relatedSlugs: ["schulungen", "an-und-verkauf", "wartung"],
  },
  {
    slug: "fehlersuche",
    navLabel: "Fehlersuche",
    h1: "Fehlersuche an Steinbearbeitungsmaschinen – Rowi Maschinenservice",
    metaTitle: "Fehlersuche Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Systematische Fehlersuche an Steinbearbeitungsmaschinen durch erfahrenen Industriemechaniker. Rowi Maschinenservice, Heiden und deutschlandweit.",
    intro:
      "Nicht jeder Defekt ist auf den ersten Blick erkennbar. Bei unklaren Störungen an Steinbearbeitungsmaschinen hilft eine systematische Fehlersuche, die tatsächliche Ursache zu finden — statt nur Symptome zu beheben.",
    description: [
      "Unregelmäßige Aussetzer, Fehlermeldungen der Steuerung, nachlassende Präzision oder ungewöhnliche Geräusche haben oft mehrere mögliche Ursachen — mechanisch, elektrisch oder in der Steuerungstechnik. Mit über 20 Jahren Erfahrung im Service für Steinbearbeitungsmaschinen wird methodisch eingegrenzt, wo das eigentliche Problem liegt.",
      "Ziel der Fehlersuche ist eine klare, nachvollziehbare Diagnose als Grundlage für die weitere Entscheidung: Reparatur, Ersatzteilbeschaffung oder gegebenenfalls Bewertung, ob sich eine Instandsetzung wirtschaftlich noch lohnt.",
    ],
    benefits: [
      "Systematische Eingrenzung mechanischer, elektrischer und steuerungstechnischer Ursachen",
      "Klare, verständliche Rückmeldung statt reiner Vermutungen",
      "Grundlage für eine fundierte Entscheidung über das weitere Vorgehen",
      "Erfahrung mit Maschinen zahlreicher namhafter Hersteller",
      "Fehlersuche vor Ort in der Werkstatt oder mobil bei Ihnen im Betrieb",
    ],
    process: [
      { title: "Problembeschreibung", description: "Sie schildern die Symptome — Fehlermeldungen, Geräusche, Zeitpunkt des Auftretens." },
      { title: "Eingrenzung", description: "Systematische Prüfung von Mechanik, Elektrik und Steuerung zur Ursachenfindung." },
      { title: "Diagnose-Rückmeldung", description: "Verständliche Erläuterung der gefundenen Ursache und möglicher nächster Schritte." },
      { title: "Weiteres Vorgehen", description: "Auf Wunsch direkte Reparatur oder Ersatzteilbeschaffung im Anschluss." },
    ],
    faqs: [
      {
        question: "Was kostet eine Fehlersuche, wenn die Ursache unklar ist?",
        answer:
          "Der Aufwand hängt von der Komplexität des Falls ab. Grundsätzlich gilt: Preise auf Anfrage, transparente Abrechnung nach unterschriebenem Montagezettel.",
      },
      {
        question: "Kann die Fehlersuche telefonisch vorab eingegrenzt werden?",
        answer:
          "Eine erste telefonische Einschätzung ist oft möglich und hilfreich, eine abschließende Diagnose erfordert in der Regel aber die Prüfung vor Ort.",
      },
      {
        question: "Was passiert, wenn sich eine Reparatur nicht mehr lohnt?",
        answer:
          "In diesem Fall wird das offen und nachvollziehbar kommuniziert — inklusive möglicher Alternativen, etwa über den An- und Verkauf von Maschinen.",
      },
    ],
    relatedSlugs: ["reparatur", "ersatzteile", "sofortdienst"],
  },
  {
    slug: "ersatzteile",
    navLabel: "Ersatzteilbeschaffung",
    h1: "Ersatzteilbeschaffung für Steinbearbeitungsmaschinen – Rowi Maschinenservice",
    metaTitle: "Ersatzteile für Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Ersatzteilbeschaffung inklusive Lieferung und Einbau für Steinbearbeitungsmaschinen. Original- oder kostengünstigere Alternativteile. Rowi Maschinenservice.",
    intro:
      "Ob Original-Ersatzteil oder eine wirtschaftlich sinnvolle Alternative: Rowi Maschinenservice beschafft passende Ersatzteile für Steinbearbeitungsmaschinen und übernimmt auf Wunsch auch Lieferung und Einbau.",
    description: [
      "Bei vielen Maschinenherstellern sind Ersatzteile nicht immer kurzfristig oder nur mit langen Lieferzeiten verfügbar. Über gewachsene Kontakte zu zahlreichen Herstellern und Zulieferern werden passende Teile beschafft — je nach Situation als Originalteil oder als geprüfte, kostengünstigere Alternative.",
      "Der Service endet nicht bei der Beschaffung: Auf Wunsch übernimmt Rowi Maschinenservice auch Lieferung und fachgerechten Einbau, sodass Ihre Maschine ohne zusätzlichen Koordinationsaufwand wieder einsatzbereit ist.",
    ],
    benefits: [
      "Beschaffung von Ersatzteilen für Maschinen zahlreicher namhafter Hersteller",
      "Original- oder kostengünstigere Alternativteile, je nach Bedarf und Budget",
      "Lieferung und fachgerechter Einbau aus einer Hand möglich",
      "Ehrliche Einschätzung, welche Teillösung für Ihren Fall sinnvoll ist",
      "Kurze Wege durch direkten, persönlichen Ansprechpartner",
    ],
    process: [
      { title: "Bedarf klären", description: "Sie nennen Maschine, Modell und benötigtes Teil oder beschreiben den Defekt." },
      { title: "Beschaffungsoptionen", description: "Prüfung, ob Original- oder Alternativteile verfügbar und sinnvoll sind." },
      { title: "Lieferung", description: "Beschaffung und Lieferung des passenden Ersatzteils." },
      { title: "Einbau (optional)", description: "Fachgerechter Einbau vor Ort inklusive Funktionsprüfung, mit Montagezettel." },
    ],
    faqs: [
      {
        question: "Bekomme ich auch Ersatzteile für ältere Maschinenmodelle?",
        answer:
          "In vielen Fällen ja — je nach Verfügbarkeit beim Hersteller oder über geprüfte Alternativteile. Am besten Modell und Teil konkret anfragen.",
      },
      {
        question: "Muss ich das Ersatzteil selbst einbauen?",
        answer:
          "Nein, der Einbau kann auf Wunsch komplett übernommen werden, inklusive Funktionsprüfung und Übergabe mit Montagezettel.",
      },
      {
        question: "Was ist der Unterschied zwischen Original- und Alternativteilen?",
        answer:
          "Originalteile stammen vom Hersteller der Maschine, Alternativteile sind geprüfte, meist kostengünstigere Ersatzlösungen. Welche Variante sinnvoll ist, hängt vom Einzelfall ab und wird transparent besprochen.",
      },
    ],
    relatedSlugs: ["reparatur", "wartung", "fehlersuche"],
  },
  {
    slug: "schulungen",
    navLabel: "CNC-Software-Schulungen",
    h1: "CNC-Software-Schulungen & Einweisungen – Rowi Maschinenservice",
    metaTitle: "CNC-Software-Schulung Steinbearbeitungsmaschinen | Rowi Maschinenservice",
    metaDescription:
      "Schulungen und Einweisungen in die CNC-Software Ihrer Steinbearbeitungsmaschine — praxisnah von Rowi Maschinenservice, Heiden und deutschlandweit.",
    intro:
      "Eine moderne Steinbearbeitungsmaschine ist nur so leistungsfähig wie ihre Bedienung. Rowi Maschinenservice bietet praxisnahe Schulungen und Einweisungen in die CNC-Software Ihrer Maschine.",
    description: [
      "Viele Steinbearbeitungsmaschinen werden heute über CNC-Steuerungen programmiert und bedient. Ob neue Mitarbeiter eingearbeitet werden müssen oder das vorhandene Team tiefergehendes Wissen zu Programmierung, Werkzeugverwaltung und Fehlermeldungen braucht: Die Schulung setzt direkt an Ihrer Maschine und Ihrem Arbeitsalltag an.",
      "Im Mittelpunkt steht praktisches, anwendbares Wissen — keine reine Theorie. Nach der Schulung sollen Ihre Mitarbeiter die Maschine sicherer, effizienter und mit weniger Fehlbedienungen nutzen können.",
    ],
    benefits: [
      "Praxisnahe Einweisung direkt an Ihrer Maschine",
      "Geeignet für neue Mitarbeiter ebenso wie zur Auffrischung bei erfahrenem Personal",
      "Themen individuell abstimmbar: Programmierung, Werkzeugverwaltung, Störungsbehebung",
      "Weniger Fehlbedienungen und dadurch weniger vermeidbare Ausfälle",
      "Direkt kombinierbar mit Inbetriebnahme neuer Maschinen",
    ],
    process: [
      { title: "Bedarf klären", description: "Abstimmung zu Maschine, Softwarestand und Schulungsbedarf Ihres Teams." },
      { title: "Terminplanung", description: "Vereinbarung eines Schulungstermins, der zu Ihrem Betriebsablauf passt." },
      { title: "Praxis-Schulung", description: "Durchführung direkt an der Maschine mit realen Anwendungsfällen." },
      { title: "Nachbereitung", description: "Klärung offener Fragen und Hinweise für den weiteren Umgang mit der Software." },
    ],
    faqs: [
      {
        question: "Für welche CNC-Steuerungen bieten Sie Schulungen an?",
        answer:
          "Die Schulung richtet sich nach der Software Ihrer konkreten Maschine. Am besten Maschinentyp und Steuerung bei der Anfrage nennen.",
      },
      {
        question: "Ist die Schulung auch für neue Mitarbeiter ohne Vorerfahrung geeignet?",
        answer:
          "Ja, der Umfang der Schulung wird an das vorhandene Wissen Ihres Teams angepasst — von der Grundeinweisung bis zu vertiefenden Themen.",
      },
      {
        question: "Kann die Schulung mit einer Inbetriebnahme kombiniert werden?",
        answer:
          "Ja, das ist häufig sinnvoll: direkt im Anschluss an die Aufstellung und Inbetriebnahme einer neuen Maschine.",
      },
    ],
    relatedSlugs: ["maschinenaufstellung", "an-und-verkauf", "wartung"],
  },
  {
    slug: "an-und-verkauf",
    navLabel: "An- und Verkauf von Maschinen",
    h1: "An- und Verkauf von Steinbearbeitungsmaschinen – Rowi Maschinenservice",
    metaTitle: "Steinbearbeitungsmaschinen kaufen & verkaufen | Rowi Maschinenservice",
    metaDescription:
      "An- und Verkauf von Neu- und Gebrauchtmaschinen für die Steinbearbeitung. Fachliche Beratung von Rowi Maschinenservice, Heiden und deutschlandweit.",
    intro:
      "Ob Neuanschaffung, gebrauchte Maschine oder Verkauf einer nicht mehr benötigten Anlage: Rowi Maschinenservice unterstützt beim An- und Verkauf von Steinbearbeitungsmaschinen — mit fachlicher Einschätzung statt reinem Verkaufsinteresse.",
    description: [
      "Die Wahl der richtigen Maschine hängt von Werkstoff, Produktionsvolumen, verfügbarem Platz und Budget ab. Durch die tägliche Arbeit an Maschinen zahlreicher Hersteller besteht ein realistisches Bild davon, welche Maschine für welchen Einsatzzweck sinnvoll ist — auch bei Gebrauchtmaschinen, deren technischer Zustand fachlich eingeschätzt werden kann.",
      "Beim Verkauf einer eigenen Maschine, etwa bei Umstellung der Produktion oder Betriebsaufgabe, hilft die Erfahrung aus dem Servicealltag bei einer realistischen Einschätzung von Zustand und Marktwert.",
    ],
    benefits: [
      "Fachliche Beratung statt reinem Verkaufsdruck",
      "Erfahrung mit Neu- und Gebrauchtmaschinen zahlreicher Hersteller",
      "Realistische Einschätzung des technischen Zustands bei Gebrauchtmaschinen",
      "Unterstützung bei Aufstellung und Inbetriebnahme direkt im Anschluss möglich",
      "Ein Ansprechpartner für Kauf, Verkauf und den späteren Service der Maschine",
    ],
    process: [
      { title: "Bedarf klären", description: "Abstimmung zu gewünschtem Maschinentyp, Budget und Einsatzzweck bzw. zur zu verkaufenden Maschine." },
      { title: "Fachliche Einschätzung", description: "Beratung zu passenden Modellen bzw. Bewertung des Zustands einer Gebrauchtmaschine." },
      { title: "Abwicklung", description: "Abstimmung der Details zu Kauf, Verkauf, Lieferung bzw. Abholung." },
      { title: "Inbetriebnahme (optional)", description: "Bei Neuerwerb: Aufstellung, Inbetriebnahme und Einweisung aus einer Hand." },
    ],
    faqs: [
      {
        question: "Bieten Sie auch gebrauchte Steinbearbeitungsmaschinen an?",
        answer:
          "Ja, sowohl der Erwerb als auch der Verkauf gebrauchter Maschinen gehören zum Leistungsangebot. Aktuelle Verfügbarkeiten am besten direkt anfragen.",
      },
      {
        question: "Kann ich meine gebrauchte Maschine über Rowi verkaufen?",
        answer:
          "Grundsätzlich ja — melden Sie sich mit Angaben zu Maschine, Baujahr und Zustand, um das weitere Vorgehen zu besprechen.",
      },
      {
        question: "Übernehmen Sie auch die Aufstellung neu erworbener Maschinen?",
        answer:
          "Ja, Aufstellung, Inbetriebnahme und auf Wunsch eine Einweisung in die Bedienung können direkt im Anschluss an den Erwerb erfolgen.",
      },
    ],
    relatedSlugs: ["maschinenaufstellung", "schulungen", "wartung"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
