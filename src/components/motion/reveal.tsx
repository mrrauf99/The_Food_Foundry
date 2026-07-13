"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { duration, easeOutSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn("js-reveal", className)}
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduced ? 0 : duration.slow, ease: easeOutSoft, delay }}
    >
      {children}
    </motion.div>
  );
}
