export default function QuoteSection() {
  return (
    <div className="w-full bg-[#245b8a] py-10 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* LEFT TEXT AREA */}
        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            "Education is not filling of a bucket<br />
            but the lighting of a fire"
          </h2>

          <p className="text-green-400 mt-4 text-lg md:text-xl">
            William Butler Yeats
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:w-1/3">
          <img
            src="/William-Butler-Yeats.png"  // <-- Replace with your image path
            alt="William Butler Yeats"
            className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}
