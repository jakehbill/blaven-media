"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SurfaceTexture } from "@/components/ui/surface-texture";
import { caseStudiesContent } from "@/data/case-studies";

function CaseStudiesIntro() {
  return (
    <Section
      id="case-studies"
      spacing="md"
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
          introduction={caseStudiesContent.introduction}
          labelSpacing="tight"
        />
      </Container>
    </Section>
  );
}

export { CaseStudiesIntro };
