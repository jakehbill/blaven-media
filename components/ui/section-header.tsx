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
  /** Semantic heading element. Visual size stays section (h2) styles. */
  level?: "h1" | "h2";
  className?: string;
};

function SectionHeader({
  id,
  label,
  heading,
  introduction,
  labelSpacing = "default",
  level = "h2",
  className,
}: SectionHeaderProps) {
  const introductionParagraphs = introduction
    ? Array.isArray(introduction)
      ? introduction
      : [introduction]
    : [];

  return (
    <div className={cn("max-w-5xl", className)}>
      <MotionReveal>
        <Text variant="eyebrow">{label}</Text>
      </MotionReveal>

      <MotionReveal
        className={labelSpacing === "tight" ? "mt-2.5" : "mt-4"}
        delay={0.05}
      >
        <Heading id={id} as={level} level="h2" className="text-pretty">
          {heading}
        </Heading>
      </MotionReveal>

      {introductionParagraphs.length > 0 ? (
        <MotionReveal className="mt-5 max-w-prose-wide space-y-4" delay={0.1}>
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
