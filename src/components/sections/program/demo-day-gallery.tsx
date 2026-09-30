"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { demoDayPhotos } from "@/content/gallery";

const MAIN_SIZES = "(min-width: 768px) 720px, 90vw";
const THUMB_SIZES = "160px";
const AUTOPLAY_MS = 2500;

export function DemoDayGallery() {
  const [{ index, previous }, setSlide] = useState<{ index: number; previous: number | null }>({
    index: 0,
    previous: null,
  });
  const setIndex = (next: number | ((current: number) => number)) =>
    setSlide((s) => ({
      index: typeof next === "function" ? next(s.index) : next,
      previous: s.index,
    }));
  const photo = demoDayPhotos[index];
  const total = demoDayPhotos.length;
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);

  // Restarts on every index change, so a manual pick gets a full interval too.
  useEffect(() => {
    if (reduced || paused) return;
    const timer = setTimeout(
      () => setSlide((s) => ({ index: (s.index + 1) % total, previous: s.index })),
      AUTOPLAY_MS,
    );
    return () => clearTimeout(timer);
  }, [index, reduced, paused, total]);

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
      <div
        className="relative mx-auto max-w-[720px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Every slide stays mounted and eagerly loaded, so switching is just an opacity change.
            The previous slide stays opaque underneath while the new one fades in on top, so the
            gold background never shows through mid-transition. */}
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-soft">
          {demoDayPhotos.map((slide, i) => (
            <Image
              key={slide.id}
              src={slide.src}
              alt={i === index ? slide.caption : ""}
              aria-hidden={i !== index}
              fill
              sizes={MAIN_SIZES}
              quality={90}
              loading="eager"
              className={cn(
                "object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none",
                i === index
                  ? "z-10 opacity-100"
                  : i === previous
                    ? "z-0 opacity-100"
                    : "z-0 opacity-0",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Previous photo"
          className="absolute top-1/2 -left-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-ink-950 shadow-soft transition-colors duration-[var(--duration-fast)] ease-out-soft hover:bg-ink-950 hover:text-cream-50 active:bg-ink-800 active:text-cream-50 lg:-left-14"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label="Next photo"
          className="absolute top-1/2 -right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-ink-950 shadow-soft transition-colors duration-[var(--duration-fast)] ease-out-soft hover:bg-ink-950 hover:text-cream-50 active:bg-ink-800 active:text-cream-50 lg:-right-14"
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
