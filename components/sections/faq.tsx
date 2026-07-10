"use client";

import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { faqContent } from "@/data/faq";

function Faq() {
  return (
    <Section
      id="faq"
      spacing="md"
      surface="light"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <SectionHeader
            id="faq-heading"
            label={faqContent.label}
            heading={faqContent.heading}
            introduction={faqContent.introduction}
          />

          <MotionReveal delay={0.08}>
            <Accordion items={faqContent.items} />
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}

export { Faq };
