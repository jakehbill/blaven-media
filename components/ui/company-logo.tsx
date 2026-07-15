import Image from "next/image";

import { cn } from "@/lib/utils";

type CompanyLogoProps = {
  src: string;
  alt: string;
  /** When set, logo links out to the company website. */
  href?: string | null;
  align?: "left" | "right";
  size?: "default" | "large";
  className?: string;
};

const sizeClasses = {
  default: "h-20 w-[20rem] max-w-[50%]",
  large: "h-14 w-[10rem] sm:w-[11rem] md:w-[12.5rem]",
} as const;

const sizeHints = {
  default: "320px",
  large: "480px",
} as const;

/**
 * Client logos (often wide wordmarks exported into square SVGs).
 * Fits every mark into the same height / max-width so visual size stays even.
 */
function CompanyLogo({
  src,
  alt,
  href,
  align = "left",
  size = "default",
  className,
}: CompanyLogoProps) {
  const image = (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center",
        sizeClasses[size],
        align === "right" ? "justify-end" : "justify-start",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes={sizeHints[size]}
        className={cn(
          "object-contain opacity-90 transition-opacity duration-300",
          align === "right" ? "object-right" : "object-left",
          href && "hover:opacity-100",
        )}
      />
    </span>
  );

  if (!href) {
    return image;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${alt}`}
      className="inline-flex shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {image}
    </a>
  );
}

export { CompanyLogo };
