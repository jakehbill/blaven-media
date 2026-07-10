"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cva, type VariantProps } from "class-variance-authority";
import type { MouseEvent } from "react";

import {
  getHashFromHref,
  scrollToHash,
} from "@/lib/navigation";
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

type NavLinkProps = VariantProps<typeof navLinkVariants> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

function NavLink({
  active,
  layout,
  className,
  children,
  href,
  onNavigate,
}: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const hash = getHashFromHref(href);
  const classes = cn(navLinkVariants({ active, layout }), className);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!hash) {
      onNavigate?.();
      return;
    }

    // Already on the homepage: scroll in place.
    if (pathname === "/") {
      event.preventDefault();
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      scrollToHash(hash, reduced ? "auto" : "smooth");
      window.history.pushState(null, "", `/#${hash}`);
      onNavigate?.();
      return;
    }

    // Other pages: navigate home with hash, then HashScroll finishes the job.
    event.preventDefault();
    router.push(`/#${hash}`);
    onNavigate?.();
  };

  return (
    <Link
      href={href}
      className={classes}
      aria-current={active ? (hash ? "location" : "page") : undefined}
      onClick={handleClick}
    >
      {children}
      {active && layout === "horizontal" ? (
        <span
          className="absolute -bottom-px left-0 h-px w-full bg-stone"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

export { NavLink, navLinkVariants };
