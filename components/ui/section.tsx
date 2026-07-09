import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const sectionVariants = cva("", {
  variants: {
    spacing: {
      sm: "py-section-sm",
      md: "py-section-md",
      lg: "py-section-lg",
    },
    border: {
      none: "",
      top: "border-t border-border",
      bottom: "border-b border-border",
    },
  },
  defaultVariants: {
    spacing: "md",
    border: "none",
  },
});

type SectionProps = ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof sectionVariants>;

function Section({ spacing, border, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ spacing, border }), className)}
      {...props}
    />
  );
}

export { Section, sectionVariants };
