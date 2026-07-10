import type { NavItem } from "@/data/navigation";

export function isNavItemActive(
  item: Pick<NavItem, "href" | "sectionId">,
  pathname: string,
  activeSection: string | null,
) {
  if (item.href === "/") {
    return pathname === "/" && activeSection !== "services";
  }

  if (item.sectionId && item.href.includes("#")) {
    return pathname === "/" && activeSection === item.sectionId;
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function getHashFromHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1) || null;
}

export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const element = document.getElementById(hash);
  if (!element) return false;

  element.scrollIntoView({ behavior, block: "start" });
  return true;
}
