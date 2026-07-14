"use client";

import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/typography";
import { whyThisMattersContent } from "@/data/why-this-matters";

function WhyThisMatters() {
  return (
    <Section
      id="why-this-matters"
      spacing="md"
      surface="light"
      aria-labelledby="why-this-matters-heading"
    >
      <Container>
        <SectionHeader
          id="why-this-matters-heading"
          label={whyThisMattersContent.label}
          heading={whyThisMattersContent.heading}
          className="max-w-3xl"
        />

        <div className="mt-8 max-w-prose space-y-8 md:mt-10">
          <MotionReveal delay={0.1}>
            <div className="space-y-1.5">
              {whyThisMattersContent.lead.map((line) => (
                <Text
                  key={line}
                  variant="body-lg"
                  className="text-foreground/85"
                >
                  {line}
                </Text>
              ))}
            </div>
          </MotionReveal>

          <div className="space-y-5">
            {whyThisMattersContent.paragraphs.map((paragraph, index) => (
              <MotionReveal key={paragraph} delay={0.15 + index * 0.05}>
                <Text variant="body-lg" className="text-foreground/85">
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

export { WhyThisMatters };
