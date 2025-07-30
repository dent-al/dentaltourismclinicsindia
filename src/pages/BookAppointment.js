import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Generate time slots for each day
const defaultSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"
];

// Generate next 5 years of days
function getDaysForFiveYears() {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 5 * 365; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      label: d.toLocaleDateString("en-US", { weekday: "short", day: "2-digit", month: "short", year: "numeric" }),
      value: d.toISOString().slice(0, 10), // YYYY-MM-DD
      slots: defaultSlots.length,
      dateObj: d
    });
  }
  return days;
}

const allDays = getDaysForFiveYears();

const BookAppointment = () => {
  const { state } = useLocation();
  const clinic = state?.clinic || {};
  const [activeTab, setActiveTab] = useState("info");
  const navigate = useNavigate();
  // Story modal state
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [story, setStory] = useState({
    recommend: null,
    problem: "",
    waitTime: "",
    improvements: [],
    experience: "",
    name: "",
    phone: "",
    anonymous: false,
  });
  const [stories, setStories] = useState([]);
  // Add state for selected slot
  const [selectedSlot, setSelectedSlot] = useState("");
  // Start with today
  const [selectedDate, setSelectedDate] = useState(allDays[0].value);

  function handleStorySubmit() {
    if (
      story.recommend === null ||
      !story.problem ||
      !story.waitTime ||
      !story.improvements.length ||
      !story.experience
    ) {
      alert("Please fill all required fields.");
      return;
    }
    setStories([...stories, story]);
    setShowStoryModal(false);
    setStory({
      recommend: null,
      problem: "",
      waitTime: "",
      improvements: [],
      experience: "",
      name: "",
      phone: "",
      anonymous: false,
    });
  }

  return (
    <div className="min-h-screen bg-[#F4F6FA] w-full flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Left: Doctor/Clinic Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex-1 flex flex-col items-center">
          <img
            src={clinic.Image || clinic.image}
            alt={clinic.Name || clinic.name}
            className="h-32 w-32 object-cover rounded-full border-4 border-[#2C73D2] shadow-lg mb-4"
          />
          <div className="font-bold text-2xl mb-1 text-[#2056AE]">
            {clinic.Name || clinic.name}
          </div>
          <div className="text-gray-600 mb-1 text-base font-medium flex items-center justify-center" style={{lineHeight: '1.5'}}>
            <img src={require('../assets/location.png')} alt="Location" className="w-5 h-5 mr-1 inline-block align-middle" style={{minWidth: '20px', height: '20px'}} />
            <span className="align-middle" style={{fontSize: '1.1rem'}}>{clinic.City || clinic.city}, {clinic.State || clinic.state}</span>
          </div>
          <div className="text-[#2056AE] mb-1 text-base font-semibold flex items-center justify-center">
            <img src={require('../assets/location.png')} alt="Location" className="w-5 h-5 mr-1 inline-block align-middle" style={{minWidth: '20px', height: '20px'}} />
            <span className="align-middle font-bold text-[#2056AE] underline" style={{fontSize: '1.1rem'}}>{clinic.Address || clinic.address}</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#F4A300] font-bold text-lg">
              {clinic.Rating || clinic.rating}
            </span>
            <span className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(Number(clinic.Rating || clinic.rating))
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                </svg>
              ))}
            </span>
            <span className="text-gray-500 text-sm">as per Google reviews</span>
          </div>
          <div className="text-green-600 font-semibold mt-2 mb-1">
            Dental Registration Verified
          </div>
          <div className="text-[#1BC47D] font-bold mb-2">
            87%{" "}
            <span className="font-normal text-gray-600">(53 patients)</span>
          </div>
          <div className="text-gray-700 mb-2 text-base">
            {clinic.Description ||
              "Dr. Venkatesh.MJ is a Dentist in Basavanagudi, Bangalore. The doctor practices at All Care Dental Centre in Basavanagudi, Bangalore."}
          </div>
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            <span className="bg-[#2056AE] text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
              Trusted Care. Lasting Smiles.
            </span>
            <span className="bg-[#F4A300] text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
              Dental Tourism Clinics India
            </span>
          </div>
          {/* Info section moved here below the badges */}
          <div className="mb-2 text-[#2056AE] font-semibold text-base">
            {clinic.City || clinic.city}, {clinic.State || clinic.state}
          </div>
          <div className="mb-2">
            <a
              href="#"
              className="text-[#2056AE] underline font-bold text-base"
            >
              {clinic.Name || clinic.name} - since 1969
            </a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#F4A300] font-bold">
              {clinic.Rating || "4.5"}
            </span>
            <span className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(Number(clinic.Rating || 4.5))
                      ? "text-green-500"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                </svg>
              ))}
            </span>
          </div>
          <div className="mb-2 text-gray-700 text-base">
            {clinic.Address || clinic.address}
          </div>
          <div className="mb-2 text-gray-700 text-base">
            Mon - Sun <span className="ml-2">09:30 AM - 07:45 PM</span>
          </div>
          <div className="mb-2 text-[#2056AE] underline cursor-pointer">
            Get Directions
          </div>
          <div className="flex gap-2 mb-2">
            <img
              src={clinic.Image || clinic.image}
              alt="clinic"
              className="h-12 w-12 object-cover rounded-xl"
            />
          </div>
          <div className="text-gray-600 text-xs mb-2">
            Dental Tourism Clinics India. If you are a doctor and interested to know more{' '}
            <a href="#" className="text-[#2056AE] underline">Click here</a>
          </div>
        </div>
        {/* Right: Pick a time slot */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex-1 min-w-[340px]">
          <div className="font-bold text-xl mb-2 text-[#2056AE]">
            Pick a time slot
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="bg-[#F4F8FF] px-3 py-1 rounded text-[#2056AE] font-semibold">
            Clinic Appointment
          </span>
          <span className="text-[#2056AE] font-bold">
            ₹ {clinic.Fee || "300"} fee <span className="text-gray-500 font-normal text-sm">(3.49 USD)</span>
          </span>
          </div>
          <div className="mb-2 text-gray-700 font-medium">
            {clinic.Name || clinic.name} - since 1969
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#F4A300] font-bold">
              {clinic.Rating || "4.5"}
            </span>
            <span className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(Number(clinic.Rating || 4.5))
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                </svg>
              ))}
            </span>
            <span className="text-gray-500 text-sm">Verified details</span>
          </div>
          <div className="mb-2 text-gray-600">
            {clinic.City || clinic.city}, {clinic.State || clinic.state}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <button
              className="text-gray-400 text-xl px-2"
              onClick={() => {
                const idx = allDays.findIndex(d => d.value === selectedDate);
                if (idx > 0) setSelectedDate(allDays[idx - 1].value);
              }}
              disabled={selectedDate === allDays[0].value}
              aria-label="Previous day"
            >
              &#8592;
            </button>
            {/* Day selector: show 3 days (current, next, next-next) */}
            {allDays.slice(Math.max(0, allDays.findIndex(d => d.value === selectedDate)), Math.max(3, allDays.findIndex(d => d.value === selectedDate) + 3)).map((d) => (
              <div
                key={d.value}
                className="flex flex-col items-center px-2 cursor-pointer"
                onClick={() => { setSelectedDate(d.value); setSelectedSlot(""); }}
              >
                <span className={`font-semibold text-base ${selectedDate === d.value ? 'text-[#2056AE]' : 'text-gray-700'}`}>{d.label}</span>
                <span className="text-[#1BC47D] text-sm">{d.slots} Slots Available</span>
                {selectedDate === d.value && <div className="h-1 w-8 bg-[#00BFFF] mt-1 rounded-full" />}
              </div>
            ))}
            <button
              className="text-gray-400 text-xl px-2"
              onClick={() => {
                const idx = allDays.findIndex(d => d.value === selectedDate);
                if (idx < allDays.length - 1) setSelectedDate(allDays[idx + 1].value);
              }}
              disabled={selectedDate === allDays[allDays.length - 1].value}
              aria-label="Next day"
            >
              &#8594;
            </button>
          </div>
          {/* Time slots section */}
          <div className="mb-2 font-semibold text-[#2056AE]">Morning (6 slots)</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {defaultSlots.slice(0, 6).map((slot) => (
              <button
                key={slot}
                className={`border-2 rounded-lg px-2 py-1 font-semibold transition text-xs w-full ${selectedSlot === slot ? 'border-[#1890FF] bg-[#E6F7FF] text-[#1890FF]' : 'border-[#2C73D2] text-[#2056AE] hover:bg-[#F4F8FF]'}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          <div className="mb-2 font-semibold text-[#2056AE]">Afternoon (6 slots)</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {defaultSlots.slice(6, 14).map((slot) => (
              <button
                key={slot}
                className={`border-2 rounded-lg px-2 py-1 font-semibold transition text-xs w-full ${selectedSlot === slot ? 'border-[#1890FF] bg-[#E6F7FF] text-[#1890FF]' : 'border-[#2C73D2] text-[#2056AE] hover:bg-[#F4F8FF]'}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          <div className="mb-2 font-semibold text-[#2056AE]">Evening (9 slots)</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {defaultSlots.slice(14).map((slot) => (
              <button
                key={slot}
                className={`border-2 rounded-lg px-2 py-1 font-semibold transition text-xs w-full ${selectedSlot === slot ? 'border-[#1890FF] bg-[#E6F7FF] text-[#1890FF]' : 'border-[#2C73D2] text-[#2056AE] hover:bg-[#F4F8FF]'}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          <button
            className="bg-[#2056AE] text-white px-6 py-3 rounded-xl shadow font-bold w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selectedSlot}
            onClick={() =>
              navigate("/appointment-details", {
                state: { clinic, date: selectedDate, slot: selectedSlot },
              })
            }
          >
            Book Appointment
          </button>
          <div className="flex justify-end w-full mt-2">
            <button
            className="text-[#2056AE] underline font-semibold hover:text-[#1890FF] mt-2"
            style={{display: 'block', textAlign: 'right', width: '100%'}}
            onClick={() => navigate('/contact-form', { state: { clinic } })}
          >
            Contact Form
          </button>
          </div>
        </div>
      </div>
      {/* Info Section */}
      <div className="w-full max-w-5xl mt-8 bg-white rounded-2xl shadow p-6">
        {/* Add Share Your Story link above tabs */}
        <div className="flex justify-end mb-2">
          <button
            className="text-[#2056AE] underline font-semibold hover:text-[#1890FF]"
            onClick={() => setShowStoryModal(true)}
          >
            Share your story
          </button>
        </div>
        <div className="flex gap-8 mb-4 border-b pb-2">
            <button
            className={`text-[#2056AE] font-semibold hover:underline border-b-2 pb-1 ${
              activeTab === "profile"
                ? "border-[#1890FF] text-[#1890FF]"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Dentist Profile
          </button>
          
          <button
            className={`text-[#2056AE] font-semibold hover:underline border-b-2 pb-1 ${
              activeTab === "services"
                ? "border-[#1890FF] text-[#1890FF]"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("services")}
          >
            Services
          </button>
          <button
            className={`text-[#2056AE] font-semibold hover:underline border-b-2 pb-1 ${
              activeTab === "consult"
                ? "border-[#1890FF] text-[#1890FF]"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("consult")}
          >
            Consult Q&amp;A
          </button>
          <button
            className={`text-[#2056AE] font-semibold hover:underline border-b-2 pb-1 ${
              activeTab === "healthfeed"
                ? "border-[#1890FF] text-[#1890FF]"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("healthfeed")}
          >
            Healthfeed
          </button>
        
        </div>
        {activeTab === "profile" && (
          <div className="bg-[#f7f7f7] rounded-xl p-6 shadow-md mt-4">
            <h3 className="text-xl font-bold text-[#2056AE] mb-4">Dentist Profile</h3>
            <div className="flex items-center gap-6">
              <img
                src={clinic.DoctorImage || require('../assets/doctor1.png')}
                alt="Dentist"
                className="h-20 w-20 object-cover rounded-full border-2 border-[#2C73D2] shadow"
              />
              <div>
                <span className="font-bold text-[#2056AE] text-lg">Dentist</span>
                <div className="mt-1 text-gray-700 text-base font-semibold">
                  {clinic.DoctorProfile || clinic.doctorProfile || clinic.Description || 'Dr. Venkatesh.MJ is a Dentist in Basavanagudi, Bangalore.'}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "services" && (
          <div className="bg-[#f7f7f7] rounded-xl p-6 shadow-md mt-4">
            <h3 className="text-xl font-bold text-[#2056AE] mb-4">Services</h3>
            <span className="font-bold text-[#2056AE] text-base">Services:</span>
            <span className="ml-2 text-gray-700 text-base">
              {clinic.Services || clinic.services || clinic.Specialty || clinic.specialty || 'General Dentistry, Cosmetic Dentistry, Implants, Braces, Root Canal, Cleaning'}
            </span>
          </div>
        )}
        {activeTab === "consult" && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="mb-4">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#E6F7FF" />
                <rect
                  x="20"
                  y="20"
                  width="24"
                  height="28"
                  rx="4"
                  fill="#fff"
                  stroke="#1890FF"
                  strokeWidth="2"
                />
                <path
                  d="M28 28H36M28 34H36M28 40H36"
                  stroke="#1890FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <rect
                  x="24"
                  y="24"
                  width="16"
                  height="20"
                  rx="2"
                  fill="#E6F7FF"
                />
                <path
                  d="M32 24V20"
                  stroke="#1890FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="32" cy="44" r="2" fill="#1890FF" />
              </svg>
            </div>
            <div className="text-gray-700 text-center mb-4">
              No query answered by this doctor. Get answers to your health queries
              now
            </div>
            <button
              className="bg-[#1BC47D] text-white px-6 py-2 rounded font-bold text-base shadow hover:bg-[#159C5B] transition"
              onClick={() => navigate('/consult')}
            >
              Ask Free Question
            </button>
            <div className="flex justify-end w-full mt-8">
              <button className="text-[#2056AE] underline text-sm">
                Report an Error
              </button>
            </div>
          </div>
        )}
        {activeTab === "healthfeed" && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="mb-4">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#E6F7FF" />
                <rect
                  x="20"
                  y="20"
                  width="24"
                  height="28"
                  rx="4"
                  fill="#fff"
                  stroke="#1890FF"
                  strokeWidth="2"
                />
                <path
                  d="M28 28H36M28 34H36M28 40H36"
                  stroke="#1890FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <rect
                  x="24"
                  y="24"
                  width="16"
                  height="20"
                  rx="2"
                  fill="#E6F7FF"
                />
                <path
                  d="M32 24V20"
                  stroke="#1890FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="32" cy="44" r="2" fill="#1890FF" />
              </svg>
            </div>
            <div className="text-gray-700 text-center mb-4">
              No articles written by this doctor.
            </div>
            <button
              className="bg-[#1BC47D] text-white px-6 py-2 rounded font-bold text-base shadow hover:bg-[#159C5B] transition"
              onClick={() => navigate('/articles')}
            >
              Read all articles
            </button>
            <div className="flex justify-end w-full mt-8">
              <button className="text-[#2056AE] underline text-sm">
                Report an Error
              </button>
            </div>
          </div>
        )}
        {/* Story Modal */}
        {showStoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 w-full max-w-lg relative overflow-y-auto max-h-[90vh]">
              <button className="absolute top-2 right-2 text-gray-400 text-xl" onClick={() => setShowStoryModal(false)}>&times;</button>
              <div className="font-bold text-lg sm:text-xl mb-2 text-[#2056AE]">How was your appointment experience with Dr. {clinic.Name || clinic.name}?</div>
              <div className="mb-4 text-gray-600 text-sm sm:text-base">Your experience will help over 1 lac people choose the right doctor, daily.</div>
              {/* Q1 */}
              <div className="mb-2 font-semibold text-sm sm:text-base">Q1. Would you like to recommend the doctor? <span className="text-red-500">*</span></div>
              <div className="flex gap-2 sm:gap-4 mb-2 flex-wrap">
                <button className={`px-3 sm:px-4 py-2 rounded border ${story.recommend === true ? 'bg-[#1890FF] text-white' : 'bg-white text-gray-700'}`} onClick={() => setStory({ ...story, recommend: true })}>Yes</button>
                <button className={`px-3 sm:px-4 py-2 rounded border ${story.recommend === false ? 'bg-[#1890FF] text-white' : 'bg-white text-gray-700'}`} onClick={() => setStory({ ...story, recommend: false })}>No</button>
              </div>
              {/* Q2 */}
              <div className="mb-2 font-semibold text-sm sm:text-base">Q2. For which health problem/treatment did you visit? <span className="text-red-500">*</span></div>
              <input type="text" className="border rounded px-3 py-2 w-full mb-2 text-sm sm:text-base" placeholder="e.g. Stomach Ache, body pain" value={story.problem} onChange={e => setStory({ ...story, problem: e.target.value })} />
              {/* Q3 */}
              <div className="mb-2 font-semibold text-sm sm:text-base">Q3. How long did you wait to be seen by the doctor? <span className="text-red-500">*</span></div>
              <div className="flex flex-col gap-1 mb-2">
                {['Less than 15 min', '15 min to 30 min', '30 min to 1 hour', 'More than 1 hour'].map(opt => (
                  <label key={opt} className="flex items-center gap-2 text-sm sm:text-base">
                    <input type="radio" name="waitTime" checked={story.waitTime === opt} onChange={() => setStory({ ...story, waitTime: opt })} /> {opt}
                  </label>
                ))}
              </div>
              {/* Q4 */}
              <div className="mb-2 font-semibold text-sm sm:text-base">Q4. What do you think can be improved? <span className="text-red-500">*</span></div>
              <div className="flex flex-col gap-1 mb-2">
                {['Doctor friendliness', 'Explanation of the health issue', 'Treatment satisfaction', 'Value for money', 'Wait time'].map(opt => (
                  <label key={opt} className="flex items-center gap-2 text-sm sm:text-base">
                    <input type="checkbox" checked={story.improvements.includes(opt)} onChange={e => {
                      const checked = e.target.checked;
                      setStory({ ...story, improvements: checked ? [...story.improvements, opt] : story.improvements.filter(i => i !== opt) });
                    }} /> {opt}
                  </label>
                ))}
              </div>
              {/* Q5 */}
              <div className="mb-2 font-semibold text-sm sm:text-base">Q5. Tell us about your experience with the doctor. <span className="text-red-500">*</span></div>
              <textarea className="border rounded px-3 py-2 w-full mb-2 text-sm sm:text-base" rows={4} placeholder="Start typing here..." value={story.experience} onChange={e => setStory({ ...story, experience: e.target.value })} />
              <div className="bg-yellow-50 text-xs sm:text-sm p-2 rounded mb-2">Info: All patient stories go under strict moderation process before publishing to check abusive language, threats, superlative comments on medical abilities and so on.</div>
              <input type="text" className="border rounded px-3 py-2 w-full mb-2 text-sm sm:text-base" placeholder="Your name" value={story.name} onChange={e => setStory({ ...story, name: e.target.value })} />
              <input type="text" className="border rounded px-3 py-2 w-full mb-2 text-sm sm:text-base" placeholder="Your phone number" value={story.phone} onChange={e => setStory({ ...story, phone: e.target.value })} />
              <label className="flex items-center gap-2 mb-4 text-sm sm:text-base">
                <input type="checkbox" checked={story.anonymous} onChange={e => setStory({ ...story, anonymous: e.target.checked })} /> Keep my feedback story anonymous
              </label>
              <button className="bg-[#1890FF] text-white px-6 py-2 rounded font-bold w-full text-sm sm:text-base" onClick={handleStorySubmit}>Submit</button>
              <div className="text-xs text-gray-500 mt-2">By submitting, you agree to <a href="#" className="underline">Terms and Conditions</a></div>
            </div>
          </div>
        )}
        {/* Show submitted stories below info section */}
        {stories.length > 0 && (
          <div className="mt-8">
            <div className="font-bold text-lg mb-4 text-[#2056AE]">Patient Stories</div>
            <div className="flex flex-col gap-4">
              {stories.map((s, idx) => (
                <div key={idx} className="bg-[#F4F6FA] rounded-xl p-4 shadow">
                  <div className="font-semibold text-[#2056AE] mb-1">{s.anonymous ? 'Anonymous' : s.name}</div>
                  <div className="text-gray-700 mb-1">{s.experience}</div>
                  <div className="text-xs text-gray-500">{s.problem} | {s.waitTime} | {s.improvements.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
