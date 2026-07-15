"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Stagger, StaggerItem } from "@/components/ui/stagger";
import { SurfaceTexture } from "@/components/ui/surface-texture";
import { Text } from "@/components/ui/typography";
import { aboutPageContent } from "@/data/about";

function HowWeThink() {
  const { howWeThink } = aboutPageContent;

  return (
    <Section
      id="how-we-think"
      spacing="md"
      surface="light"
      className="relative overflow-hidden"
      aria-labelledby="how-we-think-heading"
    >
      <SurfaceTexture variant="paper" tone="light" />

      <Container className="relative z-10">
        <SectionHeader
          id="how-we-think-heading"
          label={howWeThink.label}
          heading={howWeThink.heading}
        />

        <Stagger className="mt-8 grid gap-8 border-t border-border/60 pt-8 md:mt-9 md:grid-cols-3 md:gap-10 md:pt-9 lg:gap-14">
          {howWeThink.columns.map((column) => (
            <StaggerItem key={column.title}>
              <article className="space-y-3">
                <h3 className="text-h4 text-foreground">{column.title}</h3>
                <Text variant="muted" className="leading-relaxed">
                  {column.body}
                </Text>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export { HowWeThink };
