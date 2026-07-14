"use client";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  id: string;
  label: string;
  heading: string;
  introduction?: string | readonly string[];
  /** Space between label and heading. */
  labelSpacing?: "default" | "tight";
  className?: string;
};

function SectionHeader({
  id,
  label,
  heading,
  introduction,
  labelSpacing = "default",
  className,
}: SectionHeaderProps) {
  const introductionParagraphs = introduction
    ? Array.isArray(introduction)
      ? introduction
      : [introduction]
    : [];

  return (
    <div className={cn("max-w-prose", className)}>
      <MotionReveal>
        <Text variant="eyebrow">{label}</Text>
      </MotionReveal>

      <MotionReveal
        className={labelSpacing === "tight" ? "mt-2.5" : "mt-6"}
        delay={0.05}
      >
        <Heading id={id} level="h2">
          {heading}
        </Heading>
      </MotionReveal>

      {introductionParagraphs.length > 0 ? (
        <MotionReveal className="mt-6 space-y-4" delay={0.1}>
          {introductionParagraphs.map((paragraph) => (
            <Text
              key={paragraph}
              variant="body-lg"
              className="text-foreground/85"
            >
              {paragraph}
            </Text>
          ))}
        </MotionReveal>
      ) : null}
    </div>
  );
}

export { SectionHeader };
