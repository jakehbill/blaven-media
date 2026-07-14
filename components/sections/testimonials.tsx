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
          className="max-w-5xl"
        />

        <div className="mt-10 border-t border-border/60 pt-9 md:mt-11 md:pt-10">
          <TestimonialCarousel items={testimonialsContent.items} />
        </div>
      </Container>
    </Section>
  );
}

export { Testimonials };
