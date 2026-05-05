import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { waLink } from "@/lib/contact";

const faqs = [
  {
    q: "Is your service free to use?",
    a: "Yes. There is no fee to contact Salim, ask questions, or get a quote. Rising Sun earns from the travel suppliers when a booking is confirmed. You pay the same or less than booking directly.",
  },
  {
    q: "What's the difference from booking on Booking.com or Skyscanner?",
    a: "Those platforms show you options and leave you to figure out the rest. Salim knows which hotels actually deliver, which routes are worth the price, and how to avoid the common mistakes first-time visitors make. He handles everything after the first call — you don't need to coordinate anything yourself.",
  },
  {
    q: "Can you help with medical treatment, not just tourism?",
    a: "Yes. Medical tourism is one of Rising Sun's core services. Salim connects patients with JCI-accredited hospitals in Bangkok, coordinates specialist consultations, and arranges travel and accommodation around the treatment schedule.",
  },
  {
    q: "I'm not ready to call yet. Can I just send a message?",
    a: "Absolutely. WhatsApp is the easiest way to start — just send a message and Salim will reply within a few hours. No commitment, no form to fill in.",
    whatsappCta: true,
  },
  {
    q: "What happens after I book the free call?",
    a: "Salim will ask about your dates, preferences, and budget. By the end of the call you will have a clear picture of what's possible and a rough outline of your trip. If you want to proceed, he will send a detailed proposal. No pressure to decide on the call.",
  },
];

const FaqItem = ({ q, a, whatsappCta }: { q: string; a: string; whatsappCta?: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-brand-navy text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-thai-gold transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-muted-foreground text-sm leading-relaxed">
          {a}
          {whatsappCta && (
            <a
              href={waLink("Hi Salim, I found Rising Sun Travel and have a few questions before I'm ready to book a call.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 font-semibold text-[#25D366] hover:underline"
            >
              Message Salim on WhatsApp
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const FaqSection = () => (
  <section className="section-padding bg-white">
    <div className="container-custom max-w-3xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground">
          Answers to the questions most people have before getting in touch.
        </p>
      </div>
      <div className="bg-brand-offwhite rounded-2xl px-6 md:px-10">
        {faqs.map((faq) => (
          <FaqItem key={faq.q} {...faq} />
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
