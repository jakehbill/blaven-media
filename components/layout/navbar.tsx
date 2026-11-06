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
    pathname === "/" ? sectionIds : [],
  );

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-rule bg-ivory/95 transition-[background-color,box-shadow] duration-500 ease-out backdrop-blur-xl",
          scrolled && "shadow-[0_1px_0_rgb(36_39_32_/_0.04)]",
          className,
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
            <Link
              href="/"
              className="text-[1.05rem] font-semibold leading-none tracking-[-0.03em] text-charcoal transition-colors hover:text-sage md:text-[1.15rem]"
            >
              {siteConfig.name}
            </Link>

            <div className="flex shrink-0 items-center gap-4 md:gap-8">
              <nav aria-label="Primary" className="hidden lg:block">
                <ul className="flex items-center gap-8">
                  {primaryNavigation.map((item) => (
                    <li key={item.href}>
                      <NavLink
                        href={item.href}
                        active={isNavItemActive(item, pathname, activeSection)}
                        className="text-[0.75rem] font-medium tracking-[0.06em] text-ink-muted hover:text-charcoal"
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
                className="hidden lg:inline-flex"
                render={<Link href={navigationCta.href} />}
              >
                {navigationCta.label}
              </Button>

              <button
                ref={triggerRef}
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-sm text-charcoal transition-colors hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ivory lg:hidden"
                aria-expanded={open}
                aria-controls="mobile-navigation"
                aria-haspopup="dialog"
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
