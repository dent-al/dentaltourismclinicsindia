import React, { useState } from "react";
import OtpVerification from "./OtpVerification";

const countryCodes = [
  { code: "+91", name: "India" },
  { code: "+1", name: "USA/Canada" },
  { code: "+44", name: "UK" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+49", name: "Germany" },
  { code: "+33", name: "France" },
  { code: "+39", name: "Italy" },
  { code: "+86", name: "China" },
  { code: "+971", name: "UAE" },
  { code: "+7", name: "Russia" },
  { code: "+65", name: "Singapore" },
  { code: "+60", name: "Malaysia" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+27", name: "South Africa" },
  { code: "+34", name: "Spain" },
  { code: "+41", name: "Switzerland" },
  { code: "+82", name: "South Korea" },
  { code: "+852", name: "Hong Kong" },
  { code: "+62", name: "Indonesia" },
  { code: "+63", name: "Philippines" },
  { code: "+64", name: "New Zealand" },
  { code: "+20", name: "Egypt" },
  { code: "+90", name: "Turkey" },
  { code: "+351", name: "Portugal" },
  { code: "+46", name: "Sweden" },
  { code: "+31", name: "Netherlands" },
  { code: "+32", name: "Belgium" },
  { code: "+52", name: "Mexico" },
  { code: "+55", name: "Brazil" },
  { code: "+30", name: "Greece" },
  { code: "+420", name: "Czech Republic" },
  { code: "+48", name: "Poland" },
  { code: "+353", name: "Ireland" },
  { code: "+47", name: "Norway" },
  { code: "+45", name: "Denmark" },
  { code: "+358", name: "Finland" },
  { code: "+43", name: "Austria" },
  { code: "+36", name: "Hungary" },
  { code: "+380", name: "Ukraine" },
  { code: "+386", name: "Slovenia" },
  { code: "+421", name: "Slovakia" },
  { code: "+386", name: "Slovenia" },
  { code: "+420", name: "Czech Republic" },
  { code: "+386", name: "Slovenia" },
  { code: "+386", name: "Slovenia" },
  // ...add more as needed
];

const sliderData = [
  {
    img: "/logo-dental-tourism.png",
    title: "Discover India's Top Dental Clinics 🦷",
    desc: "World-class treatment, affordable pricing, expert dentists."
  },
  {
    img: "/video-consultation.png",
    title: "Instant Video Consultations",
    desc: "Connect with top dentists from anywhere in the world."
  },
  {
    img: "/logo192.png",
    title: "Trusted by Thousands",
    desc: "Join our global community of happy smiles!"
  }
];

const PhoneRegistration = ({ onContinue }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [showOtp, setShowOtp] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  // Auto-slide every 4 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSliderIndex((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [sliderIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }
    setError("");
    setShowOtp(true);
  };

  const handleOtpVerify = (otp) => {
    // Here you would typically verify the OTP with your backend
    console.log('Verifying OTP:', otp);
    onContinue && onContinue(countryCode + phone);
  };

  const goToSlide = (idx) => setSliderIndex(idx);
  const prevSlide = () => setSliderIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  const nextSlide = () => setSliderIndex((prev) => (prev + 1) % sliderData.length);

  if (showOtp) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md">
          <OtpVerification 
            phoneNumber={`${countryCode} ${phone}`}
            onVerify={handleOtpVerify}
            onBack={() => setShowOtp(false)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="parent min-h-screen bg-gray-100" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(5, 1fr)', gap: 8 }}>
      {/* Phone Input Box */}
      <div className="div3 flex flex-col justify-center items-center bg-black/20 backdrop-blur-lg" style={{ gridColumn: '2 / span 2', gridRow: '1 / span 5', borderRadius: 32 }}>
        <div className="w-full max-w-md flex flex-col justify-center items-center h-full" style={{ height: 500, width: 500, minWidth: 500, maxWidth: 500 }}>
          <h2 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 24 }}>
            Video consult top dentists from the comfort of your home
          </h2>
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-4">
            <div className="flex w-full max-w-[400px] bg-white/90 shadow-lg rounded-full overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500" style={{ borderRadius: 40 }}>
              <select
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
                className="px-4 py-3 bg-transparent text-gray-800 focus:outline-none text-base font-medium font-poppins"
                style={{ height: 0 }}
              >
                {countryCodes.map(({ code, name }) => (
                  <option key={code} value={code}>{code} {name}</option>
                ))}
              </select>
              <input
                type="tel"
                maxLength={10}
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/, ""))}
                placeholder="Mobile number"
                className="flex-1 px-4 py-3 bg-transparent text-gray-800 focus:outline-none text-base font-medium font-poppins"
                style={{ borderRadius: 40, height: 40, width: 320 }}
                required
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center w-full max-w-[400px] font-poppins">{error}</div>
            )}
            <button
              type="submit"
              className="bg-blue-600 font-semibold rounded-full text-lg font-poppins shadow transition"
              style={{ borderRadius: 40, height: 40, width: 300, margin: '32px auto 0 auto', display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: 18, backgroundColor: '#2563eb', color: '#fff', border: 'none' }}
              onMouseOver={e => { e.target.style.backgroundColor = 'black'; e.target.style.color = 'white'; }}
              onMouseOut={e => { e.target.style.backgroundColor = '#2563eb'; e.target.style.color = '#fff'; }}
            >
              Continue
            </button>
            <div className="flex w-full max-w-[400px] justify-center">
              <a href="#" className="text-sm hover:underline block text-center mt-2 text-white font-poppins">
                Trouble signing in?
              </a>
            </div>
          </form>
        </div>
      </div>
      {/* Banner/Slider Box */}
      <div className="div4 flex flex-col justify-center items-center bg-blue-100" style={{ gridColumn: '4 / span 2', gridRow: '1 / span 5', borderRadius: 32 }}>
        <div className="relative w-full max-w-md mx-auto flex flex-col items-center">
          <img src={sliderData[sliderIndex].img} alt="App Banner" className="w-40 h-40 mx-auto mb-4 rounded-2xl shadow-lg object-cover border-2 border-white transition-all duration-500" />
          <h3 className="text-2xl font-bold text-blue-800 text-center">{sliderData[sliderIndex].title}</h3>
          <p className="text-gray-700 mt-4 text-center">{sliderData[sliderIndex].desc}</p>
          {/* Slider Controls */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <button onClick={prevSlide} className="bg-white rounded-full shadow p-2 hover:bg-blue-200 transition" aria-label="Previous Slide">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            {sliderData.map((_, idx) => (
              <span key={idx} onClick={() => goToSlide(idx)} className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${sliderIndex === idx ? 'bg-blue-800' : 'bg-blue-300'}`}></span>
            ))}
            <button onClick={nextSlide} className="bg-white rounded-full shadow p-2 hover:bg-blue-200 transition" aria-label="Next Slide">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneRegistration;
