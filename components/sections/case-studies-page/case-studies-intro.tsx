"use client";

import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SurfaceTexture } from "@/components/ui/surface-texture";
import { Text } from "@/components/ui/typography";
import { caseStudiesContent } from "@/data/case-studies";

function CaseStudiesIntro() {
  return (
    <Section
      id="case-studies"
      spacing="lg"
      surface="light"
      className="relative overflow-hidden"
      aria-labelledby="case-studies-heading"
    >
      <SurfaceTexture variant="paper" tone="light" />

      <Container className="relative z-10">
        <SectionHeader
          id="case-studies-heading"
          label={caseStudiesContent.label}
          heading={caseStudiesContent.heading}
          labelSpacing="tight"
          className="max-w-3xl"
        />

        <div className="mt-6 max-w-prose space-y-4">
          {caseStudiesContent.introduction.map((paragraph, index) => (
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
      </Container>
    </Section>
  );
}

export { CaseStudiesIntro };
