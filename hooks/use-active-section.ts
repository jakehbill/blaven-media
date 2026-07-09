"use client";

import { useEffect, useState } from "react";

type UseActiveSectionOptions = {
  rootMargin?: string;
  threshold?: number | number[];
};

function useActiveSection(
  sectionIds: string[],
  options: UseActiveSectionOptions = {},
) {
  const { rootMargin = "-45% 0px -45% 0px", threshold = 0 } = options;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const ratios = new Map<string, number>();

    const updateActiveSection = () => {
      let nextActive: string | null = null;
      let highestRatio = 0;

      for (const id of sectionIds) {
        const ratio = ratios.get(id) ?? 0;
        if (ratio > highestRatio) {
          highestRatio = ratio;
          nextActive = id;
        }
      }

      setActiveSection(nextActive);
    };

    const observers = sectionIds
      .map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
            });
            updateActiveSection();
          },
          { rootMargin, threshold },
        );

        observer.observe(element);
        return observer;
      })
      .filter(Boolean) as IntersectionObserver[];

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, rootMargin, threshold]);

  return activeSection;
}

export { useActiveSection };
