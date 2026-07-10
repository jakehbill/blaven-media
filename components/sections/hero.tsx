"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { HeroBackground } from "@/components/sections/hero-background";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LogoCloud } from "@/components/ui/logo-cloud";
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
      className="surface-dark relative flex min-h-[88svh] items-center overflow-hidden md:min-h-svh"
      aria-labelledby="hero-headline"
    >
      <HeroBackground />

      <Container className="relative z-10 py-16 md:py-24">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={
            prefersReducedMotion
              ? { hidden: {}, visible: {} }
              : staggerContainer
          }
        >
          <motion.div variants={revealVariant} transition={transition}>
            <Text variant="eyebrow">{heroContent.eyebrow}</Text>
          </motion.div>

          <motion.div
            className="mt-6"
            variants={revealVariant}
            transition={transition}
          >
            <Heading id="hero-headline" level="h1" className="max-w-2xl">
              {heroContent.headline}
            </Heading>
          </motion.div>

          <motion.div
            className="mt-6"
            variants={revealVariant}
            transition={transition}
          >
            <Text variant="body-lg" width="prose">
              {heroContent.supportingCopy}
            </Text>
          </motion.div>

          <motion.div
            className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
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

          <motion.div
            className="mt-12 md:mt-14"
            variants={revealVariant}
            transition={transition}
          >
            <LogoCloud
              label={heroContent.trustedBy.label}
              logos={heroContent.trustedBy.logos}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export { Hero };
