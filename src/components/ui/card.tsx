import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  interactive = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  /** Adds the hover lift. Use on cards that are themselves a link or button. */
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-ink-950/8 bg-white shadow-soft",
        interactive && [
          "transition-transform duration-[var(--duration-base)] ease-out-soft",
          "hover:-translate-y-1 motion-reduce:hover:translate-y-0",
          // The deeper shadow lives on a stacked pseudo-element and fades in.
          // Transitioning box-shadow itself repaints the card on every frame;
          // opacity on a separate layer is composited instead.
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:content-['']",
          "after:opacity-0 after:shadow-lifted",
          "after:transition-opacity after:duration-[var(--duration-base)] after:ease-out-soft",
          "hover:after:opacity-100",
        ],
        className,
      )}
      {...props}
    />
  );
}
