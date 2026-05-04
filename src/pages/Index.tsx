import React from "react";
import Header from "@/app/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import DestinationGrid from "@/components/DestinationGrid";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreview from "@/components/BlogPreview";
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
        <TrustStrip />
        <ErrorBoundary>
          <ServicesSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <DestinationGrid />
        </ErrorBoundary>
        <ErrorBoundary>
          <HowItWorks />
        </ErrorBoundary>
        <ErrorBoundary>
          <AboutSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <TestimonialsSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <BlogPreview />
        </ErrorBoundary>
        <ErrorBoundary>
          <TradeTeaser />
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
