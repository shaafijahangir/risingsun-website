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
import { useState, useEffect } from "react";
import { useI18n } from "@/i18n/context";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkCls = ({ isActive }: { isActive: boolean }) =>
    `nav-link-3d font-medium px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
      isActive
        ? "text-primary text-shadow-lg bg-white/10 shadow-inner-glow"
        : "text-foreground/80 hover:text-foreground hover:bg-white/5"
    }`;

  const anchorCls =
    "nav-link-3d text-foreground/80 hover:text-foreground transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/5 font-medium";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out glass-morphism shadow-3d-md ${
        isScrolled
          ? "backdrop-blur-md border-b border-white/20 shadow-float"
          : "border-transparent shadow-3d-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-18 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/risingsun-logo.png"
              alt="Rising Sun logo"
              className="h-8 lg:h-10 w-auto"
              loading="lazy"
            />
            <span className="sr-only">Home</span>
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

          <NavLink to="/packages" className={navLinkCls}>{t("common.packages")}</NavLink>
          <a href="#about" className={anchorCls}>{t("common.about")}</a>
          <a href="#testimonials" className={anchorCls}>{t("common.testimonials")}</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <LanguageSwitcher />
          <CtaButton asChild className="hidden md:flex ml-1 btn-3d hover-glow">
            <Link to="/services/medical">{t("common.bookCall")}</Link>
          </CtaButton>

          {/* Mobile hamburger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden ml-1 text-foreground/80 hover:text-foreground shadow-3d-sm hover:shadow-3d-md transition-all duration-300"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 glass-morphism shadow-3d-xl overflow-y-auto">
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
                <NavLink to="/packages" className={navLinkCls} onClick={() => setIsOpen(false)}>{t("common.packages")}</NavLink>
                <a href="#about" className={`${anchorCls} block`} onClick={() => setIsOpen(false)}>{t("common.about")}</a>
                <a href="#testimonials" className={`${anchorCls} block`} onClick={() => setIsOpen(false)}>{t("common.testimonials")}</a>

                <div className="mt-6 space-y-4 pt-4 border-t border-border">
                  <LanguageSwitcher />
                  <CtaButton asChild className="btn-3d hover-glow w-full">
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
