import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="sticky top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-md">
    <div className="max-w-screen-md mx-auto flex items-center justify-between px-4 py-3">
      <div className="flex items-center space-x-3">
        <span className="text-[#0a7ffb] text-3xl">🦷</span>
        <span className="font-bold text-2xl text-[#0a7ffb] tracking-wide">
          Dental Clinics <span className="text-[#ff9800]">India</span>
        </span>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <Link
          to="/"
          className="px-4 py-2 rounded-xl font-medium text-[#0a7ffb] hover:bg-[#e3f0fc] hover:text-[#ff9800] transition w-full text-center"
        >
          Home
        </Link>
        <Link
          to="/clinics"
          className="px-4 py-2 rounded-xl font-medium text-[#0a7ffb] hover:bg-[#e3f0fc] hover:text-[#ff9800] transition w-full text-center"
        >
          Clinics
        </Link>
        <Link
          to="/register-clinic"
          className="ml-2 px-4 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-[#ff9800] to-[#0a7ffb] shadow-lg hover:from-[#0a7ffb] hover:to-[#ff9800] hover:text-white transition w-full text-center"
        >
          Register Clinic
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
