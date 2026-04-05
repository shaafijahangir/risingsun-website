import React from "react";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const TradeTeaser = () => (
  <section className="section-padding bg-thai-blue">
    <div className="container-custom">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full mb-4">
            <Package size={16} className="text-thai-gold" />
            <span className="text-sm font-medium">Trade & Export</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
            Thai Business & Trade Solutions
          </h2>
          <p className="text-white/80 max-w-lg">
            Sourcing, export, and import services for businesses worldwide.
            We connect you with verified Thai suppliers and handle the logistics.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-thai-gold hover:bg-thai-gold/90 text-white shrink-0 btn-3d"
        >
          <Link to="/trade">Explore Trade Services</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default TradeTeaser;
