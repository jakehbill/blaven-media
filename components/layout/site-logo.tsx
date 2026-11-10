import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.logo.alt}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        priority={priority}
        className="h-[1.4rem] w-auto md:h-[1.575rem]"
      />
    </Link>
  );
}

export { SiteLogo };
