"use client";

import { useQueryState } from "nuqs";
import { startupSearchParams } from "@/lib/search-params";
import { categories } from "@/content/startups";
import { cn } from "@/lib/utils";

export function CategoryFilter() {
  const [selected, setSelected] = useQueryState("category", {
    ...startupSearchParams.category,
    shallow: false,
    clearOnDefault: true,
  });

  function toggle(id: string) {
    const next = selected.includes(id) ? selected.filter((c) => c !== id) : [...selected, id];
    setSelected(next.length ? next : null);
  }

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {categories.map((category) => {
        const active = selected.includes(category.id);
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            type="button"
            aria-pressed={active}
            onClick={() => toggle(category.id)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
              active
                ? "border-gold-500 bg-gold-400 text-ink-950"
                : "border-ink-950/12 text-ink-700 hover:border-ink-950/30",
            )}
          >
            <Icon className="size-3.5" aria-hidden />
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
