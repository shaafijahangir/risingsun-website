import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";

interface ContactButtonsProps {
  className?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
}

const ContactButtons = ({
  className = "",
  variant = "default",
  size = "default",
}: ContactButtonsProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi, I'm interested in your services in Thailand. Could you please provide more information?"
    );
    window.open(`https://wa.me/${CONTACT.phoneRaw}?text=${message}`, "_blank");
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Service Inquiry");
    const body = encodeURIComponent(
      `Dear ${CONTACT.founderName},\n\nI am interested in learning more about your services in Thailand.\n\nBest regards,`
    );
    window.open(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open(`tel:${CONTACT.phone}`, "_blank");
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Button
        onClick={handleWhatsAppClick}
        variant={variant}
        size={size}
        className="flex items-center gap-2 bg-success hover:bg-success/90 text-success-foreground border-success"
      >
        <MessageCircle size={18} />
        WhatsApp
      </Button>

      <Button
        onClick={handleEmailClick}
        variant="outline"
        size={size}
        className="flex items-center gap-2"
      >
        <Mail size={18} />
        Email Inquiry
      </Button>

      <Button
        onClick={handlePhoneClick}
        variant="outline"
        size={size}
        className="flex items-center gap-2"
      >
        <Phone size={18} />
        Call Now
      </Button>
    </div>
  );
};

export default ContactButtons;
