import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState("");
  const [activeTab, setActiveTab] = useState("info");
  const slots = ["03:50 PM", "04:20 PM", "04:40 PM", "05:00 PM", "05:20 PM"];

  let clinic = location.state?.clinic;
  // Fallback: get from localStorage if not in navigation state
  if (!clinic) {
    const stored = localStorage.getItem('selectedClinic');
    if (stored) {
      clinic = JSON.parse(stored);
    }
  }

  if (!clinic) {
    navigate('/clinics');
    return null;
  }

  // Map all possible property names for compatibility
  const clinicName = clinic.Name || clinic.name || 'Clinic Name';
  const clinicImage = clinic.Image || clinic.image || require('../assets/clinic.png');
  const clinicRating = clinic.Rating || clinic.rating || 'N/A';
  const clinicCity = clinic.City || clinic.city || '';
  const clinicState = clinic.State || clinic.state || '';
  const clinicAddress = clinic.Address || clinic.address || '';
  const clinicFee = clinic.Fee || clinic.fee || 'N/A';
  const clinicTimings = clinic.Timings || clinic.timings || clinic.OpenTime || clinic.openTime || 'N/A';

  const handleBook = () => {
    if (!selectedSlot) return;
    navigate('/appointment-confirm', { state: { clinic, timeSlot: selectedSlot } });
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] flex justify-center items-start py-10 px-2">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg flex flex-col gap-8 p-6 md:p-10">
        {/* Tab Navigation - Modern Gen-Z style */}
        <div className="flex gap-6 mb-6 border-b pb-2 pl-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {[
            { key: 'info', label: 'Info' },
            { key: 'consult', label: 'Consult Q&A' },
            { key: 'healthfeed', label: 'Healthfeed' },
            { key: 'profile', label: 'Dentist Profile' },
            { key: 'services', label: 'Services' }
          ].map(tab => (
            <button
              key={tab.key}
              className={`text-[#2C73D2] font-semibold text-base px-1 pb-1 focus:outline-none transition-all duration-150 ${activeTab === tab.key ? 'font-bold border-b-2 border-[#2C73D2]' : 'border-b-2 border-transparent'} cursor-pointer`}
              onClick={() => setActiveTab(tab.key)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        {activeTab === 'info' && (
          <div className="bg-[#f7f7f7] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-[#2C73D2] mb-4">Clinic Info</h3>
            <div className="flex items-center gap-6 mb-4">
              <OptimizedImage
                src={clinicImage}
                alt={clinicName}
                className="h-20 w-20 object-cover rounded-full border-2 border-[#2C73D2] shadow"
              />
              <div>
                <span className="font-bold text-[#2C73D2] text-lg">{clinicName}</span>
                <div className="mt-1 text-gray-700 text-base font-semibold">
                  {clinicAddress}
                </div>
                <div className="text-gray-700 text-base mt-1">{clinicCity}{clinicCity && clinicState ? ', ' : ''}{clinicState}</div>
                <div className="text-base text-[#2C73D2] font-semibold mt-1">Fee: ₹{clinicFee}</div>
                <div className="text-base text-gray-700 mt-1">Timings: {clinicTimings}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center gap-1 text-[#F4A300] font-semibold">
                {clinicRating}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill={i < Math.round(clinicRating) ? '#F4A300' : '#e5e7eb'} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 0 0-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z" /></svg>
                ))}
              </span>
              <span className="text-gray-500 text-sm">as per Google reviews</span>
            </div>
          </div>
        )}
        {activeTab === 'consult' && (
          <div className="bg-[#f7f7f7] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-[#2C73D2] mb-4">Consult Q&amp;A</h3>
            <div className="text-gray-700 text-base">Ask questions and get answers from our dental experts.</div>
          </div>
        )}
        {activeTab === 'healthfeed' && (
          <div className="bg-[#f7f7f7] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-[#2C73D2] mb-4">Healthfeed</h3>
            <div className="text-gray-700 text-base">Read articles and tips for better dental health.</div>
          </div>
        )}
        {activeTab === 'profile' && (
          <div className="bg-[#f7f7f7] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-[#2C73D2] mb-4">Dentist Profile</h3>
            <div className="flex items-center gap-6">
              <OptimizedImage
                src={clinic.DoctorImage || require('../assets/doctor1.png')}
                alt="Dentist"
                className="h-20 w-20 object-cover rounded-full border-2 border-[#2C73D2] shadow"
              />
              <div>
                <span className="font-bold text-[#2C73D2] text-lg">Dentist</span>
                <div className="mt-1 text-gray-700 text-base font-semibold">
                  {clinic.DoctorProfile || clinic.doctorProfile || clinic.Description || 'Dr. Venkatesh.MJ is a Dentist in Basavanagudi, Bangalore.'}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'services' && (
          <div className="bg-[#f7f7f7] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-[#2C73D2] mb-4">Services</h3>
            <span className="font-bold text-[#2C73D2] text-base">Services:</span>
            <span className="ml-2 text-gray-700 text-base">
              {clinic.Services || clinic.services || clinic.Specialty || clinic.specialty || 'General Dentistry, Cosmetic Dentistry, Implants, Braces, Root Canal, Cleaning'}
            </span>
          </div>
        )}
        {/* Booking Slot Section */}
        <div className="flex-1 bg-[#f7f7f7] rounded-xl p-6 flex flex-col items-center shadow-md">
          <h3 className="text-xl font-bold text-[#2C73D2] mb-4">Pick a time slot</h3>
          <div className="w-full flex flex-col gap-2 mb-4">
            {slots.map(slot => (
              <button
                key={slot}
                className={`w-full py-2 rounded-lg border border-[#2C73D2] font-semibold transition ${selectedSlot === slot ? 'bg-[#2C73D2] text-white' : 'text-[#2C73D2] hover:bg-[#2C73D2] hover:text-white'}`}
                onClick={() => setSelectedSlot(slot)}
                type="button"
              >
                {slot}
              </button>
            ))}
          </div>
          <button
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-bold shadow hover:from-[#F4A300] hover:to-[#2C73D2] transition mt-2 disabled:opacity-50"
            onClick={handleBook}
            disabled={!selectedSlot}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
