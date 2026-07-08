"use client";

import { useQueryState } from "nuqs";
import { Search, X } from "lucide-react";
import { startupSearchParams } from "@/lib/search-params";

export function StartupSearchBar() {
  const [q, setQ] = useQueryState("q", { ...startupSearchParams.q, shallow: false, clearOnDefault: true });

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-ink-500" aria-hidden />
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value || null, { throttleMs: 300 })}
        placeholder="Search startups by name or description…"
        aria-label="Search startups"
        className="h-12 w-full rounded-full border border-ink-950/15 bg-white pr-11 pl-11 text-sm text-ink-950 placeholder:text-ink-500 focus-visible:border-teal-500 focus-visible:outline-none"
      />
      {q ? (
        <button
          type="button"
          onClick={() => setQ(null)}
          aria-label="Clear search"
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-ink-500 hover:text-ink-950"
        >
          <X className="size-4" />
        </button>
      ) : null}
    </div>
  );
}
