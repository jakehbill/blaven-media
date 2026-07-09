import { SiteShell } from "@/components/layout";
import { Hero } from "@/components/sections";

export default function HomePage() {
  return (
    <SiteShell>
      <main id="main-content" className="flex flex-1 flex-col">
        <Hero />
      </main>
    </SiteShell>
  );
}
