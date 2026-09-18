import { manufacturers } from "@/lib/site-config";

export default function ManufacturerList() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {manufacturers.map((name) => (
          <li
            key={name}
            className="flex items-center justify-center rounded-md border border-border bg-white px-3 py-4 text-center text-sm font-medium text-ink-soft"
          >
            {name}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-ink-soft">
        Service für weitere Hersteller auf Anfrage — sprechen Sie uns gerne auf Ihre Maschine an.
      </p>
    </div>
  );
}
