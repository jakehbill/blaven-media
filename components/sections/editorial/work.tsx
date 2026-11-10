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
  return `${item.title}: opens ${destination} in a new tab${status}`;
}

function WorkMediaCard({
  item,
  className,
  sizes,
}: {
  item: WorkMediaItem;
  className?: string;
  sizes?: string;
}) {
  const isVideo =
    item.format === "podcast" ||
    item.format === "short" ||
    item.format === "reel";
  const hasImage = Boolean(item.thumbnail);
  const featured = item.layout === "featured";

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={externalAriaLabel(item)}
      className={cn(
        "group relative flex h-full min-h-0 flex-col justify-end overflow-hidden outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
        hasImage ? "bg-olive text-on-dark" : "bg-sand text-charcoal",
        className,
      )}
    >
      {item.thumbnail ? (
        <Image
          src={item.thumbnail.src}
          alt=""
          fill
          sizes={
            sizes ??
            (featured
              ? "(max-width: 1024px) 100vw, 65vw"
              : "(max-width: 768px) 100vw, 33vw")
          }
          className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : null}
      {hasImage ? (
        <>
          <div className="absolute inset-0 bg-[#121812]/25" />
          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#121812]/90 via-[#121812]/55 to-transparent" />
        </>
      ) : null}

      <div className="relative z-10 flex flex-1 flex-col justify-between p-5 md:p-7">
        <div className="flex items-start justify-between gap-3">
          {isVideo ? (
            <span
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100 md:size-11",
                hasImage
                  ? "border-ivory/80 bg-ivory text-olive shadow-[0_2px_12px_rgb(0_0_0_/_0.35)]"
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
                hasImage
                  ? "text-on-dark drop-shadow-[0_1px_8px_rgb(0_0_0_/_0.65)]"
                  : "text-olive",
              )}
            >
              Read
            </span>
          )}
          <ArrowUpRight
            size={18}
            className={
              hasImage
                ? "text-on-dark drop-shadow-[0_1px_8px_rgb(0_0_0_/_0.65)]"
                : "text-charcoal"
            }
            aria-hidden
          />
        </div>

        <div
          className={
            hasImage ? "drop-shadow-[0_2px_14px_rgb(0_0_0_/_0.55)]" : undefined
          }
        >
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
              "mt-2 font-semibold tracking-[-0.03em]",
              featured
                ? "text-2xl md:text-4xl"
                : "text-xl md:text-[1.35rem]",
              hasImage ? "text-on-dark" : "text-charcoal",
            )}
          >
            {item.title}
          </h3>
          {item.client ? (
            <p
              className={cn(
                "mt-1.5 text-xs tracking-[0.04em]",
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
  const featured = workMediaItems.find((item) => item.layout === "featured");
  const rail = workMediaItems.filter((item) => item.layout === "rail");
  const portraits = workMediaItems.filter((item) => item.layout === "portrait");
  const squares = workMediaItems.filter((item) => item.layout === "square");

  return (
    <section
      id="work"
      tabIndex={-1}
      aria-labelledby="work-heading"
      className="scroll-mt-24 bg-ivory outline-none"
    >
      <Container className="pt-8 pb-6 md:pt-12 md:pb-8 lg:pt-14">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-10">
          <div className="max-w-2xl">
            <h2 id="work-heading" className="text-h2 text-charcoal">
              {workMediaContent.heading}{" "}
              <em className="font-semibold text-sage not-italic">
                {workMediaContent.headingEmphasis}
              </em>
            </h2>
            <p className="mt-5 max-w-prose text-[15px] leading-[1.8] text-ink-muted">
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

        {/* Top: landscape feature + two short-form rails */}
        <div className="grid gap-3 lg:grid-cols-[1.45fr_0.55fr]">
          {featured ? (
            <Reveal>
              <WorkMediaCard
                item={featured}
                className="min-h-[280px] md:min-h-[420px] lg:min-h-[480px]"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </Reveal>
          ) : null}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:min-h-[480px]">
            {rail.map((item, index) => (
              <Reveal key={item.id} delay={0.04 + index * 0.04} className="min-h-0">
                <WorkMediaCard
                  item={item}
                  className="min-h-[220px] lg:h-full lg:min-h-0"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom: two 9:16 portraits + 2x2 squares */}
        <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-[0.9fr_0.9fr_1.2fr]">
          {portraits.map((item, index) => (
            <Reveal key={item.id} delay={0.05 + index * 0.04}>
              <WorkMediaCard
                item={item}
                className="aspect-[9/16] w-full"
                sizes="(max-width: 1024px) 50vw, 22vw"
              />
            </Reveal>
          ))}

          <div className="grid grid-cols-2 gap-3 md:col-span-2 lg:col-span-1 lg:grid-rows-2">
            {squares.map((item, index) => (
              <Reveal key={item.id} delay={0.08 + index * 0.03}>
                <WorkMediaCard
                  item={item}
                  className="aspect-square w-full"
                  sizes="(max-width: 1024px) 50vw, 18vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { EditorialWork };
