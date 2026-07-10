"use client";

import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { TextLink } from "@/components/ui/text-link";
import { contactContent } from "@/data/contact";

function Contact() {
  return (
    <Section
      id="contact"
      spacing="md"
      surface="light"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div>
            <SectionHeader
              id="contact-heading"
              label={contactContent.label}
              heading={contactContent.heading}
              introduction={contactContent.introduction}
            />

            <MotionReveal className="mt-10" delay={0.15}>
              <dl className="space-y-6 border-t border-border/60 pt-8">
                {contactContent.details.map((detail) => (
                  <div key={detail.label} className="space-y-1.5">
                    <dt className="text-eyebrow uppercase text-muted-foreground">
                      {detail.label}
                    </dt>
                    <dd>
                      {detail.href ? (
                        <TextLink
                          href={detail.href}
                          variant="default"
                          className="text-sm md:text-[0.9375rem]"
                          {...(detail.href.startsWith("http")
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                        >
                          {detail.value}
                        </TextLink>
                      ) : (
                        <p className="text-sm text-foreground/85 md:text-[0.9375rem]">
                          {detail.value}
                        </p>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.1}>
            <ContactForm />
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}

export { Contact };
