
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useI18n } from "@/i18n/context";
// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    text: "My trip to Bangkok was absolutely incredible thanks to Rising Sun! Md Salim's local knowledge gave us access to hidden gems we would have never found on our own. The personalized itinerary was perfect.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "David Chen",
    location: "Canada",
    text: "The Thailand island hopping package exceeded all expectations. Our guide knew exactly when to visit each spot to avoid crowds, and the accommodations were spectacular. Will definitely book again!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "Australia",
    text: "Chiang Mai's temples and elephant sanctuaries were the highlight of our trip. Rising Sun arranged everything flawlessly, and their attention to detail made our honeymoon truly special.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Hiroshi Tanaka",
    location: "Japan",
    text: "As a solo traveler, I was amazed by how comfortable and safe I felt throughout my journey. The cultural experiences were authentic and the local food recommendations were outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Maria Rodriguez",
    location: "Spain",
    text: "From jungle trekking to riverside dining, every moment was carefully planned yet felt spontaneous. Salim's 20 years of experience truly shows in the quality of service provided.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&auto=format&fit=crop&q=80"
  }
];

const TestimonialsSection = () => {
  const { t } = useI18n();
  return (
    <section
      id="testimonials"
      className="py-16 bg-white overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-brand-navy mb-4"
          >
            {t("testimonials.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            role="region"
            aria-roledescription="testimonials carousel"
            aria-live="polite"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                  role="group"
                  aria-roledescription="testimonial"
                >
                  <Card className="border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={`${testimonial.name}`}
                            className="w-12 h-12 rounded-full object-cover border-2 border-thai-gold"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-brand-navy">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i}
                            className="text-thai-gold fill-thai-gold" 
                            size={18}
                          />
                        ))}
                      </div>
                      
                      <div className="relative flex-grow">
                        <Quote 
                          className="absolute -top-2 -left-1 text-thai-gold opacity-20" 
                          size={32}
                        />
                        <p className="text-gray-700 italic pt-3 px-2">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center mt-8">
              <CarouselPrevious className="relative static transform-none mx-2 border-brand-navy/20 text-brand-navy hover:bg-thai-gold hover:text-white hover:border-thai-gold" />
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className="w-3 h-3 rounded-full bg-gray-300 hover:bg-thai-gold transition-colors"
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative static transform-none mx-2 border-brand-navy/20 text-brand-navy hover:bg-thai-gold hover:text-white hover:border-thai-gold" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
