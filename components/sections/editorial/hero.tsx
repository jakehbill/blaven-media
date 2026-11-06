"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/sections/editorial/reveal";
import { Container } from "@/components/ui/container";
import { homeEditorialContent } from "@/data/home-editorial";

function EditorialHero() {
  const { hero } = homeEditorialContent;

  return (
    <section aria-labelledby="home-heading" className="bg-ivory">
      <Container className="py-5 md:py-8">
        <div className="grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="flex min-h-[530px] flex-col justify-between bg-panel p-8 md:p-14 lg:min-h-[640px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-olive">
              {hero.eyebrow}
            </p>
            <div>
              <h1
                id="home-heading"
                className="max-w-[720px] font-serif text-[clamp(2.85rem,6.2vw,5.75rem)] leading-[0.96] tracking-[-0.055em] text-charcoal"
              >
                {hero.headline}{" "}
                <em className="font-normal text-olive">{hero.headlineEmphasis}</em>
              </h1>
              <p className="mt-9 max-w-[480px] text-[15px] leading-[1.85] text-ink-muted">
                {hero.body}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex items-center gap-3 border-b border-charcoal pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:border-olive hover:text-olive"
                >
                  {hero.primaryCta.label}
                  <ArrowDownRight size={16} aria-hidden />
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 bg-charcoal px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-olive"
                >
                  {hero.secondaryCta.label}
                  <ArrowUpRight size={14} aria-hidden />
                </Link>
              </div>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-subtle">
              {hero.meta}
            </span>
          </Reveal>

          <Reveal
            delay={0.08}
            className="relative min-h-[390px] overflow-hidden bg-olive lg:min-h-[640px]"
          >
            <Image
              src={hero.featured.image.src}
              alt={hero.featured.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-1000 hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121812]/85 via-[#121812]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-on-dark md:p-10">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-on-dark-muted">
                {hero.featured.label}
              </span>
              <p className="mt-3 font-serif text-4xl tracking-[-0.03em] text-on-dark">
                {hero.featured.title}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export { EditorialHero };
