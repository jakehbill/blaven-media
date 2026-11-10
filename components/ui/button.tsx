import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-sm text-xs font-semibold tracking-[0.08em] uppercase whitespace-nowrap transition-colors duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-charcoal text-ivory hover:bg-olive active:bg-olive/95",
        secondary:
          "border border-charcoal/45 bg-transparent text-charcoal hover:border-charcoal hover:bg-charcoal/[0.05]",
        outline:
          "border border-charcoal/45 bg-transparent text-charcoal hover:bg-charcoal/[0.05]",
        inverse:
          "bg-ivory text-olive hover:bg-sand hover:text-charcoal active:bg-sand/90",
        link: "h-auto rounded-none border-b border-charcoal/50 px-0 pb-1 text-[0.7rem] normal-case tracking-[0.14em] text-charcoal hover:border-charcoal",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[0.6875rem]",
        lg: "h-12 px-8",
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
        className: "h-auto px-0",
      },
      {
        variant: "link",
        size: "lg",
        className: "h-auto px-0",
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
  render,
  nativeButton,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      render={render}
      nativeButton={nativeButton ?? render == null}
      {...props}
    />
  );
}

export { Button, buttonVariants };
