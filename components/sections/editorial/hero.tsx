"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { HeroVisual } from "@/components/sections/editorial/hero-visual";
import { Reveal } from "@/components/sections/editorial/reveal";
import { SectionLink } from "@/components/sections/editorial/section-link";
import { Container } from "@/components/ui/container";
import { homeEditorialContent } from "@/data/home-editorial";

function EditorialHero() {
  const { hero } = homeEditorialContent;

  return (
    <section aria-labelledby="home-heading" className="bg-sage">
      <Container className="py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] lg:gap-8 xl:gap-12">
          <Reveal className="relative z-10">
            <h1
              id="home-heading"
              className="max-w-3xl text-h1 text-on-dark"
            >
              {hero.headline}{" "}
              <em className="font-semibold text-sand not-italic">
                {hero.headlineEmphasis}
              </em>
            </h1>
            <div className="mt-8 max-w-3xl space-y-4 text-[15px] leading-[1.85] text-on-dark-muted">
              {hero.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <SectionLink
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-3 border-b border-on-dark pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-on-dark transition-colors hover:border-sand hover:text-sand"
              >
                {hero.primaryCta.label}
                <ArrowDownRight size={16} aria-hidden />
              </SectionLink>
              <SectionLink
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 bg-olive px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-charcoal"
              >
                {hero.secondaryCta.label}
                <ArrowUpRight size={14} aria-hidden />
              </SectionLink>
            </div>
          </Reveal>

          <HeroVisual className="mx-auto w-full max-w-[480px] lg:mx-0 lg:max-w-none lg:justify-self-end" />
        </div>
      </Container>
    </section>
  );
}

export { EditorialHero };
