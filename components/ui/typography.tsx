import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("text-foreground", {
  variants: {
    level: {
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      h4: "text-h4",
      h5: "text-h5 uppercase text-muted-foreground",
    },
    balance: {
      true: "text-balance",
      false: "",
    },
  },
  defaultVariants: {
    balance: true,
  },
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

type HeadingProps<T extends ElementType = HeadingLevel> = {
  as?: T;
  level: HeadingLevel;
} & VariantProps<typeof headingVariants> &
  Omit<ComponentPropsWithoutRef<T>, "as">;

function Heading<T extends ElementType = HeadingLevel>({
  as,
  level,
  balance,
  className,
  ...props
}: HeadingProps<T>) {
  const Component = as ?? level;

  return (
    <Component
      className={cn(headingVariants({ level, balance }), className)}
      {...props}
    />
  );
}

const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-body text-foreground/90",
      "body-lg": "text-body-lg text-foreground/90",
      caption: "text-caption text-muted-foreground",
      eyebrow: "text-eyebrow uppercase text-stone",
      muted: "text-body text-muted-foreground",
    },
    width: {
      none: "",
      prose: "max-w-prose",
      narrow: "max-w-prose-narrow",
    },
  },
  defaultVariants: {
    variant: "body",
    width: "none",
  },
});

type TextProps = ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof textVariants>;

function Text({ variant, width, className, ...props }: TextProps) {
  return (
    <p className={cn(textVariants({ variant, width }), className)} {...props} />
  );
}

export { Heading, Text, headingVariants, textVariants };
