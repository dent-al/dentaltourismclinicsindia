import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import allStatesAndUTs from '../data/allStatesAndUTs';

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

const ClinicList = () => {
  const [clinics, setClinics] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // Fetch clinics from new Google Sheet API
  useEffect(() => {
    fetch('https://api.sheetbest.com/sheets/83d5bf7a-6241-4ebb-bddd-ac457a6c4d4a')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setClinics(data);
        } else if (Array.isArray(data.data) && data.data.length > 0) {
          setClinics(data.data);
        } else {
          setClinics(mockClinics); // fallback to mock data if API returns empty
        }
      })
      .catch(err => {
        setClinics(mockClinics); // fallback to mock data on error
      });
  }, []);

  // Get unique cities from clinics
  const uniqueCities = [...new Set(clinics.map((clinic) => clinic.City || clinic.city || ""))].filter(Boolean);

  // Filter clinics
  const filteredClinics = clinics.filter((clinic) => {
    const name = clinic.Name || clinic.name || "";
    const clinicCity = clinic.City || clinic.city || "";
    const clinicState = clinic.State || clinic.state || "";
    const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
    const matchesCity = city ? clinicCity === city : true;
    const matchesState = selectedState ? clinicState === selectedState : true;
    return matchesSearch && matchesCity && matchesState;
  });

  return (
    <div className="p-8 bg-[#ede7f6] min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-[#6548ee]">Dental Clinics</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search clinics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/2"
        />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/4"
        >
          <option value="">All Cities</option>
          {uniqueCities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/4"
        >
          <option value="">All States/UTs</option>
          {allStatesAndUTs.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClinics.map((clinic, idx) => {
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
          return (
            <li
              key={clinic.id || idx}
              className="border p-6 rounded-lg shadow bg-white flex flex-row items-center gap-6"
            >
              <img
                src={image}
                alt={name}
                className="h-32 w-32 object-cover rounded-full border-4 border-[#6548ee] flex-shrink-0"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-semibold text-xl mb-1 text-[#6548ee]">{name}</div>
                  <div className="text-[#ff9800] mb-1 font-medium">{specialty}</div>
                  <div className="text-gray-600 mb-1">{address}, {city}, {state}</div>
                  <div className="text-yellow-500 mb-1">Rating: {rating}</div>
                  <div className="text-gray-700 mb-1">Open: {openTime} - {closeTime}</div>
                  {website && (
                    <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mb-1 block">Visit Website</a>
                  )}
                  {contact && (
                    <div className="text-gray-700 mb-1">Contact: <a href={`tel:${contact}`} className="text-blue-600 underline">{contact}</a></div>
                  )}
                  {offers && (
                    <div className="text-green-600 mb-1">Offers: {offers}</div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    to={`/clinics/${clinic.id || idx}`}
                    className="bg-[#6548ee] text-white px-3 py-2 rounded hover:bg-[#ff9800] transition text-sm"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/clinics/${clinic.id || idx}/book`}
                    className="bg-[#ff9800] text-white px-3 py-2 rounded hover:bg-[#6548ee] transition text-sm"
                  >
                    Book Clinic
                  </Link>
                  {contact && (
                    <a
                      href={`tel:${contact}`}
                      className="bg-[#4caf50] text-white px-3 py-2 rounded hover:bg-[#388e3c] transition text-sm"
                    >
                      Contact Clinic
                    </a>
                  )}
                  {directions && (
                    <a
                      href={directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#2196f3] text-white px-3 py-2 rounded hover:bg-[#1976d2] transition text-sm"
                    >
                      Get Directions
                    </a>
                  )}
                  <button
                    className="bg-[#9c27b0] text-white px-3 py-2 rounded hover:bg-[#7b1fa2] transition text-sm"
                    onClick={() => alert(offers ? offers : 'No offers available')}
                  >
                    View Offers
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClinicList;
