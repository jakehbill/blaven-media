"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

import { NavLink } from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navigationCta, primaryNavigation } from "@/data/navigation";
import { transitionFast } from "@/lib/motion";

type MobileMenuProps = {
  open: boolean;
  activeSection: string | null;
  onClose: () => void;
  panelRef: React.RefObject<HTMLDivElement | null>;
};

function MobileMenu({
  open,
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

  const handleNavClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-background/60 md:hidden"
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
            className="fixed inset-x-0 top-16 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md md:hidden"
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
                      key={item.sectionId}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                    >
                      <NavLink
                        href={item.href}
                        layout="vertical"
                        active={activeSection === item.sectionId}
                        className="block"
                        onClick={handleNavClick}
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
                    render={
                      <a
                        href={navigationCta.href}
                        onClick={handleNavClick}
                      />
                    }
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
