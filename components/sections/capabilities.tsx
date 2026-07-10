"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import {
  capabilitiesContent,
  type Capability,
} from "@/data/capabilities";
import { fadeInUp, staticReveal, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type CapabilityBlockProps = {
  capability: Capability;
  className?: string;
};

function CapabilityBlock({ capability, className }: CapabilityBlockProps) {
  return (
    <article
      tabIndex={0}
      className={cn(
        "group border-b border-border/60 py-10 transition-colors duration-300 last:border-b-0 md:py-12",
        "hover:border-border focus-within:border-border",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <div className="grid gap-6 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-10 lg:grid-cols-[5rem_minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16">
        <p className="font-mono text-xs tracking-[0.14em] text-stone transition-colors duration-300 group-hover:text-foreground/70">
          {capability.number}
        </p>

        <div className="space-y-4">
          <h3 className="text-h3 text-foreground transition-transform duration-500 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
            {capability.title}
          </h3>
          <Text
            variant="muted"
            className="max-w-prose text-[0.9375rem] leading-relaxed"
          >
            {capability.description}
          </Text>
        </div>

        <ul
          className={cn(
            "flex flex-wrap gap-x-5 gap-y-2 md:col-start-2 lg:col-start-3 lg:pt-1",
            "opacity-100",
            "md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-[max-height,opacity,transform] md:duration-500 md:ease-out",
            "md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-hover:translate-y-0",
            "md:group-focus-within:max-h-40 md:group-focus-within:opacity-100",
            "md:translate-y-1 md:group-hover:translate-y-0 md:group-focus-within:translate-y-0",
            "motion-reduce:md:max-h-none motion-reduce:md:translate-y-0 motion-reduce:md:opacity-100",
          )}
        >
          {capability.services.map((service) => (
            <li
              key={service}
              className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Capabilities() {
  const prefersReducedMotion = useReducedMotion();
  const revealVariant = prefersReducedMotion ? staticReveal : fadeInUp;

  return (
    <Section
      id="services"
      spacing="lg"
      border="top"
      aria-labelledby="capabilities-heading"
    >
      <Container>
        <div className="max-w-prose">
          <MotionReveal>
            <Text variant="eyebrow">{capabilitiesContent.label}</Text>
          </MotionReveal>

          <MotionReveal className="mt-6" delay={0.05}>
            <Heading id="capabilities-heading" level="h2">
              {capabilitiesContent.heading}
            </Heading>
          </MotionReveal>

          <MotionReveal className="mt-6" delay={0.1}>
            <Text variant="body-lg" className="text-foreground/85">
              {capabilitiesContent.introduction}
            </Text>
          </MotionReveal>
        </div>

        <motion.div
          className="mt-16 border-t border-border/60 md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8% 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.08,
                delayChildren: prefersReducedMotion ? 0 : 0.05,
              },
            },
          }}
        >
          {capabilitiesContent.items.map((capability) => (
            <motion.div
              key={capability.number}
              variants={revealVariant}
              transition={transition}
            >
              <CapabilityBlock capability={capability} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export { Capabilities, CapabilityBlock };
