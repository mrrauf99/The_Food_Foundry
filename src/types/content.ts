import type { LucideIcon } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  detail?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  websiteUrl?: string;
}

export interface Pillar {
  id: "funding" | "resources" | "community";
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineStep {
  id: string;
  order: number;
  title: string;
  duration: string;
  description: string;
  icon: LucideIcon;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  width: number;
  height: number;
  caption: string;
  /** YouTube video ID for the startup's official Demo Day pitch, if available. */
  videoId?: string;
}
