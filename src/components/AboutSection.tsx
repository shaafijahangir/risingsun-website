import React from "react";
import { Card } from "@/components/ui/card";
import { Award, Calendar, Users, Sun, LucideIcon } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { useCountUp } from "@/hooks/useCountUp";
import salimPic from "@/assets/images/salim_pic.jpg";

interface StatsCardProps {
  icon: LucideIcon;
  end: number;
  display: (n: number) => string;
  label: string;
}

const StatsCard = ({ icon: Icon, end, display, label }: StatsCardProps) => {
  const { ref, count } = useCountUp<HTMLDivElement>(end);
  return (
    <Card className="p-6 text-center bg-brand-offwhite shadow-lg border-t-4 border-t-thai-gold transition-transform hover:-translate-y-1 duration-300">
      <div className="flex justify-center mb-3">
        <div className="p-3 rounded-full bg-thai-gold/10">
          <Icon size={28} className="text-brand-navy" />
        </div>
      </div>
      <div ref={ref} className="text-3xl font-bold mb-1 text-brand-navy">{display(count)}</div>
      <div className="text-gray-600">{label}</div>
    </Card>
  );
};

const AboutSection = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-thai-gold/10 text-brand-navy px-4 py-2 rounded-full mb-4">
              <Sun size={18} className="text-brand-navy" />
              <span className="font-medium">{t("about.badge")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-brand-navy">
              {t("about.title")}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{t("about.description1")}</p>
            <div className="flex items-center mb-6">
              <div className="mr-6">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={salimPic}
                    alt="Md Salim Jahangir, Managing Director"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-navy">{t("about.founderName")}</h4>
                <p className="text-thai-gold">{t("about.founderTitle")}</p>
                <p className="text-sm text-gray-600 mt-1">"{t("about.founderQuote")}"</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{t("about.description2")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatsCard icon={Sun}      end={20}  display={(n) => `${n}+`}  label={t("about.stats.experience")} />
            <StatsCard icon={Users}    end={10}  display={(n) => `${n}k+`} label={t("about.stats.travelers")} />
            <StatsCard icon={Award}    end={100} display={(n) => `${n}%`}  label={t("about.stats.satisfaction")} />
            <StatsCard icon={Calendar} end={25}  display={(n) => `${n}+`}  label={t("about.stats.countries")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
