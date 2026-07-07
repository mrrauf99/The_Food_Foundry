import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { founderJourneySteps } from "@/content/timeline";

export function FounderJourney() {
  return (
    <Section className="bg-ink-950 text-cream-50" id="journey">
      <SectionHeading
        align="center"
        eyebrow="Founder Journey"
        title="From application to alumni"
        className="mx-auto mb-14 [&_p]:text-cream-100/70"
      />

      <StaggerGroup className="grid gap-8 md:grid-cols-5">
        {founderJourneySteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <StaggerItem key={step.id} className="relative flex flex-col items-center text-center md:items-start md:text-left">
              {i < founderJourneySteps.length - 1 ? (
                <span className="absolute top-6 left-1/2 hidden h-px w-full bg-cream-50/15 md:block" aria-hidden />
              ) : null}
              <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full bg-teal-500 text-ink-950">
                <Icon className="size-5" aria-hidden />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-teal-300">
                {step.duration}
              </p>
              <h3 className="mt-1 font-display text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{step.description}</p>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
