export default function AboutSection2() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center bg-[#F6F9FC] py-14 px-6 md:px-16">

      {/* LEFT TEXT */}
      <div className="w-full md:w-1/2 md:pr-14">
        <p className="text-lg leading-relaxed text-[#333] mb-6">
          Considering this low doctor–patient ratio, it will be best to strengthen
          the integrated approach where nurses and doctors really work together
          as a team to provide palliative care. First step to this would be to
          empower nurses by educating them on principles of palliative care.
        </p>

        <p className="text-lg leading-relaxed text-[#333]">
          If nurses at the bedside, in outpatient clinics, in the community and
          in home care can be provided with palliative care education and if they 
          could be made to understand their invaluable place in the interdisciplinary 
          team, access to care will be increased greatly, care and follow up will 
          improve, palliative care will become more available, sustainable and complete.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 overflow-hidden rounded-lg">
        <img
          src="/9.jpg"
          alt="Nurse helping patient"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

    </section>
  );
}
