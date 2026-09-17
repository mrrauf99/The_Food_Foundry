"use client";

import { useQueryState } from "nuqs";
import { FilterPill } from "@/components/ui/filter-pill";
import { startupSearchParams, cohortValues } from "@/lib/search-params";
import { cohorts } from "@/content/cohorts";

export function CohortTabs() {
  const [cohort, setCohort] = useQueryState("cohort", {
    ...startupSearchParams.cohort,
    shallow: false,
    clearOnDefault: true,
  });

  const options = [
    { value: "all", label: "All cohorts" },
    ...cohorts.map((c) => ({ value: String(c.number), label: `Cohort ${c.number}` })),
  ];

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by cohort">
      {options.map((option) => (
        <FilterPill
          key={option.value}
          pressed={cohort === option.value}
          onClick={() => setCohort(option.value as (typeof cohortValues)[number])}
        >
          {option.label}
        </FilterPill>
      ))}
    </div>
  );
}
