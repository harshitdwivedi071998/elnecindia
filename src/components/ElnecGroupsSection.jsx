import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import LocationCard from "./LocationCard";

const locations = [
  { name: "Rishikesh" },
  { name: "Manipur" },
  { name: "Mizoram" },
  { name: "Patna" },
  { name: "Mumbai" },
  { name: "Udaipur" },
  { name: "Kerla" },
  { name: "Luckhnow" },
  { name: "Goa" },
  { name: "Pondicherry" },
  { name: "Chennai" },
  { name: "Ludhiyana" },
  { name: "Jodhpur" },
];

const ElnecGroupsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(213 60% 20% / 0.92), hsl(213 50% 25% / 0.88)), url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-sm md:text-base tracking-[0.3em] uppercase font-light text-white/90 mb-4 animate-fade-in-up font-body">
          ELNEC INDIA
        </p>
        
        {/* Accent line */}
        <div 
          className="w-20 h-0.5 bg-green-500 mx-auto mb-8 animate-fade-in-up" 
          style={{ animationDelay: '100ms' }} 
        />
        
        {/* Main title */}
        <h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-white mb-12 md:mb-16 animate-fade-in-up font-heading"
          style={{ animationDelay: '200ms' }}
        >
          ELNEC GROUPS IN INDIA
        </h1>
        
        {/* Auto-sliding carousel */}
        <div className="overflow-hidden max-w-6xl mx-auto" ref={emblaRef}>
          <div className="flex">
            {locations.map((location, index) => (
              <div 
                key={location.name}
                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 sm:px-3"
              >
                <LocationCard name={location.name} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {locations.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? "bg-green-500 w-6" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElnecGroupsSection;
