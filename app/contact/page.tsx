import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { Contact } from "@/components/sections";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Let's build something people remember. ${siteConfig.description}`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col outline-none">
        <Contact />
      </main>
    </SiteShell>
  );
}
