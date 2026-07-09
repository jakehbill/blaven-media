"use client";

import { motion, useReducedMotion } from "framer-motion";

import { HeroBackground } from "@/components/sections/hero-background";
import { HeroTrustedBy } from "@/components/sections/hero-trusted-by";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/typography";
import { heroContent } from "@/data/hero";
import { fadeInUp, staticReveal, transition } from "@/lib/motion";

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const revealVariant = prefersReducedMotion ? staticReveal : fadeInUp;

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden"
      aria-labelledby="hero-headline"
    >
      <HeroBackground />

      <Container className="relative z-10 py-24 md:py-32">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.08,
                delayChildren: prefersReducedMotion ? 0 : 0.12,
              },
            },
          }}
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
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            variants={revealVariant}
            transition={transition}
          >
            <Button
              variant="primary"
              size="default"
              render={<a href={heroContent.primaryCta.href} />}
            >
              {heroContent.primaryCta.label}
            </Button>

            <Button
              variant="secondary"
              size="default"
              render={<a href={heroContent.secondaryCta.href} />}
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          <div className="mt-16 md:mt-20">
            <HeroTrustedBy />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export { Hero };
