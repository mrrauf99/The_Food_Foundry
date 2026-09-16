"use client";

import { useActionState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { subscribeToNewsletter, type NewsletterState } from "@/actions/newsletter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const initialState: NewsletterState = { status: "idle" };

// Always rendered on the teal band, so all states use ink for contrast.
export function NewsletterForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(subscribeToNewsletter, initialState);

  if (state.status === "success") {
    return (
      <p
        role="status"
        className={cn("flex items-center justify-center gap-2 font-semibold text-ink-950", className)}
      >
        <CheckCircle2 className="size-5 shrink-0" aria-hidden />
        {state.message}
      </p>
    );
  }

  const hasError = state.status === "error";

  return (
    <form action={formAction} className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        name="email"
        type="email"
        required
        // Survives React's post-action form reset, so a typo can be fixed.
        defaultValue={state.email}
        placeholder="you@company.com"
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? "newsletter-error" : undefined}
        className="sm:flex-1"
      />
      <Button type="submit" variant="secondary" disabled={pending} className="shrink-0">
        <Send className="size-4" aria-hidden />
        {pending ? "Signing up…" : "Sign up"}
      </Button>
      {hasError ? (
        <p
          id="newsletter-error"
          role="alert"
          className="flex basis-full items-center gap-1.5 text-left text-sm font-semibold text-ink-950"
        >
          <AlertCircle className="size-4 shrink-0" aria-hidden />
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
