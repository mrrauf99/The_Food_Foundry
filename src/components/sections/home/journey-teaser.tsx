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
          description="From your first application to pitching investors on stage."
        />
        <Button href="/program" variant="outline" className="shrink-0 self-start border-ink-950/20 md:self-auto">
          See the full program <ArrowRight className="size-4" />
        </Button>
      </div>

      <StaggerGroup className="mt-12 grid border-t-2 border-ink-950 lg:grid-cols-5 lg:gap-6">
        {founderJourneySteps.map((step) => (
          <StaggerItem
            key={step.id}
            className="flex items-baseline gap-5 border-b border-ink-950/10 py-4 lg:block lg:border-b-0 lg:pt-6 lg:pb-0"
          >
            <p className="w-8 shrink-0 font-display text-2xl text-teal-700 lg:w-auto lg:text-4xl">
              {String(step.order).padStart(2, "0")}
            </p>
            <div className="lg:mt-3">
              <h3 className="font-display text-xl leading-heading">{step.title}</h3>
              <p className="mt-1 text-sm text-ink-700">{step.duration}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
