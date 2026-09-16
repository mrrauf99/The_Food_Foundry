"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().email("Enter a valid email address."),
});

export interface NewsletterState {
  status: "idle" | "success" | "error";
  message?: string;
  // Returned on error to refill the input.
  email?: string;
}

export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "");
  const parsed = schema.safeParse({ email });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Enter a valid email address.",
      email,
    };
  }

  // TODO: connect an email provider; signups are not stored yet.
  return { status: "success", message: "You're on the list. Thanks for signing up." };
}
