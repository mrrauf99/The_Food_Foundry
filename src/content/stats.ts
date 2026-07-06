import type { Stat } from "@/types/content";

// Sourced from the original Food Foundry site's "Our Impact" banner (screenshot provided
// by the user, Aug 2026): $99M+ total funding raised, 200+ total jobs created, 35+ alumni
// companies, 6 cohorts over 6 years.
export const impactStats: Stat[] = [
  { id: "raised", value: "$99M+", label: "Total funding raised" },
  { id: "jobs", value: "200+", label: "Total jobs created" },
  { id: "alumni", value: "35+", label: "Alumni companies" },
  { id: "cohorts", value: "6", label: "Cohorts over 6 years" },
];
