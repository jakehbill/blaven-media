"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { NavLink } from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navigationCta, primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { useScrolled } from "@/hooks/use-scrolled";
import { isNavItemActive } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const { open, close, toggle, triggerRef, panelRef } = useMobileMenu();

  const sectionIds = useMemo(
    () =>
      primaryNavigation
        .map((item) => item.sectionId)
        .filter((id): id is string => Boolean(id)),
    [],
  );
  const activeSection = useActiveSection(
    pathname === "/" ? ["home", ...sectionIds] : [],
  );

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 surface-dark transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
          scrolled
            ? "border-b border-border/60 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/75"
            : "border-b border-transparent bg-background/0",
          className,
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-6">
            <Link
              href="/"
              className="text-sm font-medium tracking-tight text-foreground transition-opacity duration-300 hover:opacity-75"
            >
              {siteConfig.name}
            </Link>

            <div className="flex items-center gap-6">
              <nav aria-label="Primary" className="hidden md:block">
                <ul className="flex items-center gap-8">
                  {primaryNavigation.map((item) => (
                    <li key={item.href}>
                      <NavLink
                        href={item.href}
                        active={isNavItemActive(item, pathname, activeSection)}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <Button
                variant="primary"
                size="sm"
                className="hidden md:inline-flex"
                render={<Link href={navigationCta.href} />}
              >
                {navigationCta.label}
              </Button>

              <button
                ref={triggerRef}
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
                aria-expanded={open}
                aria-controls="mobile-navigation"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={toggle}
              >
                {open ? (
                  <X className="size-5" aria-hidden />
                ) : (
                  <Menu className="size-5" aria-hidden />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={open}
        pathname={pathname}
        activeSection={activeSection}
        onClose={close}
        panelRef={panelRef}
      />
    </>
  );
}

export { Navbar };
