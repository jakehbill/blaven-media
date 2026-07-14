"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { aboutPreviewContent } from "@/data/about";

function AboutPreview() {
  return (
    <Section
      id="about-preview"
      spacing="sm"
      surface="dark"
      aria-labelledby="about-preview-heading"
    >
      <Container>
        <MotionReveal className="max-w-3xl">
          <Text variant="eyebrow">{aboutPreviewContent.label}</Text>

          <Heading
            id="about-preview-heading"
            level="h2"
            className="mt-5 max-w-2xl"
          >
            {aboutPreviewContent.heading}
          </Heading>

          <Text
            variant="body-lg"
            className="mt-5 max-w-prose text-foreground/85"
          >
            {aboutPreviewContent.body}
          </Text>

          <div className="mt-8">
            <Button
              variant="secondary"
              size="default"
              render={<Link href={aboutPreviewContent.cta.href} />}
            >
              {aboutPreviewContent.cta.label}
            </Button>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  );
}

export { AboutPreview };
