import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="border-b border-border/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
        <span className="text-sm font-medium tracking-tight">
          {siteConfig.name}
        </span>
      </div>
    </header>
  );
}
