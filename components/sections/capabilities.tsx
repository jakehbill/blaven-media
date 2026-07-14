"use client";

import { CapabilityBlock } from "@/components/sections/capability-block";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Stagger, StaggerItem } from "@/components/ui/stagger";
import { capabilitiesContent } from "@/data/capabilities";

function Capabilities() {
  return (
    <Section
      id="services"
      spacing="md"
      surface="dark"
      aria-labelledby="capabilities-heading"
    >
      <Container>
        <SectionHeader
          id="capabilities-heading"
          label={capabilitiesContent.label}
          heading={capabilitiesContent.heading}
          introduction={capabilitiesContent.introduction}
          className="max-w-3xl"
        />

        <Stagger className="mt-10 border-t border-border/60 md:mt-12">
          {capabilitiesContent.items.map((capability) => (
            <StaggerItem key={capability.number}>
              <CapabilityBlock capability={capability} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export { Capabilities };
