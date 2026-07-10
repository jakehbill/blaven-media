import Link from "next/link";
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
        muted: "text-muted-foreground hover:text-foreground hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type TextLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> &
  VariantProps<typeof textLinkVariants> & {
    href: string;
  };

function TextLink({
  variant,
  className,
  children,
  href,
  ...props
}: TextLinkProps) {
  const classes = cn(textLinkVariants({ variant }), className);
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const isHash = href.startsWith("#");

  if (isExternal || isHash) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}

export { TextLink, textLinkVariants };
