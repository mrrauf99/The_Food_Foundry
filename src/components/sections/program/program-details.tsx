import { Network, GraduationCap, ListChecks } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

const details = [
  {
    id: "network",
    icon: Network,
    title: "Network",
    items: [
      "Direct access to Relish Works, Gordon Food Service, and 1871",
      "A growing alumni network of 30+ portfolio companies",
      "Introductions to investors, VCs, and industry operators",
    ],
  },
  {
    id: "curriculum",
    icon: GraduationCap,
    title: "Curriculum",
    items: [
      "1:1 mentorship from dedicated mentors and entrepreneurs-in-residence",
      "Specialized programming built around foodservice realities",
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
      "Ready to be hands-on in Chicago for key programming and Demo Day",
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
            <StaggerItem key={detail.id} className="rounded-lg border border-ink-950/8 bg-white p-7 shadow-soft">
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
