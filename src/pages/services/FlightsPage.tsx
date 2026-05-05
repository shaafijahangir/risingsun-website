import React from "react";
import { Link } from "react-router-dom";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { InquiryForm, FieldConfig } from "@/components/InquiryForm";
import WhatsAppQuickLink from "@/components/WhatsAppQuickLink";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plane, Globe, Users, Briefcase } from "lucide-react";
import { useI18n } from "@/i18n/context";

const fields: FieldConfig[] = [
  { name: "name",       label: "Your name",        type: "text",   required: true,  placeholder: "e.g. John Smith" },
  { name: "email",      label: "Your email",        type: "email",  required: true,  placeholder: "john@example.com" },
  { name: "from",       label: "Flying from",       type: "text",   required: true,  placeholder: "e.g. London, Dhaka, Sydney" },
  { name: "to",         label: "Flying to",         type: "text",   required: true,  placeholder: "e.g. Bangkok, Chiang Mai" },
  { name: "departure",  label: "Departure date",    type: "date",   required: true },
  { name: "returnDate", label: "Return date",       type: "date" },
  { name: "passengers", label: "Passengers",        type: "select",
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"] },
  { name: "class",      label: "Class",             type: "select",
    options: ["Economy", "Premium Economy", "Business", "First Class"] },
  { name: "notes",      label: "Additional notes",  type: "textarea", placeholder: "Any specific airlines, stopovers, or preferences?" },
];

const features = [
  { icon: Globe,    title: "International Flights",    desc: "All major airlines to Bangkok, Phuket, Chiang Mai, and beyond." },
  { icon: Plane,    title: "Domestic Thailand Routes", desc: "Domestic connections between Thai cities including budget carriers." },
  { icon: Users,    title: "Group Bookings",           desc: "Special rates and coordination for groups of 5 or more." },
  { icon: Briefcase,title: "Business Travel",          desc: "Corporate fares, flexible tickets, and priority seating." },
];

const FlightsPage = () => {
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
              <Plane size={18} className="text-thai-gold" />
              <span className="font-medium">{t("flights.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 max-w-2xl">
              {t("flights.title")}
            </h1>
            <p className="text-white/85 text-lg max-w-2xl">
              {t("flights.subtitle")}
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="border-0 shadow-md hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-full bg-thai-gold/10 w-12 h-12 flex items-center justify-center mb-4">
                      <Icon className="text-thai-gold" size={22} />
                    </div>
                    <h3 className="font-semibold text-brand-navy mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Inquiry Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-heading text-brand-navy mb-2">
                    Request a Flight Quote
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Fill in your details and we'll send you the best options within a few hours.
                  </p>
                  <WhatsAppQuickLink message="Hi Salim, I'm looking to book flights to Thailand. Can you help me find the best options?" />
                  <InquiryForm
                    serviceType="Flight Booking"
                    fields={fields}
                    submitLabel="Get Quote via WhatsApp"
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

export default FlightsPage;
