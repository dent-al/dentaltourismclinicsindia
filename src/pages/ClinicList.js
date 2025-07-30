import React, { useState, useEffect } from "react";
import '../global.css';
import { Link, useNavigate } from "react-router-dom";
import allStatesAndUTs from '../data/allStatesAndUTs';
import problems from '../data/problems';
import bookIcon from '../assets/Book Now.png';
import viewDetailsIcon from '../assets/view details.png';
import viewOffersIcon from '../assets/view offers.png';
import whatsappIcon from '../assets/Whatsapp icon.png';
import websiteIcon from '../assets/website icon.png';
import locationIconBtn from '../assets/location.png';
import callNowIcon from '../assets/call now.png';
import customLogo from '../assets/custom-logo.png';
import ApiService from '../services/api';
import FullPageLoader from "../components/FullPageLoader";
import locationIcon from '../assets/location.png';

const mockClinics = [
  {
    id: 1,
    Name: "Smile Dental Care",
    Specialty: "General Dentistry",
    Address: "123 Main Street",
    City: "Mumbai",
    State: "Maharashtra",
    Rating: "4.8",
    Website: "https://smiledentalcare.com",
    Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80",
    OpenTime: "09:00 AM",
    CloseTime: "08:00 PM",
    Contact: "+91 9876543210",
    Offers: "10% off on first visit",
    Directions: "https://goo.gl/maps/xyz123"
  },
  {
    id: 2,
    Name: "Pearl Dental Studio",
    Specialty: "Cosmetic Dentistry",
    Address: "456 Park Avenue",
    City: "Delhi",
    State: "Delhi",
    Rating: "4.6",
    Website: "https://pearldentalstudio.com",
    Image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80",
    OpenTime: "10:00 AM",
    CloseTime: "07:00 PM",
    Contact: "+91 9988776655",
    Offers: "Free consultation for new patients",
    Directions: "https://goo.gl/maps/abc456"
  },
  {
    id: 3,
    Name: "Bright Smiles Clinic",
    Specialty: "Orthodontics",
    Address: "789 Lake Road",
    City: "Bangalore",
    State: "Karnataka",
    Rating: "4.9",
    Website: "https://brightsmilesclinic.com",
    Image: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=facearea&w=400&h=300&q=80",
    OpenTime: "08:30 AM",
    CloseTime: "09:00 PM",
    Contact: "+91 9123456780",
    Offers: "Complimentary dental checkup",
    Directions: "https://goo.gl/maps/def789"
  }
];

const mockCBCTLabs = [
  {
    id: 1,
    Name: "Radiant CBCT & OPG Centre",
    Specialty: "CBCT, OPG Scans",
    Address: "101 Scan Plaza",
    City: "Delhi",
    State: "Delhi",
    Rating: "4.7",
    Website: "https://radiantcbct.com",
    Image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80",
    OpenTime: "08:00 AM",
    CloseTime: "08:00 PM",
    Contact: "+91 9000000000",
    Offers: "20% off for first-time patients",
    Directions: "https://goo.gl/maps/cbct123"
  }
];

const mockBloodTestLabs = [
  {
    id: 1,
    Name: "HealthFirst Diagnostics",
    Specialty: "Blood Test, Pathology",
    Address: "22 Health Street",
    City: "Pune",
    State: "Maharashtra",
    Rating: "4.5",
    Website: "https://healthfirstlabs.com",
    Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80",
    OpenTime: "07:00 AM",
    CloseTime: "09:00 PM",
    Contact: "+91 8000000000",
    Offers: "Free sugar test with CBC",
    Directions: "https://goo.gl/maps/bloodtest123"
  }
  // ...add more mock blood test labs as needed...
];

// Banner/poster data for the top-of-page rotating ad
const banners = [
  require("../assets/banner1.png"),
  require("../assets/banner2.png"),
  require("../assets/banner3.png"),
];

