import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),
  email: z.string().trim().email("Enter a valid email address."),
  company: z.string().trim().optional(),
  message: z.string().trim().min(10, "Tell us a bit more (at least 10 characters)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
