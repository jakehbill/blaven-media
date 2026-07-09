"use client";

import { useMemo } from "react";

import { NavLink } from "@/components/layout/nav-link";
import { Container } from "@/components/ui/container";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  const sectionIds = useMemo(
    () => primaryNavigation.map((item) => item.sectionId),
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-[6px] supports-[backdrop-filter]:bg-background/75",
        className,
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-8">
          <a
            href="#"
            className="text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-80"
          >
            {siteConfig.name}
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {primaryNavigation.map((item) => (
                <li key={item.sectionId}>
                  <NavLink
                    href={item.href}
                    sectionId={item.sectionId}
                    active={activeSection === item.sectionId}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export { Navbar };
