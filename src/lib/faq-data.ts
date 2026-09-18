export type FaqCategory = {
  category: string;
  items: { question: string; answer: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Leistungen",
    items: [
      {
        question: "Was macht Rowi Maschinenservice genau?",
        answer:
          "Reparatur, Wartung, Sofortdienst, Aufstellung und Inbetriebnahme, Fehlersuche, Ersatzteile, CNC-Schulungen sowie An- und Verkauf — ausschließlich für Steinbearbeitungsmaschinen.",
      },
      {
        question: "Für welche Hersteller bieten Sie Service an?",
        answer:
          "Unter anderem Löffler, Kolb, Denver, Comandulli, Thibaut, Steup, Fickert & Winterling, Marmo Meccanica, Seitz Pumpen und weitere. Ist Ihre Marke nicht dabei, fragen Sie trotzdem an.",
      },
      {
        question: "Gibt es eine Online-Terminbuchung?",
        answer: "Nein. Termine werden persönlich abgestimmt — per Telefon, WhatsApp oder Kontaktformular.",
      },
    ],
  },
  {
    category: "Ablauf & Termine",
    items: [
      {
        question: "Wie schnell bekomme ich einen Termin?",
        answer:
          "Das hängt von Anliegen und Auslastung ab. Steht Ihre Produktion still, wird der Fall über den Sofortdienst vorgezogen.",
      },
      {
        question: "Was ist ein Montagezettel?",
        answer:
          "Ein Nachweis über die erbrachten Leistungen, den Sie nach dem Einsatz unterschreiben. Er ist die Grundlage der Abrechnung — damit nachvollziehbar bleibt, wofür Sie zahlen.",
      },
      {
        question: "Wann sind Sie erreichbar?",
        answer: "Montag bis Samstag von 8:00 bis 18:00 Uhr, telefonisch und per WhatsApp unter 0173 3082859.",
      },
    ],
  },
  {
    category: "Preise",
    items: [
      {
        question: "Was kostet ein Einsatz?",
        answer:
          "Preise auf Anfrage. Abgerechnet wird transparent nach unterschriebenem Montagezettel, zuzüglich Anfahrt und Spesen.",
      },
      {
        question: "Warum steht kein Stundensatz auf der Website?",
        answer:
          "Weil Preise sich ändern und ein veralteter Satz niemandem hilft. Sie bekommen auf Anfrage eine konkrete Aussage.",
      },
    ],
  },
  {
    category: "Einsatzgebiet",
    items: [
      {
        question: "Arbeiten Sie nur im Münsterland?",
        answer:
          "Nein. Werkstatt und Sitz sind in Heiden, die mobilen Einsätze finden deutschlandweit statt.",
      },
      {
        question: "Muss ich meine Maschine zu Ihnen bringen?",
        answer:
          "In der Regel nicht — die meisten Arbeiten erfolgen direkt in Ihrem Betrieb. Manches lässt sich in der Werkstatt in Heiden aber schneller und günstiger erledigen. Das klären wir vorab.",
      },
    ],
  },
  {
    category: "Zum Betrieb",
    items: [
      {
        question: "Mit wem spreche ich?",
        answer:
          "Mit Robert Wikarek, Inhaber und ausgebildeter Industriemechaniker. Er nimmt die Anfrage an und führt den Einsatz durch.",
      },
      {
        question: "Wie lange gibt es den Betrieb schon?",
        answer:
          "Seit Januar 2012 selbstständig. In der Branche ist Robert Wikarek seit 2001 tätig.",
      },
    ],
  },
];

export const allFaqItems = faqCategories.flatMap((category) => category.items);
