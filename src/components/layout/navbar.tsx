"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Menu } from "lucide-react";
import { primaryNav } from "@/content/site";
import { NavDrawer } from "@/components/layout/nav-drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = React.useState(false);

  // Keyed to the route it opened on, so any navigation (including back) closes it.
  const [openPath, setOpenPath] = React.useState<string | null>(null);
  const open = openPath === pathname;

  const close = React.useCallback(() => setOpenPath(null), []);

  // One persistent underline that only moves along x, measured inside the nav.
  // A shared layoutId measured page coordinates, so the scroll reset on
  // navigation made it fly in vertically.
  const navRef = React.useRef<HTMLElement>(null);
  const [underline, setUnderline] = React.useState<{ x: number; width: number } | null>(null);

  React.useLayoutEffect(() => {
    const measure = () => {
      const active = navRef.current?.querySelector<HTMLElement>('a[aria-current="page"]');
      setUnderline(active ? { x: active.offsetLeft, width: active.offsetWidth } : null);
    };
    measure();
    document.fonts.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-50/10 bg-ink-950">
      {/* Scroll shadow as a fading layer; animating box-shadow repaints every frame. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-full h-6 bg-linear-to-b from-ink-950/25 to-transparent transition-opacity duration-[var(--duration-base)] ease-out-soft",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="relative h-11 w-40 shrink-0" aria-label="Food Foundry home">
          <Image
            src="/images/brand/ff-wordmark.png"
            alt="Food Foundry"
            fill
            sizes="160px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav ref={navRef} className="relative hidden items-center gap-8 md:flex" aria-label="Primary">
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
              </Link>
            );
          })}
          {underline ? (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -bottom-0.5 left-0 h-0.5 w-px origin-left bg-gold-400"
              initial={false}
              animate={{ x: underline.x, scaleX: underline.width * 0.80 }}
              transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
            />
          ) : null}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact?intent=apply" variant="secondary" size="md">
            Apply Now
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button href="/contact?intent=apply" variant="secondary" size="md" className="px-4">
            Apply
          </Button>
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
      </div>

      <NavDrawer open={open} onClose={close} />
    </header>
  );
}
