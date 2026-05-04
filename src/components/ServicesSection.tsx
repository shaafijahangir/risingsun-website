import React from "react";
import { Link } from "react-router-dom";
import { Plane, Stethoscope, Package, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/context";

type PillarProps = {
  icon: React.ElementType;
  label: string;
  heading: string;
  body: string;
  tags: string[];
  cta: string;
  href: string;
  accentClass: string;
  iconBgClass: string;
};

const Pillar = ({ icon: Icon, label, heading, body, tags, cta, href, accentClass, iconBgClass }: PillarProps) => (
  <Link
    to={href}
    className="group relative flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className={`h-1.5 w-full ${accentClass}`} />
    <div className="flex flex-col flex-1 p-8">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${iconBgClass}`}>
        <Icon size={26} className="text-white" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </p>
      <h3 className="text-2xl font-bold font-heading text-foreground mb-3 leading-snug">
        {heading}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
        {body}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
        <span>{cta}</span>
        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);

const ServicesSection = () => {
  const { t } = useI18n();

  const pillars: PillarProps[] = [
    {
      icon: Plane,
      label: t("services.tourism.label"),
      heading: t("services.tourism.heading"),
      body: t("services.tourism.body"),
      tags: [
        t("common.flights"),
        t("common.accommodation"),
        t("common.carRental"),
        t("common.packages"),
      ],
      cta: t("services.tourism.cta"),
      href: "/packages",
      accentClass: "bg-thai-gold",
      iconBgClass: "bg-brand-navy",
    },
    {
      icon: Stethoscope,
      label: t("services.medicalTelecom.label"),
      heading: t("services.medicalTelecom.heading"),
      body: t("services.medicalTelecom.body"),
      tags: [
        t("services.medicalTelecom.tag1"),
        t("services.medicalTelecom.tag2"),
        t("services.medicalTelecom.tag3"),
      ],
      cta: t("services.medicalTelecom.cta"),
      href: "/services/medical",
      accentClass: "bg-thai-gold",
      iconBgClass: "bg-brand-navy",
    },
    {
      icon: Package,
      label: t("services.tradeExport.label"),
      heading: t("services.tradeExport.heading"),
      body: t("services.tradeExport.body"),
      tags: [
        t("services.tradeExport.tag1"),
        t("services.tradeExport.tag2"),
        t("services.tradeExport.tag3"),
      ],
      cta: t("services.tradeExport.cta"),
      href: "/trade",
      accentClass: "bg-thai-gold",
      iconBgClass: "bg-brand-navy",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
            {t("services.pillars.heading")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("services.pillars.subheading")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <Pillar key={p.href} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
