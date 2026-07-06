import type { GalleryPhoto } from "@/types/content";

// Real Demo Day 2024 presenter photos, sourced from the current Food Foundry site.
// Video IDs are the official Cohort 6 pitch recordings from Food Foundry's YouTube channel
// (youtube.com/channel/UCt1-QK4mOshBANE6gl8yZbg), published 2024-06-19.
export const demoDayPhotos: GalleryPhoto[] = [
  {
    id: "let-us-nudge",
    src: "/images/hero/program-1.jpg",
    width: 720,
    height: 401,
    caption: "Let Us Nudge presenting at Demo Day 2024",
    videoId: "z5uJAcgvlPo",
  },
  {
    id: "appetronix",
    src: "/images/hero/program-2.jpg",
    width: 720,
    height: 401,
    caption: "Appetronix presenting at Demo Day 2024",
    videoId: "K46YajHyJg4",
  },
  {
    id: "localyser",
    src: "/images/hero/program-3.jpg",
    width: 720,
    height: 401,
    caption: "Localyser presenting at Demo Day 2024",
    videoId: "0aHoBAiKKVc",
  },
  {
    id: "encounter-ai",
    src: "/images/hero/program-4.jpg",
    width: 720,
    height: 401,
    caption: "Encounter AI presenting at Demo Day 2024",
    videoId: "KbMEVkBe5qQ",
  },
  {
    id: "foodini",
    src: "/images/hero/program-5.jpg",
    width: 720,
    height: 401,
    caption: "Foodini presenting at Demo Day 2024",
    videoId: "CsD33GNo6PE",
  },
];

export const programHeroPhoto = {
  src: "/images/hero/program-thumb-3.jpg",
  width: 4032,
  height: 3024,
};

export const programSecondaryPhoto = {
  src: "/images/hero/program-thumb-2.jpg",
  width: 4240,
  height: 2832,
};

export const homeHeroPhoto = {
  src: "/images/hero/home-hero.jpg",
  width: 2560,
  height: 1440,
};
