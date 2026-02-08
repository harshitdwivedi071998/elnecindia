import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import LocationCard from "./LocationCard";

const locations = [
  {
    name: "Bengal",
    images: ["/images/bengal.png", "/images/rishikesh2.jpg"]
  },
  {
    name: "Raipur",
    images: ["/images/raipur.png", "/images/manipur2.jpg"]
  },
  {
    name: "New Delhi",
    images: ["/images/newdelhi.png", "/images/newdelhi1.png"]
  },
  {
    name: "Pune",
    images: ["/images/pune.png", "/images/pune1.png"]
  },
  {
    name: "Jodhpur",
    images: ["/images/jodhpur.png", "/images/jodhpur1.png"]
  },
  {
    name: "North East India",
    images: ["/images/northeastindia.png",]
  },
  {
    name: "Rishikesh",
    images: ["/images/rishikesh.png",]
  },
  {
    name: "patna",
    images: ["/images/patna.png", "/images/patna1.png"]
  },
  {
    name: "Mumbai",
    images: ["/images/mumbai.png",]
  },
  {
    name: "Udaipur",
    images: ["/images/udaipur.png",]
  },
  {
    name: "Ludhiyana",
    images: ["/images/luddhiyana.png",]
  },
  {
    name: "Jammu",
    images: ["/images/jammu.png",]
  },
  {
    name: "Kolkata",
    images: ["/images/kolkata.png",]
  },
  {
    name: "Kerla",
    images: ["/images/kerla.png",]
  },
  {
    name: "Luckhnow",
    images: ["/images/luckhnow.png",]
  },
  {
    name: "Goa",
    images: ["/images/goa.png", "/images/goa1.png"]
  },
  {
    name: "Chennai",
    images: ["/images/chennai.png", "/images/goa1.png"]
  },
  {
    name: "Pondicherry",
    images: ["/images/pondichery.png", "/images/goa1.png"]
  },
  {
    name: "Bhatinda",
    images: ["/images/bhatinda.png", "/images/goa1.png"]
  },
  {
    name: "Hyderabad",
    images: ["/images/hydrabad.png", "/images/goa1.png"]
  },
  {
    name: "Jaipur",
    images: ["/images/jaipur.png", "/images/jaipur1.png"]
  },
  {
    name: "Sikar",
    images: ["/images/sikar.png", "/images/jaipur1.png"]
  },
  {
    name: "Assam",
    images: ["/images/assam.png", "/images/jaipur1.png"]
  },
  {
    name: "Kashmir",
    images: ["/images/kashmir.png", "/images/jaipur1.png"]
  },
];


const ElnecGroupsSection = () => {

  const [activeGallery, setActiveGallery] = useState(null);


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
    <section className="relative py-20 px-4 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(12,45,80,.92), rgba(12,45,80,.85)), url('/images/bg.jpg')",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-6">
          ELNEC GROUPS IN INDIA
        </h1>

        <div className="w-24 h-1 bg-green-500 mx-auto mb-12"></div>

        {/* 🗺️ MAP SECTION */}
        <div className="mb-16 flex justify-center">
          <img
            src="/images/india-map.png"   // <-- your map image path
            alt="ELNEC India Map"
            className="w-full max-w-3xl rounded-lg shadow-xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* 📍 SLIDER SECTION */}
        <div ref={emblaRef} className="overflow-hidden max-w-6xl mx-auto">
          <div className="flex">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-3"
                onClick={() => setActiveGallery(loc)}
              >
                <LocationCard name={loc.name} />
              </div>
            ))}

          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {locations.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${selectedIndex === i
                ? "bg-green-500 w-6"
                : "bg-white/40 w-2"
                }`}
            />
          ))}
        </div>

      </div>
      {activeGallery && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">

          <div className="bg-white rounded-xl max-w-4xl w-full p-6 relative">

            <button
              onClick={() => setActiveGallery(null)}
              className="absolute top-3 right-4 text-3xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">
              {activeGallery.name}
            </h2>

            <div
              className={`grid gap-4 ${activeGallery.images.length === 1
                  ? "grid-cols-1"
                  : activeGallery.images.length === 2
                    ? "grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                }`}
            >

              {activeGallery.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-lg shadow hover:scale-105 transition duration-300"
                  alt=""
                />
              ))}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default ElnecGroupsSection;
