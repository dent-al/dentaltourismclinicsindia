import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import LoginRolePopup from "./LoginRolePopup";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Consult Now", to:"/consult"  },
  { name: "Dental Clinics", to: "/clinics" },
  { name: "Dental Scans", to: "/cbct-opg-lab" },
  { name: "Blood Test Labs", to: "/blood-test-lab" },
  { name: "Dental Essentials", to: "/shop" },
  
  { name: "Log In", to: "/login" }, // Ensure login is always present
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rolePopup, setRolePopup] = useState(false);

  return (
    <header className="bg-[#2C73D2] shadow-sm sticky top-0 z-50 w-full font-[Poppins]" style={{ minHeight: '74px', paddingBottom: 0 }}>
      <LoginRolePopup open={rolePopup} onClose={() => setRolePopup(false)} onSelect={(role) => { setRolePopup(false); window.location.href = '/login?role=' + role; }} />
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-2 md:px-4 w-full">
        {/* Logo & Brand (left) */}
        <div className="flex items-center flex-shrink-0 w-auto justify-start min-w-0">
          <img
            src={logo}
            alt="Dental Tourism Clinics India Logo"
            className="w-24 h-24 rounded-full object-cover min-w-0"
          />
          <span
            className="font-extrabold text-white drop-shadow-lg text-lg md:text-2xl lg:text-3xl leading-tight whitespace-nowrap text-left ml-2 truncate"
            style={{
              lineHeight: "1.1",
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              letterSpacing: '0.5px',
              textShadow: '2px 2px 8px rgba(44,115,210,0.3), 0 1px 0 #fff',
            }}
          >
            Dental Tourism{" "}
            <span style={{ display: "block" }}>Clinics India</span>
          </span>
        </div>
        {/* Divider between logo/brand and menu */}
        <div className="hidden md:block h-12 border-l-2 border-white mx-2" style={{ minHeight: '48px' }}></div>
        {/* Right: Navigation (Desktop) */}
        <nav className="hidden md:flex gap-5 items-center ml-auto">
          {navLinks.map((link) => (
            link.to === "/login" ? (
              <button
                key={link.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white text-white font-semibold bg-[#2C73D2] hover:bg-white hover:text-[#2C73D2] transition text-lg md:text-xl ml-2 whitespace-nowrap"
                style={{ minWidth: "48px" }}
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
            ) : (
              <Link
                key={link.name}
                to={link.to}
                className="text-white font-semibold hover:text-[#F4A300] transition text-lg md:text-xl whitespace-nowrap"
              >
                {link.name}
              </Link>
            )
          ))}
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
        </div>
      )}
    </header>
  );
};

export default Header;
