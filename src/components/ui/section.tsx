import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  containerClassName,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { containerClassName?: string }) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <div className={cn("mx-auto w-full max-w-6xl px-6", containerClassName)}>{children}</div>
    </section>
  );
}

// Text colors per background, all AA. "accent" is for the gold and teal bands.
const headingTones = {
  light: { eyebrow: "text-teal-700", description: "text-ink-700" },
  dark: { eyebrow: "text-teal-300", description: "text-cream-100/75" },
  accent: { eyebrow: "text-ink-950", description: "text-ink-950" },
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: keyof typeof headingTones;
  as?: "h1" | "h2";
  className?: string;
}) {
  const colors = headingTones[tone];
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("mb-3 text-sm font-semibold uppercase tracking-widest", colors.eyebrow)}>
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-display text-4xl leading-heading tracking-tight text-balance md:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className={cn("mt-4 text-lg leading-relaxed", colors.description)}>{description}</p>
      ) : null}
    </div>
  );
}
