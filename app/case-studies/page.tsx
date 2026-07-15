import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { CaseStudies } from "@/components/sections";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Helping meaningful organisations become recognised. ${siteConfig.description}`,
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col outline-none">
        <CaseStudies />
      </main>
    </SiteShell>
  );
}
