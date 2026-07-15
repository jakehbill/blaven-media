import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="surface-grey border-t border-border/40">
      <Container>
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-start md:justify-between md:gap-12 md:py-9">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-base font-medium tracking-tight text-foreground transition-opacity duration-300 hover:opacity-75"
            >
              <span className="relative size-8 shrink-0 overflow-hidden rounded-sm">
                <Image
                  src={siteConfig.logo.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </span>
              <span>{siteConfig.name}</span>
            </Link>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <TextLink
                      href={item.href}
                      variant="muted"
                      className="text-sm"
                    >
                      {item.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="space-y-1.5 md:text-right">
            <p className="text-[0.75rem] leading-relaxed text-muted-foreground/80">
              Blaven Studios Ltd
            </p>
            <p className="text-[0.75rem] leading-relaxed text-muted-foreground/80">
              Company No. 15985782
            </p>
            <p className="pt-2 text-[0.75rem] leading-relaxed text-muted-foreground/70">
              © 2026 Blaven Studios Ltd
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
