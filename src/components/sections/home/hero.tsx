import Image from "next/image";
import { Button } from "@/components/ui/button";
import { homeHeroPhoto } from "@/content/gallery";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-cream-50">
      {/* Offset and left-anchored so the speaker sits beside the headline, not under it. */}
      <div className="absolute inset-0 md:left-1/3">
        <Image
          src={homeHeroPhoto.src}
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 67vw, 100vw"
          className="object-cover object-left opacity-30 md:opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/40 to-ink-950/20" />
        <div className="absolute inset-0 hidden bg-linear-to-r from-ink-950 via-ink-950/60 to-transparent md:block" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 pt-24 pb-14 md:pt-32 md:pb-20">
        {/* CSS animation, not Framer Motion: above the fold, it shouldn't wait on hydration. */}
        <h1
          className="animate-fade-up max-w-3xl font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-display tracking-tight text-balance"
          style={{ animationDelay: "60ms" }}
        >
          For founders changing food{" "}
          <span className="text-teal-400">and foodservice.</span>
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-cream-100/85 md:text-xl"
          style={{ animationDelay: "140ms" }}
        >
          Food Foundry is a Chicago founder community and accelerator built with Relish Works
          and Gordon Food Service. We help early-stage businesses grow with investment, network
          access, and hands-on guidance.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "220ms" }}
        >
          <Button href="/contact?intent=apply" variant="secondary" size="lg">
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
        <p
          className="animate-fade-up mt-5 text-sm text-cream-100/70"
          style={{ animationDelay: "280ms" }}
        >
          Runs in person in Chicago. Cohort 6 founders received a $15K equity-free stipend.
        </p>
      </div>
    </section>
  );
}
