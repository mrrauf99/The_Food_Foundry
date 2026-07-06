import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero";
import { Mission } from "@/components/sections/home/mission";
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
    "Food Foundry is a founder community and accelerator program for innovative businesses and visionary founders disrupting the food and foodservice industry.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Pillars />
      <JourneyTeaser />
      <StartupShowcase />
      <Partners />
      <FaqSection title="Common questions" items={homeFaq} className="bg-cream-50" />
      <Newsletter />
      <CtaBand
        title="Ready to build the future of food?"
        description="Join a growing network of 30+ founders who've come through Food Foundry since 2018."
      />
    </>
  );
}
