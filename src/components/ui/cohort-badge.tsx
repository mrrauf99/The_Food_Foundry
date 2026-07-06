import { Sticker } from "@/components/ui/sticker";
import { cn } from "@/lib/utils";

export function CohortBadge({ cohort, className }: { cohort: number; className?: string }) {
  return (
    <Sticker variant="gold" className={cn("text-xs", className)}>
      Cohort {cohort}
    </Sticker>
  );
}
