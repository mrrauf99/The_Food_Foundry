import type { LucideIcon } from "lucide-react";

export type CohortNumber = 1 | 2 | 3 | 4 | 5 | 6;

export interface Cohort {
  number: CohortNumber;
  label: string;
  year: string;
  description: string;
}

export type StartupCategory =
  | "restaurant-tech"
  | "cpg"
  | "supply-chain"
  | "sustainability"
  | "data-insights";

export interface Startup {
  slug: string;
  name: string;
  cohort: CohortNumber;
  category: StartupCategory;
  description: string;
  logo?: string;
  /** Logo artwork is light-on-transparent, so it needs a dark chip behind it. */
  logoNeedsDarkBg?: boolean;
  websiteUrl?: string;
  featured?: boolean;
}

export interface CategoryMeta {
  id: StartupCategory;
  label: string;
  icon: LucideIcon;
}
