import React from "react";
import { partners } from "../data/Partners ";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

export default function Resources() {

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
          <h1 className="text-5xl md:text-5xl font-bold mb-4">RESOURCES</h1>

          {/* Underline */}
          <div className="w-24 h-0.5 bg-white mx-auto mb-4"></div>

          {/* <p className="text-sm md:text-base max-w-xl mx-auto">
            If you want to learn more about us, you're in the right place.
          </p> */}
        </div>
      </section>

      {/* Supreme Court allows ‘living will’ */}
      <section className="w-full bg-green-500">
        <div className="max-w-7xl mx-auto py-8">
          {/* <h1 className="text-[50px] text-center text-white py-5">
            Supreme Court allows ‘living will’
          </h1> */}
          <p className="text-center text-white py-5">
            In a landmark judgement delivered today, the Supreme Court of India
            has allowed an individual to draft a living will specifying that
            they not be put on life support if they slip into an incurable coma.
          </p>
          <p className="text-center text-white py-5">
            The order was passed by a five judge Constitutional bench comprising
            Chief Justice of India (CJI) Dipak Misra and Justices AK Sikri, AM
            Khanwilkar, DY Chandrachud and Ashok Bhushan, which said “Human
            beings have the right to die with dignity.”
          </p>
        </div>
      </section>

      {/* DNIPCARE */}
      <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 
                      grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {partners.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="bg-white shadow-lg hover:shadow-2xl 
                       transition rounded-lg p-8 flex flex-col
                       text-center cursor-pointer"
          >
            {/* LOGO */}
            <img
              src={item.logo}
              alt={item.title}
              className="mx-auto h-32 object-contain"
            />

            {/* TITLE */}
            <h2 className="mt-10 text-2xl font-bold text-[#1d4c7c]">
              {item.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {/* PHONES */}
            <div className="mt-6 space-y-2">
              {item.phones.map((phone, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center gap-2 
                             text-[#1d4c7c] font-medium"
                >
                  <FaPhoneAlt />
                  <span>{phone}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>

      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10">
          <div>
            <h2 className="text-[50px]">EUSOL POWDER PREPARATION</h2>
            <div className="border-b border-b-green-500 w-80 h-0.5 bg-green  mb-4"></div>
          </div>
          <p className="pt-3 text-[20px]">
            EUSOL stands for Edinburgh University Solution of Lime Composition:
            12.5gm bleaching powder+12.5 gm boric acid in distilled water to
            make 1 liter….The pH ranges from 7.5-8.5 (Lorrian Smith, 1990) EUSOL
            is an antiseptic solution prepared from chlorinated lime and boric
            acid, formerly used in treating wounds.
          </p>
          <div>
            <h2 className="text-[50px]">MAGIC MOUTHWASH</h2>
            <div className="border-b border-b-green-500 w-80 h-0.5 bg-green  mb-4"></div>
          </div>
          <div>
            <ul className="list-inside list-disc">
              <li>500 ml -NS</li>
              <li>50ml – DRY BENADRYL SYP.</li>
              <li>50ml – SYP GELUSIL</li>
              <li>50ml – XYLOCAINE 2% (LOCAL ANA.)[LOXIGARDM]</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
