import { StartupCard } from "@/components/sections/startups/startup-card";
import { cohorts } from "@/content/cohorts";
import type { Startup } from "@/types/startup";

export function StartupGrid({
  startups,
  groupByCohort,
}: {
  startups: Startup[];
  groupByCohort: boolean;
}) {
  if (startups.length === 0) {
    return (
      <p className="py-16 text-center text-ink-700">
        No startups match your search. Try a different keyword or filter.
      </p>
    );
  }

  if (!groupByCohort) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {startups.map((startup) => (
          <StartupCard key={startup.slug} startup={startup} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16">
      {cohorts.map((cohort) => {
        const inCohort = startups.filter((s) => s.cohort === cohort.number);
        if (inCohort.length === 0) return null;
        return (
          <div key={cohort.number}>
            <h2 className="mb-3 font-display text-2xl">
              Cohort {cohort.number}
              {cohort.year ? <span className="text-ink-500"> — {cohort.year}</span> : null}
            </h2>
            <p className="mb-6 max-w-2xl text-sm text-ink-700">{cohort.description}</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {inCohort.map((startup) => (
                <StartupCard key={startup.slug} startup={startup} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
