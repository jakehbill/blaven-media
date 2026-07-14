import { cn } from "@/lib/utils";

type SurfaceTextureProps = {
  /** grain: film noise · paper: soft fibre · mesh: faint geometric field */
  variant?: "grain" | "paper" | "mesh";
  /** Strength relative to the surface tone. */
  tone?: "dark" | "light";
  className?: string;
};

const NOISE_URL = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`;

/**
 * Atmospheric section texture. Decorative only — always aria-hidden.
 */
function SurfaceTexture({
  variant = "grain",
  tone = "dark",
  className,
}: SurfaceTextureProps) {
  const isDark = tone === "dark";

  if (variant === "mesh") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className,
        )}
        aria-hidden
      >
        <div
          className={cn(
            "absolute inset-0",
            isDark ? "opacity-[0.14]" : "opacity-[0.22]",
          )}
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            color: isDark ? "rgb(255 255 255 / 0.06)" : "rgb(0 0 0 / 0.045)",
          }}
        />
        <div
          className={cn(
            "absolute inset-0",
            isDark
              ? "bg-gradient-to-b from-background/40 via-transparent to-background/50"
              : "bg-gradient-to-b from-background/30 via-transparent to-background/40",
          )}
        />
      </div>
    );
  }

  if (variant === "paper") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className,
        )}
        aria-hidden
      >
        <div
          className={cn(
            "absolute inset-0 mix-blend-multiply",
            isDark ? "opacity-[0.08]" : "opacity-[0.2]",
          )}
          style={{
            backgroundImage: NOISE_URL,
            backgroundRepeat: "repeat",
            backgroundSize: "220px 220px",
          }}
        />
        <div
          className={cn(
            "absolute -left-1/4 top-0 size-[70%] rounded-full blur-3xl",
            isDark ? "bg-white/[0.03]" : "bg-black/[0.025]",
          )}
        />
        <div
          className={cn(
            "absolute -right-1/5 bottom-0 size-[55%] rounded-full blur-3xl",
            isDark ? "bg-white/[0.02]" : "bg-black/[0.02]",
          )}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-0 mix-blend-overlay",
          isDark ? "opacity-[0.22]" : "opacity-[0.14]",
        )}
        style={{
          backgroundImage: NOISE_URL,
          backgroundRepeat: "repeat",
          backgroundSize: "160px 160px",
        }}
      />
    </div>
  );
}

export { SurfaceTexture };
