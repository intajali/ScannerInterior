import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formControlClass, formLabelClass } from "@/components/form/form-controls";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  options: readonly SelectOption[];
  error?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
};

export function SelectField({
  id,
  name,
  label,
  value,
  placeholder,
  options,
  error,
  disabled,
  onChange,
  onBlur,
}: SelectFieldProps) {
  const errorId = `${id}-error`;

  return (
    <Field data-invalid={error ? true : undefined}>
      <FieldLabel htmlFor={id} className={formLabelClass}>
        {label}
      </FieldLabel>
      <Select
        name={name}
        value={value || null}
        items={Object.fromEntries(options.map((option) => [option.value, option.label]))}
        onValueChange={(next) => onChange(next ?? "")}
        disabled={disabled}
        required
      >
        <SelectTrigger
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          onBlur={onBlur}
          className={formControlClass}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </Field>
  );
}
