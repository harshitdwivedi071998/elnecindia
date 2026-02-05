export default function ComminEvents() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#1d4c7c]">
          Upcoming Events
        </h1>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-10"></div>

        {/* Events Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          
          {/* Event Card */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1d4c7c]">
              ELNEC Chandigarh
            </h2>
            <p className="mt-3 text-gray-600">
              Upcoming ELNEC training program scheduled in Chandigarh.
            </p>
          </div>

          {/* Event Card */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1d4c7c]">
              ELNEC Visakhapatnam
            </h2>
            <p className="mt-3 text-gray-600">
              ELNEC educational initiative event taking place in Visakhapatnam.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
