import Image from "next/image";
import { Star } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/typography";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

type TestimonialItemProps = {
  testimonial: Testimonial;
  className?: string;
};

function Rating({ value }: { value: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Rated ${value} out of 5`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < value;

        return (
          <Star
            key={index}
            className={cn(
              "size-3 stroke-[1.25]",
              filled
                ? "fill-stone/40 text-stone/40"
                : "fill-transparent text-border",
            )}
            aria-hidden
          />
        );
      })}
    </div>
  );
}

function TestimonialItem({ testimonial, className }: TestimonialItemProps) {
  return (
    <Card
      padding="lg"
      interactive
      className={cn(
        "flex h-full flex-col gap-8 bg-transparent",
        "transition-[transform,border-color,background-color] duration-300 ease-out",
        "hover:-translate-y-0.5 hover:bg-card/60",
        "motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <Image
          src={testimonial.logo.src}
          alt={testimonial.logo.alt}
          width={120}
          height={32}
          className="h-6 w-auto opacity-55"
        />

        {typeof testimonial.rating === "number" ? (
          <Rating value={testimonial.rating} />
        ) : null}
      </div>

      <blockquote className="flex-1 text-sm leading-relaxed text-foreground/85 md:text-[0.9375rem]">
        <p>{testimonial.quote}</p>
      </blockquote>

      <div className="space-y-5 border-t border-border/60 pt-6">
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">
            {testimonial.clientName}
          </p>
          <Text variant="caption">
            {testimonial.jobTitle}, {testimonial.companyName}
          </Text>
        </div>

        <div className="space-y-2">
          <p className="text-eyebrow uppercase text-muted-foreground">
            Services Provided
          </p>
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {testimonial.services.map((service) => (
              <li key={service} className="text-xs text-foreground/60">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

export { TestimonialItem };
