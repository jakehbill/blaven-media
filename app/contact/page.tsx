import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { Contact } from "@/components/sections";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { contactMetadata } from "@/lib/metadata";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <SiteShell>
      <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact" }]} />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col outline-none">
        <Contact />
      </main>
    </SiteShell>
  );
}
