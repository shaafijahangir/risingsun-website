import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import { I18nProvider } from "@/i18n/context";
import Index from "./pages/Index";
import FlightsPage from "./pages/services/FlightsPage";
import AccommodationPage from "./pages/services/AccommodationPage";
import CarsPage from "./pages/services/CarsPage";
import MedicalPage from "./pages/services/MedicalPage";
import TradePage from "./pages/TradePage";
import PackagesPage from "./pages/PackagesPage";
import PackageDetailPage from "./pages/PackageDetailPage";
import NotFound from "./pages/NotFound";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import Analytics from "./components/Analytics";

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <I18nProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Analytics />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/flights" element={<FlightsPage />} />
            <Route path="/services/accommodation" element={<AccommodationPage />} />
            <Route path="/services/cars" element={<CarsPage />} />
            <Route path="/services/medical" element={<MedicalPage />} />
            <Route path="/trade" element={<TradePage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/packages/:slug" element={<PackageDetailPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            {/* Backward-compat redirect */}
            <Route path="/medical-consultation" element={<Navigate to="/services/medical" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
