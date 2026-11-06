"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/sections/editorial/reveal";
import { Container } from "@/components/ui/container";
import {
  workMediaItems,
  type WorkMediaItem,
} from "@/data/work-media";

const providerLabel: Record<WorkMediaItem["provider"], string> = {
  youtube: "YouTube",
  linkedin: "LinkedIn",
  substack: "Substack",
  other: "External",
};

function CaseStudiesArchive() {
  return (
    <>
      <section aria-labelledby="archive-heading" className="bg-ivory">
        <Container className="py-16 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-olive">
              Selected work / Archive
            </p>
            <h1
              id="archive-heading"
              className="text-h1 text-charcoal"
            >
              Work in its{" "}
              <em className="font-semibold text-sage not-italic">own home.</em>
            </h1>
            <p className="mt-6 max-w-prose text-[15px] leading-[1.85] text-ink-muted">
              A short archive of the formats we produce: podcasts, LinkedIn
              shorts, Substack essays, and newsletters. Each link opens the
              piece externally. For the curated reel, see the homepage.
            </p>
            <Link
              href="/#work"
              className="mt-8 inline-flex items-center gap-3 border-b border-charcoal pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:border-olive hover:text-olive"
            >
              Back to homepage work
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </Reveal>

          <div className="mt-14 divide-y divide-rule border-y border-rule">
            {workMediaItems.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.03}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title}: opens ${providerLabel[item.provider]} in a new tab${item.placeholder ? " (placeholder link)" : ""}`}
                  className="group grid gap-6 py-8 transition-colors md:grid-cols-[7rem_8rem_1fr_auto] md:items-center md:gap-8 md:py-9"
                >
                  <span className="font-mono text-xs font-medium tracking-[0.14em] text-olive">
                    0{index + 1}
                  </span>
                  <div className="relative aspect-[4/3] w-full max-w-[8rem] overflow-hidden bg-sage">
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail.src}
                        alt=""
                        fill
                        sizes="128px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    ) : (
                      <span className="flex h-full items-center justify-center bg-sand text-[10px] font-semibold uppercase tracking-[0.16em] text-olive">
                        {item.formatLabel}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-olive">
                      {item.formatLabel}
                      {item.placeholder ? " · Placeholder" : ""}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-charcoal md:text-3xl">
                      {item.title}
                    </h2>
                    {item.client ? (
                      <p className="mt-2 text-sm text-ink-muted">{item.client}</p>
                    ) : null}
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal">
                    {providerLabel[item.provider]}
                    <ArrowUpRight size={16} aria-hidden />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-label="Contact prompt" className="bg-ivory">
        <Container className="pb-16 md:pb-24">
          <Reveal className="flex flex-col items-start justify-between gap-8 bg-panel p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-charcoal md:text-4xl">
                Have a story worth telling?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-ink-muted">
                Tell us what you&apos;re working on. We&apos;ll help it reach the
                people who matter.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-charcoal px-6 py-4 text-xs font-semibold uppercase tracking-widest text-ivory transition-colors hover:bg-olive"
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
