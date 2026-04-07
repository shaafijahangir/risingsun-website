import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top of the page on every route change.
 * If the new URL contains a hash (e.g. /#about), skips the scroll so
 * the browser can handle native anchor navigation instead.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
