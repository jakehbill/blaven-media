import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { HashRedirect } from "@/components/navigation/hash-redirect";
import { aboutMetadata } from "@/lib/metadata";

export const metadata: Metadata = aboutMetadata;

/**
 * About lives on the homepage studio section. Keep the route for SEO
 * bookmarks and send visitors to the in-page anchor.
 */
export default function AboutPage() {
  return (
    <SiteShell>
      <main
        id="main-content"
        tabIndex={-1}
        className="flex flex-1 flex-col outline-none"
      >
        <HashRedirect to="/#about" />
      </main>
    </SiteShell>
  );
}
