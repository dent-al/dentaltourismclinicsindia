import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const AppointmentConfirmPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clinic, timeSlot } = location.state || {};
  const [mobile, setMobile] = useState("");

  if (!clinic || !timeSlot) {
    navigate('/clinics');
    return null;
  }

  // Map all possible property names for compatibility
  const clinicName = clinic.Name || clinic.name || 'Clinic Name';
  const clinicImage = clinic.Image || clinic.image || require('../assets/clinic.png');
  const clinicAddress = clinic.Address || clinic.address || '';
  const clinicCity = clinic.City || clinic.city || '';
  const clinicState = clinic.State || clinic.state || '';

  // Doctor info (if available)
  const doctorName = clinic.DoctorName || clinic.doctorName || '';
  const doctorSpecialty = clinic.DoctorSpecialty || clinic.doctorSpecialty || '';
  const doctorImage = clinic.DoctorImage || clinic.doctorImage || '';

  // Date (today for demo)
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <div className="min-h-screen bg-[#f7f8fa] flex justify-center items-start py-10 px-2">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 p-6 md:p-10">
        {/* Left: Appointment Details */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="font-bold text-lg text-[#2C73D2] flex items-center gap-2">
            <span className="inline-block bg-[#eaf3ff] rounded-full p-2">
              <svg className="w-6 h-6 text-[#2C73D2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-5a2 2 0 00-2-2h-1V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v7H7a2 2 0 00-2 2v5a2 2 0 002 2z" /></svg>
            </span>
            In-clinic Appointment
          </div>
          <div className="flex items-center gap-4 text-base text-gray-700">
            <span className="font-semibold">On {dateStr}</span>
            <span className="font-semibold">At {timeSlot}</span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            {doctorImage && <OptimizedImage 
              src={doctorImage} 
              alt={doctorName} 
              className="w-16 h-16 rounded-full object-cover border-2 border-[#2C73D2]" 
            />}
            <div>
              <div className="font-bold text-[#2C73D2]">{doctorName}</div>
              <div className="text-gray-700 text-sm">{doctorSpecialty}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <OptimizedImage 
              src={clinicImage} 
              alt={clinicName} 
              className="w-16 h-16 rounded-xl object-cover border-2 border-[#2C73D2]" 
            />
            <div>
              <div className="font-bold text-[#2C73D2]">{clinicName}</div>
              <div className="text-gray-700 text-sm">{clinicAddress}, {clinicCity}, {clinicState}</div>
              <a href={clinic.Directions || '#'} target="_blank" rel="noopener noreferrer" className="text-[#2C73D2] underline text-sm">Get Directions</a>
            </div>
          </div>
        </div>
        {/* Right: Mobile Number Form */}
        <div className="flex-1 flex flex-col items-center justify-center bg-[#f7f7f7] rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-[#2C73D2] mb-4">Enter your mobile number</h2>
          <form className="w-full flex flex-col gap-4" onSubmit={e => { e.preventDefault(); /* handle submit */ }}>
            <label className="text-base font-medium text-gray-700">Mobile*</label>
            <input
              type="tel"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              placeholder="Mobile Number"
              className="w-full px-4 py-2 rounded-lg border border-[#2C73D2] text-[#2C73D2] text-base focus:outline-none focus:border-[#F4A300] bg-white font-sans placeholder-gray-400"
              required
            />
            <div className="text-xs text-gray-500 mb-2">You will receive an OTP shortly.<br />We will send appointment-related communications on this number.</div>
            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-bold shadow hover:from-[#F4A300] hover:to-[#2C73D2] transition mt-2">Continue</button>
          </form>
          <a href="/clinics" className="text-[#2C73D2] text-sm mt-4 underline">Go back to my results</a>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmPage;
