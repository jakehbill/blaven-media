"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

import { NavLink } from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navigationCta, primaryNavigation } from "@/data/navigation";
import { isNavItemActive } from "@/lib/navigation";
import { transitionFast } from "@/lib/motion";

type MobileMenuProps = {
  open: boolean;
  pathname: string;
  activeSection: string | null;
  onClose: () => void;
  panelRef: React.RefObject<HTMLDivElement | null>;
};

function MobileMenu({
  open,
  pathname,
  activeSection,
  onClose,
  panelRef,
}: MobileMenuProps) {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8 },
      visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          ...transitionFast,
          delay: prefersReducedMotion ? 0 : index * 0.04,
        },
      }),
    }),
    [prefersReducedMotion],
  );

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitionFast}
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="surface-light fixed inset-x-0 top-16 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md md:hidden"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
            transition={transitionFast}
          >
            <Container>
              <nav aria-label="Mobile primary">
                <ul className="flex flex-col py-8">
                  {primaryNavigation.map((item, index) => (
                    <motion.li
                      key={item.href}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                    >
                      <NavLink
                        href={item.href}
                        layout="vertical"
                        active={isNavItemActive(item, pathname, activeSection)}
                        className="block"
                        onNavigate={onClose}
                      >
                        {item.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  custom={primaryNavigation.length}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="border-t border-border/60 pb-8 pt-6"
                >
                  <Button
                    variant="primary"
                    size="default"
                    className="w-full"
                    render={<Link href={navigationCta.href} onClick={onClose} />}
                  >
                    {navigationCta.label}
                  </Button>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export { MobileMenu };
