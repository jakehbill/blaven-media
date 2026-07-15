import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/typography";
import type { CaseStudyFeaturedExample } from "@/data/case-studies";
import { cn } from "@/lib/utils";

type FeaturedExampleProps = {
  example: CaseStudyFeaturedExample;
  className?: string;
};

function FeaturedExample({ example, className }: FeaturedExampleProps) {
  const externalLinkProps = {
    href: example.href,
    target: "_blank" as const,
    rel: "noopener noreferrer",
  };

  return (
    <Card
      padding="none"
      interactive
      className={cn(
        "group max-w-prose overflow-hidden border-border/55 bg-muted/25 transition-colors duration-300 hover:bg-muted/35",
        className,
      )}
    >
      <div className="flex flex-col gap-5 p-4 sm:flex-row sm:items-start sm:gap-6 sm:p-5 md:p-6">
        <a
          {...externalLinkProps}
          className="relative mx-auto block aspect-[3/4] w-36 shrink-0 overflow-hidden rounded-sm border border-border/50 bg-muted/30 transition-[border-color,opacity] duration-300 hover:border-foreground/25 hover:opacity-95 sm:mx-0 sm:w-40 md:w-44"
          aria-label={`View example: ${example.title} (opens in a new tab)`}
        >
          <Image
            src={example.thumbnail.src}
            alt={example.thumbnail.alt}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 144px, 176px"
          />
        </a>

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="space-y-2.5">
            <p className="text-eyebrow uppercase text-muted-foreground">
              Featured Example
            </p>
            <div className="space-y-2">
              <h3 className="text-sm font-medium tracking-tight text-foreground md:text-[0.9375rem]">
                {example.title}
              </h3>
              <Text
                variant="caption"
                className="leading-relaxed text-foreground/75"
              >
                {example.description}
              </Text>
            </div>
          </div>

          <div>
            <Button
              variant="secondary"
              size="sm"
              render={<a {...externalLinkProps} />}
            >
              {example.ctaLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export { FeaturedExample };
