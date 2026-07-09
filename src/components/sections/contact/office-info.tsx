import { MapPin, Mail } from "lucide-react";
import { LinkedinIcon, InstagramIcon, XIcon, YoutubeIcon } from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "X", href: site.social.x, icon: XIcon },
  { label: "YouTube", href: site.social.youtube, icon: YoutubeIcon },
];

export function OfficeInfo() {
  return (
    <div className="text-cream-50">
      <div className="flex items-start gap-3">
        <MapPin className="mt-1 size-5 shrink-0 text-gold-400" aria-hidden />
        <p>
          {site.address.line1}
          <br />
          {site.address.line2}
        </p>
      </div>

      <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-teal-300">Email Us</p>
      <Button href={`mailto:${site.email}`} variant="secondary" size="md" className="mt-3">
        <Mail className="size-4" aria-hidden />
        {site.email}
      </Button>

      <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-teal-300">Follow Us</p>
      <ul className="mt-3 flex gap-3">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="inline-flex size-11 items-center justify-center rounded-full border border-cream-50/20 transition-colors hover:border-teal-400 hover:text-teal-300"
            >
              <Icon className="size-5" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
