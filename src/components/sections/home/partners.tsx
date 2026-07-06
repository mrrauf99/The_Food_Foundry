import { Section, SectionHeading } from "@/components/ui/section";
import { partners } from "@/content/partners";

export function Partners() {
  return (
    <Section className="bg-cream-100">
      <SectionHeading align="center" eyebrow="Backed by" title="Built with industry leaders" className="mx-auto" />
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.websiteUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-lg border border-ink-950/10 bg-cream-50 p-6 text-center transition-colors hover:border-teal-500/40"
          >
            <p className="font-display text-2xl">{partner.name}</p>
            <p className="mt-2 text-sm text-ink-700">{partner.description}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
