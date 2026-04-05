import React from "react";
import { Link } from "react-router-dom";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { InquiryForm, FieldConfig } from "@/components/InquiryForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Car, Users, Shield, MapPin, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/context";

const fields: FieldConfig[] = [
  { name: "name",      label: "Your name",           type: "text",   required: true },
  { name: "email",     label: "Your email",           type: "email",  required: true },
  { name: "pickup",    label: "Pickup location",      type: "text",   required: true, placeholder: "e.g. Suvarnabhumi Airport, Bangkok hotel name" },
  { name: "dropoff",   label: "Drop-off location",    type: "text",   required: true, placeholder: "e.g. Pattaya, city centre hotel" },
  { name: "date",      label: "Pickup date",          type: "date",   required: true },
  { name: "time",      label: "Pickup time",          type: "text",   placeholder: "e.g. 09:30 AM" },
  { name: "vehicle",   label: "Vehicle type",         type: "select", required: true,
    options: ["Economy Sedan", "Comfortable Sedan", "7-Seat MPV / Van", "Minibus (12+ seats)", "Luxury SUV", "No preference"] },
  { name: "passengers", label: "Passengers",          type: "select", required: true,
    options: ["1–2", "3–4", "5–6", "7–10", "11+"] },
  { name: "duration",  label: "Duration",             type: "select",
    options: ["One-way transfer", "Return transfer", "Half day (4h)", "Full day (8h)", "Multi-day hire"] },
  { name: "notes",     label: "Additional info",      type: "textarea", placeholder: "Flight number, large luggage, child seat required, etc." },
];

const fleet = [
  {
    type: "Economy Sedan",
    capacity: "1–3 passengers",
    bestFor: "Airport transfers, city rides",
    priceFrom: "From $25",
    icon: Car,
    features: ["Air-conditioned", "English-speaking driver", "Meet & greet", "Free waiting time"],
  },
  {
    type: "7-Seat MPV / Van",
    capacity: "4–7 passengers",
    bestFor: "Families, groups, day trips",
    priceFrom: "From $45",
    icon: Users,
    features: ["Extra luggage space", "Child seat available", "Comfortable for long rides", "Wi-Fi on request"],
  },
  {
    type: "Luxury SUV",
    capacity: "1–4 passengers",
    bestFor: "VIP transfers, corporate",
    priceFrom: "From $80",
    icon: Shield,
    features: ["Premium vehicles", "Professional chauffeur", "Chilled water & amenities", "Door-to-door service"],
  },
];

const popularRoutes = [
  { from: "Suvarnabhumi Airport", to: "Bangkok City Centre", time: "45–60 min" },
  { from: "Bangkok", to: "Pattaya", time: "1.5–2 hrs" },
  { from: "Bangkok", to: "Hua Hin", time: "2.5–3 hrs" },
  { from: "Bangkok", to: "Ayutthaya", time: "1.5 hrs" },
  { from: "Chiang Mai", to: "Chiang Rai", time: "3 hrs" },
  { from: "Phuket Airport", to: "Patong Beach", time: "45 min" },
];

const CarsPage = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-offwhite to-accent/10">
      <Header />
      <ErrorBoundary>
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-thai-blue/90 to-thai-teal/80 text-white">
          <div className="container-custom">
            <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white hover:bg-white/10 mb-6 -ml-2">
              <Link to="/"><ArrowLeft size={16} className="mr-1" /> {t("common.backToHome")}</Link>
            </Button>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
              <Car size={18} className="text-thai-gold" />
              <span className="font-medium">{t("cars.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 max-w-2xl">
              {t("cars.title")}
            </h1>
            <p className="text-white/85 text-lg max-w-2xl">
              {t("cars.subtitle")}
            </p>
          </div>
        </section>

        {/* Fleet */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading text-thai-blue mb-3">Our Fleet</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                All vehicles are maintained to a high standard with professional, English-speaking drivers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {fleet.map(({ icon: Icon, type, capacity, bestFor, priceFrom, features }) => (
                <Card key={type} className="border-0 shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="p-4 rounded-full bg-thai-cream w-16 h-16 flex items-center justify-center mb-4">
                      <Icon className="text-thai-gold" size={28} />
                    </div>
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-thai-blue text-lg">{type}</h3>
                      <span className="text-xs bg-thai-gold/10 text-thai-blue px-2 py-1 rounded-full shrink-0 ml-2">{priceFrom}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{capacity}</p>
                    <p className="text-xs text-thai-teal font-medium mb-4">Best for: {bestFor}</p>
                    <ul className="space-y-1.5">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-thai-gold shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Popular Routes */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold font-heading text-thai-blue text-center mb-8">
                Popular Routes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {popularRoutes.map(({ from, to, time }) => (
                  <div key={`${from}-${to}`} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                    <MapPin size={16} className="text-thai-gold shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 text-sm font-medium text-thai-blue truncate">
                        <span className="truncate">{from}</span>
                        <ArrowRight size={12} className="shrink-0 text-muted-foreground" />
                        <span className="truncate">{to}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-heading text-thai-blue mb-2">
                    Book a Transfer
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Tell us your route and we'll confirm availability and pricing via WhatsApp.
                  </p>
                  <InquiryForm
                    serviceType="Car Rental / Transfer"
                    fields={fields}
                    submitLabel="Book via WhatsApp"
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

export default CarsPage;
