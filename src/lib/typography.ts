/**
 * Weiches Trennzeichen (U+00AD, "soft hyphen").
 *
 * Es ist unsichtbar, solange das Wort in eine Zeile passt, und erzeugt am
 * Zeilenende einen echten Trennstrich. Deutsche Komposita wie
 * "Steinbearbeitungsmaschinen" brechen sonst je nach Browser mitten im Wort
 * ohne Bindestrich um.
 */
const SHY = "­";

/** "Steinbearbeitungsmaschinen" mit sauberen Trennstellen — für Überschriften */
export const STEINBEARBEITUNGSMASCHINEN = `Steinbe${SHY}arbeitungs${SHY}maschinen`;

/** Fügt weiche Trennstellen in die häufigsten langen Komposita ein */
export function withSoftHyphens(text: string): string {
  return text
    .replace(/Steinbearbeitungsmaschinen/g, STEINBEARBEITUNGSMASCHINEN)
    .replace(/Maschinenaufstellung/g, `Maschinen${SHY}aufstellung`)
    .replace(/Ersatzteilbeschaffung/g, `Ersatzteil${SHY}beschaffung`)
    .replace(/Inbetriebnahme/g, `Inbetrieb${SHY}nahme`);
}
