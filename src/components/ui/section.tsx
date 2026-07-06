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

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-display text-4xl leading-heading tracking-tight text-balance md:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-700">{description}</p>
      ) : null}
    </div>
  );
}
