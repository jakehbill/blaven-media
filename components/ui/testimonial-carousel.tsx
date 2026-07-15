"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { CompanyLogo } from "@/components/ui/company-logo";
import { TextLink } from "@/components/ui/text-link";
import { Text } from "@/components/ui/typography";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

type TestimonialCarouselProps = {
  items: Testimonial[];
  className?: string;
};

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setCount(media.matches ? 2 : 1);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return count;
}

function TestimonialSlide({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative flex h-full flex-col justify-between gap-8 border border-border/70 bg-transparent p-6 md:p-8">
      <blockquote className="text-sm leading-relaxed text-foreground/85 md:text-[0.9375rem]">
        <p>
          <span className="text-stone" aria-hidden>
            &ldquo;
          </span>
          {testimonial.quote}
          <span className="text-stone" aria-hidden>
            &rdquo;
          </span>
        </p>
      </blockquote>

      <div className="space-y-4 border-t border-border/60 pt-6 pr-[11rem] sm:pr-[12rem] md:pr-[13.5rem]">
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-foreground">
            {testimonial.clientName}
          </p>
          <Text variant="caption">
            {testimonial.jobTitle}, {testimonial.companyName}
          </Text>
        </div>

        {testimonial.caseStudyHref ? (
          <TextLink href={testimonial.caseStudyHref} variant="muted">
            View related work
          </TextLink>
        ) : null}
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
        <CompanyLogo
          src={testimonial.logo.src}
          alt={testimonial.logo.alt}
          href={testimonial.companyHref}
          align="right"
          size="large"
        />
      </div>
    </article>
  );
}

function TestimonialCarousel({ items, className }: TestimonialCarouselProps) {
  const labelId = useId();
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, items.length - visibleCount);
  const [index, setIndex] = useState(0);
  const activeIndex = Math.min(index, maxIndex);
  const pointerStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex(Math.min(Math.max(next, 0), maxIndex));
    },
    [maxIndex],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) goPrev();
    else goNext();
  };

  return (
    <div
      className={cn("space-y-6", className)}
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goPrev();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goNext();
        }
      }}
    >
      <p id={labelId} className="sr-only">
        Client testimonials
      </p>

      <div
        className="overflow-hidden touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          pointerStartX.current = null;
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{
            transform: `translateX(-${(activeIndex * 100) / visibleCount}%)`,
          }}
        >
          {items.map((item, itemIndex) => (
            <div
              key={item.id}
              className="shrink-0 px-0 sm:px-0"
              style={{ width: `${100 / visibleCount}%` }}
              aria-hidden={
                itemIndex < activeIndex ||
                itemIndex >= activeIndex + visibleCount
              }
            >
              <div className={cn(visibleCount > 1 && "pr-4 lg:pr-6")}>
                <TestimonialSlide testimonial={item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-caption text-muted-foreground" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")}
          <span className="mx-2 text-border">/</span>
          {String(items.length).padStart(2, "0")}
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-foreground/25 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30"
            onClick={goPrev}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-foreground/25 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30"
            onClick={goNext}
            disabled={activeIndex >= maxIndex}
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}

export { TestimonialCarousel };
