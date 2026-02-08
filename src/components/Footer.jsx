import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";


export default function Footer() {

  return (
    <footer className="bg-gradient-to-r from-[#0A1E2D] via-[#143F6B] to-[#0A1E2D] text-white pt-12 pb-6 px-4 md:px-10 lg:px-20">

      {/* TOP GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT LOGO + TEXT */}
        <div>
          <img 
            src="/ELNEC-logo-02.png"  // <-- Replace with your logo
            alt="ELNEC Logo"
            className="w-52 md:w-60"
          />

          <div className="mt-4 border-t border-white/40 w-3/4"></div>

          <p className="mt-4 text-lg leading-relaxed">
            The ELNEC INDIA is a national education Platform adopted for India to improve 
            palliative nursing supported by APHN and LIEN Collaborative.
          </p>
        </div>

        {/* MIDDLE QUICK LINKS */}
        <div>
          <h2 className="text-3xl font-bold">Quick Links</h2>
          <div className="mt-2 border-t border-white/40 w-3/4"></div>

          <ul className="mt-6 space-y-3 text-lg">
            <li><Link to={"/"} className="text-green-400 cursor-pointer hover:underline">Elnec India</Link></li>
            <li><Link to={"/pocketGuide"} className="hover:text-green-400 cursor-pointer">Pocket Guide</Link></li>
            <li><Link to={"/patientTeaching"} className="hover:text-green-400 cursor-pointer">Patient Teaching</Link></li>
            <li><Link to={"/resources"} className="hover:text-green-400 cursor-pointer">Resources</Link></li>
            <li><Link to={"/news"} className="hover:text-green-400 cursor-pointer">News</Link></li>
          </ul>
        </div>

        {/* RIGHT CONTACT INFO */}
        <div>
          <h2 className="text-3xl font-bold">Contact Info</h2>
          <div className="mt-2 border-t border-white/40 w-full md:w-3/4"></div>

          <div className="mt-6 space-y-4 text-lg">
            <div className="flex items-center gap-3">
              <HiOutlineMail size={26} />
              <span>hanife545@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <HiOutlineMail size={26} />
              <span>arvindsharma206@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <HiOutlineMail size={26} />
              <span>nileema_db@yahoo.co.in</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt size={26} />
              <span>+91 8800845139 | +91 8448429339 | +91 7042463123</span>
            </div>
          </div>

          <div className="mt-6 border-t border-white/40 w-full md:w-3/4"></div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5 mt-6">
            <div className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600">
              <FaFacebookF size={22} />
            </div>
            <div className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600">
              <FaTwitter size={22} />
            </div>
            <div className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600">
              <FaInstagram size={22} />
            </div>
            <div className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600">
              <FaYoutube size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      {/* <div className="text-center mt-10 text-lg">
        © 2022 All Right Reserved — Website Design By 
        <span className="text-green-400 cursor-pointer ml-1">Digital Suncity.</span>
      </div> */}
    </footer>
  );
}
