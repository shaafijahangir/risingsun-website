import React from "react";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { CONTACT, waLink } from "@/lib/contact";
import { MessageCircle, Mail, CalendarDays, MapPin, Clock } from "lucide-react";

const ContactPage = () => (
  <div className="min-h-screen bg-white">
    <Header />

    {/* Header */}
    <section className="section-padding bg-brand-navy text-white">
      <div className="container-custom max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Get in touch</h1>
        <p className="text-white/80 text-lg">
          Every message goes directly to Salim. He responds within a few hours.
        </p>
      </div>
    </section>

    {/* Contact options */}
    <section className="section-padding bg-brand-offwhite">
      <div className="container-custom max-w-3xl space-y-5">

        {/* WhatsApp — primary */}
        <a
          href={waLink("Hi Salim, I found Rising Sun Travel and I'd like to get in touch.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 p-7 bg-white rounded-2xl shadow-md border border-border hover:border-[#25D366]/40 hover:shadow-lg transition-all group"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors"
            style={{ backgroundColor: "#25D366" }}>
            <MessageCircle size={26} color="white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-brand-navy text-lg">WhatsApp</p>
            <p className="text-muted-foreground text-sm mt-0.5">
              The fastest way to reach Salim. Send a message any time.
            </p>
            <p className="text-[#25D366] font-semibold text-sm mt-2 group-hover:underline">
              {CONTACT.phone}
            </p>
          </div>
          <div className="text-muted-foreground/40 group-hover:text-[#25D366] transition-colors shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </a>

        {/* Email */}
        <a
          href={`mailto:${CONTACT.email}?subject=Inquiry from Rising Sun website`}
          className="flex items-center gap-6 p-7 bg-white rounded-2xl shadow-md border border-border hover:border-brand-navy/30 hover:shadow-lg transition-all group"
        >
          <div className="w-14 h-14 rounded-2xl bg-brand-navy/10 flex items-center justify-center shrink-0">
            <Mail size={24} className="text-brand-navy" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-brand-navy text-lg">Email</p>
            <p className="text-muted-foreground text-sm mt-0.5">
              Prefer to write it all out? Send an email and expect a reply within 24 hours.
            </p>
            <p className="text-brand-navy font-semibold text-sm mt-2 group-hover:underline">
              {CONTACT.email}
            </p>
          </div>
          <div className="text-muted-foreground/40 group-hover:text-brand-navy transition-colors shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </a>

        {/* Calendly — soft option */}
        <a
          href={CONTACT.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 p-7 bg-white rounded-2xl shadow-md border border-border hover:border-thai-gold/40 hover:shadow-lg transition-all group"
        >
          <div className="w-14 h-14 rounded-2xl bg-thai-gold/10 flex items-center justify-center shrink-0">
            <CalendarDays size={24} className="text-thai-gold" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-brand-navy text-lg">Book a 15-minute call</p>
            <p className="text-muted-foreground text-sm mt-0.5">
              Want to talk it through? Pick a time and Salim will call you.
            </p>
            <p className="text-thai-gold font-semibold text-sm mt-2 group-hover:underline">
              Schedule via Calendly
            </p>
          </div>
          <div className="text-muted-foreground/40 group-hover:text-thai-gold transition-colors shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </a>

      </div>
    </section>

    {/* Details strip */}
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-thai-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-brand-navy text-sm mb-1">Location</p>
              <p className="text-muted-foreground text-sm">{CONTACT.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} className="text-thai-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-brand-navy text-sm mb-1">Response time</p>
              <p className="text-muted-foreground text-sm">WhatsApp: within hours. Email: within 24 hours.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MessageCircle size={18} className="text-thai-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-brand-navy text-sm mb-1">Languages</p>
              <p className="text-muted-foreground text-sm">English, Bengali. Basic Thai.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ContactPage;
