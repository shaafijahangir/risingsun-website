import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { packages } from "@/data/packages";
import { getOptimizedImageUrl, generateSrcSet } from "@/utils/imageUtils";

const PackagesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Thailand Travel Packages | Rising Sun Travel</title>
        <meta
          name="description"
          content="Explore our Thailand travel packages — Bangkok city tours, northern adventures, island hopping, medical tourism, luxury stays, and family holidays. Fully customised by a local expert."
        />
        <meta property="og:title" content="Thailand Travel Packages | Rising Sun Travel" />
        <meta
          property="og:description"
          content="Handcrafted Thailand packages for every traveller. From $899 per person. Arranged by Salim Jahangir — 20+ years of local expertise."
        />
        <meta property="og:url" content="https://www.risingsunthailand.com/packages" />
        <link rel="canonical" href="https://www.risingsunthailand.com/packages" />
      </Helmet>

      <Header />
      <ErrorBoundary>
        {/* Hero */}
        <section className="section-padding bg-brand-navy text-white">
          <div className="container-custom text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
              <Calendar size={18} className="text-thai-gold" />
              <span className="font-medium">All Packages</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Thailand Travel Packages
            </h1>
            <p className="text-white/85 text-lg max-w-2xl mx-auto">
              Every itinerary is handcrafted and fully customisable. Tell us your travel dates and
              we will tailor any package to your budget, pace, and preferences.
            </p>
          </div>
        </section>

        {/* Package grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card
                  key={pkg.slug}
                  className="overflow-hidden border-0 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56">
                    <picture>
                      <source srcSet={generateSrcSet(pkg.imageKey, "webp")} type="image/webp" />
                      <img
                        src={getOptimizedImageUrl(pkg.imageKey, 640)}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-4">
                      <div>
                        <h2 className="text-white font-bold text-xl mb-1">{pkg.title}</h2>
                        <p className="text-white/75 text-sm flex items-center gap-2">
                          <span>{pkg.days}</span>
                          <span className="text-white/40">·</span>
                          <span>{pkg.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {pkg.tagline}
                    </p>
                    <ul className="space-y-1 mb-5">
                      {pkg.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-thai-gold mt-1">✓</span> {h}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full bg-thai-gold hover:bg-thai-gold/90 text-white"
                    >
                      <Link to={`/packages/${pkg.slug}`} className="flex items-center justify-center gap-2">
                        View Package <ArrowRight size={15} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-14">
              <p className="text-muted-foreground mb-4 text-lg">
                Don't see what you're looking for? We build fully custom itineraries.
              </p>
              <Button asChild size="lg" className="bg-brand-navy hover:bg-brand-navy/90 text-white">
                <Link to="/services/medical">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default PackagesPage;
