import React from "react";

const linkStyle = "hover:text-[#0a7ffb] transition bg-transparent border-none p-0 m-0 text-inherit cursor-pointer";

const Footer = () => (
  <footer className="w-full bg-[#f8f9fa] border-t border-[#ede7f6] py-6 mt-8 text-center text-gray-600 text-sm">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <button type="button" className={linkStyle}>FAQs</button>
        <button type="button" className={linkStyle}>Visa Info</button>
        <button type="button" className={linkStyle}>Travel Assistance</button>
      </div>
      <div className="mt-2 md:mt-0">&copy; {new Date().getFullYear()} Dental Tourism India</div>
    </div>
  </footer>
);

export default Footer;
