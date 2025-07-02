import React from "react";

const ClinicCard = ({ clinic }) => (
  <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-4 border-t-4 border-[#0a7ffb] hover:border-blue-400 transition">
    <img src={clinic.img} alt={clinic.name} className="w-full h-32 object-cover rounded mb-2" />
    <div className="font-bold text-lg text-[#0a7ffb] mb-1">{clinic.name}</div>
    <div className="text-gray-600 mb-1">{clinic.treatment}</div>
    <div className="text-yellow-500 mb-1">Rating: {clinic.rating} ⭐</div>
    <div className="text-[#0a7ffb] font-semibold mb-2">${clinic.price} USD</div>
    <a href="#book-video" className="px-4 py-2 rounded-lg bg-[#0a7ffb] text-white font-semibold shadow hover:bg-blue-700 transition">Book Now</a>
  </div>
);

export default ClinicCard;
