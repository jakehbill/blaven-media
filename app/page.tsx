import { SiteShell } from "@/components/layout";
import { Capabilities, Hero, WhyThisMatters } from "@/components/sections";

export default function HomePage() {
  return (
    <SiteShell>
      <main id="main-content" className="flex flex-1 flex-col">
        <Hero />
        <WhyThisMatters />
        <Capabilities />
      </main>
    </SiteShell>
  );
}
