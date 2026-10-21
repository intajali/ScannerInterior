"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, type FormEvent } from "react";
import { Controller, useForm } from "react-hook-form";
import { primaryButtonClass } from "@/components/common/styles";
import { SelectField } from "@/components/form/select-field";
import { TextareaField } from "@/components/form/textarea-field";
import { TextField } from "@/components/form/text-field";
import { siteConfig } from "@/config/site";
import {
  countryCodeInput,
  digitsOnly,
  enquiryFieldsSchema,
  serviceOptions,
  type EnquiryFormValues,
} from "@/features/enquiries/enquiry-schema";
import { submitEnquiry } from "@/features/enquiries/submit-enquiry";
import { cn } from "@/lib/utils";

const emptyForm: EnquiryFormValues = {
  name: "",
  email: "",
  countryCode: "+",
  phone: "",
  service: "",
  projectLocation: "",
  budget: "",
  message: "",
};

type Confirmation = {
  id: string;
  email: string;
};

let consultationOpenedAt = 0;
let consultationSubmissionKey = "";

export function ConsultationForm() {
  const [locked, setLocked] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  useEffect(() => {
    consultationOpenedAt = Date.now();
    consultationSubmissionKey = crypto.randomUUID();
  }, []);

  const form = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquiryFieldsSchema),
    defaultValues: emptyForm,
  });

  const isSubmitting = form.formState.isSubmitting || locked;

  async function onSubmit(
    values: EnquiryFormValues,
    meta: { companyWebsite: string; startedAt: number; submissionKey: string },
  ) {
    if (confirmation) {
      setLocked(false);
      return;
    }

    setFormError(null);
    let saved = false;

    try {
      const result = await submitEnquiry({
        ...values,
        companyWebsite: meta.companyWebsite,
        startedAt: meta.startedAt,
        submissionKey: meta.submissionKey,
      });

      if (!result.ok) {
        if (result.fieldErrors) {
          for (const [field, message] of Object.entries(result.fieldErrors)) {
            if (message) {
              form.setError(field as keyof EnquiryFormValues, { message });
            }
          }
        }

        setFormError(result.formError ?? "We could not send your enquiry. Please try again.");
        return;
      }

      saved = true;
      setConfirmation({ id: result.id, email: values.email.trim() });
    } catch {
      setFormError("We could not send your enquiry. Please try again, or write to us by email.");
    } finally {
      if (!saved) {
        setLocked(false);
      }
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (locked || confirmation) {
      event.preventDefault();
      return;
    }

    if (consultationOpenedAt === 0 || consultationSubmissionKey === "") {
      event.preventDefault();
      setFormError("Please wait a moment and send the form again.");
      return;
    }

    const companyWebsite = String(new FormData(event.currentTarget).get("companyWebsite") ?? "");
    const startedAt = consultationOpenedAt;
    const submissionKey = consultationSubmissionKey;
    setLocked(true);
    void form.handleSubmit(
      (values) => onSubmit(values, { companyWebsite, startedAt, submissionKey }),
      () => setLocked(false),
    )(event);
  }

  if (confirmation) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-sage bg-white p-6 shadow-soft sm:p-8"
      >
        <p className="font-nav text-xs font-medium tracking-[0.18em] uppercase">Consultation</p>
        <h2 className="mt-4 font-heading text-3xl text-charcoal sm:text-4xl">
          Your enquiry has been saved.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7">
          We have your note and will reply at {confirmation.email}.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      aria-busy={isSubmitting}
      className="relative"
      onSubmit={handleSubmit}
    >
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company-website">Company website</label>
        <input
          id="company-website"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <p className="font-nav text-xs font-medium tracking-[0.18em] uppercase">Consultation</p>
      <h2 className="mt-4 font-heading text-3xl text-charcoal sm:text-4xl">Write to the studio</h2>
      <p className="mt-4 max-w-xl text-base leading-7">
        Share the location, the service you need, and what you want the room to feel like.
      </p>

      <div className="mt-8 grid gap-5 *:min-w-0 lg:grid-cols-2">
        <TextField
          label="Full Name"
          autoComplete="name"
          disabled={isSubmitting}
          aria-required="true"
          error={form.formState.errors.name?.message}
          {...form.register("name")}
        />
        <TextField
          label="Email Address"
          type="email"
          autoComplete="email"
          disabled={isSubmitting}
          aria-required="true"
          error={form.formState.errors.email?.message}
          {...form.register("email")}
        />
        <div className="grid items-start gap-5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-3 lg:col-span-2">
          <Controller
            name="countryCode"
            control={form.control}
            render={({ field }) => (
              <TextField
                label="Country code"
                type="tel"
                inputMode="tel"
                autoComplete="tel-country-code"
                placeholder="+971"
                maxLength={5}
                disabled={isSubmitting}
                aria-required="true"
                error={form.formState.errors.countryCode?.message}
                name={field.name}
                ref={field.ref}
                value={field.value}
                onBlur={field.onBlur}
                onChange={(event) => field.onChange(countryCodeInput(event.target.value))}
              />
            )}
          />
          <Controller
            name="phone"
            control={form.control}
            render={({ field }) => (
              <TextField
                label="Phone Number"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="10 digits"
                maxLength={10}
                disabled={isSubmitting}
                aria-required="true"
                error={form.formState.errors.phone?.message}
                name={field.name}
                ref={field.ref}
                value={field.value}
                onBlur={field.onBlur}
                onChange={(event) => field.onChange(digitsOnly(event.target.value, 10))}
              />
            )}
          />
        </div>
        <Controller
          name="service"
          control={form.control}
          render={({ field }) => (
            <SelectField
              id="service"
              name={field.name}
              label="Interested Service"
              placeholder="Choose a service"
              value={field.value}
              options={serviceOptions}
              disabled={isSubmitting}
              error={form.formState.errors.service?.message}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        <TextField
          label="Project Location"
          autoComplete="address-level2"
          disabled={isSubmitting}
          aria-required="true"
          error={form.formState.errors.projectLocation?.message}
          {...form.register("projectLocation")}
        />
        <TextField
          label="Estimated Budget"
          autoComplete="off"
          disabled={isSubmitting}
          hint="Optional"
          error={form.formState.errors.budget?.message}
          {...form.register("budget")}
        />
        <div className="sm:col-span-2">
          <TextareaField
            label="Project Description"
            disabled={isSubmitting}
            aria-required="true"
            error={form.formState.errors.message?.message}
            {...form.register("message")}
          />
        </div>
      </div>

      {formError ? (
        <p role="alert" className="mt-6 text-sm leading-6 text-destructive">
          {formError}{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="underline decoration-sage underline-offset-4 hover:decoration-bronze"
          >
            {siteConfig.email}
          </a>
        </p>
      ) : null}

      <button
        type="submit"
        className={cn(primaryButtonClass, "mt-8 w-full sm:w-auto")}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
