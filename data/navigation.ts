export type NavItem = {
  label: string;
  href: string;
  /** In-page section id used for homepage scroll highlighting. */
  sectionId?: string;
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const navigationCta = {
  label: "Let's Talk",
  href: "/contact",
} as const;
