"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/actions/contact";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-lg border border-teal-500/30 bg-teal-500/10 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-teal-600" aria-hidden />
        <p className="mt-4 text-lg font-semibold text-ink-950">{state.message}</p>
      </div>
    );
  }

  const errors = state.fieldErrors ?? {};

  return (
    <form action={formAction} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" autoComplete="given-name" aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? "firstName-error" : undefined} />
          {errors.firstName ? <p id="firstName-error" role="alert" className="mt-1 text-xs text-red-600">{errors.firstName}</p> : null}
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" autoComplete="family-name" aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? "lastName-error" : undefined} />
          {errors.lastName ? <p id="lastName-error" role="alert" className="mt-1 text-xs text-red-600">{errors.lastName}</p> : null}
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
        {errors.email ? <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" autoComplete="organization" />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message ? <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
      </div>

      {state.status === "error" && !Object.keys(errors).length ? (
        <p role="alert" className="text-sm text-red-600">{state.message}</p>
      ) : null}

      <Button type="submit" disabled={pending} variant="secondary" size="lg" className="-rotate-1">
        {pending ? "Sending…" : "Get In Touch"}
      </Button>
    </form>
  );
}
