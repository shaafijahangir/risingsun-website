import React from "react";
import Header from "@/app/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import MedicalTourismSection from "@/components/MedicalTourismSection";
import PackagesSection from "@/components/PackagesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TradeTeaser from "@/components/TradeTeaser";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const Index = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <ErrorBoundary>
          <ServicesSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <MedicalTourismSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <PackagesSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <AboutSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <TestimonialsSection />
        </ErrorBoundary>
        <TradeTeaser />
        <ErrorBoundary>
          <CallToActionSection />
        </ErrorBoundary>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Index;
