import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { HashScroll } from "@/components/navigation/hash-scroll";
import { EditorialHome } from "@/components/sections/editorial/home";
import { homeMetadata } from "@/lib/metadata";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <SiteShell>
      <HashScroll />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex flex-1 flex-col outline-none"
      >
        <EditorialHome />
      </main>
    </SiteShell>
  );
}
