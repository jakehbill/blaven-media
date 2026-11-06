"use client";

import { Reveal } from "@/components/sections/editorial/reveal";
import { Container } from "@/components/ui/container";
import { capabilitiesContent } from "@/data/capabilities";
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
          <p className="mt-6 max-w-prose text-[15px] leading-[1.8] text-ink-muted">
            {services.introduction}
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-rule border-y border-rule">
          {capabilitiesContent.items.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.04}>
              <div className="grid gap-6 py-8 md:grid-cols-[4rem_1fr_14rem] md:gap-10 md:py-10">
                <span className="font-mono text-xs font-medium tracking-[0.14em] text-olive">
                  {item.number}
                </span>
                <div className="max-w-xl">
                  <h3 className="font-serif text-3xl tracking-[-0.03em] text-charcoal md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-ink-muted">
                    {item.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 md:flex-col md:gap-y-2">
                  {item.services.map((service) => (
                    <li
                      key={service}
                      className="text-xs font-medium tracking-[0.04em] text-ink-subtle"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { EditorialServices };
