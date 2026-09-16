"use server";

import { contactFormSchema } from "@/lib/validations/contact";

type ContactFields = "firstName" | "lastName" | "email" | "company" | "message";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactFields, string>>;
  // Returned on error to refill the form; React resets uncontrolled fields after every action.
  values?: Record<ContactFields, string>;
}

function rawEntries(formData: FormData): Record<ContactFields, string> {
  return {
    firstName: String(formData.get("firstName") ?? ""),
    lastName: String(formData.get("lastName") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = rawEntries(formData);
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactFields, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactFields | undefined;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Please fix the errors below.", fieldErrors, values };
  }

  // UI-only by decision: nothing is stored or forwarded yet.
  return {
    status: "success",
    message: "Thanks for reaching out. We'll reply to the email you provided.",
  };
}
