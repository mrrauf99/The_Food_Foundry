import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * The brand's signature rotated "sticker" label — used only for cohort badges,
 * numeral callouts, and the hero accent. Not a general-purpose badge.
 */
const stickerVariants = cva(
  "inline-block -rotate-2 rounded-sm px-3 py-1 font-display text-sm tracking-wide shadow-soft",
  {
    variants: {
      variant: {
        gold: "bg-gold-400 text-ink-950",
        ink: "bg-ink-950 text-cream-50",
      },
    },
    defaultVariants: {
      variant: "gold",
    },
  },
);

export interface StickerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof stickerVariants> {}

export function Sticker({ className, variant, ...props }: StickerProps) {
  return <span className={cn(stickerVariants({ variant }), className)} {...props} />;
}
