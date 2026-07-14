"use client";

import { MountainAtmosphere } from "@/components/sections/mountain-atmosphere";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/typography";
import { aboutPageContent } from "@/data/about";

function WhyBlaven() {
  const { whyBlaven } = aboutPageContent;

  return (
    <Section
      id="why-blaven"
      spacing="md"
      surface="grey"
      className="relative overflow-hidden"
      aria-labelledby="why-blaven-heading"
    >
      <MountainAtmosphere tone="light" />

      <Container className="relative z-10">
        <SectionHeader
          id="why-blaven-heading"
          label={whyBlaven.label}
          heading={whyBlaven.heading}
          labelSpacing="tight"
          className="max-w-5xl"
        />

        <div className="mt-5 max-w-prose-wide space-y-4">
          {whyBlaven.paragraphs.map((paragraph, index) => (
            <MotionReveal key={paragraph} delay={0.1 + index * 0.04}>
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

export { WhyBlaven };
