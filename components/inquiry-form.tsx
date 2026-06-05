"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type InquiryFormProps = {
  compact?: boolean;
};

type FormState = {
  name: string;
  email: string;
  company: string;
  country: string;
  phone: string;
  category: string;
  quantity: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  category: "",
  quantity: "",
  message: ""
};

export function InquiryForm({ compact = false }: InquiryFormProps) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedInquiryId, setSubmittedInquiryId] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) nextErrors.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid business email.";
    if (form.company.trim().length < 2) nextErrors.company = "Enter your company name.";
    if (form.country.trim().length < 2) nextErrors.country = "Enter destination country.";
    if (!form.category) nextErrors.category = "Select a product or service category.";
    if (form.message.trim().length < 12) nextErrors.message = "Share a few details about your requirement.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    if (!validate()) return;

    const inquiryId = `SO-${Date.now().toString(36).toUpperCase()}`;
    const payload = {
      inquiryId,
      source: "website",
      status: "new",
      submittedAt: new Date().toISOString(),
      ...form
    };

    console.info("Inquiry tracking payload", payload);
    setSubmittedInquiryId(inquiryId);
    setSubmitted(true);
    setForm(initialState);
  }

  const inputClass = "field bg-white text-[#122033] placeholder:text-[#8792a1]";

  return (
    <form
      onSubmit={submit}
      className={`premium-shadow rounded-lg border border-[#dce3ec] bg-white p-5 md:p-8 ${compact ? "" : "lg:p-9"}`}
      noValidate
    >
      <input type="hidden" name="trackingReady" value="generated-on-submit" />
      <input type="hidden" name="source" value="website" />
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b9964a]">Buyer Inquiry</p>
        <h3 className="mt-2 font-display text-2xl text-[#071b33] md:text-3xl">Request a trade quote</h3>
        <p className="mt-2 text-sm leading-6 text-[#526176]">
          Share your requirement and destination market. This structure is ready for CRM or inquiry tracking.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" fieldId="inquiry-name" error={errors.name}>
          <input id="inquiry-name" className={inputClass} value={form.name} onChange={(event) => updateField("name", event.target.value)} name="name" autoComplete="name" />
        </Field>
        <Field label="Business email" fieldId="inquiry-email" error={errors.email}>
          <input id="inquiry-email" className={inputClass} value={form.email} onChange={(event) => updateField("email", event.target.value)} name="email" type="email" autoComplete="email" />
        </Field>
        <Field label="Company" fieldId="inquiry-company" error={errors.company}>
          <input id="inquiry-company" className={inputClass} value={form.company} onChange={(event) => updateField("company", event.target.value)} name="company" autoComplete="organization" />
        </Field>
        <Field label="Destination country" fieldId="inquiry-country" error={errors.country}>
          <input id="inquiry-country" className={inputClass} value={form.country} onChange={(event) => updateField("country", event.target.value)} name="country" autoComplete="country-name" />
        </Field>
        <Field label="Phone / WhatsApp" fieldId="inquiry-phone" error={errors.phone}>
          <input id="inquiry-phone" className={inputClass} value={form.phone} onChange={(event) => updateField("phone", event.target.value)} name="phone" autoComplete="tel" />
        </Field>
        <Field label="Category" fieldId="inquiry-category" error={errors.category}>
          <select id="inquiry-category" className={inputClass} value={form.category} onChange={(event) => updateField("category", event.target.value)} name="category">
            <option value="">Select category</option>
            <option>Industrial Products</option>
            <option>Agricultural Products</option>
            <option>Consumer Goods</option>
            <option>Customized Sourcing</option>
            <option>Export Services</option>
          </select>
        </Field>
        <Field label="Estimated quantity" fieldId="inquiry-quantity" error={errors.quantity}>
          <input id="inquiry-quantity" className={inputClass} value={form.quantity} onChange={(event) => updateField("quantity", event.target.value)} name="quantity" placeholder="Optional" />
        </Field>
        <div className="hidden md:block" />
        <Field label="Requirement details" fieldId="inquiry-message" error={errors.message} wide>
          <textarea
            id="inquiry-message"
            className={`${inputClass} min-h-32 resize-y`}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            name="message"
            placeholder="Product, specification, target price, destination port, timeline..."
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#071b33] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d2b4c] md:w-auto"
      >
        <Send size={18} />
        Submit Inquiry
      </button>
      {submitted ? (
        <p className="mt-4 rounded-md bg-[#edf8f2] px-4 py-3 text-sm font-semibold text-[#1b6b43]">
          Thank you. Your inquiry has been prepared with tracking ID {submittedInquiryId}.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  fieldId,
  error,
  wide,
  children
}: {
  label: string;
  fieldId: string;
  error?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={fieldId} className={`grid gap-2 text-sm font-semibold text-[#071b33] ${wide ? "md:col-span-2" : ""}`}>
      {label}
      {children}
      {error ? <span className="text-xs font-medium text-[#b42318]">{error}</span> : null}
    </label>
  );
}
