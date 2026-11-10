import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { HashRedirect } from "@/components/navigation/hash-redirect";
import { aboutMetadata } from "@/lib/metadata";

export const metadata: Metadata = aboutMetadata;

/**
 * About content lives on the homepage studio section.
 * Keep this route for old bookmarks/links, redirect to /#about,
 * and leave it noindex so the homepage is the only About surface.
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
