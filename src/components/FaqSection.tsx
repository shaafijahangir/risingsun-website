import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { waLink } from "@/lib/contact";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    q: "Is your service free to use?",
    a: "There is a 200 baht service charge. Beyond that, you pay suppliers directly. Rising Sun does not add markups to hotels, flights, or transfers.",
  },
  {
    q: "What is the difference from booking on Booking.com or Skyscanner?",
    a: "Those platforms show you options and leave you to figure out the rest. Salim knows which hotels actually deliver on their promises, which routes are worth the price, and how to avoid the mistakes most first-time visitors make. He handles everything after the first message. You coordinate nothing.",
  },
  {
    q: "Can you arrange my flights, hotels, and tours together?",
    a: "Yes. Most clients hand over the full trip. Salim books flights, selects and reserves accommodation, arranges airport transfers, and lines up activities. You receive a single itinerary and pay each supplier directly. There is no markup.",
  },
  {
    q: "Do I need a visa to visit Thailand?",
    a: "Most nationalities, including the UK, USA, Australia, and most of Europe, receive a free 60-day visa on arrival. Citizens of Bangladesh, Pakistan, and India currently require a tourist visa in advance. Salim will confirm the requirement for your passport when you get in touch.",
  },
  {
    q: "When is the best time to visit Thailand?",
    a: "November to March is peak season, with dry weather across the country. April and May are very hot. June to October is the rainy season, which is quieter and cheaper but can bring heavy afternoon showers, especially in the south. Salim will recommend timing based on where you want to go.",
  },
  {
    q: "How much does a trip to Thailand cost?",
    a: "Budget travelers spend around $40-60 per day. Mid-range trips with comfortable hotels and some private tours run $100-180 per day. Luxury is $300 and up. Flights from Europe, the UK, or South Asia are typically $400-900 return depending on season. Salim can build an itinerary to any budget.",
  },
  {
    q: "Can you help with medical treatment, not just tourism?",
    a: "Yes. Medical tourism is one of Rising Sun's core services. Salim works with JCI-accredited hospitals in Bangkok, coordinates specialist consultations, and arranges travel and accommodation around the treatment schedule. All at no additional cost to you.",
  },
  {
    q: "I'm not ready to book yet. Can I just ask questions?",
    a: "That is exactly what most people do first. Send a WhatsApp message with your question and Salim will reply within a few hours. No commitment, no form to fill in.",
    whatsappCta: true,
  },
  {
    q: "How do I pay, and is it safe?",
    a: "You pay the hotels, airlines, and tour operators directly. Rising Sun does not hold your money. Each payment goes to the provider, which means your funds are protected and there is no single point of risk. Salim provides a full breakdown of what you will pay and to whom before you commit to anything.",
  },
  {
    q: "What happens after I send a message?",
    a: "Salim personally reads every message and responds within a few hours. He will ask about your dates, group size, and what kind of trip you have in mind. Within 24-48 hours he will send you a proposed outline. If it looks right, he moves into booking. If not, he adjusts until it does.",
  },
];

const FaqItem = ({ q, a, whatsappCta }: { q: string; a: string; whatsappCta?: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className={`font-semibold text-base transition-colors duration-200 ${
            open
              ? "text-thai-gold"
              : "text-brand-navy group-hover:text-thai-gold"
          }`}
        >
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-thai-gold transition-transform duration-300 ease-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/*
        Grid trick: animates grid-template-rows from 0fr → 1fr,
        expanding to the content's exact natural height.
        The inner div's overflow:hidden is required for 0fr to collapse to zero.
      */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`pb-5 pr-8 text-muted-foreground text-sm leading-relaxed transition-opacity duration-200 ${
              open ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            {a}
            {whatsappCta && (
              <a
                href={waLink(
                  "Hi Salim, I found Rising Sun Travel and have a few questions before I'm ready to book a call."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 font-semibold text-[#25D366] hover:underline"
              >
                Message Salim on WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-brand-offwhite">
      <div className="container-custom max-w-3xl">
        <div className={`text-center mb-10 anim-fade-up ${isVisible ? "in-view" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Answers to the questions most people have before getting in touch.
          </p>
        </div>
        <div
          className={`bg-white rounded-2xl shadow-card px-6 md:px-10 anim-fade-up ${isVisible ? "in-view" : ""}`}
          style={{ transitionDelay: "120ms" }}
        >
          {faqs.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
