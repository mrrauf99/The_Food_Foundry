import type { Cohort } from "@/types/startup";

export const cohorts: Cohort[] = [
  {
    number: 6,
    label: "Cohort 6",
    year: "2024",
    description:
      "Five startups leveraging the metaverse, Web3, AR/VR, front-of-house automation, retail tech, and AI to reshape the restaurant experience.",
  },
  {
    number: 5,
    label: "Cohort 5",
    year: "2023",
    description:
      "Five early-stage companies tackling supply chain resilience and sustainable packaging for the foodservice industry.",
  },
  {
    number: 4,
    label: "Cohort 4",
    year: "",
    description:
      "Seven food companies headed toward foodservice, from upcycled snacks to better-for-you condiments and proteins.",
  },
  {
    number: 3,
    label: "Cohort 3",
    year: "",
    description:
      "Four companies fueling the future of restaurant ordering, dining, and reusable packaging.",
  },
  {
    number: 2,
    label: "Cohort 2",
    year: "2019",
    description:
      "Five startups spanning restaurant commerce, CRM, grocery delivery, and retail intelligence.",
  },
  {
    number: 1,
    label: "Cohort 1",
    year: "",
    description:
      "The founding cohort — four companies that launched Food Foundry's track record in restaurant and supply chain innovation.",
  },
];

export function getCohort(number: Cohort["number"]) {
  return cohorts.find((c) => c.number === number);
}
