import React from "react";
import { Link } from "react-router-dom";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { InquiryForm, FieldConfig } from "@/components/InquiryForm";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT } from "@/lib/contact";
import {
  ArrowLeft, Stethoscope, Heart, Shield, Video,
  CheckCircle, Lock, AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/context";

const fields: FieldConfig[] = [
  { name: "name",       label: "Your full name",          type: "text",   required: true },
  { name: "country",    label: "Your country",            type: "text",   required: true, placeholder: "e.g. Bangladesh, UK, USA" },
  { name: "specialty",  label: "Medical specialty needed", type: "select", required: true,
    options: [
      "Cardiology / Heart",
      "Cosmetic & Plastic Surgery",
      "Orthopedics & Joint Replacement",
      "Oncology / Cancer Treatment",
      "Ophthalmology / Eye Surgery",
      "Dental",
      "Fertility / IVF",
      "General Check-up / Health Screening",
      "Neurology",
      "Other",
    ],
  },
  { name: "description", label: "Brief description of your needs", type: "textarea", required: true,
    placeholder: "Describe your condition or the type of treatment you are looking for (max 500 characters). Do not include sensitive personal medical records here." },
  { name: "contact",    label: "Preferred contact method",  type: "select", required: true,
    options: ["WhatsApp", "Email", "Phone call"] },
  { name: "email",      label: "Your email",               type: "email",  required: true },
  { name: "phone",      label: "Your WhatsApp / phone",    type: "tel",    placeholder: "+1 234 567 8900" },
];

const specialties = [
  { icon: Heart,       title: "Cardiology",         desc: "Heart procedures, cardiac surgery, and cardiovascular treatments" },
  { icon: Stethoscope, title: "Cosmetic Surgery",   desc: "Plastic surgery, dental procedures, and aesthetic treatments" },
  { icon: Shield,      title: "Orthopedics",        desc: "Joint replacement, spine surgery, and sports medicine" },
];

const hospitals = [
  { name: "Bumrungrad International Hospital", accreditation: "JCI Accredited",  specialties: "Multi-specialty, Emergency Care, International Standards" },
  { name: "Samitivej Hospital",                accreditation: "JCI Accredited",  specialties: "Heart Center, Cancer Treatment, Women's Health" },
  { name: "BangPakok 9 International",         accreditation: "ISO 9001",        specialties: "General Surgery, Pediatrics, Cardiothoracic Surgery" },
];

const steps = [
  { step: "1", icon: CheckCircle, title: "Tell us your needs",      desc: "Fill in the form with your specialty and a brief description of what you're looking for." },
  { step: "2", icon: Video,       title: "We match you",            desc: "Salim personally reviews your inquiry and connects you with the right hospital or specialist." },
  { step: "3", icon: Stethoscope, title: "We arrange everything",   desc: "Consultation booking, travel, accommodation, and logistics — all coordinated by our team." },
];

const MedicalPage = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-offwhite to-accent/10">
      <Header />
      <ErrorBoundary>
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-[#22668D] to-thai-teal/80 text-white">
          <div className="container-custom">
            <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white hover:bg-white/10 mb-6 -ml-2">
              <Link to="/"><ArrowLeft size={16} className="mr-1" /> {t("common.backToHome")}</Link>
            </Button>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
              <Stethoscope size={18} className="text-thai-gold" />
              <span className="font-medium">{t("medical.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 max-w-3xl">
              {t("medical.title")}
            </h1>
            <p className="text-white/85 text-lg max-w-2xl mb-6">
              {t("medical.subtitle")}
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm">
              <AlertTriangle size={14} className="text-thai-gold shrink-0" />
              <span>{t("medical.emergency")}</span>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-thai-cream">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading text-thai-blue mb-3">
                {t("medical.howItWorks")}
              </h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-8">
              {steps.map(({ step, icon: Icon, title, desc }) => (
                <div key={step} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                    {step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={18} className="text-thai-teal" />
                      <h3 className="font-semibold text-thai-blue">{title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties + Hospitals */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              {/* Specialties */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-thai-blue mb-6">
                  Available Specialties
                </h2>
                <div className="space-y-4">
                  {specialties.map(({ icon: Icon, title, desc }) => (
                    <Card key={title} className="border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="p-2.5 rounded-full bg-thai-cream shrink-0">
                          <Icon size={20} className="text-[#22668D]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#22668D] mb-0.5">{title}</h3>
                          <p className="text-sm text-muted-foreground">{desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Partner Hospitals */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-thai-blue mb-6">
                  Partner Hospitals
                </h2>
                <div className="space-y-4">
                  {hospitals.map(({ name, accreditation, specialties: specs }) => (
                    <Card key={name} className="border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-semibold text-[#22668D] leading-snug">{name}</h3>
                          <span className="text-xs bg-thai-gold/15 text-thai-blue px-2 py-1 rounded-full shrink-0 whitespace-nowrap">
                            {accreditation}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{specs}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-heading text-[#22668D] mb-2">
                    Start Your Medical Inquiry
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Tell us what you need. {CONTACT.founderName} will personally review your inquiry
                    and respond within 24 hours.
                  </p>
                  <InquiryForm
                    serviceType="Medical Tourism Consultation"
                    fields={fields}
                    submitLabel="Send Inquiry via WhatsApp"
                  />
                  <div className="mt-5 flex items-start gap-2 p-3 bg-muted/40 rounded-lg">
                    <Lock size={14} className="text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      {t("medical.privacy")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default MedicalPage;
