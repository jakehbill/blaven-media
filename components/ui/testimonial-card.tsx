import type { ComponentPropsWithoutRef } from "react";

import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/typography";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"figure">, "children">;

function TestimonialCard({
  quote,
  author,
  role,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <figure className={className} {...props}>
      <Card padding="lg" className="flex h-full flex-col justify-between gap-8">
        <blockquote className="text-body-lg text-foreground/90">
          <span aria-hidden className="text-stone">
            &ldquo;
          </span>
          {quote}
          <span aria-hidden className="text-stone">
            &rdquo;
          </span>
        </blockquote>

        <figcaption className="space-y-1 border-t border-border pt-6">
          <p className="text-sm font-medium text-foreground">{author}</p>
          <Text variant="caption">{role}</Text>
        </figcaption>
      </Card>
    </figure>
  );
}

export { TestimonialCard };
