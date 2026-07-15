"use client";

import Image from "next/image";

import { MountainAtmosphere } from "@/components/sections/mountain-atmosphere";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/typography";
import { aboutPageContent } from "@/data/about";

const GRAIN_URL = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`;

function WhyBlaven() {
  const { whyBlaven } = aboutPageContent;

  return (
    <Section
      id="why-blaven"
      spacing="md"
      surface="grey"
      className="relative overflow-hidden"
      aria-labelledby="why-blaven-heading"
    >
      <MountainAtmosphere tone="light" />

      <Container className="relative z-10">
        <div className="grid items-start gap-10 md:gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              id="why-blaven-heading"
              label={whyBlaven.label}
              heading={whyBlaven.heading}
              labelSpacing="tight"
              className="max-w-5xl"
            />

            <div className="mt-5 max-w-prose-wide space-y-4">
              {whyBlaven.paragraphs.map((paragraph, index) => (
                <MotionReveal key={paragraph} delay={0.1 + index * 0.04}>
                  <Text
                    variant="body-lg"
                    className="leading-[1.55] text-foreground/85"
                  >
                    {paragraph}
                  </Text>
                </MotionReveal>
              ))}
            </div>
          </div>

          <MotionReveal className="lg:col-span-5 lg:h-full" delay={0.12}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-0 lg:max-w-none">
              <Image
                src={whyBlaven.image.src}
                alt={whyBlaven.image.alt}
                fill
                className="object-cover object-center grayscale contrast-[0.92] brightness-[1.05] saturate-0"
                sizes="(max-width: 1024px) 28rem, 40vw"
              />

              {/* Soft cool wash so the photo sits in the monochrome system */}
              <div
                className="absolute inset-0 bg-background/25 mix-blend-soft-light"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-foreground/[0.06] mix-blend-multiply"
                aria-hidden
              />

              {/* Light film grain — matches section atmosphere */}
              <div
                className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
                style={{
                  backgroundImage: GRAIN_URL,
                  backgroundRepeat: "repeat",
                  backgroundSize: "180px 180px",
                }}
                aria-hidden
              />

              {/* Edge fade into the grey surface */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-background/20"
                aria-hidden
              />
            </div>
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}

export { WhyBlaven };
