import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function ValueChain() {
  return (
    <Section className="bg-ink-950 pt-4 text-cream-50 md:pt-8">
      <Reveal>
        <SectionHeading
          align="center"
          tone="dark"
          title="Innovating in the middle of the foodservice value chain"
          description="Between the farm and the fork are the distributors, warehouses, and restaurants that get food to people. That's where Gordon Food Service works, and where Food Foundry founders build."
          className="max-w-3xl"
        />
      </Reveal>
      <Reveal delay={0.1} className="overflow-hidden">
        {/* Wrapper matches the image box so the bracket can use the drawing's
            percentages. Oversized on phones to crop the PNG's empty margins. */}
        <div className="relative mt-6 -ml-[18%] w-[136%] md:mx-auto md:mt-8 md:w-full">
          <Image
            src="/images/hero/home-mission.png"
            alt="Hand-drawn illustration of the foodservice value chain: a tractor, a delivery truck, a hand truck with a box, a restaurant, and a fork and knife, linked by arrows. A bracket marks the truck, hand truck, and restaurant as the middle."
            width={2606}
            height={619}
            sizes="(min-width: 1152px) 1152px, 136vw"
            className="h-auto w-full"
          />
          {/* Spans the truck, hand truck, and restaurant. */}
          <div aria-hidden className="absolute top-[73%] right-[28%] left-[34%]">
            <div className="h-2 border-x-2 border-b-2 border-teal-400" />
            <p className="mt-1.5 text-center text-xs font-semibold whitespace-nowrap text-teal-300 sm:mt-2 sm:text-sm">
              The middle<span className="hidden sm:inline">, where our founders build</span>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
