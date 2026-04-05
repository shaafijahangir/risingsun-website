
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Check, ArrowRight } from "lucide-react";
import { packages } from "@/data/packages";
import { getOptimizedImageUrl, generateSrcSet } from "@/utils/imageUtils";

const PackagesSection = () => {
  // Show only the first 3 packages on the homepage
  const featured = packages.slice(0, 3);

  return (
    <section id="packages" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-thai-blue">
            Popular Travel Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most sought-after experiences, fully customisable to suit your preferences,
            timeline, and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((pkg) => (
            <Link key={pkg.slug} to={`/packages/${pkg.slug}`} className="group block">
              <Card className="overflow-hidden border-0 shadow-lg group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-64">
                  <picture>
                    <source srcSet={generateSrcSet(pkg.imageKey, "webp")} type="image/webp" />
                    <source srcSet={generateSrcSet(pkg.imageKey, "avif")} type="image/avif" />
                    <img
                      src={getOptimizedImageUrl(pkg.imageKey)}
                      alt={`${pkg.title} — Thailand travel package`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="bg-thai-gold text-white rounded-full py-1 px-3 text-xs inline-block mb-2">
                        {pkg.days}
                      </div>
                      <h3 className="text-xl font-bold">{pkg.title}</h3>
                      <p className="text-white/85 text-sm mt-1">{pkg.price}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 text-sm">{pkg.tagline}</p>
                  <div className="mb-5">
                    <ul className="space-y-1.5">
                      {pkg.includes.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="text-thai-gold h-4 w-4 mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-thai-gold text-sm font-medium group-hover:gap-3 transition-all">
                    <Calendar size={14} /> View Package <ArrowRight size={13} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see what you're looking for? We specialise in creating custom itineraries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-thai-gold hover:bg-thai-gold/90 text-white btn-3d">
              <Link to="/packages">See All Packages</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-thai-blue text-thai-blue hover:bg-thai-blue/5">
              <Link to="/services/medical">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
