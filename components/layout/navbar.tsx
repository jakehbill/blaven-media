"use client";

import { Menu, X } from "lucide-react";
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
import { cn } from "@/lib/utils";

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  const scrolled = useScrolled();
  const { open, close, toggle, triggerRef, panelRef } = useMobileMenu();

  const sectionIds = useMemo(
    () => primaryNavigation.map((item) => item.sectionId),
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  const currentSection = !scrolled ? "home" : activeSection;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
          scrolled
            ? "border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
            : "border-b border-transparent bg-transparent",
          className,
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-6">
            <a
              href="#home"
              className="text-sm font-medium tracking-tight text-foreground transition-opacity duration-300 hover:opacity-75"
            >
              {siteConfig.name}
            </a>

            <div className="flex items-center gap-6">
              <nav aria-label="Primary" className="hidden md:block">
                <ul className="flex items-center gap-8">
                  {primaryNavigation.map((item) => (
                    <li key={item.sectionId}>
                      <NavLink
                        href={item.href}
                        active={currentSection === item.sectionId}
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
                render={<a href={navigationCta.href} />}
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
        activeSection={currentSection}
        onClose={close}
        panelRef={panelRef}
      />
    </>
  );
}

export { Navbar };
