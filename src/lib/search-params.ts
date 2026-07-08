import {
  parseAsString,
  parseAsStringLiteral,
  parseAsArrayOf,
  createSearchParamsCache,
  createLoader,
} from "nuqs/server";

export const cohortValues = ["all", "1", "2", "3", "4", "5", "6"] as const;

export const startupSearchParams = {
  q: parseAsString.withDefault(""),
  cohort: parseAsStringLiteral(cohortValues).withDefault("all"),
  category: parseAsArrayOf(parseAsString).withDefault([]),
};

export const startupSearchParamsCache = createSearchParamsCache(startupSearchParams);
export const loadStartupSearchParams = createLoader(startupSearchParams);
