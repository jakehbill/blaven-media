import Image from "next/image";

const GRAIN_URL = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`;

/** Soft dissolve so the photo melts into the dark hero surface. */
const EDGE_MASK = {
  maskImage: `
    linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)
  `,
  WebkitMaskImage: `
    linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)
  `,
  maskComposite: "intersect" as const,
  WebkitMaskComposite: "source-in" as const,
};

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0" style={EDGE_MASK}>
        <Image
          src="/images/mountain.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_45%] grayscale contrast-[0.88] brightness-[0.85] saturate-0 opacity-[0.62] mix-blend-soft-light"
          sizes="100vw"
        />

        {/* Soft fibre / film grain so it isn't a flat wash */}
        <div
          className="absolute inset-0 opacity-[0.28] mix-blend-soft-light"
          style={{
            backgroundImage: GRAIN_URL,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
          style={{
            backgroundImage: GRAIN_URL,
            backgroundRepeat: "repeat",
            backgroundSize: "140px 140px",
          }}
        />
      </div>

      {/* Radial dissolve into black — keeps headline clean */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,transparent_28%,var(--background)_78%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/65" />
    </div>
  );
}

export { HeroBackground };
