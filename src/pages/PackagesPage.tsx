import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { packages } from "@/data/packages";
import { getOptimizedImageUrl, generateSrcSet } from "@/utils/imageUtils";
import { waLink } from "@/lib/contact";
import { useInView } from "@/hooks/useInView";

type DestinationName = "Bangkok" | "Chiang Mai" | "Phuket" | "Krabi" | "Koh Samui" | "Ayutthaya";

const destinations: {
  name: DestinationName;
  image: string;
  tagline: string;
  description: string;
}[] = [
  {
    name: "Bangkok",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200&auto=format&fit=crop",
    tagline: "Temples, canals & street food",
    description: "Thailand's capital is unlike any city on earth. Ancient temples, floating markets, and the finest street food in Asia.",
  },
  {
    name: "Chiang Mai",
    image: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?q=80&w=1200&auto=format&fit=crop",
    tagline: "Mountains, elephants & hill tribes",
    description: "The soul of northern Thailand. Misty mountains, ethical elephant sanctuaries, and a walled city full of ancient temples.",
  },
  {
    name: "Phuket",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1200&auto=format&fit=crop",
    tagline: "Beaches, islands & sea",
    description: "Thailand's largest island and gateway to the Andaman Sea. Turquoise water, limestone karsts, and island-hopping adventures.",
  },
  {
    name: "Krabi",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
    tagline: "Limestone cliffs & hidden coves",
    description: "Dramatic karst scenery, Railay Beach only reachable by boat, and some of the best rock climbing in Southeast Asia.",
  },
  {
    name: "Koh Samui",
    image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=1200&auto=format&fit=crop",
    tagline: "Coconut palms & coral reefs",
    description: "The Gulf of Thailand's most famous island. White sand beaches, vibrant nightlife, and some of the best diving in Southeast Asia.",
  },
  {
    name: "Ayutthaya",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1200&auto=format&fit=crop",
    tagline: "Ancient capital & temple ruins",
    description: "A UNESCO World Heritage Site just north of Bangkok. Towering brick prangs, headless Buddhas, and 400 years of forgotten grandeur.",
  },
];

