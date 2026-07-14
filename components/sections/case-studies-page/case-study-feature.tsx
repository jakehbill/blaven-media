"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SurfaceTexture } from "@/components/ui/surface-texture";
import { Text } from "@/components/ui/typography";
import type { CaseStudiesSurface, CaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/utils";

type CaseStudyFeatureProps = {
  study: CaseStudy;
  index: number;
  surface: CaseStudiesSurface;
  reverse?: boolean;
};

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2.5">
      <p className="text-eyebrow uppercase text-muted-foreground">{label}</p>
      {children}
    </div>
  );
}

function CaseStudyFeature({
  study,
  index,
  surface,
  reverse = false,
}: CaseStudyFeatureProps) {
  const isDark = surface === "dark";
  const headingId = `case-study-${study.slug}-heading`;

  return (
    <Section
      id={study.slug}
      spacing="md"
      surface={surface}
      className="relative overflow-hidden"
      aria-labelledby={headingId}
    >
      <SurfaceTexture
        variant={isDark ? "grain" : surface === "grey" ? "mesh" : "paper"}
        tone={isDark ? "dark" : "light"}
      />

      <Container className="relative z-10">
        <div className="border-t border-border/60 pt-2">
          <div
            className={cn(
              "grid items-start gap-10 md:gap-14 lg:grid-cols-12 lg:gap-16",
            )}
          >
            <MotionReveal
              className={cn(
                "space-y-8 lg:col-span-5",
                reverse && "lg:order-2",
              )}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-6">
                  <span className="font-mono text-xs tracking-[0.14em] text-stone">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={study.logo.src}
                    alt={study.logo.alt}
                    width={120}
                    height={32}
                    className="h-6 w-auto opacity-50 grayscale"
                  />
                </div>

                <div className="space-y-2">
                  <h2 id={headingId} className="text-h2 text-foreground">
                    {study.client}
                  </h2>
                  <p className="text-eyebrow uppercase text-muted-foreground">
                    {study.industry}
                  </p>
                </div>

                {study.engagement ? (
                  <Field label="Engagement">
                    <Text
                      variant="body-lg"
                      className="leading-[1.55] text-foreground/85"
                    >
                      {study.engagement}
                    </Text>
                  </Field>
                ) : null}
              </div>

              <Field label="Services Provided">
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {study.services.map((service) => (
                    <li
                      key={service}
                      className="text-sm text-foreground/75 md:text-[0.9375rem]"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </Field>

              <Field label="Outcomes">
                <ul className="max-w-prose space-y-2.5">
                  {study.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-3 text-sm leading-[1.55] text-foreground/85 md:text-[0.9375rem]"
                    >
                      <span
                        className="mt-[0.55em] size-1 shrink-0 rounded-full bg-stone"
                        aria-hidden
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </Field>
            </MotionReveal>

            <MotionReveal
              className={cn(
                "space-y-8 lg:col-span-7",
                reverse && "lg:order-1",
              )}
              delay={0.06}
            >
              <div className="space-y-8 border-t border-border/50 pt-8 lg:border-t-0 lg:pt-0">
                <Field label="Challenge">
                  <Text
                    variant="body-lg"
                    className="max-w-prose leading-[1.55] text-foreground/85"
                  >
                    {study.challenge}
                  </Text>
                </Field>

                <Field label="Approach">
                  <Text
                    variant="body-lg"
                    className="max-w-prose leading-[1.55] text-foreground/85"
                  >
                    {study.approach}
                  </Text>
                </Field>
              </div>

              <blockquote className="max-w-prose space-y-4 border-l border-stone/40 pl-5">
                <p className="text-sm leading-[1.55] text-foreground/80 md:text-[0.9375rem]">
                  <span className="text-stone" aria-hidden>
                    &ldquo;
                  </span>
                  {study.testimonial.quote}
                  <span className="text-stone" aria-hidden>
                    &rdquo;
                  </span>
                </p>
                <footer className="space-y-0.5">
                  <p className="text-sm font-medium text-foreground">
                    {study.testimonial.author}
                  </p>
                  <p className="text-caption text-muted-foreground">
                    {study.testimonial.role}
                  </p>
                </footer>
              </blockquote>

              <div>
                <Button
                  variant="secondary"
                  size="default"
                  render={<Link href={study.cta.href} />}
                >
                  {study.cta.label}
                </Button>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { CaseStudyFeature };
