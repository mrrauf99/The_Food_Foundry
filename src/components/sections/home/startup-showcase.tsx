import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { StartupCard } from "@/components/sections/startups/startup-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { getFeaturedStartups, alumniCountLabel } from "@/content/startups";
import { site } from "@/content/site";

export function StartupShowcase() {
  const featured = getFeaturedStartups();

  return (
    <Section className="bg-ink-950 text-cream-50">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Portfolio"
          tone="dark"
          title="Founders building across the food chain"
          description={`${alumniCountLabel} companies have come through Food Foundry since ${site.foundedYear}. Here are a few from across our cohorts.`}
          className="text-cream-50"
        />
        <Button href="/startups" variant="outline" className="shrink-0 self-start border-cream-50/25 md:self-auto text-cream-50 hover:bg-cream-50/10">
          Meet all our startups <ArrowRight className="size-4" />
        </Button>
      </div>

      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((startup) => (
          <StaggerItem key={startup.slug}>
            <StartupCard startup={startup} tone="dark" />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
