
import React from "react";
import { Link } from "react-router-dom";
import { Plane, Hotel, Car, Map, Stethoscope, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/context";

type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  href?: string;
  anchor?: string;
};

const ServiceCard = ({ icon: Icon, title, description, href, anchor }: ServiceCardProps) => {
  const content = (
    <div className="group bg-card p-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-border h-full flex flex-col">
      <div className="bg-thai-cream p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-thai-gold/15 transition-colors">
        <Icon className="text-thai-gold" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-thai-blue">{title}</h3>
      <p className="text-muted-foreground text-sm flex-1">{description}</p>
      {(href || anchor) && (
        <div className="mt-4 pt-3 border-t border-border/50">
          <span className="text-thai-gold text-sm font-medium group-hover:underline">
            Learn more →
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link to={href} className="block h-full">{content}</Link>;
  }
  if (anchor) {
    return <a href={anchor} className="block h-full">{content}</a>;
  }
  return content;
};

const ServicesSection = () => {
  const { t } = useI18n();

  const services: ServiceCardProps[] = [
    {
      icon: Plane,
      title: t("services.flight.title"),
      description: t("services.flight.description"),
      href: "/services/flights",
    },
    {
      icon: Hotel,
      title: t("services.accommodation.title"),
      description: t("services.accommodation.description"),
      href: "/services/accommodation",
    },
    {
      icon: Car,
      title: t("services.transportation.title"),
      description: t("services.transportation.description"),
      href: "/services/cars",
    },
    {
      icon: Map,
      title: t("services.attractions.title"),
      description: t("services.attractions.description"),
      anchor: "#packages",
    },
    {
      icon: Stethoscope,
      title: t("services.medical.title"),
      description: t("services.medical.description"),
      href: "/services/medical",
    },
    {
      icon: Package,
      title: t("services.trade.title"),
      description: t("services.trade.description"),
      href: "/trade",
    },
  ];

  return (
    <section id="services" className="section-padding bg-thai-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-thai-blue">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-thai-gold hover:bg-thai-gold/90 text-white btn-3d">
            <Link to="/services/medical">{t("common.bookCall")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
