"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { heroContent } from "@/data/hero";
import { staticReveal, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

function HeroTrustedBy({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = prefersReducedMotion
    ? staticReveal
    : {
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition,
        },
      };

  return (
    <motion.div
      className={cn("space-y-5", className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : 0.05,
            delayChildren: prefersReducedMotion ? 0 : 0.45,
          },
        },
      }}
    >
      <p className="text-eyebrow uppercase text-muted-foreground">
        {heroContent.trustedBy.label}
      </p>

      <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
        {heroContent.trustedBy.logos.map((logo) => (
          <motion.li key={logo.name} variants={itemVariants}>
            <div className="text-muted-foreground/50">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={32}
                className="h-6 w-auto opacity-60"
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export { HeroTrustedBy };
