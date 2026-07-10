"use client";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  id: string;
  label: string;
  heading: string;
  introduction?: string;
  className?: string;
};

function SectionHeader({
  id,
  label,
  heading,
  introduction,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-prose", className)}>
      <MotionReveal>
        <Text variant="eyebrow">{label}</Text>
      </MotionReveal>

      <MotionReveal className="mt-6" delay={0.05}>
        <Heading id={id} level="h2">
          {heading}
        </Heading>
      </MotionReveal>

      {introduction ? (
        <MotionReveal className="mt-6" delay={0.1}>
          <Text variant="body-lg" className="text-foreground/85">
            {introduction}
          </Text>
        </MotionReveal>
      ) : null}
    </div>
  );
}

export { SectionHeader };
