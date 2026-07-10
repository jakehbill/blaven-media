"use client";

import { CaseStudyItem } from "@/components/sections/case-study-item";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Stagger, StaggerItem } from "@/components/ui/stagger";
import { caseStudiesContent } from "@/data/case-studies";

type CaseStudiesProps = {
  surface?: "dark" | "light" | "stone";
};

function CaseStudies({ surface = "light" }: CaseStudiesProps) {
  return (
    <Section
      id="case-studies"
      spacing="md"
      surface={surface}
      aria-labelledby="case-studies-heading"
    >
      <Container>
        <SectionHeader
          id="case-studies-heading"
          label={caseStudiesContent.label}
          heading={caseStudiesContent.heading}
          introduction={caseStudiesContent.introduction}
        />

        <Stagger className="mt-12 border-t border-border/60 md:mt-14">
          {caseStudiesContent.items.map((study, index) => (
            <StaggerItem key={study.id}>
              <CaseStudyItem study={study} reverse={index % 2 === 1} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export { CaseStudies };
