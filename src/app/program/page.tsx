import type { Metadata } from "next";
import { ProgramHero } from "@/components/sections/program/program-hero";
import { Benefits } from "@/components/sections/program/benefits";
import { DemoDayGallery } from "@/components/sections/program/demo-day-gallery";
import { FounderJourney } from "@/components/sections/program/founder-journey";
import { FundingStructure } from "@/components/sections/program/funding-structure";
import { ProgramDetails } from "@/components/sections/program/program-details";
import { FaqSection } from "@/components/sections/shared/faq-section";
import { CtaBand } from "@/components/sections/shared/cta-band";
import { programFaq } from "@/content/faq";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Our Accelerator Program",
  description:
    "Program overview, funding, mentorship, and the founder journey through Food Foundry's Chicago-based accelerator for food and foodservice startups.",
  path: "/program",
});

export default function ProgramPage() {
  return (
    <>
      <ProgramHero />
      <Benefits />
      <FounderJourney />
      <DemoDayGallery />
      <FundingStructure />
      <ProgramDetails />
      <FaqSection title="Questions about the program" items={programFaq} className="bg-cream-50" />
      <CtaBand
        title="Ready to bring your idea to the table?"
        description="Tell us about your company and we'll follow up with details on the next cohort's application window."
      />
    </>
  );
}
