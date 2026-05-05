import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import salimPic from "@/assets/images/salim_pic.jpg";

const CallToActionSection = () => {
  return (
    <section id="book-call" className="section-padding bg-brand-offwhite">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <img
            src={salimPic}
            alt="Md Salim Jahangir"
            className="w-40 h-40 rounded-full border-4 border-thai-gold object-cover shadow-xl shrink-0"
            loading="lazy"
          />

          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-4">
              Book 15 minutes with Salim
            </h2>
            <p className="text-muted-foreground text-lg mb-7 max-w-lg">
              Tell him where you want to go and when. He'll tell you exactly what's
              possible and handle everything from there.
            </p>
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start mb-8 text-muted-foreground text-sm">
              <span className="flex items-center gap-2"><Clock size={14} /> Free, 15 minutes</span>
              <span className="flex items-center gap-2"><Calendar size={14} /> Flexible scheduling</span>
              <span className="flex items-center gap-2"><Video size={14} /> Video or phone</span>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-thai-gold hover:bg-thai-gold/90 text-white px-10 h-12"
            >
              <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2" size={18} />
                Schedule Your Free Call
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              Salim typically responds within a few hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
