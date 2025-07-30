// VirtualCareReviewsSlider.jsx
import React, { useState } from "react";

const reviews = [
  {
    text: "I was nervous to travel for dental treatment, but the Dental Tourism Clinic made everything easy and transparent. I got expert care, and the environment was clean, friendly, and modern.",
    author: "Tomoko. Y., Japan"
  },
  {
    text: "The online consultation was very convenient. The dentist answered all my questions and helped me plan my treatment before I arrived in India.",
    author: "Michael S., UK"
  },
  {
    text: "I saved a lot of time and money by consulting virtually first. The advice was clear and the follow-up was excellent.",
    author: "Priya R., Australia"
  },
  {
    text: "The virtual care team was very supportive and made me feel comfortable throughout the process. Highly recommended!",
    author: "Ahmed K., UAE"
  }
];

const VirtualCareReviewsSlider = () => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full flex flex-col items-center bg-white py-14 px-2">
      <h2 className="text-3xl md:text-4xl font-bold text-[#2C73D2] text-center mb-10">Virtual Care Reviews</h2>
      <div className="flex items-center justify-center w-full max-w-4xl mx-auto">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#2C73D2] text-[#888] text-2xl font-bold shadow hover:bg-[#2C73D2] hover:text-white transition mr-6"
          aria-label="Previous Review"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" stroke="#2C73D2" strokeWidth="2" fill="white" />
            <path d="M14.5 8L10.5 12L14.5 16" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Patient profile image for reviewer */}
          {(() => {
            const authorRaw = reviews[current].author;
            let patientName = authorRaw.split(',')[0].trim().replace(/\s/g, '');
            let imgSrc;
            const extensions = ["png", "jpg", "jpeg", "webp"];
            let found = false;
            for (let ext of extensions) {
              try {
                imgSrc = require(`../assets/${patientName}.${ext}`);
                found = true;
                break;
              } catch {}
            }
            if (!found) {
              // Try without period if not found
              let altName = patientName.replace(/\./g, "");
              for (let ext of extensions) {
                try {
                  imgSrc = require(`../assets/${altName}.${ext}`);
                  found = true;
                  break;
                } catch {}
              }
            }
            if (!found) {
              imgSrc = require('../assets/doctor1.png');
            }
            return (
              <img src={imgSrc} alt={patientName} className="w-16 h-16 object-cover rounded-full mb-3 border border-blue-200 bg-white" />
            );
          })()}
          <p className="text-[#444] text-lg md:text-2xl text-center mb-6 max-w-2xl font-normal">{reviews[current].text}</p>
          <div className="text-[#15396A] text-xl md:text-2xl font-bold text-center">{reviews[current].author}</div>
        </div>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#2C73D2] text-[#888] text-2xl font-bold shadow hover:bg-[#2C73D2] hover:text-white transition ml-6"
          aria-label="Next Review"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" stroke="#2C73D2" strokeWidth="2" fill="white" />
            <path d="M9.5 8L13.5 12L9.5 16" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VirtualCareReviewsSlider;
