"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { contactContent } from "@/data/contact";

function ContactCta() {
  return (
    <Section
      id="contact-cta"
      spacing="sm"
      surface="light"
      aria-labelledby="contact-cta-heading"
    >
      <Container>
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <Text variant="eyebrow">{contactContent.label}</Text>
          <Heading id="contact-cta-heading" level="h2" className="mt-6">
            {contactContent.heading}
          </Heading>
          <Text
            variant="body-lg"
            className="mx-auto mt-6 max-w-prose text-foreground/85"
          >
            {contactContent.introduction}
          </Text>
          <div className="mt-8 flex justify-center">
            <Button
              variant="primary"
              size="default"
              render={<Link href="/contact" />}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  );
}

export { ContactCta };
