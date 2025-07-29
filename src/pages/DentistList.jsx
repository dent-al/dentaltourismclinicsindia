import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ApiService from '../services/api';

// Mock dentist data for demo (keep as fallback)
const mockDentists = [
  {
    id: 1,
    name: 'Dr. Sumanth Shetty',
    specialty: 'Paedodontics, Preventive Dentistry',
    experience: 24,
    clinic: 'Chisel Dental',
    location: 'Koramangala, Bangalore',
    rating: 4.9,
    image: require('../assets/doctor1.png'),
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Orthodontist',
    experience: 15,
    clinic: 'Smile Dental Care',
    location: 'Mumbai, Maharashtra',
    rating: 4.8,
    image: require('../assets/doctor2.png'),
  },
  {
    id: 3,
    name: 'Dr. Anil Kumar',
    specialty: 'General Dentist',
    experience: 10,
    clinic: 'Pearl Dental Studio',
    location: 'Delhi, Delhi NCR',
    rating: 4.7,
    image: require('../assets/doctor1.png'),
  },
  {
    id: 4,
    name: 'Dr. Meera Joshi',
    specialty: 'Prosthodontist',
    experience: 18,
    clinic: 'Bright Smiles',
    location: 'Pune, Maharashtra',
    rating: 4.6,
    image: require('../assets/doctor2.png'),
  },
  {
    id: 5,
    name: 'Dr. Rajeev Singh',
    specialty: 'Endodontist',
    experience: 12,
    clinic: 'Care Dental Clinic',
    location: 'Lucknow, Uttar Pradesh',
    rating: 4.5,
    image: require('../assets/doctor1.png'),
  },
];

const DentistList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { problem, speciality, other } = location.state || {};
  
  const [dentists, setDentists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch dentists from API
  useEffect(() => {
    const fetchDentists = async () => {
      try {
        setLoading(true);
        const filters = {};
        if (speciality) filters.speciality = speciality;
        if (problem) filters.problem = problem;
        
        const response = await ApiService.getDentists(filters);
        setDentists(response.data || response);
        setError(null);
      } catch (err) {
        console.error('Error fetching dentists:', err);
        setError('Failed to load dentists. Please try again later.');
        // Fallback to mock data if API fails
        setDentists(mockDentists);
      } finally {
        setLoading(false);
      }
    };

    fetchDentists();
  }, [speciality, problem]);

  // Filter dentists by speciality if provided (for mock data fallback)
  const filteredDentists = speciality && dentists === mockDentists
    ? mockDentists.filter(d => d.specialty.toLowerCase().includes(speciality.toLowerCase()))
    : dentists;

  if (loading) {
    return (
      <div className="min-h-screen bg-white w-full py-10 px-2 flex flex-col items-center justify-center">
        <div className="text-xl text-[#2C73D2]">Loading dentists...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white w-full py-10 px-2 flex flex-col items-center justify-center">
        <div className="text-xl text-red-500 mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-[#2C73D2] text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white w-full py-10 px-2 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-[#2C73D2] mb-2 text-center">Available Dentists</h2>
        {problem && (
          <div className="text-lg font-semibold text-[#15396A] mb-6 text-center">for: {problem}</div>
        )}
        {/* Show 5 demo dentist cards for each problem (for demo, show for first 3 problems) */}
        {problem ? (
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#2C73D2] mb-4 text-center">Demo Dentists for {problem}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
              {mockDentists.slice(0, 5).map(dentist => (
                <div key={dentist.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#2C73D2]/10">
                  <img src={dentist.image} alt={dentist.name} className="w-24 h-24 rounded-full object-cover border-4 border-[#2C73D2] mb-3" />
                  <div className="text-xl font-bold text-[#2C73D2] mb-1 text-center">{dentist.name}</div>
                  <div className="text-base text-[#F4A300] font-semibold mb-1 text-center">{dentist.specialty}</div>
                  <div className="text-gray-700 text-base mb-1 text-center">Experience: {dentist.experience} years</div>
                  <div className="text-gray-700 text-base mb-1 text-center">Clinic: {dentist.clinic}</div>
                  <div className="text-gray-700 text-base mb-1 text-center">{dentist.location}</div>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-[#F4A300] font-semibold">{dentist.rating}</span>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill={i < Math.round(dentist.rating) ? '#F4A300' : '#e5e7eb'} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 0 0-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z" /></svg>
                    ))}
                  </div>
                  <button
                    className="w-full py-2 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-bold shadow hover:from-[#F4A300] hover:to-[#2C73D2] transition mt-2"
                    onClick={() => navigate('/confirm-pay', { state: { dentist, problem } })}
                  >
                    Consult Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // If no problem selected, show demo for first 3 problems
          ["Toothache", "Bleeding Gums", "Dental Implants"].map((prob, idx) => (
            <div key={prob} className="mb-10">
              <h3 className="text-xl font-bold text-[#2C73D2] mb-4 text-center">Demo Dentists for {prob}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
                {mockDentists.slice(0, 5).map(dentist => (
                  <div key={dentist.id + prob} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#2C73D2]/10">
                    <img src={dentist.image} alt={dentist.name} className="w-24 h-24 rounded-full object-cover border-4 border-[#2C73D2] mb-3" />
                    <div className="text-xl font-bold text-[#2C73D2] mb-1 text-center">{dentist.name}</div>
                    <div className="text-base text-[#F4A300] font-semibold mb-1 text-center">{dentist.specialty}</div>
                    <div className="text-gray-700 text-base mb-1 text-center">Experience: {dentist.experience} years</div>
                    <div className="text-gray-700 text-base mb-1 text-center">Clinic: {dentist.clinic}</div>
                    <div className="text-gray-700 text-base mb-1 text-center">{dentist.location}</div>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-[#F4A300] font-semibold">{dentist.rating}</span>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill={i < Math.round(dentist.rating) ? '#F4A300' : '#e5e7eb'} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 0 0-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z" /></svg>
                      ))}
                    </div>
                    <button
                      className="w-full py-2 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-bold shadow hover:from-[#F4A300] hover:to-[#2C73D2] transition mt-2"
                    >
                      Consult Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DentistList;
