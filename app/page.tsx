import { SiteShell } from "@/components/layout";
import {
  About,
  Capabilities,
  CaseStudies,
  Hero,
  Testimonials,
  WhyThisMatters,
} from "@/components/sections";

export default function HomePage() {
  return (
    <SiteShell>
      <main id="main-content" className="flex flex-1 flex-col">
        <Hero />
        <WhyThisMatters />
        <Capabilities />
        <CaseStudies />
        <Testimonials />
        <About />
      </main>
    </SiteShell>
  );
}
