import type { TimelineStep } from "@/types/content";
import { FileEdit, Handshake, GraduationCap, TrendingUp, PartyPopper } from "lucide-react";

export const founderJourneySteps: TimelineStep[] = [
  {
    id: "apply",
    order: 1,
    title: "Apply",
    duration: "Cohort application",
    description:
      "Early-stage founders disrupting food and foodservice apply to join the next Food Foundry cohort.",
    icon: FileEdit,
  },
  {
    id: "onboard",
    order: 2,
    title: "Onboarding",
    duration: "Kickoff",
    description:
      "Accepted founders join the cohort, meet the Food Foundry team, and get access to the Relish Works and Gordon Food Service network.",
    icon: Handshake,
  },
  {
    id: "curriculum",
    order: 3,
    title: "Mentorship & Curriculum",
    duration: "Core program",
    description:
      "1:1 mentorship, specialized programming, and exclusive events built around the realities of the foodservice industry.",
    icon: GraduationCap,
  },
  {
    id: "funding",
    order: 4,
    title: "Funding Intros",
    duration: "Throughout the cohort",
    description:
      "Direct introductions to Food Foundry's network of investors, venture capitalists, and other funding opportunities.",
    icon: TrendingUp,
  },
  {
    id: "demo-day",
    order: 5,
    title: "Demo Day & Alumni Network",
    duration: "Program finale",
    description:
      "Founders pitch to investors and industry leaders at Demo Day, then join a growing alumni network of 30+ companies.",
    icon: PartyPopper,
  },
];
