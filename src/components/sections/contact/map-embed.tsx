import { site } from "@/content/site";

export function MapEmbed() {
  const query = encodeURIComponent(`${site.address.line1}, ${site.address.line2}`);

  return (
    <div className="overflow-hidden rounded-lg border border-cream-50/15">
      <iframe
        title={`Map showing ${site.name}'s office at ${site.address.line1}, ${site.address.line2}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="280"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block border-0 grayscale-15"
      />
    </div>
  );
}
