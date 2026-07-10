"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

import {
  fadeIn,
  fadeInUp,
  staticReveal,
  transition,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

const variantMap = {
  fadeIn,
  fadeInUp,
} as const;

type MotionRevealProps = {
  children: ReactNode;
  variant?: keyof typeof variantMap;
  className?: string;
  delay?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

function MotionReveal({
  children,
  variant = "fadeInUp",
  className,
  delay = 0,
  ...props
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const selectedVariant: Variants = prefersReducedMotion
    ? staticReveal
    : variantMap[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={selectedVariant}
      transition={{ ...transition, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { MotionReveal };
