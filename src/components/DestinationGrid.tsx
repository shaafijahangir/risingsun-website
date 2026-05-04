import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/context";

const destinations = [
  {
    key: "bangkok",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop",
  },
  {
    key: "chiangMai",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=800&auto=format&fit=crop",
  },
  {
    key: "phuket",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=800&auto=format&fit=crop",
  },
  {
    key: "krabi",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
  },
  {
    key: "kohSamui",
    image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=800&auto=format&fit=crop",
  },
  {
    key: "ayutthaya",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=800&auto=format&fit=crop",
  },
];

const DestinationGrid = () => {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-brand-offwhite">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            {t("destinations.heading")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("destinations.subheading")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map(({ key, image }) => (
            <Link
              key={key}
              to="/packages"
              className="group relative overflow-hidden rounded-2xl block"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={image}
                alt={t(`destinations.${key as "bangkok" | "chiangMai" | "phuket" | "krabi" | "kohSamui" | "ayutthaya"}`)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <span className="text-white font-bold text-xl font-heading drop-shadow-md">
                  {t(`destinations.${key as "bangkok" | "chiangMai" | "phuket" | "krabi" | "kohSamui" | "ayutthaya"}`)}
                </span>
                <span className="flex items-center gap-1 text-thai-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t("destinations.explore")} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;
