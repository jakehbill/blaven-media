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

export default function HomePage() {
  return (
    <SiteShell>
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
