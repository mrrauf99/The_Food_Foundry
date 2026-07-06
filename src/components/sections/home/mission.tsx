import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

export function Mission() {
  return (
    <Section className="bg-ink-950 text-cream-50">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-300">
            Our Mission
          </p>
          <h2 className="font-display text-4xl leading-heading text-balance md:text-5xl">
            Helping grow the companies{" "}
            <span className="text-teal-400">disrupting foodservice.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="bg-cream-50 p-8 text-ink-700">
            <p className="leading-relaxed">
              <strong className="font-semibold text-ink-950">
                Food Foundry, a founder community and accelerator program built in
                collaboration with Relish Works and Gordon Food Service,
              </strong>{" "}
              advances innovative businesses who are reshaping the food and foodservice
              industry.
            </p>
            <p className="mt-3 leading-relaxed">
              From early-stage innovators to established industry leaders, Food Foundry
              cultivates a dynamic ecosystem of support through strategic investment, network
              access, guidance, and tailored programming.
            </p>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
