import type { Pillar } from "@/types/content";
import { HandCoins, BookOpenCheck, Users } from "lucide-react";

export const pillars: Pillar[] = [
  {
    id: "funding",
    title: "Funding Intros",
    description:
      "One-on-one introductions to our network of investors and venture capitalists, plus connections to other funding sources, so founders can raise the money they need to grow.",
    icon: HandCoins,
  },
  {
    id: "resources",
    title: "Resources",
    description:
      "National foodservice business resources, specialized programming, and exclusive events, plus one-on-one support from our mentors, entrepreneurs-in-residence, and industry experts.",
    icon: BookOpenCheck,
  },
  {
    id: "community",
    title: "Community",
    description:
      "We host events and workshops that bring together founders, fellow entrepreneurs, experienced mentors, startups, and industry leaders in Chicago, one of the country's busiest startup hubs.",
    icon: Users,
  },
];
