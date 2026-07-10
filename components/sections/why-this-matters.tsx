"use client";

import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Stagger, StaggerItem } from "@/components/ui/stagger";
import { Text } from "@/components/ui/typography";
import { whyThisMattersContent } from "@/data/why-this-matters";
import { cn } from "@/lib/utils";

type FeatureBlockProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

function FeatureBlock({
  title,
  description,
  icon: Icon,
  className,
}: FeatureBlockProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <Icon className="size-5 stroke-[1.25] text-stone" aria-hidden />
      <h3 className="text-h4 text-foreground">{title}</h3>
      <Text
        variant="muted"
        className="text-sm leading-relaxed md:text-[0.9375rem]"
      >
        {description}
      </Text>
    </div>
  );
}

function WhyThisMatters() {
  return (
    <Section
      id="why-this-matters"
      spacing="md"
      surface="light"
      aria-labelledby="why-this-matters-heading"
    >
      <Container>
        <SectionHeader
          id="why-this-matters-heading"
          label={whyThisMattersContent.label}
          heading={whyThisMattersContent.heading}
        />

        <div className="mt-10 max-w-prose space-y-6">
          {whyThisMattersContent.paragraphs.map((paragraph, index) => (
            <MotionReveal key={paragraph} delay={0.1 + index * 0.05}>
              <Text variant="body-lg" className="text-foreground/85">
                {paragraph}
              </Text>
            </MotionReveal>
          ))}
        </div>

        <Stagger className="mt-12 grid gap-10 border-t border-border/60 pt-12 md:mt-14 md:grid-cols-3 md:gap-10 md:pt-14 lg:gap-14">
          {whyThisMattersContent.features.map((feature) => (
            <StaggerItem key={feature.title}>
              <FeatureBlock
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export { WhyThisMatters };
