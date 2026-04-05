import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { InquiryForm, FieldConfig } from "@/components/InquiryForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Calendar } from "lucide-react";
import { getPackageBySlug } from "@/data/packages";
import { getOptimizedImageUrl, generateSrcSet } from "@/utils/imageUtils";

const fields: FieldConfig[] = [
  { name: "name",       label: "Your name",          type: "text",  required: true },
  { name: "email",      label: "Your email",          type: "email", required: true },
  { name: "phone",      label: "WhatsApp / phone",    type: "tel",   placeholder: "+1 234 567 8900" },
  { name: "travelers",  label: "Number of travellers", type: "select", required: true,
    options: ["1", "2", "3–4", "5–6", "7+"] },
  { name: "date",       label: "Preferred travel month", type: "text", placeholder: "e.g. July 2025, flexible" },
  { name: "notes",      label: "Special requests or questions", type: "textarea" },
];

const PackageDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = getPackageBySlug(slug ?? "");

  if (!pkg) return <Navigate to="/packages" replace />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-offwhite to-accent/10">
      <Helmet>
        <title>{pkg.title} | Thailand Packages | Rising Sun Travel</title>
        <meta name="description" content={pkg.metaDescription} />
        <meta property="og:title" content={`${pkg.title} | Rising Sun Travel`} />
        <meta property="og:description" content={pkg.metaDescription} />
        <meta property="og:image" content={getOptimizedImageUrl(pkg.imageKey, 1200)} />
      </Helmet>

      <Header />
      <ErrorBoundary>
        {/* Hero */}
        <div className="relative h-72 md:h-96">
          <picture>
            <source srcSet={generateSrcSet(pkg.imageKey, "webp")} type="image/webp" />
            <img
              src={getOptimizedImageUrl(pkg.imageKey, 1280)}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end container-custom pb-8">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-white/80 hover:text-white hover:bg-white/10 mb-4 self-start -ml-2"
            >
              <Link to="/packages">
                <ArrowLeft size={16} className="mr-1" /> All Packages
              </Link>
            </Button>
            <span className="bg-thai-gold text-white text-xs px-3 py-1 rounded-full self-start mb-3">
              {pkg.days}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-1">
              {pkg.title}
            </h1>
            <p className="text-white/80 text-lg">{pkg.price}</p>
          </div>
        </div>

        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-thai-blue mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-base">{pkg.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-thai-blue mb-4">Highlights</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 bg-thai-cream rounded-lg px-4 py-3">
                      <Check size={16} className="text-thai-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-thai-blue font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-thai-blue mb-6">
                  Sample Itinerary
                </h2>
                <div className="space-y-5">
                  {pkg.itinerary.map(({ day, title, description }, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-thai-blue text-white flex items-center justify-center text-xs font-bold shrink-0">
                          {i + 1}
                        </div>
                        {i < pkg.itinerary.length - 1 && (
                          <div className="w-0.5 flex-1 bg-thai-blue/20 mt-2" />
                        )}
                      </div>
                      <div className="pb-5">
                        <span className="text-xs font-semibold text-thai-teal uppercase tracking-wider">
                          {day}
                        </span>
                        <h3 className="font-semibold text-thai-blue mt-0.5 mb-1">{title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's included */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-thai-blue mb-4">
                  What's Included
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={15} className="text-thai-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar — inquiry form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={18} className="text-thai-gold" />
                      <h2 className="text-lg font-bold text-thai-blue">Book This Package</h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-5">
                      Send us your details and we'll confirm availability and pricing within 24 hours.
                    </p>
                    <InquiryForm
                      serviceType={`Package: ${pkg.title}`}
                      fields={fields}
                      submitLabel="Enquire via WhatsApp"
                    />
                  </CardContent>
                </Card>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  All packages are fully customisable. Price is a guide — exact cost depends on
                  dates, group size, and hotel tier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default PackageDetailPage;