const PackagesPage = () => {
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState<DestinationName | null>(null);
  const { ref: destRef, isVisible: destVisible } = useInView<HTMLElement>();
  const { ref: pkgRef, isVisible: pkgVisible } = useInView<HTMLElement>();
  // When arriving via ?destination= param the pkgRef section mounts after the
  // initial render, so useInView never fires. Show cards immediately instead.
  const deepLinked = !!searchParams.get("destination");

  useEffect(() => {
    const param = searchParams.get("destination");
    if (!param) return;
    const match = destinations.find((d) => d.name === param);
    if (match) setSelected(match.name);
  }, []);

  const dest = destinations.find((d) => d.name === selected) ?? null;
  const filtered = selected
    ? packages.filter((p) => p.destinations.includes(selected))
    : packages;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Thailand Travel Packages | Rising Sun Travel</title>
        <meta name="description" content="Explore our Thailand travel packages: Bangkok city tours, northern adventures, island hopping, medical tourism, luxury stays, and family holidays. Fully customised by a local expert." />
        <meta property="og:title" content="Thailand Travel Packages | Rising Sun Travel" />
        <meta property="og:url" content="https://www.risingsunthailand.com/packages" />
        <link rel="canonical" href="https://www.risingsunthailand.com/packages" />
      </Helmet>

      <Header />
      <ErrorBoundary>

        {/* ── STATE 1: Destination picker ─────────────────────────────── */}
        {!selected && (
          <>
            {/* Hero */}
            <section className="section-padding bg-brand-navy text-white relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1920&auto=format&fit=crop"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/80" />
              <div className="container-custom text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
                  <Calendar size={18} className="text-thai-gold" />
                  <span className="font-medium">Handcrafted Itineraries</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                  Where do you want to go?
                </h1>
                <p className="text-white/80 text-lg max-w-xl mx-auto">
                  Choose a destination. We'll show you everything we can arrange there.
                </p>
              </div>
            </section>

            {/* Destination cards */}
            <section ref={destRef} className="section-padding bg-brand-offwhite">
              <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {destinations.map((d, i) => {
                    const count = packages.filter((p) =>
                      p.destinations.includes(d.name)
                    ).length;
                    return (
                      <div
                        key={d.name}
                        className={`anim-fade-up ${destVisible ? "in-view" : ""}`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                      <button
                        onClick={() => setSelected(d.name)}
                        className="group relative rounded-2xl overflow-hidden text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-thai-gold shadow-card hover:shadow-lift transition-shadow duration-300 w-full"
                        style={{ height: "320px" }}
                      >
                        <img
                          src={d.image}
                          alt={d.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/70 transition-all duration-300" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-7">
                          <p className="text-thai-gold text-sm font-semibold uppercase tracking-widest mb-1">
                            {count} {count === 1 ? "package" : "packages"}
                          </p>
                          <h2 className="text-white text-3xl font-bold font-heading mb-1">
                            {d.name}
                          </h2>
                          <p className="text-white/75 text-sm mb-5">{d.tagline}</p>
                          <div className="flex items-center gap-2 text-thai-gold text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            Explore packages <ArrowRight size={15} />
                          </div>
                        </div>
                      </button>
                      </div>
                    );
                  })}
                </div>

                {/* Custom itinerary nudge */}
                <div className="mt-10 text-center">
                  <p className="text-muted-foreground text-sm">
                    Don't see your destination?{" "}
                    <Link
                      to="/contact"
                      className="font-semibold text-brand-navy hover:text-thai-gold transition-colors underline underline-offset-2"
                    >
                      Ask Salim for a custom itinerary
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ── STATE 2: Destination packages view ─────────────────────── */}
        {selected && dest && (
          <>
            {/* Destination hero */}
            <section className="relative h-72 md:h-96 overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:px-10 md:py-8 max-w-7xl mx-auto w-full">
                {/* Back button */}
                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors bg-black/30 hover:bg-black/50 px-4 py-2 rounded-full w-fit backdrop-blur-sm"
                >
                  <ArrowLeft size={15} />
                  All destinations
                </button>

                {/* Destination name */}
                <div>
                  <p className="text-thai-gold text-sm font-semibold uppercase tracking-widest mb-2">
                    {filtered.length} {filtered.length === 1 ? "package" : "packages"} available
                  </p>
                  <h1 className="text-white text-4xl md:text-5xl font-bold font-heading mb-2">
                    {dest.name}
                  </h1>
                  <p className="text-white/75 text-base max-w-xl">{dest.description}</p>
                </div>
              </div>
            </section>

            {/* Package grid */}
            <section ref={pkgRef} className="section-padding bg-white">
              <div className="container-custom">
                {filtered.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-muted-foreground text-lg mb-6">
                      No packages listed for {dest.name} yet.
                    </p>
                    <Button asChild className="bg-thai-gold hover:bg-thai-gold/90 text-white">
                      <Link to="/contact">
                        Ask Salim for a custom {dest.name} itinerary
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((pkg, i) => (
                      <div
                        key={pkg.slug}
                        className={`anim-fade-up ${(pkgVisible || deepLinked) ? "in-view" : ""}`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                      <Card
                        className="overflow-hidden border-0 shadow-card hover:-translate-y-2 hover:shadow-lift transition-all duration-300 h-full"
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
                          <Button asChild className="w-full bg-thai-gold hover:bg-thai-gold/90 text-white">
                            <Link to={`/packages/${pkg.slug}`} className="flex items-center justify-center gap-2">
                              View Package <ArrowRight size={15} />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                      </div>
                    ))}
                  </div>
                )}

                {/* Custom itinerary CTA */}
                <div className="mt-14 p-8 rounded-2xl bg-brand-offwhite text-center">
                  <p className="text-brand-navy font-semibold text-lg mb-2">
                    Want something different in {dest.name}?
                  </p>
                  <p className="text-muted-foreground text-sm mb-5">
                    Every itinerary is custom-built. Tell Salim what you have in mind.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild size="lg" className="bg-thai-gold hover:bg-thai-gold/90 text-white">
                      <a
                        href={waLink(`Hi Salim, I'm interested in a custom trip to ${dest.name}. Can you help?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Request a Custom Itinerary
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setSelected(null)}
                    >
                      <ArrowLeft size={15} className="mr-2" /> Browse other destinations
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default PackagesPage;
