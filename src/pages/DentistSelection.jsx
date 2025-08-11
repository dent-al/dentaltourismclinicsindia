import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaStethoscope, FaCertificate, FaMapMarkerAlt, FaPhone, FaEnvelope, FaStar, FaVideo, FaSearch, FaFilter } from 'react-icons/fa';

const DentistSelection = () => {
  const navigate = useNavigate();
  const [dentists, setDentists] = useState([]);
  const [filteredDentists, setFilteredDentists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [loading, setLoading] = useState(true);

  // Sample dentists data - in real app, fetch from API
  const sampleDentists = [
    {
      id: '1',
      name: 'Dr. Rina Patel',
      qualification: 'MDS, Oral & Maxillofacial Surgery',
      registration: 'DCI7890',
      experience: '15 years',
      rating: 4.9,
      reviewsCount: 245,
      specialization: ['Dental Implants', 'Oral Surgery', 'Cosmetic Dentistry'],
      clinic: 'Smile India Dental',
      clinicRegistration: 'ABC123',
      address: 'Bandra West, Mumbai, Maharashtra',
      phone: '+91 98765 43210',
      email: 'dr.rinapatel@smileindia.com',
      consultationFee: { inr: 399, usd: 5 },
      languages: ['English', 'Hindi', 'Gujarati'],
      avatar: '/assets/dentist-female.png',
      isOnline: true,
      nextAvailable: '2024-08-02T14:00:00'
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      qualification: 'BDS, MDS Orthodontics',
      registration: 'DCI8901',
      experience: '12 years',
      rating: 4.8,
      reviewsCount: 189,
      specialization: ['Orthodontics', 'Braces', 'Teeth Alignment'],
      clinic: 'Perfect Smile Clinic',
      clinicRegistration: 'DEF456',
      address: 'Koramangala, Bangalore, Karnataka',
      phone: '+91 98765 43211',
      email: 'dr.rajeshkumar@perfectsmile.com',
      consultationFee: { inr: 299, usd: 4 },
      languages: ['English', 'Hindi', 'Kannada'],
      avatar: '/assets/dentist-male.png',
      isOnline: true,
      nextAvailable: '2024-08-02T15:30:00'
    },
    {
      id: '3',
      name: 'Dr. Priya Sharma',
      qualification: 'BDS, MDS Endodontics',
      registration: 'DCI9012',
      experience: '10 years',
      rating: 4.7,
      reviewsCount: 156,
      specialization: ['Root Canal', 'Endodontics', 'Pain Management'],
      clinic: 'Dental Care Plus',
      clinicRegistration: 'GHI789',
      address: 'CP, New Delhi',
      phone: '+91 98765 43212',
      email: 'dr.priyasharma@dentalcareplus.com',
      consultationFee: { inr: 349, usd: 4.5 },
      languages: ['English', 'Hindi', 'Punjabi'],
      avatar: '/assets/dentist-female-2.png',
      isOnline: false,
      nextAvailable: '2024-08-03T10:00:00'
    },
    {
      id: '4',
      name: 'Dr. Mohammed Ali',
      qualification: 'BDS, MDS Periodontics',
      registration: 'DCI0123',
      experience: '8 years',
      rating: 4.6,
      reviewsCount: 134,
      specialization: ['Gum Treatment', 'Periodontics', 'Dental Cleaning'],
      clinic: 'Hyderabad Dental Institute',
      clinicRegistration: 'JKL012',
      address: 'Jubilee Hills, Hyderabad, Telangana',
      phone: '+91 98765 43213',
      email: 'dr.mohammedali@hdi.com',
      consultationFee: { inr: 279, usd: 3.5 },
      languages: ['English', 'Hindi', 'Urdu', 'Telugu'],
      avatar: '/assets/dentist-male-2.png',
      isOnline: true,
      nextAvailable: '2024-08-02T16:00:00'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setDentists(sampleDentists);
      setFilteredDentists(sampleDentists);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = dentists;

    if (searchTerm) {
      filtered = filtered.filter(dentist =>
        dentist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dentist.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedSpecialization) {
      filtered = filtered.filter(dentist =>
        dentist.specialization.some(spec => spec.includes(selectedSpecialization))
      );
    }

    if (selectedLanguage) {
      filtered = filtered.filter(dentist =>
        dentist.languages.includes(selectedLanguage)
      );
    }

    setFilteredDentists(filtered);
  }, [searchTerm, selectedSpecialization, selectedLanguage, dentists]);

  const handleBookConsultation = (dentistId) => {
    navigate(`/patient-consultation/${dentistId}`);
  };

  const getSpecializations = () => {
    const specs = new Set();
    dentists.forEach(dentist => {
      dentist.specialization.forEach(spec => specs.add(spec));
    });
    return Array.from(specs);
  };

  const getLanguages = () => {
    const langs = new Set();
    dentists.forEach(dentist => {
      dentist.languages.forEach(lang => langs.add(lang));
    });
    return Array.from(langs);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#2C73D2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dentists...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Dentist</h1>
          <p className="text-xl text-gray-600 mb-6">Select a qualified dentist for your online video consultation</p>
          
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or specialization..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                />
              </div>
              
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
              >
                <option value="">All Specializations</option>
                {getSpecializations().map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
              
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
              >
                <option value="">All Languages</option>
                {getLanguages().map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Dentists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDentists.map((dentist) => (
            <div key={dentist.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Card Header */}
              <div className="relative p-6 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <FaUser className="text-2xl" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    dentist.isOnline ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {dentist.isOnline ? 'Online' : 'Offline'}
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

              {/* Card Body */}
              <div className="p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <FaCertificate className="text-[#F4A300] w-4 h-4 mr-3" />
                    <span className="text-gray-600">Reg: {dentist.registration}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FaStethoscope className="text-[#2C73D2] w-4 h-4 mr-3" />
                    <span className="text-gray-600">{dentist.experience} experience</span>
                  </div>
                  
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-red-500 w-4 h-4 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">{dentist.clinic}</p>
                      <p className="text-gray-600">{dentist.address}</p>
                    </div>
                  </div>
                </div>

                {/* Specializations */}
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {dentist.specialization.slice(0, 3).map((spec, index) => (
                      <span key={index} className="bg-[#2C73D2] bg-opacity-10 text-[#2C73D2] px-2 py-1 rounded-full text-xs">
                        {spec}
                      </span>
                    ))}
                    {dentist.specialization.length > 3 && (
                      <span className="text-xs text-gray-500">+{dentist.specialization.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {dentist.languages.slice(0, 3).map((lang, index) => (
                      <span key={index} className="bg-[#F4A300] bg-opacity-10 text-[#F4A300] px-2 py-1 rounded-full text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Consultation Fee */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Consultation Fee</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-[#2C73D2]">₹{dentist.consultationFee.inr}</span>
                      <span className="text-sm text-gray-500 ml-1">(${dentist.consultationFee.usd})</span>
                    </div>
                  </div>
                </div>

                {/* Next Available */}
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-500">
                    Next available: {new Date(dentist.nextAvailable).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>

                {/* Book Button */}
                <button
                  onClick={() => handleBookConsultation(dentist.id)}
                  className="w-full mt-4 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white py-3 px-4 rounded-md font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <FaVideo className="mr-2" />
                  Book Video Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDentists.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-xl mb-4">No dentists found</div>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-6">Our dental experts can help you find the right specialist for your needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#2C73D2] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1e5ba8] transition-colors">
              <FaPhone className="inline mr-2" />
              Call +91-98765-43210
            </button>
            <button className="bg-[#F4A300] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e6930a] transition-colors">
              <FaEnvelope className="inline mr-2" />
              Email Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistSelection;
