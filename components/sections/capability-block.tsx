import type { Capability } from "@/data/capabilities";
import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type CapabilityBlockProps = {
  capability: Capability;
  className?: string;
};

function CapabilityBlock({ capability, className }: CapabilityBlockProps) {
  return (
    <article
      className={cn(
        "group border-b border-border/60 py-7 last:border-b-0 md:py-8",
        className,
      )}
    >
      <div className="grid gap-3 sm:gap-4 md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-6 lg:grid-cols-[2.75rem_minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-x-8 lg:gap-y-6">
        <p className="font-mono text-xs tracking-[0.14em] text-stone transition-colors duration-300 group-hover:text-foreground/70">
          {capability.number}
        </p>

        <div className="min-w-0 space-y-3 sm:space-y-4">
          <h3 className="text-h3 text-pretty text-foreground transition-transform duration-500 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
            {capability.title}
          </h3>
          <Text
            variant="muted"
            className="max-w-prose-wide leading-relaxed"
          >
            {capability.description}
          </Text>
        </div>

        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 sm:gap-x-5 sm:gap-y-2 md:col-start-2 lg:col-start-3 lg:pt-1">
          {capability.services.map((service) => (
            <li
              key={service}
              className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export { CapabilityBlock };
