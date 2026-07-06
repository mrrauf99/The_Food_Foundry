import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { pillars } from "@/content/pillars";

export function Pillars() {
  return (
    <Section className="bg-gold-400">
      <SectionHeading
        align="center"
        eyebrow="How we help"
        title="Three ways Food Foundry backs founders"
        className="mx-auto mb-14"
      />
      <StaggerGroup className="grid gap-10 md:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <StaggerItem key={pillar.id}>
              <span
                aria-hidden
                className="block font-display text-7xl leading-none text-ink-950/25 select-none"
              >
                {pillar.number}
              </span>
              <Icon className="mt-5 size-7 text-ink-950" aria-hidden />
              <h3 className="mt-3 font-display text-2xl text-ink-950">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-900/85">{pillar.description}</p>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
