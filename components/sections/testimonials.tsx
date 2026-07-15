"use client";

import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { testimonialsContent } from "@/data/testimonials";

function Testimonials() {
  return (
    <Section
      id="testimonials"
      spacing="md"
      surface="stone"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeader
          id="testimonials-heading"
          label={testimonialsContent.label}
          heading={testimonialsContent.heading}
          introduction={testimonialsContent.introduction}
        />

        <div className="mt-8 border-t border-border/60 pt-8 md:mt-9 md:pt-9">
          <TestimonialCarousel items={testimonialsContent.items} />
        </div>
      </Container>
    </Section>
  );
}

export { Testimonials };
