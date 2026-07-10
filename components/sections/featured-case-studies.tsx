"use client";

import Link from "next/link";

import { CaseStudyItem } from "@/components/sections/case-study-item";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Stagger, StaggerItem } from "@/components/ui/stagger";
import { caseStudiesContent } from "@/data/case-studies";

const FEATURED_COUNT = 2;

function FeaturedCaseStudies() {
  const featured = caseStudiesContent.items.slice(0, FEATURED_COUNT);

  return (
    <Section
      id="featured-work"
      spacing="md"
      surface="light"
      aria-labelledby="featured-work-heading"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            id="featured-work-heading"
            label={caseStudiesContent.label}
            heading={caseStudiesContent.heading}
            introduction={caseStudiesContent.introduction}
          />

          <Button
            variant="secondary"
            size="sm"
            className="shrink-0 self-start md:self-auto"
            render={<Link href="/case-studies" />}
          >
            View all work
          </Button>
        </div>

        <Stagger className="mt-12 border-t border-border/60 md:mt-14">
          {featured.map((study, index) => (
            <StaggerItem key={study.id}>
              <CaseStudyItem study={study} reverse={index % 2 === 1} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export { FeaturedCaseStudies };
