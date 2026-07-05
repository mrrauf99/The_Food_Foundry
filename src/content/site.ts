export const site = {
  name: "Food Foundry",
  tagline:
    "A founder community and accelerator program for innovative businesses and visionary founders disrupting the food and foodservice industry.",
  url: "https://www.thefoodfoundry.com",
  email: "team@thefoodfoundry.com",
  address: {
    line1: "1 N Dearborn",
    line2: "Chicago, IL 60654",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/thefoodfoundrychi",
    instagram: "https://www.instagram.com/foodfoundrychi/",
    x: "https://twitter.com/FoodFoundryChi",
    youtube: "https://www.youtube.com/channel/UCt1-QK4mOshBANE6gl8yZbg",
  },
  partners: ["Relish Works", "Gordon Food Service", "1871"],
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Meet Our Startups", href: "/startups" },
  { label: "Our Accelerator Program", href: "/program" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = primaryNav;
