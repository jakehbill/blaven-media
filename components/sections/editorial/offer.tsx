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
        <Reveal className="grid gap-8 md:grid-cols-[1fr_1.05fr] md:grid-rows-[auto_1fr_auto] md:gap-x-16 md:gap-y-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-olive md:col-start-1 md:row-start-1">
            {offer.eyebrow}
          </p>

          <h2
            id="approach-heading"
            className="text-h2 text-charcoal md:col-start-1 md:row-start-2 md:self-start"
          >
            {offer.heading}
            <br />
            <em className="font-semibold text-sage not-italic">
              {offer.headingEmphasis}
            </em>
          </h2>

          <p className="text-xl font-medium tracking-[-0.02em] text-charcoal md:col-start-1 md:row-start-3 md:self-end md:text-2xl">
            {offer.lead}
          </p>

          <div className="space-y-5 text-[15px] leading-[1.85] text-ink-muted md:col-start-2 md:row-start-2 md:self-start">
            {offer.body.map((paragraph) => (
              <p key={paragraph}>
                {paragraph.includes("more inbound demand") ? (
                  <>
                    {paragraph.split("more inbound demand")[0]}
                    <strong className="font-semibold text-charcoal">
                      more inbound demand
                    </strong>
                    {paragraph.split("more inbound demand")[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
            <p className="font-semibold text-charcoal">{offer.closer}</p>
          </div>

          <SectionLink
            href={offer.cta.href}
            className="inline-flex w-fit items-center gap-3 border-b border-charcoal pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:border-sage hover:text-sage md:col-start-2 md:row-start-3 md:self-end"
          >
            {offer.cta.label}
            <ArrowDownRight size={16} aria-hidden />
          </SectionLink>
        </Reveal>
      </Container>
    </section>
  );
}

export { EditorialOffer };
