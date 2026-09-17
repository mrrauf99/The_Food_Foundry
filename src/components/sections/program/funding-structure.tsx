import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const terms = [
  "Cohort 6 (2024) founders received a $15K equity-free stipend.",
  "Terms change from cohort to cohort. Cohort 5 (2023) startups received a $75K investment.",
  "Every cohort gets warm, direct introductions to Food Foundry's investors and VCs.",
];

export function FundingStructure() {
  return (
    <Section className="bg-cream-100">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Funding"
            title="Funding that fits where founders are"
            description="The funding structure has changed as the program has grown. Ask us about the current cohort's terms when you apply."
          />
        </Reveal>
        <Reveal delay={0.1}>
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
        </Reveal>
      </div>
    </Section>
  );
}
