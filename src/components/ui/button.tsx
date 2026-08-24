import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // The press scale is the most-touched interaction on the site, so it gets the
  // fast token — anything slower than ~150ms stops feeling like a button. The
  // hover lift mirrors Card's affordance so buttons don't feel inert next to it.
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold tracking-wide transition-[color,background-color,border-color,transform] duration-[var(--duration-fast)] ease-out-soft hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-teal-500 text-ink-950 hover:bg-teal-400",
        secondary: "bg-gold-400 text-ink-950 hover:bg-gold-300",
        outline: "border border-current bg-transparent hover:bg-ink-950/5",
        ghost: "bg-transparent hover:bg-ink-950/5",
      },
      size: {
        md: "h-11 px-5",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonOwnProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = ButtonOwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonOwnProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && typeof props.href === "string") {
    const { href, ...rest } = props;
    return <Link href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
