import { site } from "@/content/site";
import type { FAQItem } from "@/types/content";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60654",
      addressCountry: "US",
    },
    sameAs: [site.social.linkedin, site.social.instagram, site.social.x, site.social.youtube],
  };
}

export function faqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
