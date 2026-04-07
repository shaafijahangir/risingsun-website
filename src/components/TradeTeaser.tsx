import React from "react";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/context";

const TradeTeaser = () => {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-brand-navy">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full mb-4">
              <Package size={16} className="text-thai-gold" />
              <span className="text-sm font-medium">{t("common.trade")}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
              {t("trade.teaser")}
            </h2>
            <p className="text-white/80 max-w-lg">
              {t("trade.teaserDesc")}
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-thai-gold hover:bg-thai-gold/90 text-white shrink-0"
          >
            <Link to="/trade">{t("services.tradeExport.cta")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TradeTeaser;
