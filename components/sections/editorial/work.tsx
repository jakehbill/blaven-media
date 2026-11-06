"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/sections/editorial/reveal";
import { Container } from "@/components/ui/container";
import { homeEditorialContent } from "@/data/home-editorial";

function EditorialWork() {
  const { work } = homeEditorialContent;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 bg-ivory"
    >
      <Container className="pb-20 md:pb-28">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-olive">
              {work.eyebrow}
            </p>
            <h2
              id="work-heading"
              className="font-serif text-[clamp(2.8rem,6vw,5.75rem)] leading-none tracking-[-0.05em] text-charcoal"
            >
              {work.heading}{" "}
              <em className="font-normal text-olive">{work.headingEmphasis}</em>
            </h2>
          </div>
          <Link
            href={work.cta.href}
            className="inline-flex items-center gap-3 border-b border-charcoal pb-2 text-xs font-semibold uppercase tracking-widest text-charcoal transition-colors hover:border-olive hover:text-olive"
          >
            {work.cta.label}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-3">
          {work.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <Link
                href="/case-studies"
                className="group block bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-sage">
                  <Image
                    src={item.image}
                    alt={`${item.name} case study`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6 md:p-8">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-olive">
                      0{index + 1} / Case study
                    </span>
                    <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-charcoal">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-ink-muted">
                      {item.type}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={19}
                    className="mt-1 shrink-0 text-charcoal"
                    aria-hidden
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { EditorialWork };
