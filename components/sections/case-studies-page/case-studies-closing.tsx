"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SurfaceTexture } from "@/components/ui/surface-texture";
import { Heading, Text } from "@/components/ui/typography";
import { caseStudiesContent } from "@/data/case-studies";

function CaseStudiesClosing() {
  const { closing } = caseStudiesContent;

  return (
    <Section
      id="case-studies-closing"
      spacing="sm"
      surface="dark"
      className="relative overflow-hidden"
      aria-labelledby="case-studies-closing-heading"
    >
      <SurfaceTexture variant="grain" tone="dark" />

      <Container className="relative z-10">
        <MotionReveal className="mx-auto max-w-3xl text-center">
          <Heading
            id="case-studies-closing-heading"
            level="h2"
            className="mx-auto max-w-3xl text-pretty"
          >
            {closing.heading}
          </Heading>

          <Text
            variant="body-lg"
            className="mx-auto mt-4 max-w-prose text-foreground/85"
          >
            {closing.body}
          </Text>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              variant="primary"
              size="default"
              className="w-full sm:w-auto"
              render={<Link href={closing.primaryCta.href} />}
            >
              {closing.primaryCta.label}
            </Button>
            <Button
              variant="secondary"
              size="default"
              className="w-full sm:w-auto"
              render={<Link href={closing.secondaryCta.href} />}
            >
              {closing.secondaryCta.label}
            </Button>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  );
}

export { CaseStudiesClosing };
