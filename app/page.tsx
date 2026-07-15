import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { HashScroll } from "@/components/navigation/hash-scroll";
import {
  AboutPreview,
  Capabilities,
  ContactCta,
  Faq,
  Hero,
  Testimonials,
  WhyThisMatters,
} from "@/components/sections";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { homeMetadata } from "@/lib/metadata";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <SiteShell>
      <FaqJsonLd />
      <HashScroll />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col outline-none">
        <Hero />
        <WhyThisMatters />
        <Capabilities />
        <Testimonials />
        <Faq />
        <AboutPreview />
        <ContactCta />
      </main>
    </SiteShell>
  );
}
