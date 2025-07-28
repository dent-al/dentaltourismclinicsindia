// ConsultNowBanner.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ConsultNowBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#2C73D2] py-8 px-2 flex flex-col items-center justify-center rounded-xl shadow-lg mb-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2 leading-snug">Why wait? Your smile deserves care!</h2>
      <p className="text-white text-sm sm:text-base md:text-lg text-center mb-6">Connect with India's top dentist online</p>
      <button
        onClick={() => navigate('/consult')}
        className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-[#F4A300] text-[#F4A300] text-lg sm:text-xl font-bold rounded-lg bg-white hover:bg-[#F4A300] hover:text-white transition shadow-md"
      >
        Consult Now
      </button>
    </div>
  );
};

export default ConsultNowBanner;
