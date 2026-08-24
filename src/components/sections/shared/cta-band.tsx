import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Section className="bg-ink-950 text-cream-50">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl leading-heading text-balance md:text-5xl">{title}</h2>
        <p className="mt-4 text-lg text-cream-100/75">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="secondary" size="lg">
            Apply Now
          </Button>
          <Button
            href="/program"
            variant="outline"
            size="lg"
            className="border-cream-50/30 text-cream-50 hover:bg-cream-50/10"
          >
            Learn About the Program
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
