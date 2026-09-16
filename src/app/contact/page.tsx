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
    "Reach the Food Foundry team in Chicago with questions about the accelerator, partnerships, or applying to the next cohort.",
  path: "/contact",
});

// Apply buttons link here with ?intent=apply; applications run through this form.
const copy = {
  apply: {
    eyebrow: "Apply",
    title: "Apply to the next cohort",
    description:
      "Tell us what you're building, what stage you're at, and where you're based. We'll reply with the next cohort's dates, terms, and requirements.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in touch",
    description:
      "Have a question about the program, a partnership, or applying to the next cohort? We'd love to hear from you.",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string | string[] }>;
}) {
  const { intent } = await searchParams;
  const mode = intent === "apply" ? "apply" : "contact";
  const { eyebrow, title, description } = copy[mode];

  return (
    <>
      {/* CSS animation, not Framer Motion: above the fold, it shouldn't wait on hydration. */}
      <Section className="bg-ink-950 text-cream-50">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow={eyebrow}
          title={title}
          description={description}
          tone="dark"
          className="animate-fade-up mx-auto mb-12"
        />
        <div
          className="animate-fade-up grid grid-cols-1 overflow-hidden rounded-lg bg-ink-900/60 md:grid-cols-2"
          style={{ animationDelay: "120ms" }}
        >
          <div className="min-w-0 bg-cream-50 p-6 text-ink-950 sm:p-8 md:p-10">
            <ContactForm intent={mode} />
          </div>
          <div className="flex min-w-0 flex-col justify-between gap-10 p-6 sm:p-8 md:p-10">
            <OfficeInfo />
            <MapEmbed />
          </div>
        </div>
      </Section>

      <FaqSection title="Common questions" items={contactFaq} className="bg-cream-50" />

      <Section className="bg-teal-500 text-ink-950">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl">Prefer email updates?</h2>
          <p className="mt-2 text-ink-950">
            Get cohort announcements and founder resources by email.
          </p>
          <NewsletterForm className="mt-6" />
        </div>
      </Section>
    </>
  );
}
