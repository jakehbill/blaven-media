import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";

import { Card } from "@/components/ui/card";
import { TextLink } from "@/components/ui/text-link";
import { Heading } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  title: string;
  category: string;
  href: string;
  image?: {
    src: string;
    alt: string;
  };
  className?: string;
} & Omit<ComponentPropsWithoutRef<"article">, "children">;

function CaseStudyCard({
  title,
  category,
  href,
  image,
  className,
  ...props
}: CaseStudyCardProps) {
  return (
    <article className={cn("group", className)} {...props}>
      <Card
        padding="none"
        interactive
        className="overflow-hidden"
      >
        <TextLink
          href={href}
          className="block no-underline hover:no-underline"
        >
          {image ? (
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="aspect-[16/10] bg-muted" aria-hidden />
          )}

          <div className="flex items-start justify-between gap-4 p-6">
            <div className="space-y-2">
              <p className="text-eyebrow uppercase text-stone">{category}</p>
              <Heading as="h3" level="h4" className="text-foreground">
                {title}
              </Heading>
            </div>
            <ArrowUpRight
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
              aria-hidden
            />
          </div>
        </TextLink>
      </Card>
    </article>
  );
}

export { CaseStudyCard };
