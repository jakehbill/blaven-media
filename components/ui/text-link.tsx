import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const textLinkVariants = cva(
  "inline-flex items-center gap-1.5 text-sm font-medium underline-offset-[0.2em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default: "text-foreground/75 hover:text-foreground hover:underline",
        stone: "text-stone hover:text-foreground hover:underline",
        muted:
          "text-muted-foreground hover:text-foreground hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type TextLinkProps = ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof textLinkVariants>;

function TextLink({
  variant,
  className,
  children,
  ...props
}: TextLinkProps) {
  return (
    <a className={cn(textLinkVariants({ variant }), className)} {...props}>
      {children}
    </a>
  );
}

export { TextLink, textLinkVariants };
