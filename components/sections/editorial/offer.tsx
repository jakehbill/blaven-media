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
      className="scroll-mt-24 bg-ivory outline-none"
    >
      <Container className="pb-16 md:pb-24">
        <Reveal className="grid gap-10 border-y border-rule bg-panel px-8 py-14 md:grid-cols-[1fr_0.9fr] md:gap-16 md:px-14 md:py-20">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-olive">
              {offer.eyebrow}
            </p>
            <h2
              id="approach-heading"
              className="font-serif text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.045em] text-charcoal"
            >
              {offer.heading}
              <br />
              <em className="font-normal text-olive">{offer.headingEmphasis}</em>
            </h2>
            <p className="mt-8 font-serif text-2xl tracking-[-0.02em] text-charcoal md:text-3xl">
              {offer.lead}
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-5 text-[15px] leading-[1.85] text-ink-muted">
              {offer.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="font-medium text-charcoal">{offer.closer}</p>
            </div>
            <SectionLink
              href={offer.cta.href}
              className="mt-10 inline-flex w-fit items-center gap-3 border-b border-charcoal pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:border-olive hover:text-olive"
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
