"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-50/10 bg-ink-950/95 backdrop-blur supports-backdrop-filter:bg-ink-950/80">
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
                  "text-sm font-semibold transition-colors",
                  active ? "text-gold-400" : "text-cream-50 hover:text-teal-300",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="secondary" size="md">
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-cream-50 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-cream-50/10 bg-ink-950 px-6 pb-6 md:hidden"
        >
          <ul className="flex flex-col gap-1 pt-4">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-semibold",
                    pathname === link.href
                      ? "text-gold-400"
                      : "text-cream-50 hover:bg-cream-50/5",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            href="/contact"
            variant="secondary"
            size="md"
            className="mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
