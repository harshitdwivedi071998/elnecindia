export default function AboutSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center bg-[#F6F9FC] py-10 px-6 md:px-16">
      
      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
        <img
          src="7.jpg"
          alt="Nurses"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* RIGHT TEXT CONTENT */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#174B8A] mb-6 leading-tight">
          GENERAL INFORMATION ABOUT ELNEC INDIA
        </h2>

        <p className="text-lg leading-relaxed text-[#333]">
          When a person is given a diagnosis of a life-threatening condition, the
          family is often told, “There is nothing more we can do”, leaving the 
          family unspeakably devastated. Yet in truth, there is much that can 
          be done with palliative care. There is a great need for increased 
          awareness and access to palliative care in India. In India the 
          physician to patient ratio is 1:2000, while the nurse to patient 
          ratio is 1:800.
        </p>
      </div>

    </section>
  );
}
