import * as React from "react";
import { cn } from "@/lib/utils";

/** Toggle button for filter groups. Selection is exposed with aria-pressed. */
export function FilterPill({
  pressed,
  tone = "teal",
  className,
  ...props
}: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "aria-pressed" | "type"> & {
  pressed: boolean;
  tone?: "teal" | "gold";
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-[var(--duration-fast)]",
        pressed
          ? tone === "gold"
            ? "border-gold-500 bg-gold-400 text-ink-950"
            : "border-teal-500 bg-teal-500 text-ink-950"
          : "border-ink-950/15 text-ink-700 hover:border-ink-950/40 hover:text-ink-950",
        className,
      )}
      {...props}
    />
  );
}
