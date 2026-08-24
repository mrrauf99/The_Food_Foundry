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
  description: `Explore ${startups.length}+ founders across 6 Food Foundry cohorts — restaurant tech, CPG, supply chain, sustainability, and data & insights companies reshaping food and foodservice.`,
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
      {/* Above-the-fold, like the home Hero — CSS stagger rather than Framer Motion
          so there's no wait on hydration and nothing sits at opacity:0 if JS fails. */}
      <Section className="bg-teal-500 text-ink-950" containerClassName="text-center">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="Portfolio"
          title="Meet Our Startups"
          description="Food Foundry is dedicated to amplifying impact by supporting and empowering founders to thrive in the dynamic landscape of the food and foodservice industry."
          className="animate-fade-up mx-auto [&_h2]:text-ink-950 [&_p]:text-ink-950/80"
        />
      </Section>

      <Section className="bg-cream-50">
        <div className="flex flex-col gap-5">
          <StartupSearchBar />
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <CohortTabs />
            <CategoryFilter />
          </div>
          <p className="text-sm text-ink-500" role="status">
            {filtered.length} of {startups.length} startups
          </p>
        </div>

        <div className="mt-10">
          <StartupGrid startups={filtered} groupByCohort={isUnfiltered} />
        </div>
      </Section>

      <CtaBand
        title="Building something in food or foodservice?"
        description="Apply to join the next Food Foundry cohort and put your company in front of our investor and mentor network."
      />
    </>
  );
}
