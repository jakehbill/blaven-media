"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const navLinkVariants = cva(
  "relative text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      active: {
        true: "text-foreground",
        false: "text-muted-foreground hover:text-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

type NavLinkProps = ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof navLinkVariants> & {
    sectionId?: string;
  };

function NavLink({
  active,
  className,
  children,
  href,
  ...props
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(navLinkVariants({ active }), "py-1", className)}
      aria-current={active ? "page" : undefined}
      {...props}
    >
      {children}
      {active ? (
        <span
          className="absolute -bottom-px left-0 h-px w-full bg-stone"
          aria-hidden
        />
      ) : null}
    </a>
  );
}

export { NavLink, navLinkVariants };
