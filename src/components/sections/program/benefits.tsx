import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { pillars } from "@/content/pillars";

export function Benefits() {
  return (
    <Section className="bg-cream-50">
      <SectionHeading eyebrow="Benefits" title="What founders get out of the program" />
      <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <StaggerItem
              key={pillar.id}
              className="rounded-lg border border-ink-950/8 bg-white p-7 shadow-soft"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-teal-500/10">
                <Icon className="size-5 text-teal-600" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-xl">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{pillar.description}</p>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
