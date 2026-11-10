"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/sections/editorial/reveal";
import { Container } from "@/components/ui/container";
import { homeEditorialContent } from "@/data/home-editorial";

function EditorialStudio() {
  const { studio } = homeEditorialContent;

  return (
    <section
      id="about"
      tabIndex={-1}
      aria-labelledby="studio-heading"
      className="scroll-mt-24 overflow-hidden bg-olive outline-none"
    >
      <Container className="relative py-16 md:py-20 lg:py-24">
        <Reveal className="grid gap-10 text-on-dark lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)] lg:items-end lg:gap-10">
          <div className="relative z-10 max-w-3xl">
            <h2 id="studio-heading" className="text-h2 text-on-dark">
              {studio.heading}
            </h2>
            <p className="mt-5 text-xl font-medium tracking-[-0.02em] text-sand md:text-2xl">
              {studio.lead}
            </p>
            <div className="mt-8 max-w-prose-wide space-y-4 text-[15px] leading-[1.85] text-on-dark-muted">
              {studio.body.map((paragraph) => {
                const emphasis =
                  "cut through the noise and reach the right people by working smart, not loud.";
                if (!paragraph.includes(emphasis)) {
                  return <p key={paragraph}>{paragraph}</p>;
                }
                const [before, after] = paragraph.split(emphasis);
                return (
                  <p key={paragraph}>
                    {before}
                    <strong className="font-semibold text-on-dark">
                      {emphasis}
                    </strong>
                    {after}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 flex w-full flex-col items-start gap-6 lg:items-end">
            <div
              className="pointer-events-none relative aspect-[480/248] w-full max-w-xs -translate-y-3 opacity-70 md:-translate-y-5 lg:max-w-sm lg:-translate-y-6"
              aria-hidden
            >
              <Image
                src="/images/mountain-clipart.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 20rem, 24rem"
                className="object-contain object-bottom"
              />
            </div>

            <Link
              href={studio.cta.href}
              className="inline-flex items-center gap-3 bg-sand px-6 py-4 text-xs font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-ivory"
            >
              {studio.cta.label}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { EditorialStudio };
