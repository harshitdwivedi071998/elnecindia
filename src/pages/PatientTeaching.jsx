import React from "react";
import { topics } from "../data/Partners ";

export default function PatientTeaching() {
  

  return (
    <>
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        {/* Background Image */}
        {/* <img
          src="/your-image.jpg"
          alt="Pocket Guide Background"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#1f4c78]/70"></div>

        {/* Content */}
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Teaching</h1>

          {/* Underline */}
          <div className="w-24 h-0.5 bg-white mx-auto mb-4"></div>

          <p className="text-sm md:text-base max-w-xl mx-auto">
            If you want to learn more about us, you're in the right place.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
              padding: "20px",
              // fontSize: "18px",
            }}
          >
            {topics.map((item) => (
              <div
                key={item.id}
                onClick={() => window.open(item.link, "_blank")}
                className="cursor-pointer mb-2 transition-colors duration-300 hover:text-green-700"
              >
                {item.id} {item.title}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto">
        <p className="text-center text-red-500 my-5">
          Note: PCNOWs mission is to educate and support health care
          professionals, organizations and Wisconsin residents. We provide
          Materials for informational purposes only. Under no circumstances will
          the provision of such materials be be considered offering medical
          advice.
        </p>
        </div>
      </section>
    </>
  );
}
