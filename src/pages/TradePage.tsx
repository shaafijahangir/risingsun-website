import React from "react";
import { Link } from "react-router-dom";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { InquiryForm, FieldConfig } from "@/components/InquiryForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, Package, ArrowUpRight, ArrowDownLeft,
  Search, CheckCircle, Truck, Handshake,
  Coffee, Shirt, Leaf, Box, Settings, ShoppingBag,
} from "lucide-react";
import { useI18n } from "@/i18n/context";

const fields: FieldConfig[] = [
  { name: "company",   label: "Company / Organisation name", type: "text",   required: true },
  { name: "country",   label: "Your country",               type: "text",   required: true },
  { name: "direction", label: "What are you looking for?",  type: "select", required: true,
    options: ["Export from Thailand", "Import to Thailand", "Both / Not sure yet"] },
  { name: "category",  label: "Product category",           type: "select", required: true,
    options: [
      "Food & Beverage",
      "Textiles & Garments",
      "Wellness & Cosmetics",
      "Ceramics & Crafts",
      "Furniture & Home Decor",
      "Electronics & Machinery",
      "Agricultural Products",
      "Herbs & Supplements",
      "Consumer Goods",
      "Other",
    ],
  },
  { name: "description", label: "Product description",      type: "textarea", required: true,
    placeholder: "Describe the product(s), estimated quantity, and any specific standards or certifications required." },
  { name: "name",      label: "Your name",                  type: "text",   required: true },
  { name: "email",     label: "Business email",             type: "email",  required: true },
  { name: "phone",     label: "Phone / WhatsApp",           type: "tel" },
];

const productCategories = [
  { icon: Coffee,      label: "Food & Beverage",     examples: "Jasmine rice, coconut products, Thai sauces, tropical fruit" },
  { icon: Shirt,       label: "Textiles & Garments", examples: "Traditional silk, cotton fabrics, fashion garments" },
  { icon: Leaf,        label: "Wellness & Herbs",    examples: "Thai herbs, essential oils, natural cosmetics" },
  { icon: Box,         label: "Ceramics & Crafts",   examples: "Benjarong pottery, hand-painted decor, woven goods" },
  { icon: Settings,    label: "Machinery",           examples: "Agricultural equipment, industrial parts, electronics" },
  { icon: ShoppingBag, label: "Consumer Goods",      examples: "Household items, personal care products, general retail" },
];

const processSteps = [
  { icon: Search,       step: "1", title: "Initial Inquiry",         desc: "Submit your inquiry with product details and requirements." },
  { icon: CheckCircle,  step: "2", title: "Sourcing & Verification", desc: "We identify and vet reliable suppliers or buyers on your behalf." },
  { icon: Truck,        step: "3", title: "Logistics Coordination",  desc: "We manage shipping, customs documentation, and freight." },
  { icon: Handshake,    step: "4", title: "Delivery & Support",      desc: "Ongoing support until goods are delivered and you are satisfied." },
];

const TradePage = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen">
      <Header />
      <ErrorBoundary>
        {/* Hero — professional blue, not tourism cream */}
        <section className="section-padding bg-brand-navy text-white">
          <div className="container-custom">
            <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white hover:bg-white/10 mb-6 -ml-2">
              <Link to="/"><ArrowLeft size={16} className="mr-1" /> {t("common.backToHome")}</Link>
            </Button>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
              <Package size={18} className="text-thai-gold" />
              <span className="font-medium">{t("trade.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 max-w-3xl">
              {t("trade.title")}
            </h1>
            <p className="text-white/85 text-lg max-w-2xl">
              {t("trade.subtitle")}
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-brand-navy/5 to-brand-navy/10">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-full bg-brand-navy/10">
                      <ArrowUpRight size={22} className="text-brand-navy" />
                    </div>
                    <h2 className="text-xl font-bold text-brand-navy">{t("trade.exportTitle")}</h2>
                  </div>
                  <p className="text-muted-foreground">{t("trade.exportDesc")}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-thai-gold/5 to-thai-gold/10">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-full bg-thai-gold/15">
                      <ArrowDownLeft size={22} className="text-brand-navy" />
                    </div>
                    <h2 className="text-xl font-bold text-brand-navy">{t("trade.importTitle")}</h2>
                  </div>
                  <p className="text-muted-foreground">{t("trade.importDesc")}</p>
                </CardContent>
              </Card>
            </div>

            {/* Product Categories */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold font-heading text-brand-navy text-center mb-8">
                Product Categories We Work With
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {productCategories.map(({ icon: Icon, label, examples }) => (
                  <div
                    key={label}
                    className="group flex flex-col items-center text-center p-4 rounded-xl border border-border hover:border-thai-gold/50 hover:bg-thai-gold/5 transition-all cursor-default"
                    title={examples}
                  >
                    <div className="p-3 rounded-full bg-brand-navy/10 mb-3 group-hover:bg-thai-gold/15 transition-colors">
                      <Icon size={22} className="text-brand-navy group-hover:text-thai-gold transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-brand-navy leading-tight">{label}</span>
                    <span className="text-xs text-muted-foreground mt-1 hidden md:block">{examples}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold font-heading text-brand-navy text-center mb-8">
                {t("trade.processTitle")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {processSteps.map(({ icon: Icon, step, title, desc }) => (
                  <div key={step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-thai-gold text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">
                      {step}
                    </div>
                    <div className="flex justify-center mb-2">
                      <Icon size={18} className="text-thai-gold" />
                    </div>
                    <h3 className="font-semibold text-brand-navy mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-heading text-brand-navy mb-2">
                    Submit a Trade Inquiry
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Tell us what you need. We'll review your inquiry and respond by email within 1-2 business days.
                  </p>
                  <InquiryForm
                    serviceType="Trade & Export Inquiry"
                    fields={fields}
                    submitLabel="Send Inquiry via Email"
                    submitChannel="email"
                  />
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

export default TradePage;
