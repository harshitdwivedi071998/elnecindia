import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-green-600 font-semibold" : "hover:text-green-600";

  return (
    <header className="w-full shadow-md">
      {/* ---------------- Top Blue Bar ---------------- */}
      <div className="bg-[#1f4f7b] text-white py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-lg">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>

          {/* Center Email */}
          <div className="hidden md:block text-sm font-medium text-center flex-1">
            Email: hanife545@gmail.com
          </div>

          {/* Call Right Side */}
          <div className="hidden md:block text-sm font-medium">
            Call Now: +110 123 045 7867
          </div>
        </div>
      </div>

      {/* ---------------- Main Header ---------------- */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-5 flex justify-between items-center px-4">
          {/* Logo */}
          <img src="/ELNEC-logo.png" alt="Logo" className="w-44" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-10 text-lg font-medium text-gray-800">
            <NavLink to="/" end className={navLinkClass}>
              Elnic India
            </NavLink>

            <NavLink to="/pocketGuide" className={navLinkClass}>
              Pocket Guide
            </NavLink>

            <NavLink to="/patientTeaching" className={navLinkClass}>
              Patient Teaching
            </NavLink>

            <NavLink to="/resources" className={navLinkClass}>
              Resources
            </NavLink>

            <NavLink to="/news" className={navLinkClass}>
              News
            </NavLink>
          </nav>

          {/* Donate Button */}
          <button className="hidden md:block bg-green-600 text-white px-8 py-3 rounded-sm text-lg font-semibold">
            Donate Now
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ---------------- Mobile Menu ---------------- */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <NavLink
              to="/"
              end
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Elnic India
            </NavLink>

            <NavLink
              to="/pocketGuide"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Pocket Guide
            </NavLink>

            <NavLink
              to="/patientTeaching"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Patient Teaching
            </NavLink>

            <NavLink
              to="/resources"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Resources
            </NavLink>

            <NavLink
              to="/news"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              News
            </NavLink>
          </nav>

          <button className="bg-green-600 text-white px-8 py-2 mt-5 rounded-sm text-lg font-semibold w-full">
            Donate Now
          </button>
        </div>
      )}
    </header>
  );
}
