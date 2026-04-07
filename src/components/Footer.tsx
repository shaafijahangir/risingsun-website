
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { useI18n } from "@/i18n/context";

const Footer = () => {
  const { t } = useI18n();

  const tagline = t("footer.tagline")
    .replace("{years}", String(CONTACT.yearsExperience))
    .replace("{founder}", CONTACT.founderName);

  return (
    <footer className="bg-brand-navy text-white/90 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold text-thai-gold mb-4">
              Rising Sun
            </h3>
            <p className="text-white/60 mb-4">{tagline}</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/risingsunthailand" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-thai-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-thai-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-thai-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white/90 mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li><Link to="/#services" className="text-white/60 hover:text-thai-gold transition-colors">{t("footer.ourServices")}</Link></li>
              <li><Link to="/packages" className="text-white/60 hover:text-thai-gold transition-colors">{t("footer.travelPackages")}</Link></li>
              <li><Link to="/services/medical" className="text-white/60 hover:text-thai-gold transition-colors">{t("footer.medicalTourism")}</Link></li>
              <li><Link to="/trade" className="text-white/60 hover:text-thai-gold transition-colors">{t("footer.tradeExport")}</Link></li>
              <li><Link to="/#about" className="text-white/60 hover:text-thai-gold transition-colors">{t("footer.aboutUs")}</Link></li>
              <li><Link to="/#book-call" className="text-white/60 hover:text-thai-gold transition-colors">{t("footer.contactUs")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white/90 mb-4">{t("footer.topDestinations")}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-thai-gold transition-colors">Bangkok</a></li>
              <li><a href="#" className="text-white/60 hover:text-thai-gold transition-colors">Chiang Mai</a></li>
              <li><a href="#" className="text-white/60 hover:text-thai-gold transition-colors">Phuket</a></li>
              <li><a href="#" className="text-white/60 hover:text-thai-gold transition-colors">Krabi</a></li>
              <li><a href="#" className="text-white/60 hover:text-thai-gold transition-colors">Koh Samui</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white/90 mb-4">{t("footer.contactUs")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-thai-gold shrink-0" />
                <a href={`tel:${CONTACT.phone}`} className="text-white/60 hover:text-thai-gold transition-colors">{CONTACT.phone}</a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-thai-gold shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-white/60 hover:text-thai-gold transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-thai-gold shrink-0" />
                <span className="text-white/60">{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Rising Sun. {t("footer.rights")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/50 hover:text-thai-gold text-sm transition-colors">{t("footer.privacy")}</a>
              <a href="#" className="text-white/50 hover:text-thai-gold text-sm transition-colors">{t("footer.terms")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
