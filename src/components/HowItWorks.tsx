import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";
import { useI18n } from "@/i18n/context";

const HowItWorks = () => {
  const { t } = useI18n();

  const steps = [
    { number: "1", title: t("howItWorks.step1Title"), body: t("howItWorks.step1Body") },
    { number: "2", title: t("howItWorks.step2Title"), body: t("howItWorks.step2Body") },
    { number: "3", title: t("howItWorks.step3Title"), body: t("howItWorks.step3Body") },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            {t("howItWorks.heading")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("howItWorks.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          {steps.map(({ number, title, body }) => (
            <div key={number} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-thai-gold text-white font-bold text-2xl flex items-center justify-center mb-5 shadow-md">
                {number}
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-navy mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-thai-gold hover:bg-thai-gold/90 text-white shadow-md">
            <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2" size={18} />
              {t("howItWorks.cta")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
