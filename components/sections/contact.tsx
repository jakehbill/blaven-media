"use client";

import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";
import { Heading, Text } from "@/components/ui/typography";
import { contactContent } from "@/data/contact";

function Contact() {
  return (
    <Section
      id="contact"
      spacing="lg"
      border="top"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <div className="max-w-prose">
            <MotionReveal>
              <Text variant="eyebrow">{contactContent.label}</Text>
            </MotionReveal>

            <MotionReveal className="mt-6" delay={0.05}>
              <Heading id="contact-heading" level="h2">
                {contactContent.heading}
              </Heading>
            </MotionReveal>

            <MotionReveal className="mt-6" delay={0.1}>
              <Text variant="body-lg" className="text-foreground/85">
                {contactContent.introduction}
              </Text>
            </MotionReveal>

            <MotionReveal className="mt-12" delay={0.15}>
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
                          className="text-[0.9375rem]"
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
                        <p className="text-[0.9375rem] text-foreground/85">
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
