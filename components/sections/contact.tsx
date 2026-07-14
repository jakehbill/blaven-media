"use client";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";
import { EmailReveal } from "@/components/ui/email-reveal";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SurfaceTexture } from "@/components/ui/surface-texture";
import { TextLink } from "@/components/ui/text-link";
import { Heading, Text } from "@/components/ui/typography";
import { contactPageContent } from "@/data/contact";

function ContactHero() {
  const { hero } = contactPageContent;

  return (
    <Section
      id="contact"
      spacing="lg"
      surface="dark"
      className="relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <SurfaceTexture variant="grain" tone="dark" />

      <Container className="relative z-10">
        <SectionHeader
          id="contact-heading"
          label={hero.label}
          heading={hero.heading}
          labelSpacing="tight"
          className="max-w-3xl"
        />

        <MotionReveal className="mt-6 max-w-prose" delay={0.1}>
          <Text variant="body-lg" className="leading-[1.55] text-foreground/85">
            {hero.body}
          </Text>
        </MotionReveal>
      </Container>
    </Section>
  );
}

function ContactMain() {
  const { details } = contactPageContent;

  return (
    <Section
      id="contact-form"
      spacing="md"
      surface="light"
      className="relative overflow-hidden"
      aria-label="Contact details and form"
    >
      <SurfaceTexture variant="paper" tone="light" />

      <Container className="relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <MotionReveal>
            <dl className="space-y-7">
              <div className="space-y-2">
                <dt className="text-eyebrow uppercase text-muted-foreground">
                  Email
                </dt>
                <dd>
                  <EmailReveal variant="text" />
                </dd>
              </div>

              <div className="space-y-2">
                <dt className="text-eyebrow uppercase text-muted-foreground">
                  {details.linkedin.label}
                </dt>
                <dd>
                  <TextLink
                    href={details.linkedin.href}
                    variant="default"
                    className="text-sm md:text-[0.9375rem]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {details.linkedin.value}
                  </TextLink>
                </dd>
              </div>

              <div className="space-y-2">
                <dt className="text-eyebrow uppercase text-muted-foreground">
                  {details.location.label}
                </dt>
                <dd>
                  <p className="text-sm text-foreground/85 md:text-[0.9375rem]">
                    {details.location.value}
                  </p>
                </dd>
              </div>
            </dl>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <ContactForm className="relative" />
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}

function ContactDirect() {
  const { directContact, details } = contactPageContent;

  return (
    <Section
      id="prefer-email"
      spacing="md"
      surface="grey"
      className="relative overflow-hidden"
      aria-labelledby="prefer-email-heading"
    >
      <SurfaceTexture variant="mesh" tone="light" />

      <Container className="relative z-10">
        <MotionReveal className="max-w-2xl">
          <Heading id="prefer-email-heading" level="h2">
            {directContact.heading}
          </Heading>

          <Text
            variant="body-lg"
            className="mt-5 max-w-prose leading-[1.55] text-foreground/85"
          >
            {directContact.body}
          </Text>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <EmailReveal variant="button" revealLabel="Reveal Email" />

            <Button
              variant="secondary"
              size="default"
              className="w-full sm:w-auto"
              render={
                <a
                  href={details.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {directContact.linkedinLabel}
            </Button>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  );
}

function Contact() {
  return (
    <>
      <ContactHero />
      <ContactMain />
      <ContactDirect />
    </>
  );
}

export { Contact };
