import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { VideoThumbnail } from "@/components/ui/video-thumbnail";
import { demoDayPhotos } from "@/content/gallery";

const SIZES = "(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 90vw";

export function DemoDayGallery() {
  return (
    <Section className="bg-gold-400">
      <SectionHeading
        align="center"
        eyebrow="Demo Day 2024"
        title="If you missed Demo Day, meet Cohort 6"
        className="mx-auto mb-12 [&_h2]:text-ink-950"
      />
      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {demoDayPhotos.map((photo) => (
          <StaggerItem key={photo.id} className="overflow-hidden rounded-lg shadow-soft">
            {photo.videoId ? (
              <VideoThumbnail
                videoId={photo.videoId}
                src={photo.src}
                alt={photo.caption}
                sizes={SIZES}
              />
            ) : (
              <div className="relative aspect-4/3">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes={SIZES}
                  className="object-cover"
                />
              </div>
            )}
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
