"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { VideoThumbnail } from "@/components/ui/video-thumbnail";
import { cn } from "@/lib/utils";
import { demoDayPhotos } from "@/content/gallery";

const MAIN_SIZES = "(min-width: 1024px) 60vw, 90vw";
const THUMB_SIZES = "160px";

export function DemoDayGallery() {
  const [index, setIndex] = useState(0);
  const photo = demoDayPhotos[index];
  const total = demoDayPhotos.length;

  const goTo = (direction: 1 | -1) => {
    setIndex((current) => (current + direction + total) % total);
  };

  return (
    <Section className="bg-gold-400">
      <SectionHeading
        align="center"
        eyebrow="Demo Day 2024"
        title="If you missed Demo Day, meet Cohort 6"
        className="mx-auto mb-12 [&_h2]:text-ink-950"
      />
      <div className="relative mx-auto max-w-4xl">
        {photo.videoId ? (
          <VideoThumbnail
            key={photo.id}
            videoId={photo.videoId}
            src={photo.src}
            alt={photo.caption}
            sizes={MAIN_SIZES}
            aspectClassName="aspect-video"
            autoPlay
            className="shadow-soft"
          />
        ) : (
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-soft">
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes={MAIN_SIZES}
              className="object-cover"
            />
          </div>
        )}

        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Previous video"
          className="absolute top-1/2 -left-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-ink-950 shadow-soft transition-colors hover:bg-cream-100 md:-left-14"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label="Next video"
          className="absolute top-1/2 -right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-ink-950 shadow-soft transition-colors hover:bg-cream-100 md:-right-14"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <p className="mt-5 text-center text-sm font-medium text-ink-700">{photo.caption}</p>

      <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
        {demoDayPhotos.map((thumb, i) => (
          <button
            key={thumb.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show video ${i + 1} of ${total}: ${thumb.caption}`}
            aria-current={i === index}
            className={cn(
              "group relative aspect-video w-20 shrink-0 overflow-hidden rounded-md ring-2 transition-all sm:w-28",
              i === index
                ? "ring-ink-950"
                : "opacity-60 ring-transparent hover:opacity-100",
            )}
          >
            <Image src={thumb.src} alt={thumb.caption} fill sizes={THUMB_SIZES} className="object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-ink-950/10 transition-colors group-hover:bg-ink-950/25">
              <Play className="size-4 fill-cream-50 text-cream-50 drop-shadow" />
            </span>
          </button>
        ))}
      </div>
    </Section>
  );
}
