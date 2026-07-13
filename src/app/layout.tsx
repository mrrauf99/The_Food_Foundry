import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { RouteProgress } from "@/components/layout/route-progress";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema } from "@/lib/seo/structured-data";
import { site } from "@/content/site";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Startup Accelerator for Food & Foodservice Founders`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  icons: {
    icon: "/images/brand/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} h-full`}
      // Browser extensions (QuillBot, Grammarly, password managers) inject
      // attributes onto <html> before React hydrates, which reads as a mismatch.
      // This suppresses the diff for this element's own attributes only —
      // real mismatches anywhere below it still surface.
      suppressHydrationWarning
    >
      <head>
        {/* Scroll-reveal sections render at opacity:0 until Framer Motion hydrates. */}
        <noscript>
          <style>{`.js-reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-cream-50 text-ink-950 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:rounded-md focus:bg-teal-500 focus:px-4 focus:py-2 focus:text-ink-950 focus:font-semibold"
        >
          Skip to content
        </a>
        <NuqsAdapter>
          <RouteProgress />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </NuqsAdapter>
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
