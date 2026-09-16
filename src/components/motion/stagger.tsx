"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { duration, easeOutSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        // No stagger under reduced motion; instant one-by-one is still motion.
        visible: { transition: { staggerChildren: reduced ? 0 : 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn("js-reveal", className)}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduced ? 0 : duration.slow, ease: easeOutSoft },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
