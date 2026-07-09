export type NavItem = {
  label: string;
  href: string;
  sectionId: string;
};

export const primaryNavigation: NavItem[] = [
  { label: "Work", href: "#work", sectionId: "work" },
  { label: "Services", href: "#services", sectionId: "services" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];
