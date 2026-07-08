"use client";

import { useQueryState } from "nuqs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { startupSearchParams, cohortValues } from "@/lib/search-params";
import { cohorts } from "@/content/cohorts";

export function CohortTabs() {
  const [cohort, setCohort] = useQueryState("cohort", {
    ...startupSearchParams.cohort,
    shallow: false,
    clearOnDefault: true,
  });

  return (
    <Tabs value={cohort} onValueChange={(v) => setCohort(v as (typeof cohortValues)[number])}>
      <TabsList aria-label="Filter by cohort">
        <TabsTrigger value="all">All cohorts</TabsTrigger>
        {cohorts.map((c) => (
          <TabsTrigger key={c.number} value={String(c.number)}>
            Cohort {c.number}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
