import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { CaseStudies } from "@/components/sections";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { caseStudiesMetadata } from "@/lib/metadata";

export const metadata: Metadata = caseStudiesMetadata;

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <BreadcrumbJsonLd
        items={[{ name: "Case Studies", path: "/case-studies" }]}
      />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col outline-none">
        <CaseStudies />
      </main>
    </SiteShell>
  );
}
