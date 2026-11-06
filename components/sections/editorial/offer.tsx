"use client";

import { ArrowDownRight } from "lucide-react";

import { Reveal } from "@/components/sections/editorial/reveal";
import { SectionLink } from "@/components/sections/editorial/section-link";
import { Container } from "@/components/ui/container";
import { homeEditorialContent } from "@/data/home-editorial";

function EditorialOffer() {
  const { offer } = homeEditorialContent;

  return (
    <section
      id="approach"
      tabIndex={-1}
      aria-labelledby="approach-heading"
      className="scroll-mt-24 bg-sand outline-none"
    >
      <Container className="py-16 md:py-24 lg:py-28">
        <Reveal className="grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-start md:gap-16">
          <div>
            <h2
              id="approach-heading"
              className="text-h2 text-charcoal"
            >
              {offer.heading}
              <br />
              <em className="font-semibold text-sage not-italic">
                {offer.headingEmphasis}
              </em>
            </h2>
            <p className="mt-8 text-xl font-medium tracking-[-0.02em] text-charcoal md:text-2xl">
              {offer.lead}
            </p>
          </div>

          <div>
            <div className="space-y-5 text-[15px] leading-[1.85] text-ink-muted">
              {offer.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="font-semibold text-charcoal">{offer.closer}</p>
            </div>
            <SectionLink
              href={offer.cta.href}
              className="mt-10 inline-flex w-fit items-center gap-3 border-b border-charcoal pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:border-sage hover:text-sage"
            >
              {offer.cta.label}
              <ArrowDownRight size={16} aria-hidden />
            </SectionLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { EditorialOffer };
