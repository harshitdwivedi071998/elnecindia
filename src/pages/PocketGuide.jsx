export default function PocketGuide() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Pocket Guide
        </h1>

        {/* Underline */}
        <div className="w-24 h-[2px] bg-white mx-auto mb-4"></div>

        <p className="text-sm md:text-base max-w-xl mx-auto">
          If you want to learn more about us, you're in the right place.
        </p>
      </div>
      </section>
      {/* banner part */}
      {/* <section className="w-full h-[450px] bg-[#235787]">
        <h1 className="text-[50px] pt-[110px] text-white text-center border-b">
          Pocket Guide
        </h1>
        <p className="text-[14px] pt-2.5 text-white text-center">
          If you want to learn more about us, you’re in the right place.{" "}
        </p>
      </section> */}

      {/* FORMULA FOR OPIOID CONVERSIONS */}
      <section className="w-full">
        <h2 className="my-3 ms-16 text-[30px]">
          FORMULA FOR OPIOID CONVERSIONS
        </h2>
        <ul className="list-inside list-disc">
          <li className="ms-20 my-2">
            Add up the total 24 hour dose requirement of each current opioid
            which is being given. If both parenteral and oral doses were used,
            calculate a separate total for each.
          </li>
          <li className="ms-20 my-2">
            Divide each 24 hour dose requirement by the equianalgesic dose
            listed in the equianalgesic dose chart for the current opioid and
            current route of administration.
          </li>
        </ul>
        <p className="my-3 ms-16">
          The number obtained is called the equianalgesic unit.
        </p>
        <ul className="list-inside list-disc">
          <li className="ms-20 my-2">
            Multiply the equianalgesic unit by the equianalgesic dose of the new
            opioid (considering the new route).
          </li>
          <li className="ms-20 my-2">
            Divide by the appropriate dose interval or number of times you are
            giving the new opioid in 24 hours.
          </li>
        </ul>
        <div className="px-6 py-10 max-w-6xl mx-auto">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* PEAK EFFECT OF OPIOIDS */}
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-3">
                PEAK EFFECT OF OPIOIDS
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>IV 10–15 minutes</li>
                <li>SC 20–30 minutes</li>
                <li>PO 60–90 minutes</li>
              </ul>
            </div>

            {/* TITRATING OPIOID DOSE */}
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-3">
                TITRATING OPIOID DOSE
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>25% for mild pain (pain scale 1–3)</li>
                <li>50% for moderate pain (pain scale 4–6)</li>
                <li>75–100% for severe pain (pain scale 7–10)</li>
              </ul>
            </div>

            {/* DOSE ESCALATION FREQUENCY */}
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-3">
                DOSE ESCALATION FREQUENCY
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Short-acting oral opioids every 2 hours</li>
                <li>Sustained-release oral opioids every 24 hours</li>
                <li>Fentanyl transdermal every 72 hours</li>
                <li>Methadone no more frequent than 96 hours</li>
              </ul>
            </div>

            {/* BREAKTHROUGH DOSING */}
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-3">
                BREAKTHROUGH DOSING
              </h2>
              <p className="italic text-gray-600 mb-2">
                (Except for Methadone)
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>PO: 10–20% of total daily dose every 2 hours as needed</li>
                <li>
                  PCA pump – hourly rate given every 15–30 minutes as needed
                </li>
              </ul>
              <p className="mt-3 text-gray-700">
                Make sure to have short-acting opioid at home in case of pump
                failure.
              </p>
            </div>

            {/* ORDERING OPIOIDS */}
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-3">
                ORDERING OPIOIDS
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Do not use large dosing ranges – limit to double dosing</li>
                <li>No time interval</li>
                <li>List both the dose and solution volume when ordering</li>
                <li>
                  Example: morphine conc 20mg/ml; take 0.25 ml to 0.5ml (5-10mg)
                  orally every 2 hours as needed
                </li>
              </ul>
            </div>

            {/* Physician Role */}
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-3">
                Physician Role
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>DO NOT DELEGATE sharing bad news!</li>
              </ul>
              <p className="italic text-gray-600 mb-2">
                Sharing bad news is a physician’s role- in a meeting with a
                nurse and a team hopefully
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>
                  PCA pump – hourly rate given every 15–30 minutes as
                  neededPatients often accept bad news only from MD
                </li>
                <li>MD best prepared to interpret news and to offer advice</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Make sure to have short-acting opioid at home in case of pump
                failure.
              </p>
            </div>

            {/* Preparation */}
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-3">
                Preparation
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Confirm medical facts; plan presentation</li>
                <li>
                  Make only one or two main points; use simple, lay language
                </li>
              </ul>
            </div>

            {/* Planning Care */}
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-3">
                Planning Care
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Discuss agenda of patient/family first</li>
                <li>
                  Let physician priorities flow naturally after patient/family
                  comments (eg: discussion of resuscitation and other
                  directives)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Discussion Items */}
      <section>
        <div className="bg-[#1f4c78] text-white py-12 px-6 my-10">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <h2 className="text-center text-3xl font-bold mb-10">
              Discussion Items
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {/* Physical Care */}
              <div className="border-r border-white pr-6 flex flex-col items-center">
                <h3 className="text-[22px] font-bold mb-2">Physical Care</h3>
                <p className="text-black text-[18px]">
                  What is best setting for level of care?
                </p>
              </div>

              {/* Social Care */}
              <div className="border-r border-white pr-6 flex flex-col items-center">
                <h3 className="text-[22px] font-bold mb-2">Social Care</h3>
                <p className="text-black text-[18px]">
                  What are the family and financial issues?
                </p>
              </div>

              {/* Emotional Care */}
              <div className="border-r border-white pr-6 flex flex-col items-center">
                <h3 className="text-[22px] font-bold mb-2">Emotional Care</h3>
                <p className="text-black text-[18px]">
                  What are the sources of support?
                </p>
              </div>

              {/* Spiritual Care */}
              <div className="flex flex-col items-center">
                <h3 className="text-[22px] font-bold mb-2">Spiritual Care</h3>
                <p className="text-black text-[18px]">
                  What are the sources of meaning?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setting the Stage */}
      <section>
        <div className="py-10 max-w-6xl mx-auto">
          <p className="font-bold text-blue-800 py-4 text-[30px]">1. Setting the Stage</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 ps-4">
            <li>
              Choose appropriate, private environment (Neither hallway nor
              curtain provides privacy!)
            </li>
            <li>Have tissues available</li>
            <li>
              Allot enough time (20-30 minutes minimum with documentation)
            </li>
            <li>
              Determine who should be present; invite SW, chaplain, and
              palliative care
            </li>
            <li>
              Turn beeper to vibrate (Avoid interruptions, demonstrate full
              attention)
            </li>
            <li>Shake hands with the patient first</li>
            <li>Introduce yourself to everyone In the room</li>
            <li>
              Always SIT at eye level with patient at a distance of 50-75cms
            </li>
            <li>Ask permission before sitting on edge of bed</li>
            <li>
              Arrange seating for everyone present if possible (Helps put
              patient at ease, prevent patient from hurrying)
            </li>
          </ul>
        </div>

        {/* Starting the Conversation */}
        <div className="max-w-6xl mx-auto">
        <p className="font-bold pb-10 text-blue-800 text-[30px]">2. Starting the Conversation</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* ASK */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2">ASK</h3>
                    <p className="text-black text-[18px]">
                    How do patient and family understand what is happening? What have others told them
                    </p>
                </div>
                {/* Wait */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2">Wait</h3>
                    <p className="text-black text-[18px]">
                    15-30 seconds to give opportunity for response
                    </p>
                </div>
                {/* Listen */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2">Listen</h3>
                    <p className="text-black text-[18px]">
                    Response may vary from “I think I am dying” to “I don’t understand what is happening.” How much does patient want to know? Ask patient is he/she wants to know prognosis
                    </p>
                </div>
            </div>
        <h3 className="py-5">Patient may decline conversation and designate spokesperson</h3>
        </div>

        {/* When Family Wants to “Protect” Patient */}
        <div className="py-10 max-w-6xl mx-auto">
          <p className="font-bold text-blue-800 py-4 text-[30px]">3. When Family Wants to “Protect” Patient</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 ps-4">
            <li>
            Honour patient’s autonomy
            </li>
            <li>Meet legal obligations for consent</li>
            <li>
            Promote family alliance and support for the patient
            </li>
            <li>
            Ask what family is afraid will happen
            </li>
            <li>
            Offer to have family present when you speak to the patient (so they can hear patient’s wishes about knowing status/prognosis)
            </li>
          </ul>
        </div>

        {/* Sharing Bad News */}
        <div className="py-10 max-w-6xl mx-auto">
          <p className="font-bold text-blue-800 py-4 text-[30px]">4. Sharing Bad News</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 ps-4">
            <li>
            Give warning to allow people to prepare
            </li>
            <li>Briefly state only one or two key points</li>
            <li>
            Use simple language
            </li>
          </ul>
          <h3 className="py-5">STOP</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 ps-4">
            <li>
            Ask questions to assess understanding
            </li>
            <li>Recommended statement for terminal illness: “This is an illness that humanity cannot cure,”</li>
          </ul>
          <h3 className="py-5">Humble statement, leaves open the possibility of the miraculous; helps change the focus from “cure” to palliation and support</h3>
          <h3 className="py-2">Do not minimize severity of news</h3>
        </div>

        {/* Response to Emotions of Patient, Family and Staff */}
        <div className="py-10 max-w-6xl mx-auto">
          <p className="font-bold text-blue-800 py-4 text-[30px]">5. Response to Emotions of Patient, Family and Staff</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 ps-4">
            <li>
            Be prepared for a range of emotions
            </li>
            <li>Allow time for response</li>
            <li>
            Communicate nonverbally as well as verbally (Usually acceptable to touch patients’s ARM)
            </li>
          </ul>
        </div>

        {/* Suggest a Brief Plan */}
        <div className="max-w-6xl mx-auto">
        <p className="font-bold pb-10 text-blue-800 text-[30px]">6. Suggest a Brief Plan</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Medical Plan */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2">Medical Plan</h3>
                    <p className="text-black">
                    (eg: control dyspnea, home assistance to help deal with weakness)
                    </p>
                </div>
                {/* Ancillary Support */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2">Ancillary Support</h3>
                    <p className="text-black">
                    (eg: social work visits, pastoral care visits, palliative care visits)
                    </p>
                </div>
                {/* Introduce Advance Care Planning */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2">Introduce Advance Care Planning</h3>
                    <p className="text-black">
                    (“Sometimes when people die, doctors try to bring them back to life…. Have you considered whether you would want this or not?”)
                    </p>
                </div>
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2 mt-20 text-center">Discuss Timeline</h3>
                </div>
            </div>
        </div>

        {/* Offer Follow-up Meeting */}
        <div className="max-w-6xl mx-auto">
        <p className="font-bold pb-10 text-blue-800 text-[30px]">7. Offer Follow-up Meeting</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* When? */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2">When?</h3>
                    <p className="text-black">
                    Usually within 24 hours
                    </p>
                </div>
                {/* Who? */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2">Who?</h3>
                    <p className="text-black">
                    For current and additional family members
                    </p>
                </div>
                {/* Why? */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2">Why?</h3>
                    <p className="text-black">
                    To repeat portions of the news
                    </p>
                </div>
                {/* How? */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2">How?</h3>
                    <p className="text-black">
                    Offer to contact absent family members, Get permission to share news if necessary
                    </p>
                </div>
            </div>
            <h3 className="py-8">Humble statement, leaves open the possibility of the miraculous; helps change the focus from “cure” to palliation and support</h3>
        </div>

        {/* Ending the Meeting */}
        <div className="max-w-6xl mx-auto">
        <p className="font-bold pb-10 text-blue-800 text-[30px]">8. Ending the Meeting</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* ASK */}
                <div className="border-r border-grey pr-6 flex flex-col justify-items-center items-center">
                    <h3 className="text-[22px] font-bold mb-2">ASK</h3>
                    <p className="text-black">
                    DO you have any questions?
                    </p>
                </div>
                {/* WAIT */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2 mt-10">WAIT</h3>
                </div>
                {/* ANSWER */}
                <div className="border-r border-grey pr-6 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold mb-2 mt-10">ANSWER</h3>
                </div>
                {/* STAND */}
                <div className="border-r border-grey pr-6 flex flex-col justify-items-center items-center">
                    <h3 className="text-[22px] font-bold mb-2">STAND</h3>
                    <p className="text-black">
                    An effective way to end the conversation
                    </p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
