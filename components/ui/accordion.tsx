"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { cn } from "@/lib/utils";

type AccordionItemData = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly AccordionItemData[];
  className?: string;
};

function Accordion({ items, className }: AccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-border/60 border-y border-border/60", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 py-4 text-left transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-[0.9375rem] font-medium text-foreground md:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(!isOpen && "hidden")}
            >
              <p className="max-w-prose pb-6 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { Accordion };
