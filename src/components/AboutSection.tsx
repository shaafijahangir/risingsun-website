import React from "react";
import { Card } from "@/components/ui/card";
import { Award, Calendar, Users, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/context";
import salimPic from "@/assets/images/salim_pic.jpg";
import { CONTACT } from "@/lib/contact";

const StatsCard = ({
  icon: Icon,
  number,
  label,
}: {
  icon: React.ElementType;
  number: string;
  label: string;
}) => (
  <Card className="p-6 text-center bg-brand-offwhite shadow-lg border-t-4 border-t-thai-gold transition-transform hover:-translate-y-1 duration-300">
    <div className="flex justify-center mb-3">
      <div className="p-3 rounded-full bg-thai-gold/10">
        <Icon size={28} className="text-brand-navy" />
      </div>
    </div>
    <div className="text-3xl font-bold mb-1 text-brand-navy">{number}</div>
    <div className="text-gray-600">{label}</div>
  </Card>
);

const TimelineItem = ({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) => (
  <div className="relative pl-8 pb-8 border-l border-thai-gold last:border-0 last:pb-0">
    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-thai-gold"></div>
    <div className="bg-thai-gold/10 text-brand-navy px-3 py-1 rounded-full inline-block mb-2 text-sm font-medium">
      {year}
    </div>
    <h4 className="text-lg font-bold mb-1 text-brand-navy">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);


const AboutSection = () => {
  const { t } = useI18n();
  
  const timeline = [
    {
      year: "2006",
      title: t('about.timeline.2006.title'),
      description: t('about.timeline.2006.description')
    },
    {
      year: "2018",
      title: t('about.timeline.2018.title'),
      description: t('about.timeline.2018.description')
    },
  ];
  
  return (
    <>
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-thai-gold/10 text-brand-navy px-4 py-2 rounded-full mb-4">
                <Sun size={18} className="text-brand-navy" />
                <span className="font-medium">{t('about.badge')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-brand-navy">
                {t('about.title')}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.description1')}
              </p>
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
                  <h4 className="text-lg font-bold text-brand-navy">{t('about.founderName')}</h4>
                  <p className="text-thai-gold">{t('about.founderTitle')}</p>
                  <p className="text-sm text-gray-600 mt-1">"{t('about.founderQuote')}"</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t('about.description2')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatsCard icon={Sun} number="20+" label={t('about.stats.experience')} />
              <StatsCard icon={Users} number="10k+" label={t('about.stats.travelers')} />
              <StatsCard icon={Award} number="100%" label={t('about.stats.satisfaction')} />
              <StatsCard icon={Calendar} number="25+" label={t('about.stats.countries')} />
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="section-padding bg-brand-offwhite">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-navy">{t('about.journeyTitle')}</h2>
            <p className="text-gray-600 mt-2">{t('about.journeySubtitle')}</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-brand-navy hover:bg-brand-navy/90 text-white">
              <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Calendar className="mr-2" size={18} />
                {t('about.scheduleCall')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
