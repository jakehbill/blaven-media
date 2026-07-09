import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
