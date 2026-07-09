import type { ComponentPropsWithoutRef } from "react";

import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/typography";

type ServiceCardProps = {
  index: string;
  title: string;
  description: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"article">, "children">;

function ServiceCard({
  index,
  title,
  description,
  className,
  ...props
}: ServiceCardProps) {
  return (
    <article className={className} {...props}>
      <Card padding="lg" className="h-full space-y-6">
        <p className="font-mono text-xs tracking-widest text-stone">{index}</p>

        <div className="space-y-3">
          <h3 className="text-h4 text-foreground">{title}</h3>
          <Text variant="muted" width="prose">
            {description}
          </Text>
        </div>
      </Card>
    </article>
  );
}

export { ServiceCard };
