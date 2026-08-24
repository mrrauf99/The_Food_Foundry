import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Section, SectionHeading } from "@/components/ui/section";
import { partners } from "@/content/partners";

export function Partners() {
  return (
    <Section className="bg-cream-100">
      <Reveal>
        <SectionHeading align="center" eyebrow="Backed by" title="Built with industry leaders" className="mx-auto" />
      </Reveal>
      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-3">
        {partners.map((partner) => (
          <StaggerItem key={partner.id}>
            {/* Same lift + layered-shadow affordance as the shared Card component —
                a plain <a> here since Card doesn't render as a link. */}
            <a
              href={partner.websiteUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="relative block rounded-lg border border-ink-950/10 bg-cream-50 p-6 text-center transition-[transform,border-color] duration-[var(--duration-base)] ease-out-soft hover:-translate-y-1 hover:border-teal-500/40 motion-reduce:hover:translate-y-0 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:opacity-0 after:shadow-lifted after:transition-opacity after:duration-[var(--duration-base)] after:ease-out-soft after:content-[''] hover:after:opacity-100"
            >
              <p className="font-display text-2xl">{partner.name}</p>
              <p className="mt-2 text-sm text-ink-700">{partner.description}</p>
            </a>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
