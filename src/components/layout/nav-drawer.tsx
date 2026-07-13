"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, X } from "lucide-react";
import {
  LinkedinIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { primaryNav, site } from "@/content/site";
import { drawerSpring, duration, easeOutSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "X", href: site.social.x, icon: XIcon },
  { label: "YouTube", href: site.social.youtube, icon: YoutubeIcon },
];

const FOCUSABLE_SELECTOR = "a[href], button:not([disabled])";

export function NavDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  // The sticky header sets `backdrop-filter`, which makes it a containing block for
  // fixed-position descendants — a drawer rendered inside it would be clipped to the
  // header's 80px box. Portalling to <body> keeps it anchored to the viewport.
  //
  // No mount-guard state needed: this renders nothing on the server and nothing on
  // the first client render (the drawer starts closed), so there's no hydration diff.
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>{open ? <DrawerPanel onClose={onClose} /> : null}</AnimatePresence>,
    document.body,
  );
}

function DrawerPanel({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const panelRef = React.useRef<HTMLDivElement>(null);
  const closeRef = React.useRef<HTMLButtonElement>(null);

  // Freeze the page behind the drawer. Padding compensates for the scrollbar it
  // removes, so the sticky header doesn't jump sideways as the drawer opens.
  React.useEffect(() => {
    const { body } = document;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, []);

  // Escape closes, Tab cycles within the panel, and focus returns to whatever
  // opened it. Cleanup runs after the exit animation, so focus lands at the end.
  React.useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !panel.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  const itemVariants = {
    hidden: { opacity: 0, x: reduced ? 0 : 16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: reduced ? 0 : duration.base, ease: easeOutSoft },
    },
  };

  return (
    <div className="fixed inset-0 z-90">
      <motion.div
        aria-hidden
        onClick={onClose}
        className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduced ? 0 : duration.base, ease: easeOutSoft }}
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="absolute inset-y-0 right-0 flex w-[min(21rem,85vw)] flex-col border-l border-cream-50/10 bg-ink-950 shadow-[-16px_0_48px_-12px_rgb(0_0_0/0.5)]"
        initial={{ x: "100%" }}
        // Springs in from the edge it's anchored to, then leaves on a shorter
        // tween — an exit that lingers reads as lag when you're already moving on.
        animate={{ x: 0, transition: reduced ? { duration: 0 } : drawerSpring }}
        exit={{
          x: "100%",
          transition: reduced ? { duration: 0 } : { duration: duration.base, ease: easeOutSoft },
        }}
      >
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-cream-50/10 px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/50">
            Menu
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-cream-50 transition-[color,transform] duration-[var(--duration-fast)] ease-out-soft hover:text-teal-300 active:scale-90 motion-reduce:active:scale-100"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <motion.div
          className="flex-1 overflow-y-auto px-6 py-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduced ? 0 : 0.05,
                delayChildren: reduced ? 0 : 0.08,
              },
            },
          }}
        >
          <nav aria-label="Primary">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((link) => {
                const active = pathname === link.href;
                return (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group flex items-center justify-between gap-3 rounded-md px-3 py-3 font-display text-xl leading-heading transition-colors duration-[var(--duration-fast)]",
                        active
                          ? "text-gold-400"
                          : "text-cream-50 hover:bg-cream-50/5 hover:text-teal-300",
                      )}
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        aria-hidden
                        className="size-4 shrink-0 opacity-0 transition-[opacity,transform] duration-[var(--duration-fast)] ease-out-soft group-hover:translate-x-0.5 group-hover:opacity-60"
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <motion.div variants={itemVariants} className="mt-8">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={onClose}
            >
              Apply Now
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 border-t border-cream-50/10 pt-6"
          >
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-cream-100/70 transition-colors duration-[var(--duration-fast)] hover:text-teal-300"
            >
              <Mail className="size-4 shrink-0 text-teal-400" aria-hidden />
              {site.email}
            </a>
            <ul className="mt-5 flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-cream-50/15 text-cream-50 transition-[color,border-color,transform] duration-[var(--duration-fast)] ease-out-soft hover:border-teal-400 hover:text-teal-300 active:scale-90 motion-reduce:active:scale-100"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
