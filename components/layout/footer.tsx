import Link from "next/link";

import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-ivory">
      <Container>
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between md:gap-12 md:py-14">
          <div className="space-y-5">
            <Link
              href="/"
              className="text-lg font-semibold tracking-[-0.03em] text-charcoal transition-colors hover:text-sage"
            >
              {siteConfig.name}
            </Link>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <TextLink
                      href={item.href}
                      variant="muted"
                      className="text-xs font-medium tracking-[0.06em]"
                    >
                      {item.label}
                    </TextLink>
                  </li>
                ))}
                <li>
                  <TextLink
                    href="/contact"
                    variant="muted"
                    className="text-xs font-medium tracking-[0.06em]"
                  >
                    Contact
                  </TextLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="space-y-1.5 md:max-w-xs md:text-right">
            <p className="text-caption text-muted-foreground">
              Blaven Studios Ltd
            </p>
            <p className="text-caption text-muted-foreground">
              Company No. 15985782
            </p>
            <p className="pt-2 text-caption text-muted-foreground">
              © 2026 Blaven Studios Ltd
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
