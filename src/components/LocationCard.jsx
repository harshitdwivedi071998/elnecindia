import { Building2 } from "lucide-react";

const LocationCard = ({ name, delay = 0 }) => {
  return (
    <div 
      className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 aspect-square cursor-pointer
                 border border-white/30 bg-white/5 backdrop-blur-sm
                 transition-all duration-300 ease-out
                 hover:border-white/60 hover:bg-white/10 hover:scale-105 hover:shadow-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Building2 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white/90 mb-4" strokeWidth={1.5} />
      <span className="text-sm sm:text-base md:text-lg font-medium tracking-widest uppercase text-white/90 font-body">
        {name}
      </span>
    </div>
  );
};

export default LocationCard;
