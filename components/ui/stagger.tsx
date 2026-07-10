"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  fadeInUp,
  staticReveal,
  staggerContainer,
  transition,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

function Stagger({ children, className }: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={
        prefersReducedMotion ? { hidden: {}, visible: {} } : staggerContainer
      }
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={prefersReducedMotion ? staticReveal : fadeInUp}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export { Stagger, StaggerItem };
