import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import LoginRolePopup from "./LoginRolePopup";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Consult Now", to:"/consult"  },
  { name: "Dental Clinics", to: "/clinics" },
  { name: "Dental Scans", to: "/cbct-opg-lab" },
  { name: "Blood Test Labs", to: "/blood-test-lab" },
  { name: "Dental Essentials", to: "/shop" },
  { name: "Fix My Teeth", to: "/fix-my-teeth" },
  { name: "Support", to: "/help" },
  { name: "Log In", to: "/login" }, // Ensure login is always present
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rolePopup, setRolePopup] = useState(false);

  return (
    <header className="bg-[#2C73D2] shadow-sm sticky top-0 z-50 w-full font-[Poppins]" style={{ minHeight: '74px', paddingBottom: 0 }}>
      <LoginRolePopup open={rolePopup} onClose={() => setRolePopup(false)} onSelect={(role) => { setRolePopup(false); window.location.href = '/login?role=' + role; }} />
      <div className="max-w-7xl mx-auto flex items-center py-3 px-4 w-full">
        {/* Logo & Brand (compact like image) */}
        <div className="flex items-center justify-start min-w-0 relative">
          <img
            src={logo}
            alt="Dental Tourism Clinics India Logo"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
          />
          {/* Ultra-hidden admin access - tiny invisible dot */}
          <Link 
            to="/admin/login"
            className="absolute top-0 right-0 w-2 h-2 opacity-0 hover:opacity-20 transition-opacity duration-1000"
            title="Admin"
            style={{ 
              background: 'transparent',
              fontSize: '1px',
              zIndex: 10
            }}
          >
            ⚫
          </Link>
          <span
            className="font-extrabold drop-shadow-lg text-lg md:text-xl lg:text-2xl leading-tight text-left ml-3"
            style={{
              lineHeight: "1.1",
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              letterSpacing: '0.5px',
              background: 'linear-gradient(135deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
              filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))',
            }}
          >
            Dental Tourism{" "}
            <span style={{ display: "block" }}>Clinics India</span>
          </span>
        </div>
        
        {/* Vertical Separator */}
        <div className="hidden md:block h-8 w-0.5 bg-white mx-6"></div>
        
        {/* Navigation (Desktop) - directly positioned like image */}
        <nav className="hidden md:flex gap-3 items-center">
          {navLinks.map((link) => (
            link.to === "/login" ? null : (
              <Link
                key={link.name}
                to={link.to}
                className="text-white font-semibold hover:text-[#F4A300] transition text-sm md:text-base whitespace-nowrap"
              >
                {link.name}
              </Link>
            )
          ))}
          
          {/* Login Button (Simple circular icon like image) */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white text-white font-semibold bg-[#2C73D2] hover:bg-white hover:text-[#2C73D2] transition ml-4"
            onClick={() => setRolePopup(true)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z"
              />
            </svg>
          </button>
          
          {/* Language Switcher */}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </nav>
        {/* Mobile: Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-white ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#2C73D2] shadow-lg border-t border-white px-4 py-4 flex flex-col gap-2 animate-fade-in absolute w-full left-0 top-full z-50">
          {navLinks.map((link) => (
            link.to === "/login" ? (
              <button
                key={link.name}
                className="flex items-center gap-2 px-6 py-2 rounded-full border-2 border-white text-white font-semibold bg-[#2C73D2] hover:bg-white hover:text-[#2C73D2] transition mt-2 text-base whitespace-nowrap"
                onClick={() => { setMenuOpen(false); setRolePopup(true); }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z"
                  />
                </svg>
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.to}
                className="text-white font-semibold py-2 text-base hover:text-[#F4A300]"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          {/* Mobile Language Switcher */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
