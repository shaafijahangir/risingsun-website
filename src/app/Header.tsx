import { NavLink, Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Plane, Hotel, Car, Stethoscope, Package } from "lucide-react";
import { waLink } from "@/lib/contact";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useMobileNav } from "@/hooks/useMobileNav";

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Header = () => {
  const { scrolled, compact } = useScrollDirection();
  const { isOpen, toggle, close } = useMobileNav();
  const location = useLocation();
  const effectiveCompact = compact && !isOpen;

  const navLinkCls = ({ isActive }: { isActive: boolean }) =>
    `font-medium px-3 py-2 text-[0.9375rem] transition-colors duration-200 whitespace-nowrap ${
      isActive
        ? "text-brand-navy font-semibold border-b-2 border-thai-gold"
        : "text-foreground/70 hover:text-brand-navy"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-brand-offwhite transition-[height,border-color] duration-[250ms] ease-out ${
        effectiveCompact ? "h-14" : "h-20"
      } ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      } flex items-center`}
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0" onClick={close}>
          <img
            src="/risingsun-logo.png"
            alt="Rising Sun logo"
            className={`w-auto transition-[height] duration-[250ms] ease-out ${
              effectiveCompact ? "h-7" : "h-10"
            }`}
            loading="lazy"
          />
          <span className={`font-heading font-bold tracking-tight text-brand-navy transition-[font-size] duration-[250ms] ease-out ${
            effectiveCompact ? "text-base" : "text-xl"
          }`}>
            Rising Sun
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-4">
          <NavLink to="/" end className={navLinkCls}>Home</NavLink>

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="font-medium px-3 py-2 text-[0.9375rem] text-foreground/70 hover:text-brand-navy transition-colors duration-200 whitespace-nowrap flex items-center gap-1 outline-none">
              Services <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[200px]">
              <DropdownMenuItem asChild className="focus:bg-thai-gold/10 focus:text-brand-navy">
                <Link to="/services/flights" className="flex items-center gap-2 cursor-pointer">
                  <Plane size={15} className="text-thai-gold" /> Flights
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-thai-gold/10 focus:text-brand-navy">
                <Link to="/services/accommodation" className="flex items-center gap-2 cursor-pointer">
                  <Hotel size={15} className="text-thai-gold" /> Accommodation
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-thai-gold/10 focus:text-brand-navy">
                <Link to="/services/cars" className="flex items-center gap-2 cursor-pointer">
                  <Car size={15} className="text-thai-gold" /> Car Hire
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-thai-gold/10 focus:text-brand-navy">
                <Link to="/services/medical" className="flex items-center gap-2 cursor-pointer">
                  <Stethoscope size={15} className="text-thai-gold" /> Medical Tourism
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-thai-gold/10 focus:text-brand-navy">
                <Link to="/services/trade" className="flex items-center gap-2 cursor-pointer">
                  <Package size={15} className="text-thai-gold" /> Trade & Export
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink to="/packages" className={navLinkCls}>Packages</NavLink>
          <NavLink to="/blog" className={navLinkCls}>Blog</NavLink>
          <NavLink to="/about" className={navLinkCls}>About</NavLink>
        </nav>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <a
            href={waLink("Hi Salim, I found Rising Sun Travel and I'm interested in planning a trip to Thailand.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-brand-navy transition-colors duration-200"
          >
            {WHATSAPP_SVG}
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-thai-gold text-white text-sm font-semibold hover:bg-thai-gold/90 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-11 w-11 items-center justify-center lg:hidden text-foreground/80 hover:text-foreground transition-colors duration-200"
          onClick={toggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay — sits below the header, covers the rest of the viewport */}
      {isOpen && (
        <div
          className={`fixed inset-x-0 bottom-0 z-[9999] flex flex-col bg-brand-offwhite overflow-y-auto overscroll-contain lg:hidden ${
            effectiveCompact ? "top-14" : "top-20"
          }`}
        >
          <div className="flex flex-col px-4 py-4">
            <NavLink
              to="/"
              end
              onClick={close}
              className={({ isActive }) =>
                `flex min-h-14 items-center border-b border-border px-3 text-[1.0625rem] font-medium transition-colors duration-150 ${
                  isActive ? "font-semibold text-thai-gold" : "text-foreground/80 hover:text-brand-navy"
                }`
              }
            >
              Home
            </NavLink>

            {/* Services group */}
            <div className="border-b border-border">
              <p className="px-3 pt-4 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Services
              </p>
              {[
                { to: "/services/flights", icon: <Plane size={14} className="text-thai-gold" />, label: "Flights" },
                { to: "/services/accommodation", icon: <Hotel size={14} className="text-thai-gold" />, label: "Accommodation" },
                { to: "/services/cars", icon: <Car size={14} className="text-thai-gold" />, label: "Car Hire" },
                { to: "/services/medical", icon: <Stethoscope size={14} className="text-thai-gold" />, label: "Medical Tourism" },
                { to: "/services/trade", icon: <Package size={14} className="text-thai-gold" />, label: "Trade & Export" },
              ].map(({ to, icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={close}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center gap-2 px-5 text-[1rem] font-medium transition-colors duration-150 ${
                      isActive ? "font-semibold text-thai-gold" : "text-foreground/80 hover:text-brand-navy"
                    }`
                  }
                >
                  {icon} {label}
                </NavLink>
              ))}
            </div>

            {[
              { to: "/packages", label: "Packages" },
              { to: "/blog", label: "Blog" },
              { to: "/about", label: "About" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={close}
                className={({ isActive }) =>
                  `flex min-h-14 items-center border-b border-border px-3 text-[1.0625rem] font-medium transition-colors duration-150 ${
                    isActive ? "font-semibold text-thai-gold" : "text-foreground/80 hover:text-brand-navy"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto shrink-0 border-t border-border px-4 py-5">
            <Link
              to="/contact"
              onClick={close}
              className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-thai-gold text-base font-semibold text-white transition-colors duration-200 hover:bg-thai-gold/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
