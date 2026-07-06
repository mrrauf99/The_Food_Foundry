import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { founderJourneySteps } from "@/content/timeline";

export function JourneyTeaser() {
  return (
    <Section className="bg-cream-50">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="The Program"
          title="From application to Demo Day"
          description="A guided path from your first application to pitching investors on stage."
        />
        <Button href="/program" variant="outline" className="shrink-0 border-ink-950/20">
          See the full program <ArrowRight className="size-4" />
        </Button>
      </div>

      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {founderJourneySteps.map((step) => {
          const Icon = step.icon;
          return (
            <StaggerItem
              key={step.id}
              className="rounded-lg border border-ink-950/8 bg-white p-6 shadow-soft"
            >
              <Icon className="size-6 text-teal-600" aria-hidden />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-500">
                {String(step.order).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-xl">{step.title}</h3>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
