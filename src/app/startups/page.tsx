import type { Metadata } from "next";
import type { SearchParams } from "nuqs/server";
import { Section, SectionHeading } from "@/components/ui/section";
import { StartupSearchBar } from "@/components/sections/startups/startup-search-bar";
import { CohortTabs } from "@/components/sections/startups/cohort-tabs";
import { CategoryFilter } from "@/components/sections/startups/category-filter";
import { StartupGrid } from "@/components/sections/startups/startup-grid";
import { CtaBand } from "@/components/sections/shared/cta-band";
import { startups, filterStartups } from "@/content/startups";
import { startupSearchParamsCache } from "@/lib/search-params";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Meet Our Startups",
  description: `Explore ${startups.length}+ startups across 6 Food Foundry cohorts, from restaurant tech and CPG to supply chain, sustainability, and data & insights.`,
  path: "/startups",
});

export default async function StartupsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { q, cohort, category } = startupSearchParamsCache.parse(await searchParams);
  const filtered = filterStartups({ q, cohort, category });
  const isUnfiltered = q === "" && cohort === "all" && category.length === 0;

  return (
    <>
      {/* CSS animation, not Framer Motion: above the fold, it shouldn't wait on hydration. */}
      <Section className="bg-teal-500 text-ink-950" containerClassName="text-center">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="Portfolio"
          title="Meet Our Startups"
          description="We back founders who are changing food and foodservice, and we help them grow their impact."
          tone="accent"
          className="animate-fade-up mx-auto"
        />
      </Section>

      <Section className="bg-cream-50">
        <div className="flex flex-col gap-5">
          <StartupSearchBar />
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <CohortTabs />
            <CategoryFilter />
          </div>
          <p className="text-sm text-ink-700" role="status">
            {filtered.length} of {startups.length} startups
          </p>
        </div>

        <div className="mt-10">
          <StartupGrid startups={filtered} groupByCohort={isUnfiltered} />
        </div>
      </Section>

      <CtaBand
        title="Building something in food or foodservice?"
        description="Apply to the next Food Foundry cohort and get your company in front of our investors and mentors."
      />
    </>
  );
}
