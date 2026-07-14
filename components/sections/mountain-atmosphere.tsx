import Image from "next/image";

import { cn } from "@/lib/utils";

type MountainAtmosphereProps = {
  /** Use on dark surfaces (light mountain) or light surfaces (dark mountain). */
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Subtle Ben Blaven silhouette with soft grain.
 * Atmospheric only: low contrast, monochrome, ~8–12% opacity.
 */
function MountainAtmosphere({
  tone = "dark",
  className,
}: MountainAtmosphereProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-[78%] md:h-[85%]",
          isDark ? "opacity-[0.1]" : "opacity-[0.09]",
        )}
      >
        <Image
          src="/images/ben-blaven-mountain.svg"
          alt=""
          fill
          className={cn(
            "object-cover object-bottom contrast-75",
            !isDark && "brightness-0",
          )}
          sizes="100vw"
        />
      </div>

      {/* Film grain: restrained texture, not a decorative effect */}
      <div
        className={cn(
          "absolute inset-0 mix-blend-overlay",
          isDark ? "opacity-[0.18]" : "opacity-[0.12]",
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      <div
        className={cn(
          "absolute inset-0",
          isDark
            ? "bg-gradient-to-t from-background via-background/70 to-background/90"
            : "bg-gradient-to-t from-background via-background/75 to-background/92",
        )}
      />
    </div>
  );
}

export { MountainAtmosphere };
