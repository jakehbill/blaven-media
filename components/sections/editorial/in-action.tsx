"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/sections/editorial/reveal";
import { Container } from "@/components/ui/container";
import { homeEditorialContent } from "@/data/home-editorial";
import { cn } from "@/lib/utils";

const tileSurface = {
  panel: "bg-panel text-charcoal",
  sand: "bg-sand text-charcoal",
  sage: "bg-sage text-on-dark",
} as const;

function EditorialInAction() {
  const { inAction } = homeEditorialContent;
  const [showVideoNote, setShowVideoNote] = useState(false);

  return (
    <section
      id="in-action"
      tabIndex={-1}
      aria-labelledby="in-action-heading"
      className="scroll-mt-24 bg-ivory outline-none"
    >
      <Container className="py-20 md:py-28">
        <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-olive">
              {inAction.eyebrow}
            </p>
            <h2
              id="in-action-heading"
              className="max-w-[820px] font-serif text-[clamp(2.8rem,6vw,6rem)] leading-[0.98] tracking-[-0.05em] text-charcoal"
            >
              {inAction.heading}
              <br />
              <em className="font-normal text-olive">
                {inAction.headingEmphasis}
              </em>
            </h2>
          </div>
          <p className="max-w-[270px] text-sm leading-7 text-ink-muted">
            {inAction.body}
          </p>
        </Reveal>

        <Reveal className="grid gap-3 lg:grid-cols-[1.5fr_0.5fr]">
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-olive md:min-h-[560px]">
            <Image
              src={inAction.film.image.src}
              alt={inAction.film.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-[#121812]/45" />
            <button
              type="button"
              onClick={() => setShowVideoNote(true)}
              aria-label="About the video showcase placeholder"
              className="relative z-10 flex size-20 items-center justify-center rounded-full border border-ivory/90 bg-ivory text-olive shadow-xl transition-transform duration-300 hover:scale-110 motion-reduce:hover:scale-100 md:size-24"
            >
              <Play size={30} fill="currentColor" className="ml-1" aria-hidden />
            </button>
            <div className="absolute bottom-7 left-7 right-7 flex justify-between gap-4 text-on-dark">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-on-dark-muted">
                  {inAction.film.label}
                </span>
                <h3 className="mt-2 font-serif text-3xl tracking-[-0.03em] text-on-dark md:text-4xl">
                  {inAction.film.title}
                </h3>
              </div>
              <span className="self-end text-[10px] font-medium uppercase tracking-widest text-on-dark-muted">
                {inAction.film.note}
              </span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {inAction.shorts.map((item) => (
              <div
                key={item.title}
                className="relative flex min-h-[260px] flex-col justify-end overflow-hidden bg-olive p-7 text-on-dark"
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-55 transition-transform duration-700 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                />
                <div className="absolute inset-0 bg-[#121812]/35" />
                <div className="relative z-10">
                  <span className="mb-4 inline-flex size-10 items-center justify-center rounded-full border border-ivory/80 bg-ivory/10">
                    <Play size={14} fill="currentColor" aria-hidden />
                  </span>
                  <p className="font-serif text-2xl tracking-[-0.03em] text-on-dark">
                    {item.title}
                  </p>
                  <span className="mt-2 inline-block text-[10px] font-medium uppercase tracking-[0.15em] text-on-dark-muted">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {showVideoNote ? (
          <div
            role="status"
            className="mt-4 flex items-center justify-between gap-3 border border-rule bg-panel p-4 text-sm text-charcoal"
          >
            <span>
              Video player prototype: supply your interview video and thumbnail
              to enable playback.
            </span>
            <button
              type="button"
              onClick={() => setShowVideoNote(false)}
              className="underline underline-offset-4"
            >
              Dismiss
            </button>
          </div>
        ) : null}

        <Reveal className="mt-3 grid gap-3 md:grid-cols-3">
          {inAction.tiles.map((tile) => (
            <div
              key={tile.title}
              className={cn("p-8 md:p-10", tileSurface[tile.surface])}
            >
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.2em]",
                  tile.surface === "sage" ? "text-on-dark-muted" : "text-olive",
                )}
              >
                {tile.eyebrow}
              </span>
              <h3 className="mt-12 font-serif text-3xl tracking-[-0.03em]">
                {tile.title}
              </h3>
              <p
                className={cn(
                  "mt-5 text-sm leading-7",
                  tile.surface === "sage"
                    ? "text-on-dark-muted"
                    : "text-ink-muted",
                )}
              >
                {tile.body}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

export { EditorialInAction };
