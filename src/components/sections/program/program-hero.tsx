import Image from "next/image";
import { Card } from "@/components/ui/card";
import { StatTile } from "@/components/ui/stat-tile";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { impactStats } from "@/content/stats";
import { programHeroPhoto } from "@/content/gallery";

export function ProgramHero() {
  return (
    <section className="bg-cream-100">
      {/* CSS animation, not Framer Motion: above the fold, it shouldn't wait on hydration. */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-16 pb-12 md:grid-cols-2 md:items-center md:gap-16 md:pt-24">
        <Card
          className="animate-fade-up bg-cream-50 p-8 md:p-10"
          style={{ animationDelay: "60ms" }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-700">
            The Program
          </p>
          <h1 className="font-display text-4xl leading-heading text-balance md:text-5xl">
            A leading <span className="text-teal-600">startup accelerator</span>
          </h1>
          <p className="mt-5 leading-relaxed text-ink-700">
            Food Foundry wrapped up its sixth cohort in 2024. We worked with five early-stage
            startups focused on improving the customer experience in restaurants.
          </p>
          <p className="mt-3 leading-relaxed text-ink-700 italic">
            Think the metaverse and virtual spaces, Web3, AR/VR, front-of-house automation,
            retail tech, and AI, all aimed at the next generation of dining.
          </p>
        </Card>
        <div
          className="animate-fade-up relative aspect-4/3 overflow-hidden rounded-lg"
          style={{ animationDelay: "160ms" }}
        >
          <Image
            src={programHeroPhoto.src}
            alt="Founders and mentors gathered at a Food Foundry Demo Day event"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="border-t border-ink-950/8 bg-ink-950">
        <StaggerGroup className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
          {impactStats.map((stat) => (
            <StaggerItem key={stat.id}>
              <StatTile stat={stat} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
