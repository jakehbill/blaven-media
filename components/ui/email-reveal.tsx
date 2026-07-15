"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  assembleContactEmail,
  contactEmailParts,
  contactPageContent,
} from "@/data/contact";
import { cn } from "@/lib/utils";

type EmailRevealProps = {
  /** text: inline detail · button: primary action style */
  variant?: "text" | "button";
  className?: string;
  revealLabel?: string;
};

function EmailReveal({
  variant = "text",
  className,
  revealLabel = contactPageContent.emailReveal.revealLabel,
}: EmailRevealProps) {
  const statusId = useId();
  const mailtoRef = useRef<HTMLAnchorElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    if (revealed && email) {
      mailtoRef.current?.focus();
    }
  }, [revealed, email]);

  const handleReveal = () => {
    const assembled = assembleContactEmail(
      contactEmailParts.user,
      contactEmailParts.domain,
    );
    setEmail(assembled);
    setRevealed(true);
  };

  const handleCopy = async () => {
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (!revealed || !email) {
    return (
      <Button
        type="button"
        variant={variant === "button" ? "primary" : "link"}
        size={variant === "button" ? "default" : "default"}
        className={cn(
          variant === "text" &&
            "h-auto px-0 text-sm font-medium md:text-[0.9375rem]",
          variant === "button" && "w-full sm:w-auto",
          className,
        )}
        onClick={handleReveal}
        aria-label={`${revealLabel}. Email address is hidden until revealed.`}
      >
        {revealLabel}
      </Button>
    );
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        ref={mailtoRef}
        href={`mailto:${email}`}
        className="text-sm font-medium text-foreground/75 underline-offset-[0.2em] transition-colors duration-300 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-[0.9375rem]"
        aria-label={`Send email to ${email}`}
      >
        {email}
      </a>

      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={handleCopy}
        aria-label={
          copied
            ? contactPageContent.emailReveal.copiedLabel
            : `Copy email address to clipboard`
        }
        aria-describedby={statusId}
      >
        {copied ? (
          <Check className="size-3.5" aria-hidden />
        ) : (
          <Copy className="size-3.5" aria-hidden />
        )}
        {copied
          ? contactPageContent.emailReveal.copiedLabel
          : contactPageContent.emailReveal.copyLabel}
      </Button>

      <span id={statusId} className="sr-only" role="status" aria-live="polite">
        {copied ? "Email address copied to clipboard." : null}
      </span>
    </div>
  );
}

export { EmailReveal };
