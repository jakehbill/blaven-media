import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { About } from "@/components/sections";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { aboutMetadata } from "@/lib/metadata";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <SiteShell>
      <BreadcrumbJsonLd items={[{ name: "About", path: "/about" }]} />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col outline-none">
        <About />
      </main>
    </SiteShell>
  );
}
