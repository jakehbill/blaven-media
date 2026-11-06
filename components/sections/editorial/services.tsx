"use client";

import { ArrowDownRight } from "lucide-react";

import { Reveal } from "@/components/sections/editorial/reveal";
import { SectionLink } from "@/components/sections/editorial/section-link";
import { Container } from "@/components/ui/container";
import { homeEditorialContent } from "@/data/home-editorial";
import { cn } from "@/lib/utils";

const tileSurfaces = [
  {
    panel: "bg-sage text-on-dark",
    number: "text-on-dark-muted",
    body: "text-on-dark-muted",
  },
  {
    panel: "bg-sand text-charcoal",
    number: "text-olive",
    body: "text-ink-muted",
  },
  {
    panel: "bg-olive text-on-dark",
    number: "text-on-dark-muted",
    body: "text-on-dark-muted",
  },
] as const;

function EditorialServices() {
  const { services } = homeEditorialContent;

  return (
    <section
      id="services"
      tabIndex={-1}
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-ivory outline-none"
    >
      <Container className="py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-olive">
            {services.eyebrow}
          </p>
          <h2
            id="services-heading"
            className="text-[clamp(2.2rem,4.8vw,4rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-charcoal"
          >
            {services.heading}
          </h2>
          <p className="mt-6 text-xl font-medium tracking-[-0.02em] text-sage md:text-2xl">
            {services.lead}
          </p>
          <p className="mt-5 max-w-prose text-[15px] leading-[1.8] text-ink-muted">
            {services.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {services.items.map((item, index) => {
            const surface = tileSurfaces[index] ?? tileSurfaces[1];
            return (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className={cn(
                  "flex min-h-[280px] flex-col justify-between p-8 md:p-10",
                  surface.panel,
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs font-medium tracking-[0.14em]",
                    surface.number,
                  )}
                >
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                    {item.title}
                  </h3>
                  <p className={cn("mt-5 text-sm leading-7", surface.body)}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <SectionLink
            href={services.cta.href}
            className="inline-flex items-center gap-3 border-b border-charcoal pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:border-sage hover:text-sage"
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
