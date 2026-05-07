import React from "react";
import { Link } from "react-router-dom";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT, waLink } from "@/lib/contact";
import {
  MapPin, Clock, Users, Star, Heart, Shield, Globe, MessageCircle,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "No hidden costs",
    desc: "You pay suppliers directly. Rising Sun never holds your money or adds a markup.",
  },
  {
    icon: MessageCircle,
    title: "One point of contact",
    desc: "Salim personally handles every inquiry from first message to final day of your trip.",
  },
  {
    icon: Heart,
    title: "Genuinely local",
    desc: "Based in Bangkok for over 20 years. Every recommendation comes from real, lived experience.",
  },
  {
    icon: Globe,
    title: "Any trip, any scale",
    desc: "From a single airport transfer to a three-week itinerary. From a solo traveler to a corporate group.",
  },
];

const stats = [
  { icon: Clock, value: "20+", label: "Years in Bangkok" },
  { icon: Users, value: "1,000+", label: "Happy Travelers" },
  { icon: Star, value: "4.9", label: "Google Rating" },
  { icon: MapPin, value: "3", label: "Core Services" },
];

const AboutPage = () => (
  <div className="min-h-screen bg-white">
    <Header />

    {/* Hero */}
    <section className="section-padding bg-brand-navy text-white">
      <div className="container-custom max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
          <MapPin size={16} className="text-thai-gold" />
          <span className="text-sm font-medium">Bangkok, Thailand</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-5 leading-tight">
          Thailand, handled by someone<br className="hidden md:block" /> who actually lives here.
        </h1>
        <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
          Rising Sun Travel was built on a simple idea: travelers deserve more than a booking engine.
          They deserve someone who knows the country, knows the suppliers, and picks up the phone.
        </p>
      </div>
    </section>

    {/* Stats strip */}
    <section className="bg-thai-gold/10 border-y border-thai-gold/20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-thai-gold/20">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center py-8 px-4 text-center">
              <Icon size={20} className="text-thai-gold mb-2" />
              <span className="text-2xl font-bold text-brand-navy font-heading">{value}</span>
              <span className="text-sm text-muted-foreground mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About Salim */}
    <section className="section-padding bg-white">
      <div className="container-custom max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo placeholder — swap with real Salim photo */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl bg-brand-navy/10 overflow-hidden">
              <img
                src="/salim-photo.jpg"
                alt="Md Salim Jahangir, founder of Rising Sun Travel"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-navy/30 p-8 text-center">
                <Users size={48} className="mb-3" />
                <p className="text-sm">Photo of Salim coming soon</p>
              </div>
            </div>
            {/* Floating trust card */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-4 border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-thai-gold/15 flex items-center justify-center">
                  <Star size={18} className="text-thai-gold" />
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm">4.9 / 5</p>
                  <p className="text-xs text-muted-foreground">Google Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-5 text-[17px] leading-relaxed text-foreground/80">
            <h2 className="text-3xl font-bold font-heading text-brand-navy">
              Meet Salim
            </h2>
            <p>
              Md Salim Jahangir arrived in Bangkok over 20 years ago. He has spent that time
              building relationships with hotels, hospitals, airlines, and local operators that
              most visitors will never know exist.
            </p>
            <p>
              Rising Sun Travel started as word-of-mouth. Friends of friends needed flights.
              Then accommodation. Then someone's father needed a hospital in Bangkok and didn't
              know where to start. Salim handled it. Then he kept handling it — for more and more
              people, from more and more countries.
            </p>
            <p>
              Today Rising Sun covers three areas: travel and tourism across Thailand, medical
              tourism at Bangkok's leading hospitals, and trade and export services connecting
              international buyers with verified Thai suppliers.
            </p>
            <p>
              Every inquiry still goes directly to Salim. There is no call centre. No automated
              response. When you send a message, he reads it and replies.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-thai-gold hover:bg-thai-gold/90 text-white font-semibold"
              >
                <a
                  href={waLink("Hi Salim, I'd like to know more about Rising Sun Travel and how you can help me.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message Salim on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">See all contact options</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="section-padding bg-brand-offwhite">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-3">
            What Rising Sun Does
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three distinct services, handled by one person with deep experience in all three.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Travel & Tourism",
              desc: "Flights, accommodation, transfers, tours, and full itineraries across Thailand. Salim knows every region and curates trips that match your pace, budget, and interests.",
              link: "/services/flights",
              linkLabel: "Explore travel services",
            },
            {
              title: "Medical Tourism",
              desc: "Hospital appointments, specialist consultations, and full coordination of travel and accommodation around treatment. Working with JCI-accredited hospitals in Bangkok.",
              link: "/services/medical",
              linkLabel: "Explore medical services",
            },
            {
              title: "Trade & Export",
              desc: "Connecting international buyers with verified Thai suppliers across food, textiles, wellness products, ceramics, and more. Import and export handled end to end.",
              link: "/services/trade",
              linkLabel: "Explore trade services",
            },
          ].map(({ title, desc, link, linkLabel }) => (
            <Card key={title} className="border-0 shadow-md bg-white rounded-2xl">
              <CardContent className="p-7">
                <div className="w-10 h-1 bg-thai-gold rounded-full mb-5" />
                <h3 className="text-lg font-bold text-brand-navy mb-3 font-heading">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>
                <Link
                  to={link}
                  className="text-sm font-semibold text-brand-navy hover:text-thai-gold transition-colors"
                >
                  {linkLabel} →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-white">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-3">
            How We Work
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-brand-offwhite/50">
              <div className="p-3 rounded-xl bg-thai-gold/10 shrink-0">
                <Icon size={20} className="text-brand-navy" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-brand-navy text-white">
      <div className="container-custom max-w-2xl text-center">
        <h2 className="text-3xl font-bold font-heading mb-4">
          Ready to plan your trip?
        </h2>
        <p className="text-white/80 mb-8">
          Send Salim a message. No forms, no waiting rooms. Just a direct reply from the person who will handle your trip.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-thai-gold hover:bg-thai-gold/90 text-white font-semibold"
          >
            <a
              href={waLink("Hi Salim, I found your About page and I'd like to start planning a trip to Thailand.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
            <Link to="/contact">View all contact options</Link>
          </Button>
        </div>
        <p className="text-white/50 text-sm mt-6">{CONTACT.address}</p>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutPage;
