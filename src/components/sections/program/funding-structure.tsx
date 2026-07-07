import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const terms = [
  "Cohort 6 (2024) founders received a $15K equity-free stipend.",
  "Terms have evolved cohort to cohort — Cohort 5 (2023) startups received a $75K investment.",
  "Every cohort gets direct, warm introductions to Food Foundry's investor and VC network.",
];

export function FundingStructure() {
  return (
    <Section className="bg-cream-100">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <SectionHeading
          eyebrow="Funding"
          title="Capital that meets founders where they are"
          description="Funding structure has evolved as the program has grown — ask us for the current cohort's specific terms when you apply."
        />
        <Card className="p-8">
          <ul className="space-y-4">
            {terms.map((term) => (
              <li key={term} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-600" aria-hidden />
                {term}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
