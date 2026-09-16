import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { NewsletterForm } from "@/components/sections/shared/newsletter-form";

export function Newsletter() {
  return (
    <Section className="bg-teal-500 text-ink-950">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-4xl">Keep up with Food Foundry</h2>
        <p className="mt-3 text-ink-950">
          Cohort announcements, Demo Day invites, and founder resources, sent to your inbox.
        </p>
        <NewsletterForm className="mt-8" />
      </Reveal>
    </Section>
  );
}
