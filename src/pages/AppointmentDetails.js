import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AppointmentDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const clinic = state?.clinic || {};
  const date = state?.date;
  const slot = state?.slot;

  const [forWhom, setForWhom] = useState("myself");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("+917206685462");
  const [email, setEmail] = useState("");
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);
  // Removed paymentOption state

  return (
    <div className="min-h-screen bg-[#F4F6FA] w-full flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Left: Appointment Info */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex-1 mb-8">
          <div className="font-bold text-lg mb-2 flex items-center gap-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#E6F7FF"/><path d="M7 7h10v10H7V7z" stroke="#1890FF" strokeWidth="2"/></svg>
            In-clinic Appointment
          </div>
          <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center gap-2 text-[#2056AE] font-semibold">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#E6F7FF"/><path d="M7 7h10v10H7V7z" stroke="#1890FF" strokeWidth="2"/></svg>
              On {new Date(date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}
            </div>
            <div className="flex items-center gap-2 text-[#2056AE] font-semibold">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#E6F7FF"/><path d="M7 7h10v10H7V7z" stroke="#1890FF" strokeWidth="2"/></svg>
              at {slot}
            </div>
          </div>
          <button className="text-[#1890FF] underline text-sm mb-2" onClick={() => navigate(-1)}>Change Date & Time</button>
          <div className="flex items-center gap-4 mb-4">
            <img src={clinic.Image || clinic.image} alt={clinic.Name || clinic.name} className="h-16 w-16 object-cover rounded-full border-2 border-[#2C73D2] shadow" />
            <div>
              <div className="font-bold text-base text-[#2056AE]">{clinic.Name || clinic.name}</div>
              <div className="text-gray-700 text-sm">{clinic.Specialty || clinic.specialty}</div>
              <div className="text-gray-600 text-xs">{clinic.Description || "Orthodontist, Dentist, Dental Surgeon"}</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={clinic.Logo || clinic.logo} alt="clinic logo" className="h-12 w-12 object-cover rounded-xl" />
            <div>
              <div className="font-bold text-base text-[#2056AE]">{clinic.Name || clinic.name}</div>
              <div className="text-gray-700 text-sm">{clinic.Address || clinic.address}</div>
              <button className="text-[#1890FF] underline text-xs mt-1">Get Directions</button>
            </div>
          </div>
          <button className="text-[#1890FF] underline text-sm mt-4" onClick={() => navigate(-1)}>Go back to my results</button>
        </div>
        {/* Right: Patient Details */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
          <div className="font-bold text-lg mb-4 text-[#2056AE]">Patient Details</div>
          <div className="mb-4">
            <div className="font-semibold mb-2">This in-clinic appointment is for:</div>
            <div className="flex gap-4">
              <label className={`flex items-center gap-2 border rounded px-4 py-2 cursor-pointer ${forWhom === 'myself' ? 'border-[#2056AE]' : 'border-gray-300'}`}>
                <input type="radio" checked={forWhom === 'myself'} onChange={() => setForWhom('myself')} /> Myself
              </label>
              <label className={`flex items-center gap-2 border rounded px-4 py-2 cursor-pointer ${forWhom === 'someone' ? 'border-[#2056AE]' : 'border-gray-300'}`}>
                <input type="radio" checked={forWhom === 'someone'} onChange={() => setForWhom('someone')} /> Someone Else
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="font-semibold mb-2">Please provide following information about user:</div>
            <input type="text" className="border rounded px-3 py-2 w-full mb-2" placeholder="Enter Your Full Name" value={name} onChange={e => setName(e.target.value)} />
            <div className="relative mb-2">
              <input type="text" className="border rounded px-3 py-2 w-full pr-10" placeholder="Mobile*" value={mobile} onChange={e => setMobile(e.target.value)} />
              <span className="absolute right-3 top-2 text-gray-400"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#E6F7FF"/><path d="M7 7h10v10H7V7z" stroke="#1890FF" strokeWidth="2"/></svg></span>
            </div>
            <input type="email" className="border rounded px-3 py-2 w-full mb-2" placeholder="Enter Your Email ID (Optional)" value={email} onChange={e => setEmail(e.target.value)} />
            <label className="flex items-center gap-2 mb-2 text-sm">
              <input type="checkbox" checked={whatsappUpdates} onChange={e => setWhatsappUpdates(e.target.checked)} />
              Get updates on WhatsApp number +917206685462
            </label>
          </div>
          <button className="bg-[#2056AE] text-white px-6 py-3 rounded-xl shadow font-bold w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed">
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
