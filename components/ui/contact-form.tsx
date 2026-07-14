"use client";

import { useId, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Textarea } from "@/components/ui/field";
import { contactContent } from "@/data/contact";
import { cn } from "@/lib/utils";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

type ContactFormProps = {
  className?: string;
  onSubmitPlaceholder?: (values: ContactFormValues) => Promise<void> | void;
};

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
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
    errors.message = "Please enter a short message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please share a little more detail.";
  }

  return errors;
}

function ContactForm({ className, onSubmitPlaceholder }: ContactFormProps) {
  const formId = useId();
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  const fields = contactContent.form.fields;

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      // Placeholder submission: replace with API / form service later.
      await (onSubmitPlaceholder?.(values) ??
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
      className={cn("space-y-6", className)}
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={`${formId}-privacy`}
    >
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
        <Label htmlFor={`${formId}-company`}>
          {fields.company.label}
        </Label>
        <Input
          id={`${formId}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          placeholder={fields.company.placeholder}
          value={values.company}
          onChange={(event) => updateField("company", event.target.value)}
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
            ? "Sending…"
            : contactContent.form.submitLabel}
        </Button>

        {status === "success" ? (
          <p className="text-sm text-foreground/80" role="status">
            {contactContent.form.successMessage}
          </p>
        ) : null}

        {status === "error" ? (
          <p className="text-sm text-destructive" role="alert">
            {contactContent.form.errorMessage}
          </p>
        ) : null}

        <p
          id={`${formId}-privacy`}
          className="text-caption text-muted-foreground"
        >
          {contactContent.form.privacyNote}
        </p>
      </div>
    </form>
  );
}

export { ContactForm };
export type { ContactFormValues, ContactFormProps };
