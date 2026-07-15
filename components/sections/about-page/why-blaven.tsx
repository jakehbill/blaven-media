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

/** Soft dissolve so edges melt into the grey surface on all sides. */
const EDGE_MASK = {
  maskImage: `
    linear-gradient(to right, transparent 0%, black 18%, black 72%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, black 14%, black 82%, transparent 100%)
  `,
  WebkitMaskImage: `
    linear-gradient(to right, transparent 0%, black 18%, black 72%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, black 14%, black 82%, transparent 100%)
  `,
  maskComposite: "intersect" as const,
  WebkitMaskComposite: "source-in" as const,
};

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
        <div className="grid items-start gap-10 md:gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="relative z-10 lg:col-span-7">
            <SectionHeader
              id="why-blaven-heading"
              label={whyBlaven.label}
              heading={whyBlaven.heading}
              labelSpacing="tight"
            />

            <div className="mt-5 max-w-prose-wide space-y-4">
              {whyBlaven.paragraphs.map((paragraph, index) => (
                <MotionReveal key={paragraph} delay={0.1 + index * 0.04}>
                  <Text variant="body-lg" className="text-foreground/85">
                    {paragraph}
                  </Text>
                </MotionReveal>
              ))}
            </div>
          </div>

          <MotionReveal className="lg:col-span-5 lg:h-full" delay={0.12}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-0 lg:max-w-none">
              {/* Photo blends into grey: multiply + soft mask, no hard card edge */}
              <div className="absolute inset-0" style={EDGE_MASK}>
                <Image
                  src={whyBlaven.image.src}
                  alt={whyBlaven.image.alt}
                  fill
                  className="object-cover object-[center_40%] grayscale contrast-[0.78] brightness-[1.18] saturate-0 mix-blend-multiply opacity-[0.78]"
                  sizes="(max-width: 1024px) 28rem, 42vw"
                />

                {/* Paper fibre texture so it isn't a flat wash */}
                <div
                  className="absolute inset-0 opacity-[0.35] mix-blend-soft-light"
                  style={{
                    backgroundImage: GRAIN_URL,
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                  }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 opacity-[0.22] mix-blend-multiply"
                  style={{
                    backgroundImage: GRAIN_URL,
                    backgroundRepeat: "repeat",
                    backgroundSize: "140px 140px",
                  }}
                  aria-hidden
                />
              </div>

              {/* Extra edge wash so the dissolve reads against the surface */}
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_55%_45%,transparent_28%,var(--background)_78%)]"
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
