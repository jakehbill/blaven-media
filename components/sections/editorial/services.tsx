"use client";

import { ArrowDownRight } from "lucide-react";

import { Reveal } from "@/components/sections/editorial/reveal";
import { SectionLink } from "@/components/sections/editorial/section-link";
import { Container } from "@/components/ui/container";
import { homeEditorialContent } from "@/data/home-editorial";

function EditorialServices() {
  const { services } = homeEditorialContent;

  return (
    <section
      id="services"
      tabIndex={-1}
      aria-labelledby="services-heading"
      className="scroll-mt-24 border-y border-rule bg-panel outline-none"
    >
      <Container className="py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-olive">
            {services.eyebrow}
          </p>
          <h2
            id="services-heading"
            className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.045em] text-charcoal"
          >
            {services.heading}
          </h2>
          <p className="mt-6 font-serif text-2xl tracking-[-0.02em] text-charcoal md:text-3xl">
            {services.lead}
          </p>
          <p className="mt-5 max-w-prose text-[15px] leading-[1.8] text-ink-muted">
            {services.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {services.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="flex min-h-[280px] flex-col justify-between bg-ivory p-8 md:p-10"
            >
              <span className="font-mono text-xs font-medium tracking-[0.14em] text-olive">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-serif text-3xl tracking-[-0.03em] text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-ink-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <SectionLink
            href={services.cta.href}
            className="inline-flex items-center gap-3 border-b border-charcoal pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:border-olive hover:text-olive"
          >
            {services.cta.label}
            <ArrowDownRight size={16} aria-hidden />
          </SectionLink>
        </Reveal>
      </Container>
    </section>
  );
}

export { EditorialServices };
