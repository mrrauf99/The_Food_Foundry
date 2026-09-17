import { Network, GraduationCap, ListChecks } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { alumniCountLabel } from "@/content/startups";

const details = [
  {
    id: "network",
    icon: Network,
    title: "Network",
    items: [
      "Direct access to Relish Works, Gordon Food Service, and 1871",
      `An alumni network of ${alumniCountLabel} portfolio companies`,
      "Introductions to investors, VCs, and industry operators",
    ],
  },
  {
    id: "curriculum",
    icon: GraduationCap,
    title: "Curriculum",
    items: [
      "One-on-one mentorship from our mentors and entrepreneurs-in-residence",
      "Specialized programming built around how foodservice works",
      "Access to exclusive industry events throughout the cohort",
    ],
  },
  {
    id: "eligibility",
    icon: ListChecks,
    title: "Eligibility",
    items: [
      "Early-stage founders with a working product or prototype",
      "Focused on food, foodservice, or restaurant technology",
      "Able to be in Chicago for key programming and Demo Day",
    ],
  },
];

export function ProgramDetails() {
  return (
    <Section className="bg-cream-50">
      <SectionHeading eyebrow="Program Details" title="Network, curriculum, and who should apply" />
      <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
        {details.map((detail) => {
          const Icon = detail.icon;
          return (
            <StaggerItem key={detail.id} className="rounded-lg border border-ink-950/8 bg-surface p-7 shadow-soft">
              <Icon className="size-6 text-teal-600" aria-hidden />
              <h3 className="mt-3 font-display text-xl">{detail.title}</h3>
              <ul className="mt-3 space-y-2">
                {detail.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink-700">
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
