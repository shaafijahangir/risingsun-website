import React, { useState } from "react";
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
import { waLink } from "@/lib/contact";

type Destination = "All" | "Bangkok" | "Chiang Mai" | "Phuket" | "Krabi";

const destinations: { name: Destination; image: string; tagline: string }[] = [
  {
    name: "Bangkok",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=640&auto=format&fit=crop",
    tagline: "Temples, canals & street food",
  },
  {
    name: "Chiang Mai",
    image: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?q=80&w=640&auto=format&fit=crop",
    tagline: "Mountains, elephants & hill tribes",
  },
  {
    name: "Phuket",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=640&auto=format&fit=crop",
    tagline: "Beaches, islands & sea",
  },
  {
    name: "Krabi",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=640&auto=format&fit=crop",
    tagline: "Limestone cliffs & hidden coves",
  },
];

const PackagesPage = () => {
  const [active, setActive] = useState<Destination>("All");

  const filtered =
    active === "All"
      ? packages
      : packages.filter((p) => p.destinations.includes(active));

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Thailand Travel Packages | Rising Sun Travel</title>
        <meta
          name="description"
          content="Explore our Thailand travel packages: Bangkok city tours, northern adventures, island hopping, medical tourism, luxury stays, and family holidays. Fully customised by a local expert."
        />
        <meta property="og:title" content="Thailand Travel Packages | Rising Sun Travel" />
        <meta
          property="og:description"
          content="Handcrafted Thailand packages for every traveller. From $899 per person. Arranged by Salim Jahangir, with 20+ years of local expertise."
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
              <span className="font-medium">Handcrafted Itineraries</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Thailand Travel Packages
            </h1>
            <p className="text-white/85 text-lg max-w-2xl mx-auto">
              Pick a destination. We'll show you what's possible. Every itinerary is fully customisable to your dates, budget, and pace.
            </p>
          </div>
        </section>

        {/* Destination picker */}
        <section className="bg-brand-offwhite py-10 border-b border-border">
          <div className="container-custom">
            {/* "All" pill */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                onClick={() => setActive("All")}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                  active === "All"
                    ? "bg-brand-navy text-white border-brand-navy shadow-md"
                    : "bg-white text-brand-navy border-border hover:border-brand-navy/40"
                }`}
              >
                All destinations
              </button>
              {destinations.map((d) => (
                <button
                  key={d.name}
                  onClick={() => setActive(d.name)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                    active === d.name
                      ? "bg-brand-navy text-white border-brand-navy shadow-md"
                      : "bg-white text-brand-navy border-border hover:border-brand-navy/40"
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>

            {/* Destination image cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {destinations.map((d) => {
                const count = packages.filter((p) => p.destinations.includes(d.name)).length;
                const isActive = active === d.name;
                return (
                  <button
                    key={d.name}
                    onClick={() => setActive(isActive ? "All" : d.name)}
                    className={`relative rounded-2xl overflow-hidden h-40 text-left transition-all duration-200 focus:outline-none ${
                      isActive
                        ? "ring-4 ring-thai-gold scale-[1.02] shadow-xl"
                        : "hover:scale-[1.01] hover:shadow-lg opacity-90 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={d.image}
                      alt={d.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-lg leading-tight">{d.name}</p>
                      <p className="text-white/70 text-xs mt-0.5">{d.tagline}</p>
                      <p className="text-thai-gold text-xs font-semibold mt-1">
                        {count} {count === 1 ? "package" : "packages"}
                      </p>
                    </div>
                    {isActive && (
                      <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-thai-gold flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Package grid */}
        <section className="section-padding">
          <div className="container-custom">

            {/* Result label */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold font-heading text-brand-navy">
                  {active === "All" ? "All packages" : `${active} packages`}
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  {filtered.length} {filtered.length === 1 ? "itinerary" : "itineraries"} available
                </p>
              </div>
              {active !== "All" && (
                <button
                  onClick={() => setActive("All")}
                  className="text-sm text-muted-foreground hover:text-brand-navy transition-colors underline underline-offset-2"
                >
                  Clear filter
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg mb-4">No packages for this destination yet.</p>
                <Button
                  asChild
                  className="bg-thai-gold hover:bg-thai-gold/90 text-white"
                >
                  <a
                    href={waLink(`Hi Salim, I'm looking for a custom trip to ${active} in Thailand. Can you help?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask Salim for a custom itinerary
                  </a>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((pkg) => (
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
                          <h3 className="text-white font-bold text-xl mb-1">{pkg.title}</h3>
                          <p className="text-white/75 text-sm flex items-center gap-2">
                            <span>{pkg.days}</span>
                            <span className="text-white/40">·</span>
                            <span>{pkg.price}</span>
                          </p>
                        </div>
                      </div>
                      {/* Destination tags */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                        {pkg.destinations.map((dest) => (
                          <span key={dest} className="text-xs bg-black/40 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
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
            )}

            <div className="text-center mt-14 p-8 rounded-2xl bg-brand-offwhite">
              <p className="text-brand-navy font-semibold text-lg mb-2">
                Don't see exactly what you're looking for?
              </p>
              <p className="text-muted-foreground mb-5">
                Every itinerary is custom-built. Tell Salim where you want to go and he'll design it from scratch.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-brand-navy hover:bg-brand-navy/90 text-white"
              >
                <a
                  href={waLink("Hi Salim, I'm looking for a custom Thailand itinerary. Can you help?")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Custom Itinerary
                </a>
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
