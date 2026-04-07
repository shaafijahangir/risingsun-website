
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT } from "@/lib/contact";
import { useI18n } from "@/i18n/context";

const CallToActionSection = () => {
  const { t } = useI18n();

  return (
    <section id="book-call" className="section-padding bg-brand-offwhite">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy">
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-2 text-thai-gold" size={20} />
                <span>{t("cta.minutes")}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-2 text-thai-gold" size={20} />
                <span>{t("cta.scheduling")}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <PhoneCall className="mr-2 text-thai-gold" size={20} />
                <span>{t("cta.videoPhone")}</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <Button asChild size="lg" className="bg-brand-navy text-white hover:bg-brand-navy/90">
                <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2" size={18} />
                  {t("cta.scheduleButton")}
                </a>
              </Button>
            </div>
          </div>
          <div>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">{t("cta.consultTitle")}</h3>
                <p className="text-gray-600 mb-6">
                  {t("cta.consultSubtitle")}
                </p>
                <ul className="space-y-3 mb-8">
                  {(["item1", "item2", "item3", "item4"] as const).map((key, i) => (
                    <li key={key} className="flex items-start">
                      <div className="bg-thai-gold/10 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-thai-gold text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center text-xs">
                          {i + 1}
                        </div>
                      </div>
                      <span>{t(`cta.${key}`)}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-thai-gold hover:bg-thai-gold/90 text-lg">
                  <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2" size={18} />
                    {t("cta.bookButton")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
