"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().email("Enter a valid email address."),
});

export interface NewsletterState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const parsed = schema.safeParse({ email: formData.get("email") });

  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Invalid email." };
  }

  // NOTE: no email service provider is connected yet. Wire this up to your ESP
  // (e.g. Resend, Mailchimp, Klaviyo) before relying on this in production.
  return { status: "success", message: "You're on the list — thanks for signing up." };
}
