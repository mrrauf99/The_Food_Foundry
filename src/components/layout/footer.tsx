import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon, XIcon, YoutubeIcon } from "@/components/icons/social-icons";
import { site, footerNav } from "@/content/site";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "X", href: site.social.x, icon: XIcon },
  { label: "YouTube", href: site.social.youtube, icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-cream-50/10 bg-ink-950 text-cream-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="relative h-8 w-40">
              <Image
                src="/images/brand/ff-wordmark.png"
                alt="Food Foundry"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/70">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cream-100/50">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream-50 hover:text-teal-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cream-100/50">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-cream-50">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal-400" aria-hidden />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-teal-400" aria-hidden />
                <a href={`mailto:${site.email}`} className="hover:text-teal-300">
                  {site.email}
                </a>
              </li>
            </ul>
            <ul className="mt-5 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-cream-50/15 text-cream-50 transition-colors hover:border-teal-400 hover:text-teal-300"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream-50/10 pt-6 text-xs text-cream-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Food Foundry. All rights reserved.</p>
          <p>Built by founders, for founders — Chicago, IL.</p>
        </div>
      </div>
    </footer>
  );
}
