"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { whyThisMattersContent } from "@/data/why-this-matters";
import { fadeInUp, staticReveal, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FeatureBlockProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

function FeatureBlock({
  title,
  description,
  icon: Icon,
  className,
}: FeatureBlockProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <Icon
        className="size-5 stroke-[1.25] text-stone"
        aria-hidden
      />
      <h3 className="text-h4 text-foreground">{title}</h3>
      <Text variant="muted" className="text-[0.9375rem] leading-relaxed">
        {description}
      </Text>
    </div>
  );
}

function WhyThisMatters() {
  const prefersReducedMotion = useReducedMotion();
  const revealVariant = prefersReducedMotion ? staticReveal : fadeInUp;

  return (
    <Section
      id="why-this-matters"
      spacing="lg"
      border="top"
      aria-labelledby="why-this-matters-heading"
    >
      <Container>
        <div className="max-w-prose">
          <MotionReveal>
            <Text variant="eyebrow">{whyThisMattersContent.label}</Text>
          </MotionReveal>

          <MotionReveal className="mt-6" delay={0.05}>
            <Heading id="why-this-matters-heading" level="h2">
              {whyThisMattersContent.heading}
            </Heading>
          </MotionReveal>

          <div className="mt-10 space-y-6">
            {whyThisMattersContent.paragraphs.map((paragraph, index) => (
              <MotionReveal key={paragraph} delay={0.1 + index * 0.05}>
                <Text variant="body-lg" className="text-foreground/85">
                  {paragraph}
                </Text>
              </MotionReveal>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 border-t border-border/60 pt-16 md:mt-24 md:pt-20"
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
          <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
            {whyThisMattersContent.features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={revealVariant}
                transition={transition}
              >
                <FeatureBlock
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export { WhyThisMatters, FeatureBlock };
