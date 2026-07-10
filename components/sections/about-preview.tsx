"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/typography";
import { aboutContent } from "@/data/about";

function AboutPreview() {
  return (
    <Section
      id="about-preview"
      spacing="md"
      surface="dark"
      aria-labelledby="about-preview-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <MotionReveal>
            <div className="relative aspect-[4/5] max-w-md overflow-hidden bg-muted lg:max-w-none">
              <Image
                src={aboutContent.portrait.src}
                alt={aboutContent.portrait.alt}
                fill
                className="object-cover object-center opacity-90"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </MotionReveal>

          <div className="min-w-0">
            <SectionHeader
              id="about-preview-heading"
              label={aboutContent.label}
              heading={aboutContent.heading}
            />

            <MotionReveal className="mt-6" delay={0.1}>
              <Text variant="body-lg" className="max-w-prose text-foreground/85">
                {aboutContent.paragraphs[0]}
              </Text>
            </MotionReveal>

            <MotionReveal className="mt-8" delay={0.15}>
              <Button
                variant="secondary"
                size="default"
                render={<Link href="/about" />}
              >
                About Blaven Media
              </Button>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { AboutPreview };
