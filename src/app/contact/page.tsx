import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { OfficeInfo } from "@/components/sections/contact/office-info";
import { MapEmbed } from "@/components/sections/contact/map-embed";
import { FaqSection } from "@/components/sections/shared/faq-section";
import { NewsletterForm } from "@/components/sections/shared/newsletter-form";
import { contactFaq } from "@/content/faq";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the Food Foundry team in Chicago — questions about the accelerator, partnerships, or applying to the next cohort.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Above-the-fold, like the home Hero — CSS stagger rather than Framer Motion
          so there's no wait on hydration and nothing sits at opacity:0 if JS fails. */}
      <Section className="bg-ink-950 text-cream-50">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="Contact"
          title="Get in touch"
          description="Questions about the program, partnerships, or applying to the next cohort — we'd love to hear from you."
          className="animate-fade-up mx-auto mb-12 [&_p]:text-cream-100/70"
        />
        <div
          className="animate-fade-up grid overflow-hidden rounded-lg bg-ink-900/60 md:grid-cols-2"
          style={{ animationDelay: "120ms" }}
        >
          <div className="bg-cream-50 p-8 text-ink-950 md:p-10">
            <ContactForm />
          </div>
          <div className="flex flex-col justify-between gap-10 p-8 md:p-10">
            <OfficeInfo />
            <MapEmbed />
          </div>
        </div>
      </Section>

      <FaqSection title="Frequently asked" items={contactFaq} className="bg-cream-50" />

      <Section className="bg-teal-500 text-ink-950">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl">Prefer email updates?</h2>
          <p className="mt-2 text-ink-950/80">
            Sign up for cohort announcements and founder resources.
          </p>
          <NewsletterForm className="mt-6 [&_input]:border-ink-950/15 [&_input]:bg-cream-50 [&_input]:text-ink-950 [&_input]:placeholder:text-ink-500" />
        </div>
      </Section>
    </>
  );
}
