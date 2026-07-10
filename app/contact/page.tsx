import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { Contact } from "@/components/sections";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `[Placeholder Contact page description] ${siteConfig.description}`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <main id="main-content" className="flex flex-1 flex-col">
        <Contact />
      </main>
    </SiteShell>
  );
}
