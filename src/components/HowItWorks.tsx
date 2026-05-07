import { useI18n } from "@/i18n/context";
import { useInView } from "@/hooks/useInView";

const HowItWorks = () => {
  const { t } = useI18n();
  const { ref, isVisible } = useInView<HTMLElement>();

  const steps = [
    { number: "1", title: t("howItWorks.step1Title"), body: t("howItWorks.step1Body") },
    { number: "2", title: t("howItWorks.step2Title"), body: t("howItWorks.step2Body") },
    { number: "3", title: t("howItWorks.step3Title"), body: t("howItWorks.step3Body") },
  ];

  return (
    <section ref={ref} className="section-padding bg-brand-offwhite">
      <div className="container-custom">
        <div className={`text-center mb-12 anim-fade-up ${isVisible ? "in-view" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            {t("howItWorks.heading")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("howItWorks.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {steps.map(({ number, title, body }, i) => (
            <div key={number} className="flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 rounded-full bg-thai-gold text-white font-bold text-2xl flex items-center justify-center mb-5 shadow-lift anim-scale-pop ${isVisible ? "in-view" : ""}`}
                style={{ transitionDelay: `${100 + i * 160}ms` }}
              >
                {number}
              </div>
              <h3
                className={`text-lg font-bold font-heading text-brand-navy mb-2 anim-fade-up ${isVisible ? "in-view" : ""}`}
                style={{ transitionDelay: `${200 + i * 160}ms` }}
              >
                {title}
              </h3>
              <p
                className={`text-muted-foreground text-sm leading-relaxed anim-fade-up ${isVisible ? "in-view" : ""}`}
                style={{ transitionDelay: `${280 + i * 160}ms` }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
