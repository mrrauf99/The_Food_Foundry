"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("flex flex-wrap gap-2", className)}
    {...props}
  />
));
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "rounded-full border border-ink-950/12 px-4 py-2 text-sm font-semibold text-ink-700 transition-colors",
      "hover:border-teal-500/40 hover:text-ink-950",
      "data-[state=active]:border-teal-500 data-[state=active]:bg-teal-500 data-[state=active]:text-ink-950",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";
