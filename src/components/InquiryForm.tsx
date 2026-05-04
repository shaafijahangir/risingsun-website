import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";
import { Send, CheckCircle } from "lucide-react";

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "select" | "textarea";
  options?: string[];
  required?: boolean;
  placeholder?: string;
};

type InquiryFormProps = {
  serviceType: string;
  fields: FieldConfig[];
  submitLabel?: string;
  submitChannel?: "whatsapp" | "email";
};

export const InquiryForm = ({
  serviceType,
  fields,
  submitLabel,
  submitChannel = "whatsapp",
}: InquiryFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Record<string, string>>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: Record<string, string>) => {
    const lines = fields.map((f) => `${f.label}: ${data[f.name] || "(not provided)"}`).join("\n");

    if (submitChannel === "email") {
      const subject = encodeURIComponent(`${serviceType} Inquiry: Rising Sun`);
      const body = encodeURIComponent(
        `Hi ${CONTACT.founderName},\n\nI would like to inquire about: ${serviceType}\n\n${lines}\n\nBest regards`
      );
      window.open(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`, "_blank");
    } else {
      const msg = encodeURIComponent(
        `Hi, I'd like to inquire about: ${serviceType}\n\n${lines}`
      );
      window.open(`https://wa.me/${CONTACT.phoneRaw}?text=${msg}`, "_blank");
    }

    setSubmitted(true);
  };

  const label = submitLabel ?? (submitChannel === "email" ? "Send via Email" : "Send via WhatsApp");

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Inquiry Sent!</h3>
        <p className="text-muted-foreground max-w-sm">
          Your {submitChannel === "email" ? "email" : "WhatsApp message"} has been opened.
          Salim will get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-brand-navy hover:text-thai-gold transition-colors"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium mb-1.5 text-foreground">
            {field.label}
            {field.required && <span className="text-destructive ml-1">*</span>}
          </label>

          {field.type === "textarea" ? (
            <textarea
              {...register(field.name, { required: field.required })}
              rows={4}
              placeholder={field.placeholder}
              className={`w-full border rounded-md px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-thai-gold/50 transition ${
                errors[field.name] ? "border-destructive" : "border-border"
              }`}
            />
          ) : field.type === "select" ? (
            <select
              {...register(field.name, { required: field.required })}
              className={`w-full border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-thai-gold/50 transition ${
                errors[field.name] ? "border-destructive" : "border-border"
              }`}
            >
              <option value="">Select…</option>
              {field.options?.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          ) : (
            <input
              {...register(field.name, {
                required: field.required,
                pattern: field.type === "email"
                  ? { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" }
                  : undefined,
              })}
              type={field.type}
              placeholder={field.placeholder}
              className={`w-full border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-thai-gold/50 transition ${
                errors[field.name] ? "border-destructive" : "border-border"
              }`}
            />
          )}

          {errors[field.name] && (
            <p className="text-xs text-destructive mt-1">
              {errors[field.name]?.message?.toString() || "This field is required"}
            </p>
          )}
        </div>
      ))}

      <Button type="submit" className="w-full bg-thai-gold hover:bg-thai-gold/90 text-white gap-2">
        <Send size={16} />
        {label}
      </Button>
    </form>
  );
};
