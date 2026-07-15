import { cn } from "@/lib/utils";

type ServiceListProps = {
  services: readonly string[];
  className?: string;
};

/**
 * Horizontal service list with circular separators that follow
 * surface foreground tokens (light on dark, dark on light).
 * Each item stays atomic on wrap so dots never lead a new line.
 */
function ServiceList({ services, className }: ServiceListProps) {
  if (services.length === 0) {
    return null;
  }

  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-y-2 text-sm text-foreground/75 md:text-[0.9375rem]",
        className,
      )}
    >
      {services.map((service, index) => {
        const isLast = index === services.length - 1;

        return (
          <li
            key={service}
            className={cn(
              "inline-flex max-w-full items-center",
                !isLast &&
                "after:mx-2 after:block after:size-1 after:shrink-0 after:rounded-full after:bg-foreground/40 after:content-[''] sm:after:mx-2.5 md:after:mx-3 md:after:size-1.5",
            )}
          >
            <span className="break-words">{service}</span>
          </li>
        );
      })}
    </ul>
  );
}

export { ServiceList };
