import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <Container>
        <div className="flex h-16 items-center">
          <p className="text-caption text-muted-foreground">© {year} {siteConfig.name}</p>
        </div>
      </Container>
    </footer>
  );
}
