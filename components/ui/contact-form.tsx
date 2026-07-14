"use client";

import { useId, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Textarea } from "@/components/ui/field";
import { contactPageContent } from "@/data/contact";
import { cn } from "@/lib/utils";

type ContactFormValues = {
  name: string;
  email: string;
  organisation: string;
  message: string;
  /** Honeypot: leave empty. */
  website: string;
};

type ContactFormErrors = Partial<
  Record<Exclude<keyof ContactFormValues, "website">, string>
>;

type ContactFormProps = {
  className?: string;
  onSubmitPlaceholder?: (
    values: Omit<ContactFormValues, "website">,
  ) => Promise<void> | void;
};

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  organisation: "",
  message: "",
  website: "",
};

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us what you're working on.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please share a little more detail.";
  }

  return errors;
}

function ContactForm({ className, onSubmitPlaceholder }: ContactFormProps) {
  const formId = useId();
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const fields = contactPageContent.form.fields;

  const updateField = <K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (field !== "website" && errors[field as keyof ContactFormErrors]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field as keyof ContactFormErrors];
        return next;
      });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Honeypot: pretend success for bots without processing.
    if (values.website.trim()) {
      setStatus("success");
      setValues(initialValues);
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      await (onSubmitPlaceholder?.({
        name: values.name,
        email: values.email,
        organisation: values.organisation,
        message: values.message,
      }) ??
        new Promise((resolve) => {
          setTimeout(resolve, 600);
        }));

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      className={cn("relative space-y-5", className)}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Honeypot: hidden from users and assistive tech */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${formId}-name`} required>
          {fields.name.label}
        </Label>
        <Input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder={fields.name.placeholder}
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          invalid={Boolean(errors.name)}
          aria-required
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          disabled={status === "submitting"}
        />
        <FieldError id={`${formId}-name-error`} message={errors.name} />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${formId}-email`} required>
          {fields.email.label}
        </Label>
        <Input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder={fields.email.placeholder}
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          invalid={Boolean(errors.email)}
          aria-required
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          disabled={status === "submitting"}
        />
        <FieldError id={`${formId}-email-error`} message={errors.email} />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${formId}-organisation`}>
          {fields.organisation.label}
        </Label>
        <Input
          id={`${formId}-organisation`}
          name="organisation"
          type="text"
          autoComplete="organization"
          placeholder={fields.organisation.placeholder}
          value={values.organisation}
          onChange={(event) => updateField("organisation", event.target.value)}
          disabled={status === "submitting"}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${formId}-message`} required>
          {fields.message.label}
        </Label>
        <Textarea
          id={`${formId}-message`}
          name="message"
          placeholder={fields.message.placeholder}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          invalid={Boolean(errors.message)}
          aria-required
          aria-describedby={
            errors.message ? `${formId}-message-error` : undefined
          }
          disabled={status === "submitting"}
        />
        <FieldError id={`${formId}-message-error`} message={errors.message} />
      </div>

      <div className="space-y-4 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="default"
          disabled={status === "submitting"}
        >
          {status === "submitting"
            ? contactPageContent.form.submittingLabel
            : contactPageContent.form.submitLabel}
        </Button>

        {status === "success" ? (
          <p className="text-sm text-foreground/80" role="status">
            {contactPageContent.form.successMessage}
          </p>
        ) : null}

        {status === "error" ? (
          <p className="text-sm text-destructive" role="alert">
            {contactPageContent.form.errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}

export { ContactForm };
export type { ContactFormValues, ContactFormProps };
