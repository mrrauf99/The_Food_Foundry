import type { TimelineStep } from "@/types/content";
import { alumniCountLabel } from "@/content/startups";
import { FileEdit, Handshake, GraduationCap, TrendingUp, PartyPopper } from "lucide-react";

export const founderJourneySteps: TimelineStep[] = [
  {
    id: "apply",
    order: 1,
    title: "Apply",
    duration: "Cohort application",
    description:
      "Early-stage founders in food and foodservice apply to join the next Food Foundry cohort.",
    icon: FileEdit,
  },
  {
    id: "onboard",
    order: 2,
    title: "Onboarding",
    duration: "Kickoff",
    description:
      "Accepted founders meet the Food Foundry team, join the cohort, and get access to the Relish Works and Gordon Food Service network.",
    icon: Handshake,
  },
  {
    id: "curriculum",
    order: 3,
    title: "Mentorship & Curriculum",
    duration: "Core program",
    description:
      "One-on-one mentorship, specialized programming, and exclusive events built around how foodservice actually works.",
    icon: GraduationCap,
  },
  {
    id: "funding",
    order: 4,
    title: "Investor Intros",
    duration: "Throughout the cohort",
    description:
      "Direct introductions to Food Foundry's investors, venture capitalists, and other funding sources.",
    icon: TrendingUp,
  },
  {
    id: "demo-day",
    order: 5,
    title: "Demo Day & Alumni Network",
    duration: "Program finale",
    description:
      `Founders pitch to investors and industry leaders at Demo Day, then join an alumni network of ${alumniCountLabel} companies.`,
    icon: PartyPopper,
  },
];
