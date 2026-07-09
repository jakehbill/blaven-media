export type NavItem = {
  label: string;
  href: string;
  sectionId: string;
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Services", href: "#services", sectionId: "services" },
  {
    label: "Case Studies",
    href: "#case-studies",
    sectionId: "case-studies",
  },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export const navigationCta = {
  label: "Let's Talk",
  href: "#contact",
  sectionId: "contact",
} as const;
