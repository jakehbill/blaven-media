import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { Text } from "@/components/ui/typography";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="surface-grey border-t border-border/40">
      <Container>
        <div className="flex flex-col gap-6 py-section-sm md:flex-row md:items-start md:justify-between md:gap-10 lg:gap-12">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-2 text-[0.9375rem] font-medium tracking-tight text-foreground/90 transition-colors duration-300 hover:text-foreground sm:gap-2.5 sm:text-base"
            >
              <span className="relative size-7 shrink-0 overflow-hidden rounded-sm sm:size-8">
                <Image
                  src={siteConfig.logo.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </span>
              <span className="truncate">{siteConfig.name}</span>
            </Link>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-5">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <TextLink href={item.href} variant="muted">
                      {item.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="space-y-1.5 md:max-w-xs md:text-right">
            <Text variant="caption" className="text-muted-foreground/80">
              Blaven Studios Ltd
            </Text>
            <Text variant="caption" className="text-muted-foreground/80">
              Company No. 15985782
            </Text>
            <Text
              variant="caption"
              className="pt-2 text-muted-foreground/70"
            >
              © 2026 Blaven Studios Ltd
            </Text>
          </div>
        </div>
      </Container>
    </footer>
  );
}
