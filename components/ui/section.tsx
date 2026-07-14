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
    surface: {
      none: "",
      dark: "surface-dark",
      light: "surface-light",
      grey: "surface-grey",
      stone: "surface-stone",
    },
  },
  defaultVariants: {
    spacing: "md",
    border: "none",
    surface: "none",
  },
});

type SectionProps = ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof sectionVariants>;

function Section({
  spacing,
  border,
  surface,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ spacing, border, surface }), className)}
      {...props}
    />
  );
}

export { Section, sectionVariants };
