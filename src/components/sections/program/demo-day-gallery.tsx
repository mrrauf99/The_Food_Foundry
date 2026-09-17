"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { duration, easeOutSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { demoDayPhotos } from "@/content/gallery";

const MAIN_SIZES = "(min-width: 768px) 720px, 90vw";
const THUMB_SIZES = "160px";

export function DemoDayGallery() {
  const [index, setIndex] = useState(0);
  const photo = demoDayPhotos[index];
  const total = demoDayPhotos.length;
  const reduced = useReducedMotion();

  const goTo = (direction: 1 | -1) => {
    setIndex((current) => (current + direction + total) % total);
  };

  return (
    <Section className="bg-gold-400">
      <SectionHeading
        align="center"
        eyebrow="Demo Day 2024"
        title="If you missed Demo Day, meet Cohort 6"
        tone="accent"
        className="mx-auto mb-12"
      />
      {/* Capped at the photos' native 720px width; wider just upscales them. */}
      <div className="relative mx-auto max-w-[720px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={photo.id}
            initial={{ opacity: reduced ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: reduced ? 1 : 0 }}
            transition={{ duration: reduced ? 0 : duration.base, ease: easeOutSoft }}
          >
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-soft">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes={MAIN_SIZES}
                quality={90}
                className="object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Previous photo"
          className="absolute top-1/2 -left-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-ink-950 shadow-soft transition-colors hover:bg-cream-100 lg:-left-14"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label="Next photo"
          className="absolute top-1/2 -right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-ink-950 shadow-soft transition-colors hover:bg-cream-100 lg:-right-14"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>

      <p aria-live="polite" className="mt-5 text-center text-sm font-medium text-ink-700">
        {photo.caption}
      </p>

      <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
        {demoDayPhotos.map((thumb, i) => (
          <button
            key={thumb.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1} of ${total}: ${thumb.caption}`}
            aria-current={i === index}
            className={cn(
              "relative aspect-video w-20 shrink-0 overflow-hidden rounded-md ring-2 transition-all duration-[var(--duration-fast)] ease-out-soft sm:w-28",
              i === index ? "ring-ink-950" : "opacity-60 ring-transparent hover:opacity-100",
            )}
          >
            <Image src={thumb.src} alt="" fill sizes={THUMB_SIZES} className="object-cover" />
          </button>
        ))}
      </div>
    </Section>
  );
}
