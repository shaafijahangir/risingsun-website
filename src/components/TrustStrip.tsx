import { Award, Users, Globe, MapPin, LucideIcon } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { useI18n } from "@/i18n/context";
import { useCountUp } from "@/hooks/useCountUp";

interface StatConfig {
  icon: LucideIcon;
  end: number;
  display: (n: number) => string;
  label: string;
}

const TrustStat = ({ icon: Icon, end, display, label }: StatConfig) => {
  const { ref, count } = useCountUp<HTMLSpanElement>(end);
  return (
    <div className="flex flex-col items-center text-center gap-1">
      <Icon size={22} className="text-thai-gold mb-1" />
      <span ref={ref} className="text-2xl font-bold text-white">{display(count)}</span>
      <span className="text-white/70 text-sm">{label}</span>
    </div>
  );
};

const TrustStrip = () => {
  const { t } = useI18n();

  const stats: StatConfig[] = [
    { icon: Award,  end: CONTACT.yearsExperience, display: (n) => `${n}+`,                      label: t("trustStrip.years") },
    { icon: Users,  end: 10000,                   display: (n) => `${n.toLocaleString()}+`,      label: t("trustStrip.travelers") },
    { icon: Globe,  end: 25,                       display: (n) => `${n}+`,                      label: t("trustStrip.countries") },
    { icon: MapPin, end: 0,                        display: () => "Bangkok",                     label: t("trustStrip.based") },
  ];

  return (
    <div className="bg-brand-navy py-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <TrustStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
