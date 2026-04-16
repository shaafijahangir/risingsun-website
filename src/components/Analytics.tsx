import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-XXXXXXXXXX"; // replace with your GA4 Measurement ID

const Analytics = () => {
  const location = useLocation();
  useEffect(() => {
    if (typeof gtag === "function") {
      gtag("config", GA_ID, { page_path: location.pathname });
    }
  }, [location.pathname]);
  return null;
};

export default Analytics;
