import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    width: {
      default: "max-w-container px-container-padding",
      narrow: "max-w-3xl px-container-padding",
      full: "max-w-none px-container-padding",
    },
  },
  defaultVariants: {
    width: "default",
  },
});

type ContainerProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof containerVariants>;

function Container({ width, className, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ width }), className)} {...props} />
  );
}

export { Container, containerVariants };
