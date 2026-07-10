"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Stagger, StaggerItem } from "@/components/ui/stagger";
import { Text } from "@/components/ui/typography";
import { aboutContent } from "@/data/about";

function About() {
  return (
    <Section
      id="about"
      spacing="md"
      surface="dark"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 xl:gap-28">
          <MotionReveal className="order-2 lg:sticky lg:top-28 lg:order-1">
            <figure className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={aboutContent.portrait.src}
                  alt={aboutContent.portrait.alt}
                  fill
                  className="object-cover object-center opacity-90"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <figcaption className="text-caption text-muted-foreground">
                {aboutContent.portrait.caption}
              </figcaption>
            </figure>
          </MotionReveal>

          <div className="order-1 min-w-0 lg:order-2">
            <SectionHeader
              id="about-heading"
              label={aboutContent.label}
              heading={aboutContent.heading}
            />

            <div className="mt-8 space-y-5 md:mt-10">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <MotionReveal key={paragraph} delay={0.1 + index * 0.05}>
                  <Text variant="body-lg" className="text-foreground/85">
                    {paragraph}
                  </Text>
                </MotionReveal>
              ))}
            </div>

            <Stagger className="mt-14 border-t border-border/60 pt-10 md:mt-16">
              <StaggerItem>
                <p className="text-eyebrow uppercase text-muted-foreground">
                  {aboutContent.experience.label}
                </p>
              </StaggerItem>

              <ul className="mt-6 divide-y divide-border/60 border-y border-border/60">
                {aboutContent.experience.items.map((item) => (
                  <li key={item}>
                    <StaggerItem>
                      <p className="py-4 text-sm text-foreground/85 md:text-[0.9375rem]">
                        {item}
                      </p>
                    </StaggerItem>
                  </li>
                ))}
              </ul>
            </Stagger>

            <MotionReveal className="mt-14 md:mt-16">
              <LogoCloud
                label={aboutContent.clients.label}
                logos={aboutContent.clients.logos}
              />
            </MotionReveal>

            <MotionReveal className="mt-14 space-y-8 border-t border-border/60 pt-10 md:mt-16">
              <Text
                variant="body-lg"
                className="max-w-prose text-foreground/80"
              >
                {aboutContent.personalStatement}
              </Text>

              <Button
                variant="secondary"
                size="default"
                render={<Link href={aboutContent.cta.href} />}
              >
                {aboutContent.cta.label}
              </Button>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { About };
