import type { Startup, StartupCategory, CategoryMeta } from "@/types/startup";
import { Utensils, Package, Truck, Leaf, BarChart3 } from "lucide-react";

export const categories: CategoryMeta[] = [
  { id: "restaurant-tech", label: "Restaurant Tech", icon: Utensils },
  { id: "cpg", label: "CPG & Food Products", icon: Package },
  { id: "supply-chain", label: "Supply Chain", icon: Truck },
  { id: "sustainability", label: "Sustainability", icon: Leaf },
  { id: "data-insights", label: "Data & Insights", icon: BarChart3 },
];

export const startups: Startup[] = [
  // Cohort 6 — 2024
  {
    slug: "appetronix",
    name: "Appetronix",
    cohort: 6,
    category: "restaurant-tech",
    description:
      "The first fully autonomous robotic restaurant that cooks made-to-order meals in a vending machine format.",
    logo: "/images/startups/appetronix.png",
    logoNeedsDarkBg: true,
    websiteUrl: "https://www.appetronix.com/",
    featured: true,
  },
  {
    slug: "encounter-ai",
    name: "Encounter AI",
    cohort: 6,
    category: "restaurant-tech",
    description:
      "Redefining the frontline worker experience with MAI, an AI drive-thru assistant.",
    logo: "/images/startups/encounter-ai.png",
    logoNeedsDarkBg: true,
    featured: true,
  },
  {
    slug: "foodini",
    name: "Foodini",
    cohort: 6,
    category: "restaurant-tech",
    description:
      "Matches the 173 million Americans with dietary needs to the venues and menus suitable for them.",
    logo: "/images/startups/foodini.png",
    websiteUrl: "https://foodini.co/",
    featured: true,
  },
  {
    slug: "let-us-nudge",
    name: "Let Us Nudge",
    cohort: 6,
    category: "restaurant-tech",
    description:
      "Restaurant seating technology that helps restaurants turn tables during busy times and fill seats during slow times through seamless, subtle nudge incentives.",
    logo: "/images/startups/let-us-nudge.png",
    logoNeedsDarkBg: true,
    websiteUrl: "https://letusnudge.com/",
  },
  {
    slug: "localyser",
    name: "Localyser",
    cohort: 6,
    category: "data-insights",
    description:
      "Helps multi-location restaurant brands turn online reviews into their most effective marketing tool by automating the tracking, replying, boosting, and analysis of reviews from one dashboard.",
    logo: "/images/startups/localyser.png",
    websiteUrl: "https://www.localyser.com/en",
  },

  // Cohort 5
  {
    slug: "the-crop-project",
    name: "The Crop Project",
    cohort: 5,
    category: "sustainability",
    description:
      "An agricultural processing and wholesale company devoted to bringing regenerative crops to market, beginning with Atlantic Sugar Kelp.",
    logo: "/images/startups/the-crop-project.png",
    websiteUrl: "https://www.thecropproject.com/",
  },
  {
    slug: "czero",
    name: "CZero",
    cohort: 5,
    category: "supply-chain",
    description:
      "CZero Foods is building the new fulfillment cold-chain, making it carbon-neutral and cost-accessible for food CPG brands of all sizes and stages of growth.",
    logo: "/images/startups/czero.png",
  },
  {
    slug: "flexsea",
    name: "FlexSea",
    cohort: 5,
    category: "sustainability",
    description:
      "Developing home-compostable, naturally degradable film and packaging derived from seaweed to tackle the global plastic pollution crisis.",
    logo: "/images/startups/flexsea.png",
    websiteUrl: "https://flex-sea.com/",
    featured: true,
  },
  {
    slug: "supplynow",
    name: "SupplyNow",
    cohort: 5,
    category: "supply-chain",
    description:
      "A digital purchasing and logistics solution that provides on-demand supplies to restaurants to navigate supply chain failures.",
    logo: "/images/startups/supplynow.png",
    websiteUrl: "https://www.supplynow.org/",
  },
  {
    slug: "freshpost",
    name: "FreshPost",
    cohort: 5,
    category: "supply-chain",
    description:
      "Enabling retailers of perishable goods to offer secure, branded out-of-home delivery through modular, temperature-controlled locker systems.",
    logo: "/images/startups/freshpost.png",
  },

  // Cohort 4
  {
    slug: "confetti-snacks",
    name: "Confetti Snacks",
    cohort: 4,
    category: "cpg",
    description:
      "Makes vegetable and mushroom chips from upcycled ingredients with adventurous, globally inspired flavors.",
    logo: "/images/startups/confetti-snacks.png",
    websiteUrl: "https://us.confettisnacks.com/",
  },
  {
    slug: "just-date",
    name: "Just Date",
    cohort: 4,
    category: "cpg",
    description:
      "Making organic sweeteners from whole fruit ingredients — low glycemic index, vegan, nutrient-dense, and packed with antioxidants.",
    logo: "/images/startups/just-date.png",
    websiteUrl: "https://enjoyjustdate.com/",
  },
  {
    slug: "mr-bing",
    name: "Mr. Bing",
    cohort: 4,
    category: "cpg",
    description:
      "Capturing the most exciting elements of modern Chinese food and interpreting them into accessible condiments and ingredients for the modern American cook.",
    logo: "/images/startups/mr-bing.png",
    websiteUrl: "https://mr-bing.com/",
  },
  {
    slug: "phils-finest",
    name: "Phil's Finest",
    cohort: 4,
    category: "cpg",
    description:
      "Pairs humanely-raised meats with delicious, nutritious veggies — starting with chicken sausages and ground beef mixes.",
    logo: "/images/startups/phils-finest.png",
    websiteUrl: "https://www.philsfinest.com/",
  },
  {
    slug: "san-franola",
    name: "San Franola",
    cohort: 4,
    category: "cpg",
    description: "Making unprocessed cereal and snacks — for schools, for families, for everyone.",
    logo: "/images/startups/san-franola.png",
    websiteUrl: "https://sanfranola.com/",
  },
  {
    slug: "stellar-eats",
    name: "Stellar Eats",
    cohort: 4,
    category: "cpg",
    description:
      "Creating a line of unique baking mixes made with 8 or fewer real food ingredients — healthy eating made easy, enjoyable, and empowering.",
    logo: "/images/startups/stellar-eats.png",
    websiteUrl: "https://stellareats.com/en-us",
  },
  {
    slug: "tomato-bliss",
    name: "Tomato Bliss",
    cohort: 4,
    category: "cpg",
    description:
      "Making a new kind of tomato soup — natural sweetness and umami from premium heirloom tomatoes and globally-inspired spices.",
    logo: "/images/startups/tomato-bliss.png",
    websiteUrl: "https://tomatobliss.com/",
  },

  // Cohort 3
  {
    slug: "ez-chow",
    name: "EZ Chow",
    cohort: 3,
    category: "restaurant-tech",
    description: "Provides multi-channel digital ordering for restaurants and hospitality organizations.",
    logo: "/images/startups/ez-chow.png",
    websiteUrl: "https://ez-chow.com/",
  },
  {
    slug: "tavolo",
    name: "Tavolo",
    cohort: 3,
    category: "restaurant-tech",
    description:
      "An app that introduces contactless dining — reserve a table, order menu items, and pay for meals, while using AI to analyze restaurant metrics and improve the customer experience.",
    logo: "/images/startups/tavolo.png",
    websiteUrl: "https://www.tavolo.ai/",
  },
  {
    slug: "forever-ware",
    name: "Forever Ware",
    cohort: 3,
    category: "sustainability",
    description:
      "Makes trash-free takeout and delivery a reality by stocking restaurants and grocery stores with smart, reusable containers and cups that customers can borrow and return.",
    logo: "/images/startups/forever-ware.png",
    websiteUrl: "https://foreverware.org/",
  },
  {
    slug: "sampoll",
    name: "Sampoll",
    cohort: 3,
    category: "data-insights",
    description:
      "Provides innovative Click-to-Brick SaaS solutions for better food and beverage product trial experiences and voice-of-customer insights.",
    logo: "/images/startups/sampoll.png",
    websiteUrl: "https://www.trysampoll.com/",
  },

  // Cohort 2
  {
    slug: "sociavore",
    name: "Sociavore",
    cohort: 2,
    category: "restaurant-tech",
    description: "A website builder and ecommerce platform for restaurants.",
    logo: "/images/startups/sociavore.png",
    websiteUrl: "https://www.sociavore.co/",
  },
  {
    slug: "bikky",
    name: "Bikky",
    cohort: 2,
    category: "restaurant-tech",
    description: "An omni-channel CRM for restaurants.",
    logo: "/images/startups/bikky.png",
    websiteUrl: "https://www.bikky.com/",
  },
  {
    slug: "ojaexpress",
    name: "OjaExpress",
    cohort: 2,
    category: "supply-chain",
    description: "An ethnic grocery delivery marketplace.",
  },
  {
    slug: "retail-aware",
    name: "Retail Aware",
    cohort: 2,
    category: "data-insights",
    description: "A sensor-driven business intelligence platform for brands and retailers.",
    logo: "/images/startups/retail-aware.png",
    websiteUrl: "https://www.retailaware.com/",
    featured: true,
  },
  {
    slug: "science-on-call",
    name: "Science On Call",
    cohort: 2,
    category: "restaurant-tech",
    description: "The IT helpdesk for restaurants.",
    logo: "/images/startups/science-on-call.png",
    websiteUrl: "https://scienceoncall.com/",
  },

  // Cohort 1
  {
    slug: "86-repairs",
    name: "86 Repairs",
    cohort: 1,
    category: "restaurant-tech",
    description: "A subscription service that manages the entire repair process for restaurant groups.",
    logo: "/images/startups/86-repairs.png",
    websiteUrl: "https://www.86repairs.com/",
  },
  {
    slug: "big-wheelbarrow",
    name: "Big Wheelbarrow",
    cohort: 1,
    category: "supply-chain",
    description: "A SaaS solution that helps organizations create and manage localized food supply chains.",
    logo: "/images/startups/big-wheelbarrow.png",
    websiteUrl: "https://bigwheelbarrow.com/",
  },
  {
    slug: "pod-foods",
    name: "Pod Foods",
    cohort: 1,
    category: "supply-chain",
    description: "Reimagining distribution with B2B supply chain software.",
    logo: "/images/startups/pod-foods.png",
    websiteUrl: "https://podfoods.co/",
    featured: true,
  },
  {
    slug: "workchew",
    name: "WorkChew",
    cohort: 1,
    category: "restaurant-tech",
    description: "Connects individuals to workspace in restaurants.",
    logo: "/images/startups/workchew.png",
  },
];

export function getStartupsByCohort(cohort: number) {
  return startups.filter((s) => s.cohort === cohort);
}

export function getFeaturedStartups() {
  return startups.filter((s) => s.featured);
}

export function getCategoryMeta(id: StartupCategory) {
  return categories.find((c) => c.id === id)!;
}

export function filterStartups({
  q,
  cohort,
  category,
}: {
  q: string;
  cohort: string;
  category: string[];
}) {
  const query = q.trim().toLowerCase();
  return startups.filter((s) => {
    const matchesQuery =
      query.length === 0 ||
      s.name.toLowerCase().includes(query) ||
      s.description.toLowerCase().includes(query);
    const matchesCohort = cohort === "all" || s.cohort === Number(cohort);
    const matchesCategory = category.length === 0 || category.includes(s.category);
    return matchesQuery && matchesCohort && matchesCategory;
  });
}
