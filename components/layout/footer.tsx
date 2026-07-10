import Link from "next/link";

import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { contactContent } from "@/data/contact";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark border-t border-border/60">
      <Container>
        <div className="flex flex-col gap-8 py-10 md:py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <Link
              href="/"
              className="text-sm font-medium tracking-tight text-foreground transition-opacity duration-300 hover:opacity-75"
            >
              {siteConfig.name}
            </Link>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
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

            <TextLink
              href={contactContent.social.linkedin.href}
              variant="muted"
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactContent.social.linkedin.label}
            </TextLink>
          </div>

          <div className="flex flex-col gap-2 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-caption text-muted-foreground">
              © {year} {siteConfig.name}
            </p>
            <p className="text-caption text-muted-foreground">
              {contactContent.footer.tagline}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
