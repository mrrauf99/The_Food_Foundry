import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { NewsletterForm } from "@/components/sections/shared/newsletter-form";
import { LinkedinIcon, InstagramIcon, XIcon, YoutubeIcon } from "@/components/icons/social-icons";
import { site } from "@/content/site";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "X", href: site.social.x, icon: XIcon },
  { label: "YouTube", href: site.social.youtube, icon: YoutubeIcon },
];

export function Newsletter() {
  return (
    <Section className="bg-teal-500 text-ink-950">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-4xl">Keep up with Food Foundry</h2>
        <p className="mt-3 text-ink-950/80">
          Get cohort announcements, Demo Day invites, and founder resources in your inbox.
        </p>
        <NewsletterForm className="mt-8 [&_input]:border-ink-950/15 [&_input]:bg-cream-50 [&_input]:text-ink-950 [&_input]:placeholder:text-ink-500" />
        <ul className="mt-10 flex justify-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-flex size-11 items-center justify-center rounded-full border border-ink-950/20 transition-colors hover:bg-ink-950/10"
              >
                <Icon className="size-5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
