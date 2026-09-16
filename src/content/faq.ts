import type { FAQItem } from "@/types/content";

export const programFaq: FAQItem[] = [
  {
    id: "eligibility",
    question: "Who is eligible to apply?",
    answer:
      "Early-stage founders with a working product or prototype in food or foodservice: restaurant technology, CPG, supply chain, sustainability, or data and insights.",
  },
  {
    id: "equity",
    question: "Is the program equity-free?",
    answer:
      "Terms change from cohort to cohort. Cohort 6 startups received a $15K equity-free stipend. Ask us about the current cohort's terms when you apply.",
  },
  {
    id: "chicago-based",
    question: "Do I need to be based in Chicago?",
    answer:
      "No, but the program runs in person in Chicago. Expect to be here for key programming and Demo Day.",
  },
  {
    id: "demo-day",
    question: "What happens at Demo Day?",
    answer:
      "Each cohort ends with a public Demo Day, where founders pitch to investors, mentors, and industry leaders. Afterward, they join Food Foundry's alumni network.",
  },
  {
    id: "how-to-apply",
    question: "How do I apply?",
    answer:
      "Reach out through our contact page. We'll send details on the next cohort's application window and requirements.",
  },
];

// Reuses program entries so shared answers stay in sync.
export const homeFaq: FAQItem[] = [
  {
    id: "who-for",
    question: "Who is Food Foundry for?",
    answer:
      "Early-stage founders building technology, products, or services that improve food and foodservice. That includes restaurant tech, supply chain, sustainable packaging, and CPG.",
  },
  programFaq.find((item) => item.id === "equity")!,
  programFaq.find((item) => item.id === "chicago-based")!,
  {
    id: "gfs-connection",
    question: "How is Food Foundry connected to Gordon Food Service?",
    answer:
      "Relish Works, Gordon Food Service's innovation studio, built Food Foundry. That gives founders direct access to one of North America's largest foodservice distributors and its industry network.",
  },
  programFaq.find((item) => item.id === "how-to-apply")!,
];

export const contactFaq: FAQItem[] = [
  {
    id: "response-time",
    question: "How quickly will I hear back?",
    answer: "We read every inquiry and will reply to the email you provide.",
  },
  {
    id: "best-contact",
    question: "What's the best way to reach the team?",
    answer:
      "Use the form on this page, or email team@thefoodfoundry.com any time.",
  },
  {
    id: "visit",
    question: "Can I visit the office?",
    answer:
      "We're at 1 N Dearborn in downtown Chicago. Get in touch first so we can work around cohort programming and events.",
  },
];
