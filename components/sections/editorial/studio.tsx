"use client";

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
      className="scroll-mt-24 bg-ivory outline-none"
    >
      <Container className="pb-16 md:pb-24">
        <div className="grid gap-3 md:grid-cols-[0.28fr_1fr]">
          <div className="hidden min-h-[180px] bg-sand md:block" aria-hidden />
          <Reveal className="flex flex-col items-start justify-between gap-10 bg-olive p-9 text-on-dark md:flex-row md:items-end md:p-16">
            <div className="max-w-2xl">
              <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-on-dark-muted">
                {studio.eyebrow}
              </p>
              <h2
                id="studio-heading"
                className="text-[clamp(2.2rem,5vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-on-dark"
              >
                {studio.heading}{" "}
                <em className="font-semibold text-sand not-italic">
                  {studio.headingEmphasis}
                </em>
                <br />
                {studio.headingLine}
              </h2>
              <div className="mt-8 max-w-prose space-y-4 text-[15px] leading-[1.85] text-on-dark-muted">
                {studio.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <Link
              href={studio.cta.href}
              className="inline-flex items-center gap-3 bg-sand px-6 py-4 text-xs font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-ivory"
            >
              {studio.cta.label}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export { EditorialStudio };
