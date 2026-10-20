"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { revealTransition } from "@/components/common/motion";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      data-motion=""
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={revealTransition}
    >
      {children}
    </motion.div>
  );
}
