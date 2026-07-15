import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { About } from "@/components/sections";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Building recognition for organisations with meaningful ideas. ${siteConfig.description}`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col outline-none">
        <About />
      </main>
    </SiteShell>
  );
}
