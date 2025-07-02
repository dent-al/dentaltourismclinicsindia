import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <motion.section
    className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[#f8f9fa] text-center"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <h1 className="text-3xl md:text-5xl font-bold text-[#0a7ffb] mb-4">
      Top Dental Clinics in India for International Patients
    </h1>
    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
      Discover world-class dental care, affordable prices, and verified doctors in India’s most popular cities for dental tourism.
    </p>
    <a href="#book-video" className="inline-block bg-[#0a7ffb] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition">Book Video Consultation</a>
  </motion.section>
);

export default HeroSection;
