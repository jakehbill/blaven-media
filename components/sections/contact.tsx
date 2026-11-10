"use client";

import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";
import { EmailReveal } from "@/components/ui/email-reveal";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SurfaceTexture } from "@/components/ui/surface-texture";
import { TextLink } from "@/components/ui/text-link";
import { contactPageContent } from "@/data/contact";

function ContactHero() {
  const { hero } = contactPageContent;

  return (
    <Section
      id="contact"
      spacing="md"
      surface="dark"
      className="relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <SurfaceTexture variant="grain" tone="dark" />

      <Container className="relative z-10">
        <SectionHeader
          id="contact-heading"
          level="h1"
          label={hero.label}
          heading={hero.heading}
          introduction={hero.body}
          labelSpacing="tight"
        />
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
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          <MotionReveal>
            <dl className="space-y-6">
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
                    <span className="sr-only"> (opens in a new tab)</span>
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

function Contact() {
  return (
    <>
      <ContactHero />
      <ContactMain />
    </>
  );
}

export { Contact };
