/**
 * Zentrale Foto-Verwaltung.
 *
 * So fügen Sie ein echtes Foto ein:
 *   1. Bilddatei in `public/fotos/` ablegen (z. B. `public/fotos/robert-wikarek.jpg`)
 *   2. Hier bei `src` den Pfad eintragen: src: "/fotos/robert-wikarek.jpg"
 *
 * Solange `src` auf `null` steht, zeigt die Website an dieser Stelle einen
 * gestalteten Platzhalter mit der unten hinterlegten Motivbeschreibung.
 * Der `alt`-Text ist bereits SEO-freundlich vorformuliert.
 */

export type Photo = {
  src: string | null;
  alt: string;
  /** Motivbeschreibung, die im Platzhalter angezeigt wird */
  hint: string;
};

export const photos = {
  heroWorkshop: {
    src: null,
    alt: "Robert Wikarek bei der Wartung einer Steinbearbeitungsmaschine in der Werkstatt in Heiden",
    hint: "Hochformat: Robert Wikarek an einer Maschine — Werkstatt oder Kundeneinsatz",
  },
  robertPortrait: {
    src: null,
    alt: "Robert Wikarek, Inhaber von Rowi Maschinenservice",
    hint: "Porträt Robert Wikarek, gerne in Arbeitskleidung vor einer Maschine",
  },
  workshopWide: {
    src: "/fotos/werkstatt-03.jpg",
    alt: "Werkstatt von Rowi Maschinenservice in Heiden im Münsterland",
    hint: "Querformat: Werkstatt in Heiden, Innenansicht mit Maschinen",
  },
  serviceOnSite: {
    src: "/fotos/werkstatt-05.jpg",
    alt: "Mobiler Service an einer Steinbearbeitungsmaschine im Kundenbetrieb",
    hint: "Querformat: Einsatz beim Kunden, Werkzeug und Maschine im Bild",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
