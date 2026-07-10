"use client";

import { motion, useReducedMotion } from "framer-motion";

import { CaseStudyItem } from "@/components/sections/case-study-item";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { caseStudiesContent } from "@/data/case-studies";
import { fadeInUp, staticReveal, transition } from "@/lib/motion";

function CaseStudies() {
  const prefersReducedMotion = useReducedMotion();
  const revealVariant = prefersReducedMotion ? staticReveal : fadeInUp;

  return (
    <Section
      id="case-studies"
      spacing="lg"
      border="top"
      aria-labelledby="case-studies-heading"
    >
      <Container>
        <div className="max-w-prose">
          <MotionReveal>
            <Text variant="eyebrow">{caseStudiesContent.label}</Text>
          </MotionReveal>

          <MotionReveal className="mt-6" delay={0.05}>
            <Heading id="case-studies-heading" level="h2">
              {caseStudiesContent.heading}
            </Heading>
          </MotionReveal>

          <MotionReveal className="mt-6" delay={0.1}>
            <Text variant="body-lg" className="text-foreground/85">
              {caseStudiesContent.introduction}
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
                staggerChildren: prefersReducedMotion ? 0 : 0.1,
                delayChildren: prefersReducedMotion ? 0 : 0.05,
              },
            },
          }}
        >
          {caseStudiesContent.items.map((study, index) => (
            <motion.div
              key={study.id}
              variants={revealVariant}
              transition={transition}
            >
              <CaseStudyItem study={study} reverse={index % 2 === 1} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export { CaseStudies };
