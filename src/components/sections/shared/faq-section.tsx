import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageSchema } from "@/lib/seo/structured-data";
import type { FAQItem } from "@/types/content";

export function FaqSection({
  eyebrow = "FAQ",
  title,
  items,
  className,
}: {
  eyebrow?: string;
  title: string;
  items: FAQItem[];
  className?: string;
}) {
  return (
    <Section className={className}>
      <SectionHeading align="center" eyebrow={eyebrow} title={title} className="mx-auto mb-10" />
      <Accordion type="single" collapsible className="mx-auto max-w-3xl">
        <StaggerGroup>
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <AccordionItem value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Accordion>
      <JsonLd data={faqPageSchema(items)} />
    </Section>
  );
}
