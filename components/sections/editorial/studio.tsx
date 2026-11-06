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
      className="scroll-mt-24 bg-olive outline-none"
    >
      <Container className="py-16 md:py-20 lg:py-24">
        <Reveal className="flex flex-col items-start justify-between gap-10 text-on-dark md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h2 id="studio-heading" className="text-h2 text-on-dark">
              {studio.heading}
            </h2>
            <p className="mt-5 text-xl font-medium tracking-[-0.02em] text-sand md:text-2xl">
              {studio.lead}
            </p>
            <div className="mt-8 max-w-prose-wide space-y-4 text-[15px] leading-[1.85] text-on-dark-muted">
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
      </Container>
    </section>
  );
}

export { EditorialStudio };
