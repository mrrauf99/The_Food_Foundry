import type { Pillar } from "@/types/content";
import { HandCoins, BookOpenCheck, Users } from "lucide-react";

export const pillars: Pillar[] = [
  {
    id: "funding",
    number: "01",
    title: "Funding Intros",
    description:
      "1:1 introductions to our extensive network of investors and venture capitalists, and connections to other funding opportunities to help our founders secure the financial support they need to thrive.",
    icon: HandCoins,
  },
  {
    id: "resources",
    number: "02",
    title: "Resources",
    description:
      "We facilitate connections for our founders to national foodservice business resources, offering specialized programming and access to exclusive events. Food Foundry also provides 1:1 support from our dedicated mentors, in-house entrepreneurs-in-residence, and our wider network of investors and industry experts.",
    icon: BookOpenCheck,
  },
  {
    id: "community",
    number: "03",
    title: "Community",
    description:
      "We organize a variety of events and workshops that bring together founders, like-minded entrepreneurs, experienced mentors, startups, and industry leaders in one of the most vibrant startup hubs in the nation, Chicago, Illinois.",
    icon: Users,
  },
];
