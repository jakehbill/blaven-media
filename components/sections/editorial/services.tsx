"use client";

import { Reveal } from "@/components/sections/editorial/reveal";
import { Container } from "@/components/ui/container";
import { homeEditorialContent } from "@/data/home-editorial";
import { cn } from "@/lib/utils";

/**
 * Tiles stay light → mid → dark. Ivory gap above separates them from
 * the full-width sand intro band so colors never touch.
 */
const tileSurfaces = [
  {
    panel: "bg-panel",
    number: "text-olive",
    title: "text-charcoal",
    body: "text-ink-muted",
  },
  {
    panel: "bg-sand",
    number: "text-olive",
    title: "text-charcoal",
    body: "text-ink-muted",
  },
  {
    panel: "bg-sage",
    number: "text-on-dark-muted",
    title: "text-on-dark",
    body: "text-on-dark-muted",
  },
] as const;

function EditorialServices() {
  const { services } = homeEditorialContent;

  return (
    <section
      id="services"
      tabIndex={-1}
      aria-labelledby="services-heading"
      className="scroll-mt-24 outline-none"
    >
      <div className="bg-sand">
        <Container className="py-10 md:py-12 lg:py-14">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2
              id="services-heading"
              className="text-h2 text-charcoal"
            >
              {services.heading}
            </h2>
            <p className="mt-5 text-xl font-medium tracking-[-0.02em] text-sage md:text-2xl">
              {services.lead}
            </p>
            <p className="mx-auto mt-5 max-w-prose text-[15px] leading-[1.8] text-ink-muted">
              {services.body}
            </p>
          </Reveal>
        </Container>
      </div>

      <div className="bg-ivory">
        <Container className="pt-8 pb-6 md:pt-10 md:pb-8">
          <div className="grid gap-3 md:grid-cols-3">
            {services.items.map((item, index) => {
              const surface = tileSurfaces[index] ?? tileSurfaces[0];
              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.05}
                  className={cn(
                    "flex min-h-[260px] flex-col justify-between px-8 py-10 md:min-h-[300px] md:px-10 md:py-12",
                    surface.panel,
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-xs font-medium tracking-[0.14em]",
                      surface.number,
                    )}
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <h3
                      className={cn(
                        "text-2xl font-semibold tracking-[-0.03em] md:text-3xl",
                        surface.title,
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className={cn("mt-5 text-sm leading-7", surface.body)}>
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}

export { EditorialServices };
