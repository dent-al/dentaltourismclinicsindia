import React from "react";
import consultImg from "../assets/consult.png";

const HeroBanner = ({ consultBannerImg }) => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-2 md:px-4 py-4 md:py-8 bg-[#2C73D2] rounded-2xl shadow-xl mt-0">
      <div className="flex-1 min-h-[340px] flex flex-col items-start justify-center text-white w-full">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Skip the trip!
          <br />
          Take an online Dental Consultation
        </h1>
        <div className="text-base sm:text-lg md:text-xl font-semibold mb-2">
          Private Consultation + Audio calls + Video calls
        </div>
        <div className="text-sm sm:text-base md:text-lg mb-4">
          Starts at just Rs 399/ USD $ 4.80
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.3">
              {[1,2,3,4].map(num => {
                let imgSrc;
                try {
                  imgSrc = require(`../assets/dentist${num}.png`);
                } catch {
                  imgSrc = require('../assets/consult.png');
                }
                return (
                  <img
                    key={num}
                    src={imgSrc}
                    alt={`Dentist ${num}`}
                    className="w-12 h-12 rounded-full shadow-lg object-cover bg-white"
                  />
                );
              })}
            </div>
          </div>
          <span className="text-base sm:text-lg font-bold text-white ml-2">
            327+ Dentist
          </span>
        </div>
        
        <button
          className="bg-gradient-to-r from-[#F4A300] to-[#2C73D2] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow drop-shadow-md hover:from-[#2C73D2] hover:to-[#F4A300] transition mb-6 border-none"
          type="button"
        >
          Consult Now
        </button>
        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base mt-2">
          <span className="flex items-center gap-2">
            <span className="text-xl">🏅</span>Verified Dentist
          </span>
          <span className="flex items-center gap-2">
            <span className="text-xl">📄</span>Digital Prescription
          </span>
          <span className="flex items-center gap-2">
            <span className="text-xl">💬</span>Free Followup
          </span>
        </div>
      </div>
      <div className="flex-1 min-h-[340px] flex items-center justify-center w-full mt-6 md:mt-0">
        {consultBannerImg ? (
          <img
            src={consultBannerImg}
            alt="Online Dental Consultation"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-lg object-cover"
          />
        ) : (
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-48 sm:h-56 md:h-64 flex items-center justify-center bg-[#2C73D2] rounded-2xl border-2 border-[#2C73D2] text-white text-lg sm:text-xl font-bold">
            Banner Image Coming Soon
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
