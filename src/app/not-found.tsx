import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="bg-ink-950 text-cream-50">
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="font-display text-7xl text-teal-400">404</p>
        <h1 className="mt-4 font-display text-4xl">This page has left the kitchen</h1>
        <p className="mt-4 text-cream-100/75">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="secondary">
            Back to home
          </Button>
          <Button
            href="/startups"
            variant="outline"
            className="border-cream-50/30 text-cream-50 hover:bg-cream-50/10"
          >
            Meet our startups
          </Button>
        </div>
      </div>
    </Section>
  );
}
