"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/sections/editorial/reveal";
import { Container } from "@/components/ui/container";
import { homeEditorialContent } from "@/data/home-editorial";

function EditorialCta() {
  const { cta } = homeEditorialContent;
  const [lineOne, lineTwo] = cta.heading.split("\n");

  return (
    <section aria-labelledby="home-cta-heading" className="bg-ivory">
      <Container className="pb-16 md:pb-24">
        <Reveal className="flex flex-col items-start justify-between gap-10 bg-olive p-9 text-on-dark md:flex-row md:items-end md:p-16">
          <div>
            <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-on-dark-muted">
              {cta.eyebrow}
            </p>
            <h2
              id="home-cta-heading"
              className="font-serif text-[clamp(2.8rem,6vw,5.75rem)] leading-[0.98] tracking-[-0.04em] text-on-dark"
            >
              {lineOne}
              <br />
              {lineTwo}
            </h2>
          </div>
          <Link
            href={cta.button.href}
            className="inline-flex items-center gap-3 bg-ivory px-6 py-4 text-xs font-semibold uppercase tracking-widest text-olive transition-colors hover:bg-sand hover:text-charcoal"
          >
            {cta.button.label}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

export { EditorialCta };
