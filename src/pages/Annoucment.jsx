export default function Annoucment() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#1d4c7c]">
          Announcements
        </h1>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-8"></div>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-10">
          We successfully conducted{" "}
          <span className="font-semibold text-[#1d4c7c]">
            3 ELNEC training programs
          </span>{" "}
          across different locations in India.
        </p>

        {/* List Card */}
        <div className="bg-gray-50 rounded-lg shadow-md p-8 max-w-md mx-auto mb-16">
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Bhubaneshwar
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Mangalagiri
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Srinagar
            </li>
          </ul>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/elnec-100th-training.jpg" // <-- replace with your image
            alt="ELNEC 100th Training Srinagar"
            className="w-full h-[260px] md:h-[420px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="text-left px-6 md:px-12">
              <p className="text-green-400 text-sm md:text-base font-semibold mb-2">
                21 November 2025
              </p>

              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                ELNEC 100<sup>th</sup> Training
              </h2>

              <p className="text-gray-200 text-sm md:text-lg max-w-2xl leading-relaxed">
                Conducted in one of Dr. Cynthia Goh’s favorite Indian states on
                her birthday at{" "}
                <span className="font-semibold">
                  Srinagar, Kashmir (GMC)
                </span>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
