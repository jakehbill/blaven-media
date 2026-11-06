"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

import { Reveal } from "@/components/sections/editorial/reveal";
import { Container } from "@/components/ui/container";
import {
  workMediaContent,
  workMediaItems,
  type WorkMediaItem,
} from "@/data/work-media";
import { cn } from "@/lib/utils";

const providerLabel: Record<WorkMediaItem["provider"], string> = {
  youtube: "YouTube",
  linkedin: "LinkedIn",
  substack: "Substack",
  other: "External link",
};

function externalAriaLabel(item: WorkMediaItem) {
  const destination = providerLabel[item.provider];
  const status = item.placeholder ? " (placeholder link)" : "";
  return `${item.title} — opens ${destination} in a new tab${status}`;
}

function WorkMediaCard({
  item,
  className,
}: {
  item: WorkMediaItem;
  className?: string;
}) {
  const isVideo = item.format === "podcast" || item.format === "short";
  const hasImage = Boolean(item.thumbnail);

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={externalAriaLabel(item)}
      className={cn(
        "group relative flex min-h-[280px] flex-col justify-end overflow-hidden outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
        hasImage ? "bg-olive text-on-dark" : "bg-sand text-charcoal",
        item.featured && "min-h-[360px] md:min-h-[560px]",
        className,
      )}
    >
      {item.thumbnail ? (
        <Image
          src={item.thumbnail.src}
          alt=""
          fill
          sizes={
            item.featured
              ? "(max-width: 1024px) 100vw, 65vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100",
            item.featured ? "opacity-70" : "opacity-55",
          )}
        />
      ) : null}
      {hasImage ? <div className="absolute inset-0 bg-[#121812]/40" /> : null}

      <div className="relative z-10 flex flex-1 flex-col justify-between p-7 md:p-8">
        <div className="flex items-start justify-between gap-3">
          {isVideo ? (
            <span
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100",
                hasImage
                  ? "border-ivory/80 bg-ivory text-olive"
                  : "border-charcoal/20 bg-charcoal text-ivory",
              )}
              aria-hidden
            >
              <Play size={16} fill="currentColor" className="ml-0.5" />
            </span>
          ) : (
            <span
              className={cn(
                "text-[10px] font-semibold uppercase tracking-[0.18em]",
                hasImage ? "text-on-dark-muted" : "text-olive",
              )}
            >
              Read
            </span>
          )}
          <ArrowUpRight
            size={18}
            className={hasImage ? "text-on-dark" : "text-charcoal"}
            aria-hidden
          />
        </div>

        <div>
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.16em]",
              hasImage ? "text-on-dark-muted" : "text-olive",
            )}
          >
            {item.formatLabel}
            {item.placeholder ? " · Placeholder" : ""}
          </span>
          <h3
            className={cn(
              "mt-3 font-serif tracking-[-0.03em]",
              item.featured
                ? "text-3xl md:text-4xl"
                : "text-2xl md:text-[1.75rem]",
              hasImage ? "text-on-dark" : "text-charcoal",
            )}
          >
            {item.title}
          </h3>
          {item.client ? (
            <p
              className={cn(
                "mt-2 text-xs tracking-[0.04em]",
                hasImage ? "text-on-dark-muted" : "text-ink-muted",
              )}
            >
              {item.client}
            </p>
          ) : null}
        </div>
      </div>
    </a>
  );
}

function EditorialWork() {
  const featured = workMediaItems.find((item) => item.featured);
  const rest = workMediaItems.filter((item) => !item.featured);

  return (
    <section
      id="work"
      tabIndex={-1}
      aria-labelledby="work-heading"
      className="scroll-mt-24 bg-ivory outline-none"
    >
      <Container className="pb-20 md:pb-28">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-olive">
              {workMediaContent.eyebrow}
            </p>
            <h2
              id="work-heading"
              className="font-serif text-[clamp(2.8rem,6vw,5.75rem)] leading-none tracking-[-0.05em] text-charcoal"
            >
              {workMediaContent.heading}{" "}
              <em className="font-normal text-olive">
                {workMediaContent.headingEmphasis}
              </em>
            </h2>
            <p className="mt-6 max-w-prose text-[15px] leading-[1.8] text-ink-muted">
              {workMediaContent.body}
            </p>
          </div>
          <Link
            href={workMediaContent.archiveCta.href}
            className="inline-flex items-center gap-3 border-b border-charcoal pb-2 text-xs font-semibold uppercase tracking-widest text-charcoal transition-colors hover:border-olive hover:text-olive"
          >
            {workMediaContent.archiveCta.label}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </Reveal>

        <div className="grid gap-3 lg:grid-cols-[1.45fr_0.55fr]">
          {featured ? (
            <Reveal>
              <WorkMediaCard item={featured} className="h-full" />
            </Reveal>
          ) : null}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {rest.slice(0, 2).map((item, index) => (
              <Reveal key={item.id} delay={0.04 + index * 0.04}>
                <WorkMediaCard item={item} className="min-h-[260px]" />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rest.slice(2).map((item, index) => (
            <Reveal key={item.id} delay={0.06 + index * 0.04}>
              <WorkMediaCard item={item} className="min-h-[240px]" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { EditorialWork };
