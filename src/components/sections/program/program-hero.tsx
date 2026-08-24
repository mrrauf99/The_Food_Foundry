import Image from "next/image";
import { Card } from "@/components/ui/card";
import { StatTile } from "@/components/ui/stat-tile";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { impactStats } from "@/content/stats";
import { programHeroPhoto } from "@/content/gallery";

export function ProgramHero() {
  return (
    <section className="bg-cream-100">
      {/* Above-the-fold, like the home Hero — CSS stagger rather than Framer Motion
          so there's no wait on hydration and nothing sits at opacity:0 if JS fails. */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-16 pb-12 md:grid-cols-2 md:items-center md:gap-16 md:pt-24">
        <Card
          className="animate-fade-up bg-cream-50 p-8 md:p-10"
          style={{ animationDelay: "60ms" }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
            The Program
          </p>
          <h1 className="font-display text-4xl leading-heading text-balance md:text-5xl">
            A leading <span className="text-teal-600">startup accelerator</span>
          </h1>
          <p className="mt-5 leading-relaxed text-ink-700">
            Food Foundry wrapped up its 6th cohort of visionary founders in 2024. Our team
            worked with five forward-thinking early-stage startups dedicated to
            revolutionizing customer experiences in the restaurant industry.
          </p>
          <p className="mt-3 leading-relaxed text-ink-700 italic">
            Think: leveraging advanced technologies such as the metaverse and virtual spaces,
            Web3, AR/VR, front-of-house automation, retail tech, AI enhancements, and more to
            shape the next generation of dining.
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
