"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { HeroBackground } from "@/components/sections/hero-background";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/typography";
import { heroContent } from "@/data/hero";
import {
  fadeInUp,
  staticReveal,
  staggerContainer,
  transition,
} from "@/lib/motion";

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const revealVariant = prefersReducedMotion ? staticReveal : fadeInUp;

  return (
    <section
      id="home"
      className="surface-dark relative overflow-hidden"
      aria-labelledby="hero-headline"
    >
      <HeroBackground />

      <Container className="relative z-10 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={
            prefersReducedMotion
              ? { hidden: {}, visible: {} }
              : staggerContainer
          }
        >
          <motion.div variants={revealVariant} transition={transition}>
            <Heading
              id="hero-headline"
              level="h1"
              className="mx-auto max-w-4xl text-pretty"
            >
              {heroContent.headline}
            </Heading>
          </motion.div>

          <motion.div
            className="mx-auto mt-5 max-w-prose space-y-4"
            variants={revealVariant}
            transition={transition}
          >
            {heroContent.supportingCopy.map((paragraph) => (
              <Text key={paragraph} variant="body-lg">
                {paragraph}
              </Text>
            ))}
          </motion.div>

          <motion.div
            className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
            variants={revealVariant}
            transition={transition}
          >
            <Button
              variant="primary"
              size="default"
              className="w-full sm:w-auto"
              render={<Link href={heroContent.primaryCta.href} />}
            >
              {heroContent.primaryCta.label}
            </Button>

            <Button
              variant="secondary"
              size="default"
              className="w-full sm:w-auto"
              render={<Link href={heroContent.secondaryCta.href} />}
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export { Hero };
