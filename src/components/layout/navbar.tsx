"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { primaryNav } from "@/content/site";
import { NavDrawer } from "@/components/layout/nav-drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  // Storing *which* route the drawer was opened on, rather than a bare boolean,
  // means navigation closes it for free — including browser back/forward — with no
  // effect syncing the two pieces of state.
  const [openPath, setOpenPath] = React.useState<string | null>(null);
  const open = openPath === pathname;

  const close = React.useCallback(() => setOpenPath(null), []);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-50/10 bg-ink-950/95 backdrop-blur supports-backdrop-filter:bg-ink-950/80">
      {/* Separates the sticky header from content once you've scrolled. A gradient
          layer whose opacity animates, rather than a transitioned box-shadow —
          shadow transitions repaint the whole header on every frame. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-full h-6 bg-linear-to-b from-ink-950/25 to-transparent transition-opacity duration-[var(--duration-base)] ease-out-soft",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="relative h-8 w-40 shrink-0" aria-label="Food Foundry home">
          <Image
            src="/images/brand/ff-wordmark.png"
            alt="Food Foundry"
            fill
            sizes="160px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-sm font-semibold transition-colors duration-[var(--duration-fast)]",
                  active ? "text-gold-400" : "text-cream-50 hover:text-teal-300",
                )}
              >
                {link.label}
                {active ? (
                  // Shared layoutId: the underline travels to the new link on
                  // navigation instead of blinking out and in somewhere else.
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-gold-400"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="secondary" size="md">
            Apply Now
          </Button>
        </div>

        {/* Swap `md:hidden` for `hidden` here (and drop the desktop <nav> above)
            to make the drawer the only navigation at every width. */}
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-cream-50 transition-[color,transform] duration-[var(--duration-fast)] ease-out-soft hover:text-teal-300 active:scale-90 motion-reduce:active:scale-100 md:hidden"
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpenPath(pathname)}
        >
          <Menu className="size-6" aria-hidden />
        </button>
      </div>

      <NavDrawer open={open} onClose={close} />
    </header>
  );
}
