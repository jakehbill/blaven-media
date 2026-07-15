"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { aboutPreviewContent } from "@/data/about";

function AboutPreview() {
  return (
    <Section
      id="about-preview"
      spacing="md"
      surface="dark"
      aria-labelledby="about-preview-heading"
    >
      <Container>
        <SectionHeader
          id="about-preview-heading"
          label={aboutPreviewContent.label}
          heading={aboutPreviewContent.heading}
          introduction={aboutPreviewContent.body}
        />

        <div className="mt-6">
          <Button
            variant="secondary"
            size="default"
            render={<Link href={aboutPreviewContent.cta.href} />}
          >
            {aboutPreviewContent.cta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export { AboutPreview };
