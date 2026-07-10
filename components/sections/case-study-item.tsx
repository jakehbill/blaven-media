import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { TextLink } from "@/components/ui/text-link";
import { Text } from "@/components/ui/typography";
import type { CaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/utils";

type CaseStudyItemProps = {
  study: CaseStudy;
  reverse?: boolean;
  className?: string;
};

function CaseStudyItem({
  study,
  reverse = false,
  className,
}: CaseStudyItemProps) {
  return (
    <article
      className={cn(
        "group border-b border-border/60 py-10 last:border-b-0 md:py-14",
        className,
      )}
    >
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div className={cn("space-y-8", reverse && "md:order-2")}>
          <div className="space-y-5">
            <div className="text-muted-foreground/55">
              <Image
                src={study.logo.src}
                alt={study.logo.alt}
                width={120}
                height={32}
                className="h-6 w-auto opacity-55"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-h3 text-foreground">{study.client}</h3>
              <p className="text-eyebrow uppercase text-muted-foreground">
                {study.industry}
              </p>
            </div>
          </div>

          <dl className="space-y-6 border-t border-border/60 pt-6">
            <div className="space-y-2">
              <dt className="text-eyebrow uppercase text-muted-foreground">
                Services
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                  {study.services.map((service) => (
                    <li key={service} className="text-sm text-foreground/75">
                      {service}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className="space-y-2">
              <dt className="text-eyebrow uppercase text-muted-foreground">
                Outcome
              </dt>
              <dd>
                <Text
                  variant="muted"
                  className="text-sm leading-relaxed md:text-[0.9375rem]"
                >
                  {study.outcome}
                </Text>
              </dd>
            </div>
          </dl>
        </div>

        <div
          className={cn(
            "flex h-full flex-col justify-between gap-10",
            reverse && "md:order-1",
          )}
        >
          <div className="space-y-8">
            <Text variant="body-lg" className="max-w-prose text-foreground/85">
              {study.summary}
            </Text>

            <blockquote className="space-y-4 border-l border-stone/40 pl-5">
              <p className="text-sm leading-relaxed text-foreground/80 md:text-[0.9375rem]">
                <span className="text-stone" aria-hidden>
                  &ldquo;
                </span>
                {study.testimonial.quote}
                <span className="text-stone" aria-hidden>
                  &rdquo;
                </span>
              </p>
              <footer className="space-y-0.5">
                <p className="text-sm font-medium text-foreground">
                  {study.testimonial.author}
                </p>
                <p className="text-caption text-muted-foreground">
                  {study.testimonial.role}
                </p>
              </footer>
            </blockquote>
          </div>

          <TextLink href={study.href} variant="default" className="w-fit">
            View Case Study
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
              aria-hidden
            />
          </TextLink>
        </div>
      </div>
    </article>
  );
}

export { CaseStudyItem };
