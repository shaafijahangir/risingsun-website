import React from "react";
import { CalendarDays, Mail, MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contact";
import { useInView } from "@/hooks/useInView";

const options = [
  {
    icon: CalendarDays,
    label: "Book a call",
    desc: "Pick a time that works for you. Salim will call and help you plan.",
    action: "Schedule via Calendly",
    href: CONTACT.calendly,
    external: true,
    accent: "text-thai-gold",
    border: "hover:border-thai-gold/40",
    iconBg: "bg-thai-gold/10",
    iconColor: "text-thai-gold",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    desc: "Send a message any time. The fastest way to get a reply.",
    action: CONTACT.phone,
    href: waLink("Hi Salim, I found Rising Sun Travel and I'd like to plan a trip to Thailand."),
    external: true,
    accent: "text-[#25D366]",
    border: "hover:border-[#25D366]/40",
    iconBg: "bg-[#25D366]/10",
    iconColor: "text-[#25D366]",
  },
  {
    icon: Mail,
    label: "Email",
    desc: "Prefer to write it all out? Expect a reply within 24 hours.",
    action: CONTACT.email,
    href: `mailto:${CONTACT.email}?subject=Inquiry from Rising Sun website`,
    external: false,
    accent: "text-brand-navy",
    border: "hover:border-brand-navy/30",
    iconBg: "bg-brand-navy/10",
    iconColor: "text-brand-navy",
  },
];

const CallToActionSection = () => {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section ref={ref} id="book-call" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">

        <div className={`text-center mb-10 anim-fade-up ${isVisible ? "in-view" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-3">
            Start planning your Thailand trip
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tell Salim where you want to go. He'll take it from there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {options.map(({ icon: Icon, label, desc, action, href, external, accent, border, iconBg, iconColor }, i) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`anim-fade-up ${isVisible ? "in-view" : ""} flex flex-col p-7 bg-white rounded-2xl shadow-md border border-border ${border} hover:shadow-lg transition-all group`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-5`}>
                <Icon size={22} className={iconColor} />
              </div>
              <p className="font-bold text-brand-navy text-lg mb-1">{label}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{desc}</p>
              <p className={`${accent} font-semibold text-sm group-hover:underline`}>{action}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CallToActionSection;
