"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { aboutContent } from "@/data/about";
import { fadeInUp, staticReveal, transition } from "@/lib/motion";

function About() {
  const prefersReducedMotion = useReducedMotion();
  const revealVariant = prefersReducedMotion ? staticReveal : fadeInUp;

  return (
    <Section
      id="about"
      spacing="lg"
      border="top"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 xl:gap-28">
          <MotionReveal className="lg:sticky lg:top-28">
            <figure className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={aboutContent.portrait.src}
                  alt={aboutContent.portrait.alt}
                  fill
                  className="object-cover object-center opacity-90"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={false}
                />
              </div>
              <figcaption className="text-caption text-muted-foreground">
                {aboutContent.portrait.caption}
              </figcaption>
            </figure>
          </MotionReveal>

          <div className="min-w-0">
            <MotionReveal>
              <Text variant="eyebrow">{aboutContent.label}</Text>
            </MotionReveal>

            <MotionReveal className="mt-6" delay={0.05}>
              <Heading id="about-heading" level="h2">
                {aboutContent.heading}
              </Heading>
            </MotionReveal>

            <div className="mt-8 space-y-5 md:mt-10">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <MotionReveal key={paragraph} delay={0.1 + index * 0.05}>
                  <Text variant="body-lg" className="text-foreground/85">
                    {paragraph}
                  </Text>
                </MotionReveal>
              ))}
            </div>

            <motion.div
              className="mt-14 border-t border-border/60 pt-10 md:mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8% 0px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: prefersReducedMotion ? 0 : 0.06,
                    delayChildren: prefersReducedMotion ? 0 : 0.05,
                  },
                },
              }}
            >
              <motion.div variants={revealVariant} transition={transition}>
                <p className="text-eyebrow uppercase text-muted-foreground">
                  {aboutContent.experience.label}
                </p>
              </motion.div>

              <ul className="mt-6 divide-y divide-border/60 border-y border-border/60">
                {aboutContent.experience.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={revealVariant}
                    transition={transition}
                    className="py-4 text-[0.9375rem] text-foreground/85"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="mt-14 md:mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8% 0px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: prefersReducedMotion ? 0 : 0.05,
                    delayChildren: prefersReducedMotion ? 0 : 0.05,
                  },
                },
              }}
            >
              <motion.div variants={revealVariant} transition={transition}>
                <p className="text-eyebrow uppercase text-muted-foreground">
                  {aboutContent.clients.label}
                </p>
              </motion.div>

              <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6">
                {aboutContent.clients.logos.map((logo) => (
                  <motion.li
                    key={logo.name}
                    variants={revealVariant}
                    transition={transition}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={120}
                      height={32}
                      className="h-6 w-auto opacity-55"
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <MotionReveal className="mt-14 space-y-8 border-t border-border/60 pt-10 md:mt-16">
              <Text
                variant="body-lg"
                className="max-w-prose text-foreground/80"
              >
                {aboutContent.personalStatement}
              </Text>

              <Button
                variant="secondary"
                size="default"
                render={<a href={aboutContent.cta.href} />}
              >
                {aboutContent.cta.label}
              </Button>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { About };
