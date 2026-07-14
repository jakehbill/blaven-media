"use client";

import { SurfaceTexture } from "@/components/ui/surface-texture";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { aboutPageContent } from "@/data/about";

function AboutHero() {
  const { hero } = aboutPageContent;

  return (
    <Section
      id="about"
      spacing="lg"
      surface="dark"
      className="relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <SurfaceTexture variant="grain" tone="dark" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <MotionReveal>
            <Text variant="eyebrow">{hero.label}</Text>
          </MotionReveal>

          <MotionReveal className="mt-3" delay={0.05}>
            <Heading id="about-heading" level="h1" className="max-w-3xl">
              {hero.heading}
            </Heading>
          </MotionReveal>

          <div className="mt-6 max-w-prose space-y-4">
            {hero.paragraphs.map((paragraph, index) => (
              <MotionReveal key={paragraph} delay={0.1 + index * 0.05}>
                <Text
                  variant="body-lg"
                  className="leading-[1.55] text-foreground/85"
                >
                  {paragraph}
                </Text>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { AboutHero };
