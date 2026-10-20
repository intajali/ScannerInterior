import type { ComponentProps } from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { formControlClass, formLabelClass } from "@/components/form/form-controls";
import { cn } from "@/lib/utils";

type TextareaFieldProps = {
  label: string;
  error?: string;
} & ComponentProps<typeof Textarea>;

export function TextareaField({ label, error, id, className, ...props }: TextareaFieldProps) {
  const fieldId = id ?? props.name;
  const errorId = fieldId ? `${fieldId}-error` : undefined;

  return (
    <Field data-invalid={error ? true : undefined}>
      <FieldLabel htmlFor={fieldId} className={formLabelClass}>
        {label}
      </FieldLabel>
      <Textarea
        id={fieldId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(formControlClass, "min-h-36 py-3", className)}
        {...props}
      />
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </Field>
  );
}
