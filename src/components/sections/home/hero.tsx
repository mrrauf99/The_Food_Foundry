import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StatTile } from "@/components/ui/stat-tile";
import { impactStats } from "@/content/stats";
import { homeHeroPhoto } from "@/content/gallery";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-cream-50">
      <div className="absolute inset-0">
        <Image
          src={homeHeroPhoto.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/85 to-ink-950/60" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 pt-24 pb-14 md:pt-32 md:pb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
          Chicago · Founder Community &amp; Accelerator
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-display tracking-tight text-balance">
          For founders disrupting food{" "}
          <span className="text-teal-400">and foodservice.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/80 md:text-xl">
          Food Foundry is a founder community and accelerator program built with Relish Works
          and Gordon Food Service — advancing early-stage businesses through strategic
          investment, network access, and hands-on guidance.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="secondary" size="lg">
            Apply Now
          </Button>
          <Button
            href="/startups"
            variant="outline"
            size="lg"
            className="border-cream-50/30 text-cream-50 hover:bg-cream-50/10"
          >
            Meet Our Startups
          </Button>
        </div>

        <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-cream-50/10 pt-10">
          {impactStats.map((stat) => (
            <StatTile key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
