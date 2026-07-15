"use client";

import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Stagger, StaggerItem } from "@/components/ui/stagger";
import { SurfaceTexture } from "@/components/ui/surface-texture";
import { Text } from "@/components/ui/typography";
import { aboutPageContent } from "@/data/about";

function HowWeWork() {
  const { howWeWork } = aboutPageContent;

  return (
    <Section
      id="how-we-work"
      spacing="md"
      surface="dark"
      className="relative overflow-hidden"
      aria-labelledby="how-we-work-heading"
    >
      <SurfaceTexture variant="grain" tone="dark" />

      <Container className="relative z-10">
        <SectionHeader
          id="how-we-work-heading"
          label={howWeWork.label}
          heading={howWeWork.heading}
        />

        <div className="mt-8 max-w-prose-wide space-y-4 md:mt-9">
          {howWeWork.paragraphs.map((paragraph, index) => (
            <MotionReveal key={paragraph} delay={0.08 + index * 0.04}>
              <Text variant="body-lg" className="text-foreground/85">
                {paragraph}
              </Text>
            </MotionReveal>
          ))}
        </div>

        <Stagger className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border/60 pt-8 md:mt-9 md:grid-cols-4 md:gap-10 md:pt-9">
          {howWeWork.metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="space-y-2.5">
                <p className="font-mono text-[1.75rem] leading-none tracking-tight text-foreground md:text-[2rem]">
                  {metric.value}
                </p>
                <p className="text-sm leading-snug text-muted-foreground md:text-[0.9375rem]">
                  {metric.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export { HowWeWork };
