import { NavLink, Link } from "react-router-dom";
import CtaButton from "@/components/CtaButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Plane, Hotel, Car } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useI18n } from "@/i18n/context";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    // Bypass React state — write data-compact directly so CSS transitions fire
    // in the same frame as the attribute change (no React re-render latency).
    //
    // Dead-zone approach: lastY is only updated when |delta| >= DEAD_ZONE.
    // This means sub-8px noise (trackpad micro-bounces, inertia twitches) never
    // changes direction or resets the reference point. Compact flips only when
    // the user has genuinely reversed direction by more than 8px from the last
    // significant scroll position.
    const TOP_THRESHOLD = 80;  // px — always full size above this
    const DEAD_ZONE     = 8;   // px — ignore movements smaller than this

    let rafId   = 0;
    let lastY   = window.scrollY;
    let lastDir: "up" | "down" | null = null;
    let compact = false;

    const applyCompact = (next: boolean) => {
      if (next === compact) return; // skip DOM write when nothing changes
      compact = next;
      headerRef.current?.setAttribute("data-compact", String(next));
    };

    const onScroll = () => {
      if (rafId) return; // one pending frame at a time
      rafId = requestAnimationFrame(() => {
        const y     = window.scrollY;
        const delta = y - lastY;

        if (y <= TOP_THRESHOLD) {
          // At the top — always full size, reset everything
          lastY   = y;
          lastDir = null;
          applyCompact(false);
          rafId = 0;
          return;
        }

        if (Math.abs(delta) < DEAD_ZONE) {
          // Sub-threshold movement — ignore, do NOT update lastY.
          // The next frame will still compare against the same lastY,
          // so accumulated micro-noise can never fake a direction change.
          rafId = 0;
          return;
        }

        const dir: "up" | "down" = delta > 0 ? "down" : "up";
        lastY = y; // update reference only on significant movement

        if (dir !== lastDir) {
          lastDir = dir;
          applyCompact(dir === "down");
        }

        rafId = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const navLinkCls = ({ isActive }: { isActive: boolean }) =>
    `font-medium px-3 py-2 transition-colors duration-200 whitespace-nowrap ${
      isActive
        ? "text-brand-navy font-semibold border-b-2 border-thai-gold"
        : "text-foreground/70 hover:text-brand-navy"
    }`;

  const anchorCls =
    "text-foreground/70 hover:text-brand-navy transition-colors duration-200 whitespace-nowrap px-3 py-2 font-medium";

  return (
    <header
      ref={headerRef}
      data-compact="false"
      // "group" lets children react to data-compact via group-data-[compact=true]:*
      // transition-shadow is composited (GPU, no layout) — shadow-md added when compact
      className="group sticky top-0 z-50 bg-brand-offwhite border-b border-border
        transition-shadow duration-[250ms] ease-out
        data-[compact=true]:shadow-md"
    >
      {/* height transitions via explicit [height] — not transition-all */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between
        h-20 group-data-[compact=true]:h-14
        transition-[height] duration-[250ms] ease-out">

        {/* Logo + Wordmark */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/risingsun-logo.png"
              alt="Rising Sun logo"
              className="w-auto h-10 group-data-[compact=true]:h-7
                transition-[height] duration-[250ms] ease-out"
              loading="lazy"
            />
            <span className="font-heading font-bold tracking-tight text-brand-navy
              text-xl group-data-[compact=true]:text-base
              transition-[font-size] duration-[250ms] ease-out">
              Rising Sun
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center justify-center gap-1 2xl:gap-2 flex-1 mx-4">
          <NavLink to="/" end className={navLinkCls}>
            {t("common.home")}
          </NavLink>

          {/* Services dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`${anchorCls} flex items-center gap-1 outline-none`}>
              {t("common.services")}
              <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[180px]">
              <DropdownMenuItem asChild>
                <Link to="/services/flights" className="flex items-center gap-2 cursor-pointer">
                  <Plane size={15} className="text-thai-gold" /> {t("common.flights")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/accommodation" className="flex items-center gap-2 cursor-pointer">
                  <Hotel size={15} className="text-thai-gold" /> {t("common.accommodation")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/cars" className="flex items-center gap-2 cursor-pointer">
                  <Car size={15} className="text-thai-gold" /> {t("common.carRental")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink to="/services/medical" className={navLinkCls}>
            {t("common.medicalTravel")}
          </NavLink>

          <NavLink to="/trade" className={navLinkCls}>
            {t("common.trade")}
          </NavLink>

          <NavLink to="/packages" className={navLinkCls}>
            {t("common.packages")}
          </NavLink>

          <NavLink to="/blog" className={navLinkCls}>
            {t("common.blogGuides")}
          </NavLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <LanguageSwitcher />
          <CtaButton asChild className="hidden md:flex ml-1 bg-thai-gold text-white hover:bg-thai-gold/90">
            <Link to="/services/medical">{t("common.bookCall")}</Link>
          </CtaButton>

          {/* Mobile hamburger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden ml-1 text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-brand-offwhite overflow-y-auto">
              <div className="flex flex-col gap-1 mt-6">
                <NavLink to="/" end className={navLinkCls} onClick={() => setIsOpen(false)}>
                  {t("common.home")}
                </NavLink>

                {/* Mobile: Services group */}
                <div className="pt-3 pb-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                    {t("common.services")}
                  </p>
                  <div className="flex flex-col gap-1 pl-2 border-l-2 border-thai-gold/30 ml-3">
                    <NavLink to="/services/flights" className={navLinkCls} onClick={() => setIsOpen(false)}>
                      <span className="flex items-center gap-2">
                        <Plane size={14} className="text-thai-gold" /> {t("common.flights")}
                      </span>
                    </NavLink>
                    <NavLink to="/services/accommodation" className={navLinkCls} onClick={() => setIsOpen(false)}>
                      <span className="flex items-center gap-2">
                        <Hotel size={14} className="text-thai-gold" /> {t("common.accommodation")}
                      </span>
                    </NavLink>
                    <NavLink to="/services/cars" className={navLinkCls} onClick={() => setIsOpen(false)}>
                      <span className="flex items-center gap-2">
                        <Car size={14} className="text-thai-gold" /> {t("common.carRental")}
                      </span>
                    </NavLink>
                  </div>
                </div>

                <NavLink to="/services/medical" className={navLinkCls} onClick={() => setIsOpen(false)}>
                  {t("common.medicalTravel")}
                </NavLink>
                <NavLink to="/trade" className={navLinkCls} onClick={() => setIsOpen(false)}>
                  {t("common.trade")}
                </NavLink>
                <NavLink to="/packages" className={navLinkCls} onClick={() => setIsOpen(false)}>
                  {t("common.packages")}
                </NavLink>
                <NavLink to="/blog" className={navLinkCls} onClick={() => setIsOpen(false)}>
                  {t("common.blogGuides")}
                </NavLink>

                <div className="mt-6 space-y-4 pt-4 border-t border-border">
                  <LanguageSwitcher />
                  <CtaButton asChild className="bg-thai-gold text-white hover:bg-thai-gold/90 w-full">
                    <Link to="/services/medical" onClick={() => setIsOpen(false)}>
                      {t("common.bookCall")}
                    </Link>
                  </CtaButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
