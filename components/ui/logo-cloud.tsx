import Image from "next/image";

import { cn } from "@/lib/utils";

export type LogoItem = {
  name: string;
  src: string;
};

type LogoCloudProps = {
  logos: readonly LogoItem[];
  label?: string;
  className?: string;
};

function LogoCloud({ logos, label, className }: LogoCloudProps) {
  return (
    <div className={cn("space-y-5", className)}>
      {label ? (
        <p className="text-eyebrow uppercase text-muted-foreground">{label}</p>
      ) : null}

      <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
        {logos.map((logo) => (
          <li key={logo.name}>
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={32}
              className="h-6 w-auto opacity-55"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { LogoCloud };
