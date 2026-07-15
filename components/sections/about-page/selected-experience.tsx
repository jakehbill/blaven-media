"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Stagger, StaggerItem } from "@/components/ui/stagger";
import { SurfaceTexture } from "@/components/ui/surface-texture";
import { aboutPageContent } from "@/data/about";

function SelectedExperience() {
  const { experience } = aboutPageContent;

  return (
    <Section
      id="selected-experience"
      spacing="md"
      surface="grey"
      className="relative overflow-hidden"
      aria-labelledby="selected-experience-heading"
    >
      <SurfaceTexture variant="mesh" tone="light" />

      <Container className="relative z-10">
        <SectionHeader
          id="selected-experience-heading"
          label={experience.label}
          heading={experience.heading}
        />

        <Stagger className="mt-8 border-t border-border/60 md:mt-9">
          {experience.items.map((item, index) => (
            <StaggerItem key={item}>
              <div className="group flex items-baseline gap-5 border-b border-border/60 py-5 md:gap-8 md:py-6">
                <span className="font-mono text-xs tracking-[0.14em] text-stone transition-colors duration-300 group-hover:text-foreground/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.9375rem] leading-snug text-foreground transition-transform duration-500 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0 md:text-base">
                  {item}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export { SelectedExperience };
