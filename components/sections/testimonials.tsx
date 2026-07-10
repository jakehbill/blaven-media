"use client";

import { motion, useReducedMotion } from "framer-motion";

import { TestimonialItem } from "@/components/sections/testimonial-item";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { testimonialsContent } from "@/data/testimonials";
import { fadeInUp, staticReveal, transition } from "@/lib/motion";

function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const revealVariant = prefersReducedMotion ? staticReveal : fadeInUp;

  return (
    <Section
      id="testimonials"
      spacing="lg"
      border="top"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="max-w-prose">
          <MotionReveal>
            <Text variant="eyebrow">{testimonialsContent.label}</Text>
          </MotionReveal>

          <MotionReveal className="mt-6" delay={0.05}>
            <Heading id="testimonials-heading" level="h2">
              {testimonialsContent.heading}
            </Heading>
          </MotionReveal>

          <MotionReveal className="mt-6" delay={0.1}>
            <Text variant="body-lg" className="text-foreground/85">
              {testimonialsContent.introduction}
            </Text>
          </MotionReveal>
        </div>

        <motion.ul
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8"
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
          {testimonialsContent.items.map((testimonial) => (
            <motion.li
              key={testimonial.id}
              variants={revealVariant}
              transition={transition}
              className="h-full"
            >
              <TestimonialItem testimonial={testimonial} />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}

export { Testimonials };
