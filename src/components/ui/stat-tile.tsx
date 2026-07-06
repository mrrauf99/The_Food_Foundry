import type { Stat } from "@/types/content";

export function StatTile({ stat }: { stat: Stat }) {
  return (
    <div className="text-center">
      <p className="font-display text-5xl text-teal-400 md:text-6xl">{stat.value}</p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-cream-100/80">
        {stat.label}
      </p>
      {stat.detail ? <p className="mt-0.5 text-xs text-cream-100/50">{stat.detail}</p> : null}
    </div>
  );
}
