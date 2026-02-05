import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MemorableMoments() {
  const images = [
    "1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10">

      {/* Top Heading */}
      <div className="text-center mb-10">
        <h3 className="text-xl text-[#466EA8] tracking-wide">
          MEMORABLE MOMENTS
        </h3>

        {/* Green Line */}
        <div className="w-24 border-b-4 border-[#2F8D46] mx-auto my-3"></div>

        <h2 className="text-4xl font-bold text-[#2C4A78]">
          ELNEC INDIA
        </h2>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,           // 3 seconds
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-md shadow-sm">
              <img
                src={img}
                alt="Memory"
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
