"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoThumbnailProps {
  videoId: string;
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  autoPlay?: boolean;
  aspectClassName?: string;
}

export function VideoThumbnail({
  videoId,
  src,
  alt,
  sizes,
  className,
  autoPlay = false,
  aspectClassName = "aspect-4/3",
}: VideoThumbnailProps) {
  const [playing, setPlaying] = useState(autoPlay);
  const [startedByUser, setStartedByUser] = useState(false);

  if (playing) {
    const muted = autoPlay && !startedByUser;
    return (
      <div
        className={cn("relative overflow-hidden rounded-lg bg-ink-950", aspectClassName, className)}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1${muted ? "&mute=1" : ""}`}
          title={alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setStartedByUser(true);
        setPlaying(true);
      }}
      aria-label={`Play video: ${alt}`}
      className={cn(
        "group relative w-full cursor-pointer overflow-hidden rounded-lg",
        aspectClassName,
        className,
      )}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      <span className="absolute inset-0 flex items-center justify-center bg-ink-950/15 transition-colors group-hover:bg-ink-950/35">
        <span className="flex size-14 items-center justify-center rounded-full bg-cream-50 shadow-soft transition-transform group-hover:scale-110">
          <Play className="size-6 translate-x-0.5 fill-ink-950 text-ink-950" />
        </span>
      </span>
    </button>
  );
}
