import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import salimPic from "@/assets/images/salim_pic.jpg";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1920&auto=format&fit=crop";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ken Burns slow zoom-out on background image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Left-heavy gradient so text is readable without killing the image on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="container-custom relative z-10 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="hero-el hero-el-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full mb-7 text-sm font-medium">
            Bangkok-based since 2006
          </div>

          {/* Headline */}
          <h1 className="hero-el hero-el-2 text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.05]">
            Thailand,<br />
            <span className="text-thai-gold">done properly.</span>
          </h1>

          {/* Subtext */}
          <p className="hero-el hero-el-3 text-white/85 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Everything handled personally by a Bangkok local with 20 years on the ground.
            Flights, hotels, experiences, medical care. One call to get started.
          </p>

          {/* Founder trust signal */}
          <div className="hero-el hero-el-4 flex items-center gap-3 mb-10">
            <img
              src={salimPic}
              alt="Md Salim Jahangir, Founder"
              className="w-12 h-12 rounded-full border-2 border-thai-gold object-cover shrink-0 shadow-glow-gold"
              loading="eager"
            />
            <div>
              <p className="text-white font-semibold text-sm leading-tight">Md Salim Jahangir</p>
              <p className="text-white/55 text-xs">Founder & Managing Director · Bangkok</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-el hero-el-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-thai-gold hover:bg-thai-gold/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-base px-8 h-12"
            >
              <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2" size={18} />
                Book a Free 15-Minute Call
              </a>
            </Button>
            <Link
              to="/packages"
              className="text-white/75 hover:text-white text-sm font-medium hover:underline underline-offset-4 transition-colors"
            >
              Or browse packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