const ClinicList = ({ type = "clinic" }) => {
  const [activeModal, setActiveModal] = useState(null); // holds clinic id and type ('details' or 'booking')
  const [flashOfferIdx, setFlashOfferIdx] = useState(null);
  const [clinics, setClinics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [stateSearch, setStateSearch] = useState("");
  const [search, setSearch] = useState("");
  const [selectedProblem, setSelectedProblem] = useState("");
 const [showProblemDropdown, setShowProblemDropdown] = useState(false);
  const [city, setCity] = useState("");
  const [bannerIndex, setBannerIndex] = useState(0);
  const [showContactIdx, setShowContactIdx] = useState(null);
  const navigate = useNavigate();

  // Simulate loading for 1.2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Fetch clinics from API
  useEffect(() => {
    const fetchClinics = async () => {
      try {
        setLoading(true);
        const response = await ApiService.getClinics();
        let clinicsData = response.data || response;
        // If API returns empty array or no data, use mockClinics
        if (!clinicsData || (Array.isArray(clinicsData) && clinicsData.length === 0)) {
          clinicsData = mockClinics;
        }
        setClinics(clinicsData);
        setError(null);
      } catch (err) {
        console.error('Error fetching clinics:', err);
        setError('Failed to load clinics. Please try again later.');
        // Fallback to mock data if API fails
        setClinics(mockClinics);
      } finally {
        setLoading(false);
      }
    };

    fetchClinics();
  }, []);

  // Flash message timer for offers
  useEffect(() => {
    if (flashOfferIdx !== null) {
      const timer = setTimeout(() => setFlashOfferIdx(null), 2200);
      return () => clearTimeout(timer);
    }
  }, [flashOfferIdx]);

  // Banner rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Get the appropriate data based on type
  const getDataByType = () => {
    switch (type) {
      case "cbct":
        return mockCBCTLabs;
      case "bloodtest":
        return mockBloodTestLabs;
      default:
        return clinics;
    }
  };

  const currentData = getDataByType();

  // Fix spelling mistake, sort alphabetically, and use for dropdown
  const uniqueProblems = problems
    .map(p => p === 'Facial A cennetery' ? 'Facial Asymmetry' : p)
    .sort((a, b) => a.localeCompare(b));

  // Filter logic for all data
  const filteredClinics = currentData.filter((item) => {
    const itemName = item.Name || item.name || "";
    const itemCity = item.City || item.city || "";
    const itemState = item.State || item.state || "";
    const itemSpecialty = item.Specialty || item.specialty || "";
    
    const matchesSearch = search === "" || 
      itemName.toLowerCase().includes(search.toLowerCase()) ||
      itemSpecialty.toLowerCase().includes(search.toLowerCase());
    const matchesProblem = selectedProblem === "" || itemSpecialty === selectedProblem;
    const matchesCity = city === "" || itemCity === city;
    const matchesState = selectedState === "" || itemState === selectedState;
    
    return matchesSearch && matchesProblem && matchesCity && matchesState;
  });

  // Get unique cities for the dropdown
  const uniqueCities = [...new Set(currentData.map(item => item.City || item.city).filter(Boolean))];

  if (loading) return <FullPageLoader />;

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden" style={{margin: 0, padding: 0}}>
      {/* Animated Offers Strip removed; now global in App.js */}
      {/* Rotating Banner Section - now just the full-width PNG, no text */}
      {type === "clinic" && (
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 0,
          paddingTop: 0,
          marginBottom: '7px', // Reduced spacing below banner to 7px
        }}>
          <div style={{
            padding: '3px',
            borderRadius: '1.2rem',
            background: 'linear-gradient(90deg, #2C73D2 0%, #F4A300 100%)',
            display: 'inline-block',
            boxShadow: '0 6px 32px 0 rgba(44,115,210,0.18)',
          }}>
            <img
              src={banners[bannerIndex]}
              alt={`Banner ${bannerIndex + 1}`}
              style={{
                width: '1920px',
                maxWidth: '100%',
                height: '226px',
                minHeight: '226px',
                objectFit: 'cover',
                borderRadius: '1rem',
                display: 'block',
                marginTop: 0,
              }}
            />
          </div>
        </div>
      )}
      {/* Increased spacing between banner and heading */}
      <div style={{height: '32px'}}></div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#2C73D2] text-center break-words px-2" style={{marginTop: 0}}>{type === "cbct" ? "CBCT/OPG Labs" : type === "bloodtest" ? "Blood Test Labs" : "Discover Dental Care Centers Near You"}</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-6 w-full max-w-4xl mx-auto px-2">
        <input
          type="text"
          placeholder="Search clinics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[220px] px-6 py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] text-base focus:outline-none focus:border-[#F4A300] bg-white font-sans placeholder-gray-400"
        />
        {/* Custom Dropdown for Problem */}
        <div className="flex-1 min-w-[180px] relative" style={{zIndex: 20}}>
          <div
            className="px-6 py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] text-base bg-white font-sans cursor-pointer flex items-center justify-between"
            style={{minHeight: '48px'}}
            onClick={() => setShowProblemDropdown(v => !v)}
            tabIndex={0}
            onBlur={() => setTimeout(() => setShowProblemDropdown(false), 120)}
          >
            <span>{selectedProblem || 'Choose Your Problem'}</span>
            <svg className="w-4 h-4 ml-2 text-[#2C73D2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </div>
          {showProblemDropdown && (
            <ul className="absolute left-0 right-0 mt-1 bg-white border-2 border-[#2C73D2] rounded-lg shadow-lg max-h-60 overflow-y-auto text-[#2C73D2] text-base font-sans" style={{zIndex: 30}}>
              <li
                className={`px-6 py-2 cursor-pointer hover:bg-[#F4A300] hover:text-white rounded-t-lg ${!selectedProblem ? 'bg-gray-100' : ''}`}
                onClick={() => { setSelectedProblem(''); setShowProblemDropdown(false); }}
              >Choose Your Problem</li>
              {uniqueProblems.map((problem, idx) => (
                <li
                  key={problem}
                  className={`px-6 py-2 cursor-pointer hover:bg-[#F4A300] hover:text-white ${selectedProblem === problem ? 'bg-[#2C73D2] text-white' : ''}`}
                  onClick={() => { setSelectedProblem(problem); setShowProblemDropdown(false); }}
                >{problem}</li>
              ))}
            </ul>
          )}
        </div>
        {/* Custom Dropdown for State */}
        <div className="flex-1 min-w-[180px] relative" style={{zIndex: 19}}>
          <div
            className="px-6 py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] text-base bg-white font-sans cursor-pointer flex items-center justify-between"
            style={{minHeight: '48px'}}
            onClick={() => setShowStateDropdown(v => !v)}
            tabIndex={0}
            onBlur={() => setTimeout(() => setShowStateDropdown(false), 120)}
          >
            <span>{selectedState || 'Choose State/UT'}</span>
            <svg className="w-4 h-4 ml-2 text-[#2C73D2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </div>
          {showStateDropdown && (
            <div className="absolute left-0 right-0 mt-1 bg-white border-2 border-[#2C73D2] rounded-lg shadow-lg max-h-60 overflow-y-auto text-[#2C73D2] text-base font-sans" style={{zIndex: 30}}>
              <div className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Search state..."
                  value={stateSearch}
                  onChange={e => setStateSearch(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-gray-200 text-[#2C73D2] text-base focus:outline-none focus:border-[#F4A300] bg-white"
                />
              </div>
              <ul>
                <li
                  className={`px-6 py-2 cursor-pointer hover:bg-[#F4A300] hover:text-white rounded-t-lg ${!selectedState ? 'bg-gray-100' : ''}`}
                  onClick={() => { setSelectedState(''); setShowStateDropdown(false); setStateSearch(""); }}
                >All States/UTs</li>
                {allStatesAndUTs.filter(state => state.toLowerCase().includes(stateSearch.toLowerCase())).map(state => (
                  <li
                    key={state}
                    className={`px-6 py-2 cursor-pointer hover:bg-[#F4A300] hover:text-white ${selectedState === state ? 'bg-[#2C73D2] text-white' : ''}`}
                    onClick={() => { setSelectedState(state); setShowStateDropdown(false); setStateSearch(""); }}
                  >{state}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-2 mb-6">
        {filteredClinics.length === 0 ? (
          <li className="col-span-full text-center text-[#2C73D2] text-lg font-semibold py-12">No clinics found. Please adjust your search or try again later.</li>
        ) : (
          filteredClinics.map((clinic, idx) => {
            const name = clinic.Name || clinic.name || "N/A";
            const specialty = clinic.Specialty || clinic.specialty || "";
            const city = clinic.City || clinic.city || "";
            const state = clinic.State || clinic.state || "";
            const address = clinic.Address || clinic.address || "N/A";
            const rating = clinic.Rating || clinic.rating || "N/A";
            const website = clinic.Website || clinic.website || "";
            const image = clinic.Image || clinic.image || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80";
            const openTime = clinic.OpenTime || clinic.openTime || clinic["Open Time"] || "N/A";
            const closeTime = clinic.CloseTime || clinic.closeTime || clinic["Close Time"] || "N/A";
            const contact = clinic.Contact || clinic.contact || clinic.Phone || clinic.phone || "";
            const offers = clinic.Offers || clinic.offers || "";
            const directions = clinic.Directions || clinic.directions || "";
            const experience = clinic.Experience || clinic.experience || clinic["Years of Experience"] || "N/A";
            const googleReviews = clinic.GoogleReviews || clinic.googleReviews || "https://www.google.com/search?q=" + encodeURIComponent(name + " " + city + " " + state);
            return (
              <li
                key={clinic.id || idx}
                className="border-2 border-[#2C73D2] px-6 py-6 rounded-3xl shadow-2xl bg-white flex flex-col items-center gap-4 w-full max-w-[420px] mx-auto relative"
                style={{background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(2px)'}}
              >
                <img
                  src={image}
                  alt={name}
                  className="h-28 w-28 object-cover rounded-2xl border-4 border-[#2C73D2] mb-2 shadow-lg"
                  style={{boxShadow: '0 8px 32px 0 rgba(44,115,210,0.15)'}}
                />
                <div className="flex-1 flex flex-col items-center text-center w-full">
                  <div className="font-bold text-2xl mb-1 text-[#2056AE] tracking-tight cursor-pointer" onClick={() => navigate('/book-appointment', { state: { clinic } })}>{name}</div>
                  <div className="inline-flex items-center gap-2 mb-1">
                    {/* Specialty text removed as requested */}
                  </div>
                  <div className="text-gray-600 mb-1 text-base font-medium flex flex-col items-center justify-center" style={{lineHeight: '1.5'}}>
                    <div className="flex items-center justify-center">
                      <img src={locationIcon} alt="Location" className="w-5 h-5 mr-1 inline-block align-middle" style={{minWidth: '20px', height: '20px'}} />
                      <span className="align-middle font-bold text-[#2056AE] underline" style={{fontSize: '1.1rem'}}>{city}{city && state ? ', ' : ''}{state}</span>
                    </div>
                    <span className="align-middle text-[#2056AE]" style={{fontSize: '1.05rem'}}>{address}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-[#F4A300] font-bold text-lg">{rating}</span>
                    <span className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < Math.round(Number(rating)) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                      ))}
                    </span>
                    <a href={googleReviews} target="_blank" rel="noopener noreferrer" className="text-[#2056AE] underline text-sm font-semibold ml-2">Google Reviews</a>
                  </div>
                  
                  <div className="mt-3 w-full flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-2 items-center w-full" style={{maxWidth: '100%'}}>
                      {/* Top row: Book Now & View Offers */}
                      <div className="flex justify-center items-center gap-3 w-full mb-1">
                        <button
                          className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white px-5 py-2 rounded-xl flex items-center gap-2 font-bold shadow"
                          style={{
                            fontSize: '1.08rem',
                            border: 'none',
                            boxShadow: '0 4px 16px 0 rgba(44,115,210,0.13)',
                            cursor: 'pointer',
                            minWidth: '120px',
                            maxWidth: '160px',
                          }}
                          onClick={() => navigate('/book-appointment', { state: { clinic } })}
                          aria-label="Book Now"
                        >
                          <img src={bookIcon} alt="Book Now" className="w-7 h-7" />
                          <span>Book Now</span>
                        </button>
                        <button
                          className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white px-5 py-2 rounded-xl flex items-center gap-2 font-bold shadow"
                          style={{
                            fontSize: '1.08rem',
                            border: 'none',
                            boxShadow: '0 4px 16px 0 rgba(44,115,210,0.13)',
                            cursor: 'pointer',
                            minWidth: '120px',
                            maxWidth: '160px',
                          }}
                          onClick={() => setFlashOfferIdx(idx)}
                          aria-label="View Offers"
                        >
                          <img src={viewOffersIcon} alt="View Offers" className="w-7 h-7" />
                          <span>View Offers</span>
                        </button>
                      </div>
                      {/* Second row: Icon buttons */}
                      <div className="flex justify-center items-center gap-2 w-full">
                        {contact && (
                          <button
                            className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white p-2 rounded-xl flex items-center justify-center shadow"
                            style={{
                              border: 'none',
                              boxShadow: '0 2px 8px 0 rgba(44,115,210,0.13)',
                              minWidth: '48px',
                              minHeight: '48px',
                              maxWidth: '48px',
                              maxHeight: '48px',
                              cursor: 'pointer',
                              marginRight: '12px',
                            }}
                            onClick={() => setShowContactIdx(idx)}
                            aria-label="Call Now"
                          >
                            <img src={callNowIcon} alt="Call Now" className="w-8 h-7" />
                          </button>
                        )}
                        {contact && (
                          <a
                            href={`https://wa.me/${contact.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white p-2 rounded-xl flex items-center justify-center shadow"
                            style={{
                              border: 'none',
                              boxShadow: '0 2px 8px 0 rgba(44,115,210,0.13)',
                              minWidth: '48px',
                              minHeight: '48px',
                              maxWidth: '48px',
                              maxHeight: '48px',
                              cursor: 'pointer',
                              marginRight: '12px',
                            }}
                            aria-label="WhatsApp"
                          >
                            <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-7" />
                          </a>
                        )}
                        {type === "clinic" && directions && (
                          <a
                            href={directions}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white p-2 rounded-xl flex items-center justify-center shadow"
                            style={{
                              border: 'none',
                              boxShadow: '0 2px 8px 0 rgba(44,115,210,0.13)',
                              minWidth: '48px',
                              minHeight: '48px',
                              maxWidth: '48px',
                              maxHeight: '48px',
                              cursor: 'pointer',
                              marginRight: '12px',
                            }}
                            aria-label="Directions"
                          >
                            <img src={locationIconBtn} alt="Directions" className="w-8 h-7" />
                          </a>
                        )}
                        {type === "clinic" && website && (
                          <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white p-2 rounded-xl flex items-center justify-center shadow"
                            style={{
                              border: 'none',
                              boxShadow: '0 2px 8px 0 rgba(44,115,210,0.13)',
                              minWidth: '48px',
                              minHeight: '48px',
                              maxWidth: '48px',

                              maxHeight: '48px',
                              cursor: 'pointer',
                              marginRight: '12px',
                            }}
                            aria-label="Website"
                          >
                            <img src={websiteIcon} alt="Website" className="w-8 h-7" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
      {/* Modal/Overlay for Details or Booking */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full relative animate-fadeIn">
            <button className="absolute top-4 right-4 text-[#2C73D2] text-2xl font-bold" onClick={() => setActiveModal(null)}>&times;</button>
            {activeModal.type === 'details' && (
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img src={activeModal.clinic.Image || activeModal.clinic.image} alt={activeModal.clinic.Name || activeModal.clinic.name} className="h-32 w-32 object-cover rounded-full border-4 border-[#2C73D2] shadow-lg" />
                <div className="flex-1">
                  <div className="font-bold text-2xl mb-1 text-[#2056AE]">{activeModal.clinic.Name || activeModal.clinic.name}</div>
                  <div className="text-gray-600 mb-1 text-base font-medium flex items-center justify-center" style={{lineHeight: '1.5'}}>
                    <img src={locationIcon} alt="Location" className="w-5 h-5 mr-1 inline-block align-middle" style={{minWidth: '20px', height: '20px'}} />
                    <span className="align-middle" style={{fontSize: '1.1rem'}}>{activeModal.clinic.City || activeModal.clinic.city}, {activeModal.clinic.State || activeModal.clinic.state}</span>
                  </div>
                  <div className="text-[#F4A300] mb-1 font-medium text-lg">{activeModal.clinic.Specialty || activeModal.clinic.specialty}</div>
                  <div className="text-gray-700 mb-1 text-base flex items-center">
                    <img src={locationIcon} alt="Location" className="w-5 h-5 mr-2 inline-block align-middle" />
                    <span className="align-middle">{activeModal.clinic.Address || activeModal.clinic.address}</span>
                  </div>
                  <div className="text-[#2056AE] mb-1 text-base font-semibold">Fee: ₹{activeModal.clinic.Fee || 'N/A'}</div>
                  <div className="text-gray-700 mb-1 text-base">Timings: {activeModal.clinic.OpenTime || activeModal.clinic.openTime || 'N/A'}</div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#F4A300] font-bold text-lg">{activeModal.clinic.Rating || activeModal.clinic.rating}</span>
                    <span className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < Math.round(Number(activeModal.clinic.Rating || activeModal.clinic.rating)) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                      ))}
                    </span>
                    <span className="text-gray-500 text-sm">as per Google reviews</span>
                  </div>
                </div>
              </div>
            )}
            {activeModal.type === 'booking' && (
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img src={activeModal.clinic.Image || activeModal.clinic.image} alt={activeModal.clinic.Name || activeModal.clinic.name} className="h-32 w-32 object-cover rounded-full border-4 border-[#2C73D2] shadow-lg" />
                <div className="flex-1">
                  <div className="font-bold text-2xl mb-1 text-[#2056AE]">{activeModal.clinic.Name || activeModal.clinic.name}</div>
                  <div className="text-gray-600 mb-1 text-base font-medium flex items-center justify-center" style={{lineHeight: '1.5'}}>
                    <img src={locationIcon} alt="Location" className="w-5 h-5 mr-1 inline-block align-middle" style={{minWidth: '20px', height: '20px'}} />
                    <span className="align-middle" style={{fontSize: '1.1rem'}}>{activeModal.clinic.City || activeModal.clinic.city}, {activeModal.clinic.State || activeModal.clinic.state}</span>
                  </div>
                  <div className="text-[#F4A300] mb-1 font-medium text-lg">{activeModal.clinic.Specialty || activeModal.clinic.specialty}</div>
                  <div className="text-gray-700 mb-1 text-base flex items-center">
                    <img src={locationIcon} alt="Location" className="w-5 h-5 mr-2 inline-block align-middle" />
                    <span className="align-middle">{activeModal.clinic.Address || activeModal.clinic.address}</span>
                  </div>
                  <div className="text-[#2056AE] mb-1 text-base font-semibold">Fee: ₹{activeModal.clinic.Fee || 'N/A'}</div>
                  <div className="text-gray-700 mb-1 text-base">Timings: {activeModal.clinic.OpenTime || activeModal.clinic.openTime || 'N/A'}</div>
                  <div className="font-bold text-lg mt-4 mb-2 text-[#2056AE]">Pick a time slot</div>
                  <div className="flex flex-col gap-2 mb-4">
                    {['03:50 PM','04:20 PM','04:40 PM','05:00 PM','05:20 PM'].map(slot => (
                      <button key={slot} className="border-2 border-[#2C73D2] rounded-lg px-4 py-2 text-[#2056AE] font-semibold hover:bg-[#F4F8FF] transition">{slot}</button>
                    ))}
                  </div>
                  <button className="bg-gradient-to-r from-[#2C73D2] to-[#FFD700] text-white px-4 py-2 rounded-xl shadow font-bold w-full mt-2">Book Appointment</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
          })
        )}
      </ul>
    </div>
  );
};

export default ClinicList;
