"use client";

import { useQueryState } from "nuqs";
import { FilterPill } from "@/components/ui/filter-pill";
import { startupSearchParams } from "@/lib/search-params";
import { categories } from "@/content/startups";

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
        const Icon = category.icon;
        return (
          <FilterPill
            key={category.id}
            pressed={selected.includes(category.id)}
            tone="gold"
            onClick={() => toggle(category.id)}
            className="px-3.5 py-1.5 text-xs"
          >
            <Icon className="size-3.5" aria-hidden />
            {category.label}
          </FilterPill>
        );
      })}
    </div>
  );
}
