import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaVideo, FaCalendarAlt, FaStethoscope, FaClock, FaCertificate } from 'react-icons/fa';
import ApiService from '../services/api';

// Mock dentist data for demo (keep as fallback)
const mockDentists = [
  {
    id: 1,
    name: 'Dr. Sumanth Shetty',
    specialty: 'Paedodontics, Preventive Dentistry',
    experience: 24,
    clinic: 'Chisel Dental',
    clinicRegistration: 'CDC123',
    location: 'Koramangala, Bangalore',
    rating: 4.9,
    reviewsCount: 156,
    image: require('../assets/doctor1.png'),
    languages: ['English', 'Hindi', 'Kannada'],
    consultationFee: { inr: 299, usd: 4 },
    isOnlineAvailable: true,
    nextAvailable: '2024-08-02T14:00:00',
    qualification: 'BDS, MDS Pediatric Dentistry',
    registration: 'DCI1234'
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Orthodontist',
    experience: 15,
    clinic: 'Smile Dental Care',
    clinicRegistration: 'SDC456',
    location: 'Mumbai, Maharashtra',
    rating: 4.8,
    reviewsCount: 203,
    image: require('../assets/doctor2.png'),
    languages: ['English', 'Hindi', 'Marathi'],
    consultationFee: { inr: 349, usd: 4.5 },
    isOnlineAvailable: true,
    nextAvailable: '2024-08-02T15:30:00',
    qualification: 'BDS, MDS Orthodontics',
    registration: 'DCI2345'
  },
  {
    id: 3,
    name: 'Dr. Anil Kumar',
    specialty: 'General Dentist',
    experience: 10,
    clinic: 'Pearl Dental Studio',
    clinicRegistration: 'PDS789',
    location: 'Delhi, Delhi NCR',
    rating: 4.7,
    reviewsCount: 134,
    image: require('../assets/doctor1.png'),
    languages: ['English', 'Hindi', 'Punjabi'],
    consultationFee: { inr: 279, usd: 3.5 },
    isOnlineAvailable: false,
    nextAvailable: '2024-08-03T10:00:00',
    qualification: 'BDS, General Practice',
    registration: 'DCI3456'
  },
  {
    id: 4,
    name: 'Dr. Meera Joshi',
    specialty: 'Prosthodontist',
    experience: 18,
    clinic: 'Bright Smiles',
    clinicRegistration: 'BS012',
    location: 'Pune, Maharashtra',
    rating: 4.6,
    reviewsCount: 178,
    image: require('../assets/doctor2.png'),
    languages: ['English', 'Hindi', 'Marathi'],
    consultationFee: { inr: 399, usd: 5 },
    isOnlineAvailable: true,
    nextAvailable: '2024-08-02T16:00:00',
    qualification: 'BDS, MDS Prosthodontics',
    registration: 'DCI4567'
  },
  {
    id: 5,
    name: 'Dr. Rajeev Singh',
    specialty: 'Endodontist',
    experience: 12,
    clinic: 'Care Dental Clinic',
    clinicRegistration: 'CDC345',
    location: 'Lucknow, Uttar Pradesh',
    rating: 4.5,
    reviewsCount: 98,
    image: require('../assets/doctor1.png'),
    languages: ['English', 'Hindi'],
    consultationFee: { inr: 329, usd: 4.2 },
    isOnlineAvailable: true,
    nextAvailable: '2024-08-02T17:00:00',
    qualification: 'BDS, MDS Endodontics',
    registration: 'DCI5678'
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

  const handleOnlineConsultation = (dentist) => {
    navigate('/patient-consultation', {
      state: {
        dentist: {
          ...dentist,
          specialization: [dentist.specialty],
          phone: '+91 98765 43210',
          email: `${dentist.name.toLowerCase().replace(/\s+/g, '.')}@${dentist.clinic.toLowerCase().replace(/\s+/g, '')}.com`,
          address: dentist.location
        },
        problem,
        speciality,
        other
      }
    });
  };

  const handleInPersonConsultation = (dentist) => {
    navigate('/confirm-pay', { state: { dentist, problem } });
  };

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
    <div className="min-h-screen bg-gray-50 w-full py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#2C73D2] mb-2">Available Dentists</h2>
          {problem && (
            <div className="text-xl font-semibold text-[#15396A] mb-4">
              Specialists for: <span className="text-[#F4A300]">{problem}</span>
            </div>
          )}
          <div className="bg-white rounded-lg p-4 shadow-md">
            <p className="text-gray-600">Choose between <span className="font-semibold text-[#2C73D2]">Online Video Consultation</span> or <span className="font-semibold text-[#F4A300]">In-Person Visit</span></p>
          </div>
        </div>

        {/* Enhanced Dentist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {mockDentists.map(dentist => (
            <div key={dentist.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              {/* Header with Online Status */}
              <div className="relative p-6 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white">
                <div className="flex items-center justify-between mb-4">
                  <img 
                    src={dentist.image} 
                    alt={dentist.name} 
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg" 
                  />
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    dentist.isOnlineAvailable ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {dentist.isOnlineAvailable ? '🟢 Online' : '🔴 Offline'}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{dentist.name}</h3>
                <p className="text-sm opacity-90">{dentist.qualification}</p>
                
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(dentist.rating) ? 'text-yellow-300' : 'text-white text-opacity-30'}`} />
                    ))}
                    <span className="ml-2 text-sm">{dentist.rating} ({dentist.reviewsCount})</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center">
                    <FaCertificate className="text-[#F4A300] w-4 h-4 mr-3" />
                    <span className="text-gray-600">Reg: {dentist.registration}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FaStethoscope className="text-[#2C73D2] w-4 h-4 mr-3" />
                    <span className="text-gray-600">{dentist.experience} years experience</span>
                  </div>
                  
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-red-500 w-4 h-4 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">{dentist.clinic}</p>
                      <p className="text-gray-600">{dentist.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <FaClock className="text-blue-500 w-4 h-4 mr-3" />
                    <span className="text-gray-600">
                      Next: {new Date(dentist.nextAvailable).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>

                {/* Specialization Tags */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Specialization</h4>
                  <span className="bg-[#2C73D2] bg-opacity-10 text-[#2C73D2] px-3 py-1 rounded-full text-xs">
                    {dentist.specialty}
                  </span>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {dentist.languages.map((lang, index) => (
                      <span key={index} className="bg-[#F4A300] bg-opacity-10 text-[#F4A300] px-2 py-1 rounded-full text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Consultation Options */}
                <div className="space-y-3">
                  {/* Online Consultation */}
                  <div className="border border-[#2C73D2] rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <FaVideo className="text-[#2C73D2] mr-2" />
                        <span className="font-medium text-gray-900">Online Consultation</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-[#2C73D2]">₹{dentist.consultationFee.inr}</span>
                        <span className="text-sm text-gray-500 ml-1">(${dentist.consultationFee.usd})</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleOnlineConsultation(dentist)}
                      disabled={!dentist.isOnlineAvailable}
                      className={`w-full py-2 px-4 rounded-md font-semibold transition-colors ${
                        dentist.isOnlineAvailable
                          ? 'bg-[#2C73D2] text-white hover:bg-[#1e5ba8]'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {dentist.isOnlineAvailable ? (
                        <>
                          <FaVideo className="inline mr-2" />
                          Start Video Call
                        </>
                      ) : (
                        'Currently Offline'
                      )}
                    </button>
                  </div>

                  {/* In-Person Consultation */}
                  <div className="border border-[#F4A300] rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <FaCalendarAlt className="text-[#F4A300] mr-2" />
                        <span className="font-medium text-gray-900">In-Person Visit</span>
                      </div>
                      <span className="text-sm text-gray-600">Book Appointment</span>
                    </div>
                    <button
                      onClick={() => handleInPersonConsultation(dentist)}
                      className="w-full py-2 px-4 rounded-md font-semibold bg-[#F4A300] text-white hover:bg-[#e6930a] transition-colors"
                    >
                      <FaCalendarAlt className="inline mr-2" />
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2C73D2] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaVideo className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-[#2C73D2] mb-2">Online Consultation</h4>
              <p className="text-gray-600">
                Video call with dentist → Digital examination → Instant prescription → 
                Email/WhatsApp delivery
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4A300] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarAlt className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-[#F4A300] mb-2">In-Person Visit</h4>
              <p className="text-gray-600">
                Schedule appointment → Visit clinic → Physical examination → 
                Complete treatment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistList;
