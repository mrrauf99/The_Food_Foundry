import { z } from "zod";

// Limits mirrored by maxLength on the form inputs, so the server stays the source of truth.
export const contactLimits = {
  name: 80,
  email: 254,
  company: 120,
  message: 4000,
} as const;

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required.")
    .max(contactLimits.name, `Keep this under ${contactLimits.name} characters.`),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required.")
    .max(contactLimits.name, `Keep this under ${contactLimits.name} characters.`),
  email: z
    .string()
    .trim()
    .max(contactLimits.email, `Keep this under ${contactLimits.email} characters.`)
    .email("Enter a valid email address."),
  company: z
    .string()
    .trim()
    .max(contactLimits.company, `Keep this under ${contactLimits.company} characters.`)
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (at least 10 characters).")
    .max(contactLimits.message, `Keep this under ${contactLimits.message} characters.`),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
