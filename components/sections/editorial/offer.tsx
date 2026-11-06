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
        <Reveal className="grid overflow-hidden md:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between bg-sage p-8 text-on-dark md:min-h-[420px] md:p-14">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-on-dark-muted">
              {offer.eyebrow}
            </p>
            <div>
              <h2
                id="approach-heading"
                className="font-serif text-[clamp(2.2rem,4.5vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.03em] text-on-dark"
              >
                {offer.heading}
                <br />
                <em className="text-sand">{offer.headingEmphasis}</em>
              </h2>
              <p className="mt-8 font-serif text-xl font-normal tracking-[-0.02em] text-on-dark md:text-2xl">
                {offer.lead}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-sand p-8 md:min-h-[420px] md:p-14">
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
