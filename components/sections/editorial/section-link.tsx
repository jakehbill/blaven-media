import Link from "next/link";
import type { ReactNode } from "react";

type SectionLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

/**
 * Hash targets use a plain anchor so same-page navigation scrolls via HashScroll.
 * Path targets use Next.js Link.
 */
function SectionLink({ href, className, children }: SectionLinkProps) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export { SectionLink };
