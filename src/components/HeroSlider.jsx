import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        image: "/7.jpg",
        title: "Educating and Mentoring Nurses In Palliative Care to Improve Quality of Life.",
        subtitle: "Making Palliative Care More Available, Sustainable And Complete.",
    },
    {
        image: "/9.jpg",
        title: "Transforming Palliative Care Through Education.",
        subtitle: "Empowering Nurses for Better Patient Outcomes.",
    },
];

export default function HeroSlider() {
    return (
        <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                className="h-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-full overflow-hidden">

                            <img
                                src={slide.image}
                                className="w-full h-full object-cover animate-zoomSlow"
                                // alt="slide"
                            />

                            <div className="absolute inset-0 bg-[#0b2545]/60"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                                <h1 className="text-white text-3xl md:text-3xl font-bold leading-snug mb-4">
                                    {slide.title}
                                </h1>
                                <p className="text-white text-lg md:text-xl">{slide.subtitle}</p>
                            </div>

                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    );
}
