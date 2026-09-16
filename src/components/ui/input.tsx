import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-md border border-ink-950/15 bg-cream-50 px-4 text-sm text-ink-950 placeholder:text-ink-500 transition-colors focus-visible:border-ink-950 aria-invalid:border-error",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-32 w-full resize-y rounded-md border border-ink-950/15 bg-cream-50 px-4 py-3 text-sm text-ink-950 placeholder:text-ink-500 transition-colors focus-visible:border-ink-950 aria-invalid:border-error",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export function Label({
  className,
  required,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) {
  return (
    <label className={cn("mb-1.5 block text-sm font-medium text-ink-950", className)} {...props}>
      {children}
      {required ? (
        <span aria-hidden className="ml-0.5 text-error">
          *
        </span>
      ) : null}
    </label>
  );
}
