export type NavItem = {
  label: string;
  href: string;
  /** In-page section id used for homepage scroll highlighting. */
  sectionId?: string;
};

export const primaryNavigation: NavItem[] = [
  { label: "Work", href: "/case-studies" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/#in-action", sectionId: "in-action" },
];

export const navigationCta = {
  label: "Let's Talk",
  href: "/contact",
} as const;
