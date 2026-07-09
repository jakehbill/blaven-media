"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const navLinkVariants = cva(
  "font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      active: {
        true: "text-foreground",
        false: "text-muted-foreground hover:text-foreground",
      },
      layout: {
        horizontal: "relative text-sm py-1",
        vertical: "text-lg tracking-tight py-2",
      },
    },
    defaultVariants: {
      active: false,
      layout: "horizontal",
    },
  },
);

type NavLinkProps = ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof navLinkVariants>;

function NavLink({
  active,
  layout,
  className,
  children,
  onClick,
  ...props
}: NavLinkProps) {
  return (
    <a
      className={cn(navLinkVariants({ active, layout }), className)}
      aria-current={active ? "true" : undefined}
      onClick={onClick}
      {...props}
    >
      {children}
      {active && layout === "horizontal" ? (
        <span
          className="absolute -bottom-px left-0 h-px w-full bg-stone"
          aria-hidden
        />
      ) : null}
    </a>
  );
}

export { NavLink, navLinkVariants };
