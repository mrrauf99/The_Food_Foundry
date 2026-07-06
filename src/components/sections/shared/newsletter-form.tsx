"use client";

import { useActionState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { subscribeToNewsletter, type NewsletterState } from "@/actions/newsletter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialState: NewsletterState = { status: "idle" };

export function NewsletterForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(subscribeToNewsletter, initialState);

  if (state.status === "success") {
    return (
      <p className={`flex items-center gap-2 text-sm font-medium text-teal-300 ${className ?? ""}`}>
        <CheckCircle2 className="size-5" aria-hidden />
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className={`flex flex-col gap-3 sm:flex-row ${className ?? ""}`}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="you@company.com"
        className="border-cream-50/20 bg-cream-50/10 text-cream-50 placeholder:text-cream-100/50"
        aria-describedby={state.status === "error" ? "newsletter-error" : undefined}
      />
      <Button type="submit" variant="secondary" disabled={pending} className="shrink-0">
        <Send className="size-4" aria-hidden />
        {pending ? "Signing up…" : "Sign up"}
      </Button>
      {state.status === "error" ? (
        <p id="newsletter-error" role="alert" className="text-sm text-red-300 sm:hidden">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
