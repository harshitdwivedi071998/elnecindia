import React from "react";

const IntroSection = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16">

      {/* 2 Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          {/* Green Banner */}
          <div className="bg-[#4b9e46] text-white py-16 text-center rounded-md shadow">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
              ELNEC INDIA
            </h1>
            <p className="text-lg tracking-widest">
              ADVANCING  PALLIATIVE  CARE  IN  INDIA
            </p>
          </div>

          {/* Bottom Green Text */}
          {/* <p className="text-center text-green-700 text-xl mt-8 leading-relaxed">
            The ELNEC INDIA is a national education initiative to improve 
            palliative care in India.
          </p> */}
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* Description */}
          <p className="text-gray-800 text-lg leading-relaxed mb-10">
            The End-of-Life Nursing Education Consortium (ELNEC) project is a USA  
            national education initiative to improve palliative care and is a 
            partnership between the American Association of Colleges of Nursing (AACN), 
            Washington, DC and the City of Hope.Elnec India works in collabration with elnec USA
          </p>

          {/* Supported By */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Supported by:
          </h2>

          {/* Logos */}
          <div className="flex items-center gap-10 flex-wrap">
            <img
              src="/JK.jpg"
              alt="Jamgon Kongtrul"
              className="h-28 object-contain"
            />
            <div className="text-center">
              <img
                src="/asia-pacific-hospice-logo.jpg"
                alt="Asia Pacific Hospice"
                className="h-28 object-contain mx-auto"
              />
              {/* <p className="text-sm mt-2 text-gray-600 leading-tight">
                Asia Pacific <br /> Hospice Palliative <br /> Care Network
              </p> */}
            </div>
            <img
              src="/lien-logo.jpg"
              alt="Lien Collaborative"
              className="h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
