export type NavItem = {
  label: string;
  href: string;
  /** In-page section id used for homepage scroll highlighting. */
  sectionId?: string;
};

export const primaryNavigation: NavItem[] = [
  { label: "Work", href: "/#work", sectionId: "work" },
  { label: "Approach", href: "/#approach", sectionId: "approach" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "About", href: "/#about", sectionId: "about" },
];

export const navigationCta = {
  label: "Let's Talk",
  href: "/contact",
} as const;
