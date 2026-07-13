import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CohortBadge } from "@/components/ui/cohort-badge";
import { getCategoryMeta } from "@/content/startups";
import type { Startup } from "@/types/startup";
import { cn } from "@/lib/utils";

export function StartupCard({
  startup,
  tone = "light",
}: {
  startup: Startup;
  tone?: "light" | "dark";
}) {
  const category = getCategoryMeta(startup.category);
  const dark = tone === "dark";

  const content = (
    <Card
      interactive={Boolean(startup.websiteUrl)}
      className={cn(
        "group flex h-full flex-col p-6",
        dark && "border-cream-50/10 bg-ink-900 text-cream-50",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0">
          {startup.logo ? (
            <>
              <span className="sr-only">{startup.name}</span>
              <span
                className={cn(
                  "relative block h-10 w-32",
                  // Light-on-transparent artwork needs a dark plate to stay legible
                  // on the cream card; on dark cards the whole logo is knocked out white.
                  !dark && startup.logoNeedsDarkBg && "rounded-sm bg-ink-950 px-2 py-1",
                )}
              >
                <Image
                  src={startup.logo}
                  alt=""
                  fill
                  sizes="128px"
                  className={cn(
                    "object-contain object-left",
                    !dark && startup.logoNeedsDarkBg && "p-1",
                    dark && "brightness-0 invert",
                  )}
                />
              </span>
            </>
          ) : (
            <span className="font-display text-xl leading-heading">{startup.name}</span>
          )}
        </h3>
        <CohortBadge cohort={startup.cohort} />
      </div>

      <p className={cn("mt-4 text-sm leading-relaxed", dark ? "text-cream-100/75" : "text-ink-700")}>
        {startup.description}
      </p>

      <div className="mt-5 flex flex-1 items-end justify-between gap-3">
        <Badge variant={dark ? "outline" : "teal"} className={dark ? "border-cream-50/25 text-cream-100" : undefined}>
          {category.label}
        </Badge>
        {startup.websiteUrl ? (
          <span
            className={cn(
              "inline-flex items-center gap-1 text-xs font-semibold",
              dark ? "text-teal-300" : "text-teal-600",
            )}
          >
            Visit site
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        ) : null}
      </div>
    </Card>
  );

  if (!startup.websiteUrl) {
    return content;
  }

  return (
    <a
      href={startup.websiteUrl}
      target="_blank"
      rel="noreferrer noopener"
      className="block h-full rounded-lg focus-visible:outline-none"
      aria-label={`Visit ${startup.name}'s website (opens in a new tab)`}
    >
      {content}
    </a>
  );
}
