import React from "react";
import Header from "@/app/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorks from "@/components/HowItWorks";
import FaqSection from "@/components/FaqSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const Index = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <TrustStrip />
        <ErrorBoundary>
          <ServicesSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <TestimonialsSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <HowItWorks />
        </ErrorBoundary>
        <ErrorBoundary>
          <FaqSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <CallToActionSection />
        </ErrorBoundary>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Index;
