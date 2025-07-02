import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="w-full bg-[#002776] flex items-center px-6" style={{ height: 40 }}>
    {/* Menu Section (left side) */}
    <nav className="flex items-center gap-4 font-[Poppins] flex-shrink-0">
      <Link to="/" className="text-white text-[15px] font-medium no-underline hover:text-[#ff9800] transition font-[Poppins]">Home</Link>
      <Link to="/consult" className="text-white text-[15px] font-medium no-underline hover:text-[#ff9800] transition font-[Poppins]">Consult Now</Link>
      <Link to="/clinics" className="text-white text-[15px] font-medium no-underline hover:text-[#ff9800] transition font-[Poppins]">Find Dental Clinic</Link>
      <Link to="/cbct-opg-lab" className="text-white text-[15px] font-medium no-underline hover:text-[#ff9800] transition font-[Poppins]">CBCT & OPG Lab</Link>
      <Link to="/blood-test-lab" className="text-white text-[15px] font-medium no-underline hover:text-[#ff9800] transition font-[Poppins]">Blood Test Lab</Link>
      <Link to="/shop" className="text-white text-[15px] font-medium no-underline hover:text-[#ff9800] transition font-[Poppins]">Shop Now</Link>
      <Link to="/help-support" className="text-white text-[15px] font-medium no-underline hover:text-[#ff9800] transition font-[Poppins]">Help & Support</Link>
    </nav>
    {/* Centered Heading */}
    <div className="flex-1 flex justify-center">
      <span className="font-bold text-base md:text-lg text-white tracking-wide whitespace-nowrap font-[Poppins]">
        Dental Tourism Clinics <span className="text-[#ff9800]">India</span>
      </span>
    </div>
  </div>
);

export default Header;
