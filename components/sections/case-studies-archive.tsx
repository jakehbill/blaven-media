"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/sections/editorial/reveal";
import { Container } from "@/components/ui/container";
import {
  caseStudiesIndexContent,
  type CaseStudyIndexItem,
} from "@/data/case-studies-index";

function CaseStudyRow({
  item,
  index,
}: {
  item: CaseStudyIndexItem;
  index: number;
}) {
  const content = (
    <div className="grid gap-6 py-10 md:grid-cols-[4.5rem_10rem_minmax(0,1fr)_auto] md:items-start md:gap-8 md:py-12">
      <span className="font-mono text-xs font-medium tracking-[0.14em] text-olive">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative aspect-[4/3] w-full max-w-[9rem] overflow-hidden bg-sage md:max-w-none">
        <Image
          src={item.thumbnail.src}
          alt=""
          fill
          sizes="(max-width: 768px) 144px, 180px"
          className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-olive">
          {item.industry}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-charcoal md:text-3xl">
          {item.client}
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-ink-muted">
          {item.summary}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {item.services.map((service) => (
            <li
              key={service}
              className="border border-rule bg-panel px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-olive"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>

      {item.href ? (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal md:justify-self-end">
          View example
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
            aria-hidden
          />
        </span>
      ) : null}
    </div>
  );

  const rowClassName =
    "group block border-b border-rule outline-none transition-opacity last:border-b-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.client}: opens example in a new tab`}
        className={rowClassName}
      >
        {content}
      </a>
    );
  }

  return <div className={rowClassName}>{content}</div>;
}

function CaseStudiesArchive() {
  const { eyebrow, heading, introduction, items } = caseStudiesIndexContent;

  return (
    <>
      <section aria-labelledby="archive-heading" className="bg-sand">
        <Container className="py-16 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-olive">
              {eyebrow}
            </p>
            <h1 id="archive-heading" className="text-h1 text-charcoal">
              {heading}
            </h1>
            <p className="mt-6 max-w-prose text-[15px] leading-[1.85] text-ink-muted">
              {introduction}
            </p>
            <Link
              href="/#work"
              className="mt-8 inline-flex items-center gap-3 border-b border-charcoal pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:border-olive hover:text-olive"
            >
              Back to homepage work
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>

      <section aria-label="Case study list" className="bg-ivory">
        <Container>
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.03}>
              <CaseStudyRow item={item} index={index} />
            </Reveal>
          ))}
        </Container>
      </section>

      <section aria-label="Contact prompt" className="bg-olive">
        <Container className="py-16 md:py-20">
          <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-on-dark md:text-4xl">
                Have a story worth telling?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-on-dark-muted">
                Tell us what you&apos;re working on. We&apos;ll help it reach the
                people who matter.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-sand px-6 py-4 text-xs font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-ivory"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export { CaseStudiesArchive };
