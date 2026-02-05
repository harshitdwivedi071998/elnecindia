export default function HeroBanner({ type = "image", src }) {
  return (
    <div className="w-full h-[300px] md:h-[450px] lg:h-[520px] overflow-hidden relative">
      
      {/* {type === "image" ? (
        <img
          src={src}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )} */}

      <video
          src="/ELNEC-BUBBLES.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

    </div>
  );
}
