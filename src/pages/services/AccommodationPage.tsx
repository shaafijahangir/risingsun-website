import React from "react";
import { Link } from "react-router-dom";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { InquiryForm, FieldConfig } from "@/components/InquiryForm";
import WhatsAppQuickLink from "@/components/WhatsAppQuickLink";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Hotel, Check, Star } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { getOptimizedImageUrl } from "@/utils/imageUtils";

const fields: FieldConfig[] = [
  { name: "name",        label: "Your name",           type: "text",   required: true },
  { name: "email",       label: "Your email",           type: "email",  required: true },
  { name: "destination", label: "Destination in Thailand", type: "select", required: true,
    options: ["Bangkok", "Chiang Mai", "Phuket", "Krabi", "Koh Samui", "Pattaya", "Hua Hin", "Other"] },
  { name: "checkin",     label: "Check-in date",        type: "date",   required: true },
  { name: "checkout",    label: "Check-out date",        type: "date",   required: true },
  { name: "guests",      label: "Guests",               type: "select", required: true,
    options: ["1", "2", "3", "4", "5", "6+"] },
  { name: "type",        label: "Preferred type",        type: "select",
    options: ["Luxury Resort (5★)", "Boutique Hotel (3-4★)", "Serviced Apartment", "Authentic Homestay", "No preference"] },
  { name: "budget",      label: "Budget per night (USD)", type: "select",
    options: ["Under $50", "$50-100", "$100-200", "$200-400", "$400+"] },
  { name: "notes",       label: "Special requests",     type: "textarea", placeholder: "Honeymoon setup, sea view, pool access, etc." },
];

type PropertyTier = {
  type: string;
  stars: number;
  priceFrom: number;
  imageKey: string;
  features: string[];
};

const propertyTiers: PropertyTier[] = [
  {
    type: "Luxury Resort",
    stars: 5,
    priceFrom: 200,
    imageKey: "islands",
    features: ["Infinity pools & spa", "Beachfront or city views", "Butler service available", "Michelin-starred dining"],
  },
  {
    type: "Boutique Hotel",
    stars: 4,
    priceFrom: 60,
    imageKey: "bangkok",
    features: ["Curated local character", "Central locations", "Rooftop bars & restaurants", "Great value for money"],
  },
  {
    type: "Serviced Apartment",
    stars: 3,
    priceFrom: 40,
    imageKey: "chiang-mai",
    features: ["Full kitchen facilities", "Weekly housekeeping", "Ideal for 2+ week stays", "Local neighbourhood feel"],
  },
];

const AccommodationPage = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ErrorBoundary>
        {/* Hero */}
        <section className="section-padding bg-brand-navy text-white">
          <div className="container-custom">
            <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white hover:bg-white/10 mb-6 -ml-2">
              <Link to="/"><ArrowLeft size={16} className="mr-1" /> {t("common.backToHome")}</Link>
            </Button>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
              <Hotel size={18} className="text-thai-gold" />
              <span className="font-medium">{t("accommodation.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 max-w-2xl">
              {t("accommodation.title")}
            </h1>
            <p className="text-white/85 text-lg max-w-2xl">
              {t("accommodation.subtitle")}
            </p>
          </div>
        </section>

        {/* Property Tiers */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading text-brand-navy mb-3">
                Property Types
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every property is personally vetted by our team. We know exactly where to put you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {propertyTiers.map((tier) => (
                <Card key={tier.type} className="overflow-hidden border-0 shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-52">
                    <img
                      src={getOptimizedImageUrl(tier.imageKey, 600)}
                      alt={tier.type}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                      <span className="text-white font-semibold text-lg">{tier.type}</span>
                      <span className="bg-thai-gold text-white text-xs px-2 py-1 rounded-full">
                        From ${tier.priceFrom}/night
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex mb-3">
                      {Array.from({ length: tier.stars }).map((_, i) => (
                        <Star key={i} size={14} className="text-thai-gold fill-thai-gold" />
                      ))}
                    </div>
                    <ul className="space-y-1.5">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check size={14} className="text-thai-gold shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Inquiry Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-heading text-brand-navy mb-2">
                    Find Your Perfect Stay
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Tell us your dates and preferences. We'll send curated options within a few hours.
                  </p>
                  <WhatsAppQuickLink message="Hi Salim, I'm looking for accommodation in Thailand. Can you help?" />
                  <InquiryForm
                    serviceType="Accommodation Booking"
                    fields={fields}
                    submitLabel="Get Options via WhatsApp"
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

export default AccommodationPage;
