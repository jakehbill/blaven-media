import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-sm border border-border bg-card text-card-foreground transition-colors duration-300",
  {
    variants: {
      padding: {
        none: "",
        sm: "p-5",
        md: "p-6",
        lg: "p-8",
      },
      interactive: {
        true: "hover:border-foreground/15",
        false: "",
      },
    },
    defaultVariants: {
      padding: "md",
      interactive: false,
    },
  },
);

type CardProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof cardVariants>;

function Card({ padding, interactive, className, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ padding, interactive }), className)}
      {...props}
    />
  );
}

export { Card, cardVariants };
