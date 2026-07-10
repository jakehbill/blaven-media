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
      <main id="main-content" className="flex flex-1 flex-col">
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
