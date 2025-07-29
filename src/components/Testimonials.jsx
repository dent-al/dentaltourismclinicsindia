import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anna, UK",
    text: "I had a wonderful experience! The doctors were professional and the prices were unbeatable.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "John, USA",
    text: "Traveling to India for dental care was the best decision. Highly recommend!",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Maria, Australia",
    text: "Clean clinics, friendly staff, and great results. Thank you!",
    img: "https://randomuser.me/api/portraits/women/47.jpg"
  }
];

const Testimonials = () => (
  <motion.section
    className="w-full max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    {testimonials.map(t => (
      <motion.div
        key={t.name}
        className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6 border-t-4 border-[#0a7ffb] hover:border-blue-400 transition"
        whileHover={{ scale: 1.05 }}
      >
        <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-2 border-2 border-[#0a7ffb]" />
        <div className="font-bold text-[#0a7ffb] mb-1">{t.name}</div>
        <div className="text-gray-600 text-center">{t.text}</div>
      </motion.div>
    ))}
  </motion.section>
);

export default Testimonials;
