import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-sm text-sm font-medium whitespace-nowrap transition-colors duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/85",
        secondary:
          "border border-border bg-transparent text-foreground hover:border-foreground/25 hover:bg-muted/40",
        link: "h-auto rounded-none p-0 text-foreground/75 underline-offset-[0.2em] hover:text-foreground hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[0.8125rem]",
        lg: "h-12 px-8 text-[0.9375rem]",
        icon: "size-11",
      },
    },
    compoundVariants: [
      {
        variant: "link",
        size: "default",
        className: "h-auto px-0",
      },
      {
        variant: "link",
        size: "sm",
        className: "h-auto px-0 text-[0.8125rem]",
      },
      {
        variant: "link",
        size: "lg",
        className: "h-auto px-0 text-[0.9375rem]",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
