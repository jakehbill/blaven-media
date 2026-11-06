"use client";

import { Reveal } from "@/components/sections/editorial/reveal";
import { Container } from "@/components/ui/container";
import { homeEditorialContent } from "@/data/home-editorial";
import { cn } from "@/lib/utils";

const surfaceClass = {
  sage: "bg-sage text-on-dark",
  sand: "bg-sand text-charcoal",
  olive: "bg-olive text-on-dark",
} as const;

function EditorialApproach() {
  const { approach } = homeEditorialContent;

  return (
    <section aria-label="How we work" className="bg-ivory">
      <Container className="pb-5 md:pb-8">
        <div className="grid gap-3 md:grid-cols-3">
          {approach.items.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 0.05}
              className={cn(
                "flex min-h-[270px] flex-col justify-between p-8 md:p-10",
                surfaceClass[item.surface],
              )}
            >
              <span
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.2em]",
                  item.surface === "sand" ? "text-olive" : "text-on-dark-muted",
                )}
              >
                {item.number}
              </span>
              <div>
                <h2 className="font-serif text-4xl tracking-[-0.03em]">
                  {item.title}
                </h2>
                <p
                  className={cn(
                    "mt-4 max-w-xs text-sm leading-7",
                    item.surface === "sand"
                      ? "text-ink-muted"
                      : "text-on-dark-muted",
                  )}
                >
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { EditorialApproach };
