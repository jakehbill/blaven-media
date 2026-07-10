import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const fieldVariants = cva(
  "w-full rounded-sm border bg-transparent px-4 py-3 text-sm text-foreground transition-colors duration-300 placeholder:text-muted-foreground/50 outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      invalid: {
        true: "border-destructive/60 focus-visible:border-destructive focus-visible:ring-destructive/30",
        false: "border-border hover:border-foreground/20",
      },
    },
    defaultVariants: {
      invalid: false,
    },
  },
);

type InputProps = ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof fieldVariants>;

function Input({ className, invalid, ...props }: InputProps) {
  return (
    <input
      data-slot="input"
      className={cn(fieldVariants({ invalid }), className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

type TextareaProps = ComponentPropsWithoutRef<"textarea"> &
  VariantProps<typeof fieldVariants>;

function Textarea({ className, invalid, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        fieldVariants({ invalid }),
        "min-h-36 resize-y leading-relaxed",
        className,
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

type LabelProps = ComponentPropsWithoutRef<"label"> & {
  required?: boolean;
};

function Label({ className, children, required, ...props }: LabelProps) {
  return (
    <label
      className={cn("block text-sm font-medium text-foreground/85", className)}
      {...props}
    >
      {children}
      {required ? (
        <span className="ml-1 text-muted-foreground" aria-hidden>
          *
        </span>
      ) : null}
    </label>
  );
}

type FieldErrorProps = {
  id: string;
  message?: string;
};

function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;

  return (
    <p id={id} className="mt-2 text-xs text-destructive" role="alert">
      {message}
    </p>
  );
}

export { Input, Textarea, Label, FieldError, fieldVariants };
