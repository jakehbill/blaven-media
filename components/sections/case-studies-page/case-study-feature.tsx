"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { FeaturedExample } from "@/components/sections/case-studies-page/featured-example";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { ServiceList } from "@/components/ui/service-list";
import { SurfaceTexture } from "@/components/ui/surface-texture";
import { Text } from "@/components/ui/typography";
import type { CaseStudiesSurface, CaseStudy } from "@/data/case-studies";

type CaseStudyFeatureProps = {
  study: CaseStudy;
  index: number;
  surface: CaseStudiesSurface;
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

function CaseStudyFeature({ study, index, surface }: CaseStudyFeatureProps) {
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
          {/* Identity sits above the columns so Engagement + Challenge share a baseline */}
          <MotionReveal className="max-w-xl space-y-4 lg:max-w-none lg:w-[calc((100%-4rem)*5/12)]">
            <span className="font-mono text-xs tracking-[0.14em] text-stone">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="space-y-2">
              <h2 id={headingId} className="text-h2 text-foreground">
                {study.client}
              </h2>
              <p className="text-eyebrow uppercase text-muted-foreground">
                {study.industry}
              </p>
            </div>
          </MotionReveal>

          <div className="mt-7 grid items-start gap-10 md:gap-14 lg:mt-8 lg:grid-cols-12 lg:gap-16">
            {/* Left: Engagement, Services, Testimonial */}
            <MotionReveal className="space-y-7 lg:col-span-5" delay={0.04}>
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

              <Field label="Services Provided">
                <ServiceList services={study.services} />
              </Field>

              {study.testimonial ? (
                <blockquote className="space-y-4 border-l border-stone/40 pl-5">
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
              ) : null}
            </MotionReveal>

            {/* Right: Challenge, Approach, Outcomes, Featured Example */}
            <MotionReveal className="space-y-7 lg:col-span-7" delay={0.06}>
              <Field label="Challenge">
                <Text
                  variant="body-lg"
                  className="max-w-prose text-foreground/85"
                >
                  {study.challenge}
                </Text>
              </Field>

              <Field label="Approach">
                <Text
                  variant="body-lg"
                  className="max-w-prose text-foreground/85"
                >
                  {study.approach}
                </Text>
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

              {study.featuredExample ? (
                <FeaturedExample example={study.featuredExample} />
              ) : null}

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
