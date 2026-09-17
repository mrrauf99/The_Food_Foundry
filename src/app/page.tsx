import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero";
import { ValueChain } from "@/components/sections/home/value-chain";
import { Pillars } from "@/components/sections/home/pillars";
import { JourneyTeaser } from "@/components/sections/home/journey-teaser";
import { StartupShowcase } from "@/components/sections/home/startup-showcase";
import { Partners } from "@/components/sections/home/partners";
import { FaqSection } from "@/components/sections/shared/faq-section";
import { Newsletter } from "@/components/sections/home/newsletter";
import { CtaBand } from "@/components/sections/shared/cta-band";
import { homeFaq } from "@/content/faq";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Food Foundry | Startup Accelerator for Food & Foodservice Founders",
  description:
    "Food Foundry is a founder community and accelerator program for the founders and startups changing how food and foodservice work.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueChain />
      <Pillars />
      <JourneyTeaser />
      <StartupShowcase />
      <Partners />
      <FaqSection title="Before you apply" items={homeFaq} className="border-t border-ink-950/8 bg-cream-50" />
      <Newsletter />
      <CtaBand
        title="Ready to build what's next in food?"
        description="Applications go through our team. Tell us about your company and we'll send the next cohort's dates, terms, and requirements."
      />
    </>
  );
}
