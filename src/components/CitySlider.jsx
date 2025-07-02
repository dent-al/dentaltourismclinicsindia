import React from "react";
import { motion } from "framer-motion";

const cities = [
  { name: "Delhi", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=200&q=80" },
  { name: "Mumbai", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=200&q=80" },
  { name: "Goa", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=200&q=80" },
  { name: "Chennai", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=200&q=80" }
];

const sliderVariants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const CitySlider = () => (
  <motion.div
    className="w-full max-w-5xl mx-auto flex gap-6 overflow-x-auto py-6 px-2"
    variants={sliderVariants}
    initial="initial"
    animate="animate"
  >
    {cities.map(city => (
      <motion.div
        key={city.name}
        className="min-w-[220px] bg-white rounded-xl shadow-lg flex flex-col items-center p-4 border-t-4 border-[#0a7ffb] hover:border-blue-400 transition cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <img src={city.img} alt={city.name} className="w-full h-28 object-cover rounded mb-2" />
        <div className="font-bold text-lg text-[#0a7ffb]">{city.name}</div>
      </motion.div>
    ))}
  </motion.div>
);

export default CitySlider;
