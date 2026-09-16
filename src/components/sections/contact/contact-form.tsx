"use client";

import { useActionState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/actions/contact";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { contactLimits } from "@/lib/validations/contact";

const initialState: ContactFormState = { status: "idle" };

// Visual order, so focus lands on the first invalid field a user would reach.
const fieldOrder = ["firstName", "lastName", "email", "company", "message"] as const;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-error">
      {message}
    </p>
  );
}

export function ContactForm({ intent = "contact" }: { intent?: "apply" | "contact" }) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const errors = state.fieldErrors ?? {};
  const values = state.values;

  // After a failed submit, move focus to the first invalid field.
  useEffect(() => {
    if (state.status !== "error") return;
    const first = fieldOrder.find((name) => state.fieldErrors?.[name]);
    if (first) formRef.current?.querySelector<HTMLElement>(`#${first}`)?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-lg border border-teal-500/30 bg-teal-500/10 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-teal-700" aria-hidden />
        <p className="mt-4 text-lg font-semibold text-ink-950">{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-5">
      <p className="text-sm text-ink-700">
        Fields marked <span aria-hidden>*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <Label htmlFor="firstName" required>First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            required
            maxLength={contactLimits.name}
            defaultValue={values?.firstName}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          <FieldError id="firstName-error" message={errors.firstName} />
        </div>
        <div className="min-w-0">
          <Label htmlFor="lastName" required>Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            required
            maxLength={contactLimits.name}
            defaultValue={values?.lastName}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          <FieldError id="lastName-error" message={errors.lastName} />
        </div>
      </div>

      <div>
        <Label htmlFor="email" required>Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={contactLimits.email}
          defaultValue={values?.email}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        <FieldError id="email-error" message={errors.email} />
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          autoComplete="organization"
          maxLength={contactLimits.company}
          defaultValue={values?.company}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        <FieldError id="company-error" message={errors.company} />
      </div>

      <div>
        <Label htmlFor="message" required>Message</Label>
        {intent === "apply" ? (
          <p id="message-hint" className="-mt-0.5 mb-1.5 text-sm text-ink-700">
            What you&apos;re building, your stage, and your traction so far.
          </p>
        ) : null}
        <Textarea
          id="message"
          name="message"
          required
          maxLength={contactLimits.message}
          defaultValue={values?.message}
          aria-invalid={!!errors.message}
          aria-describedby={
            [intent === "apply" ? "message-hint" : null, errors.message ? "message-error" : null]
              .filter(Boolean)
              .join(" ") || undefined
          }
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      {state.status === "error" && !Object.keys(errors).length ? (
        <p role="alert" className="text-sm text-error">{state.message}</p>
      ) : null}

      <Button type="submit" disabled={pending} variant="secondary" size="lg" className="-rotate-1">
        {pending ? "Sending…" : intent === "apply" ? "Send Application" : "Get In Touch"}
      </Button>
    </form>
  );
}
