import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DigitalPrescription from '../components/DigitalPrescription';
import customLogo from '../logo.svg';

const OnlineConsultation = () => {
  const navigate = useNavigate();
  const [consultationStep, setConsultationStep] = useState('booking'); // 'booking', 'consultation', 'prescription'
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    country: '',
    contact: '',
    email: '',
    symptoms: '',
    medicalHistory: ''
  });
  const [showPrescription, setShowPrescription] = useState(false);
  const [consultationStarted, setConsultationStarted] = useState(false);
  const [consultationTime, setConsultationTime] = useState(0);

  // Timer for consultation
  useEffect(() => {
    let interval;
    if (consultationStarted) {
      interval = setInterval(() => {
        setConsultationTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [consultationStarted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePatientDataChange = (field, value) => {
    setPatientData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const startConsultation = () => {
    navigate('/select-dentist');
  };

  const endConsultationAndPrescribe = () => {
    setConsultationStarted(false);
    setShowPrescription(true);
  };

  const handlePrescriptionSend = async (pdfBlob) => {
    // Here you would integrate with your email service
    // For demonstration, we'll just show an alert
    alert(`Prescription sent to ${patientData.email}`);
    setShowPrescription(false);
    setConsultationStep('booking');
    setConsultationTime(0);
    setPatientData({
      name: '',
      age: '',
      country: '',
      contact: '',
      email: '',
      symptoms: '',
      medicalHistory: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={customLogo} alt="Logo" className="w-16 h-16" />
            <div>
              <h1 className="text-3xl font-bold text-[#2C73D2]">Online Video Consultation</h1>
              <p className="text-gray-600">Professional dental consultation from anywhere</p>
            </div>
          </div>
        </div>

        {/* Booking Step */}
        {consultationStep === 'booking' && (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-6">Patient Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Patient Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={patientData.name}
                  onChange={(e) => handlePatientDataChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={patientData.age}
                  onChange={(e) => handlePatientDataChange('age', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                  placeholder="Enter age"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  value={patientData.country}
                  onChange={(e) => handlePatientDataChange('country', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                  placeholder="Enter country"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={patientData.contact}
                  onChange={(e) => handlePatientDataChange('contact', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                  placeholder="Enter contact number"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                value={patientData.email}
                onChange={(e) => handlePatientDataChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                placeholder="Enter email for prescription delivery"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Symptoms</label>
              <textarea
                value={patientData.symptoms}
                onChange={(e) => handlePatientDataChange('symptoms', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                rows="3"
                placeholder="Describe your dental concerns and symptoms"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Medical History</label>
              <textarea
                value={patientData.medicalHistory}
                onChange={(e) => handlePatientDataChange('medicalHistory', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                rows="3"
                placeholder="Any relevant medical history, allergies, or current medications"
              />
            </div>

            <button
              onClick={startConsultation}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold rounded-md hover:from-[#F4A300] hover:to-[#2C73D2] transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Start Video Consultation
            </button>
          </div>
        )}

        {/* Consultation Step */}
        {consultationStep === 'consultation' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-[#2C73D2]">Live Consultation</h2>
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600">
                  Consultation Time: <span className="font-mono text-[#2C73D2]">{formatTime(consultationTime)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600">Live</span>
                </div>
              </div>
            </div>

            {/* Patient Info Display */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Patient Information</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div><strong>Name:</strong> {patientData.name}</div>
                <div><strong>Age:</strong> {patientData.age}</div>
                <div><strong>Country:</strong> {patientData.country}</div>
                <div><strong>Contact:</strong> {patientData.contact}</div>
              </div>
              {patientData.symptoms && (
                <div className="mt-2">
                  <strong>Symptoms:</strong> {patientData.symptoms}
                </div>
              )}
            </div>

            {/* Video Call Simulation */}
            <div className="bg-gray-900 rounded-lg p-8 mb-6 text-center text-white">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Consultation Active</h3>
              <p className="text-gray-300">Doctor and patient are connected via video call</p>
              <div className="mt-4 flex justify-center gap-4">
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Camera On</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Microphone On</span>
                </div>
              </div>
            </div>

            {/* Consultation Controls */}
            <div className="flex justify-center gap-4">
              <button
                onClick={endConsultationAndPrescribe}
                className="px-6 py-3 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold rounded-md hover:from-[#F4A300] hover:to-[#2C73D2] transition flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                End Consultation & Write Prescription
              </button>
            </div>
          </div>
        )}

        {/* Features Section */}
        {consultationStep === 'booking' && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#2C73D2] text-center mb-8">Why Choose Our Online Consultation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#2C73D2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Licensed Dentists</h3>
                <p className="text-gray-600">Consult with verified and experienced dental professionals</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#F4A300]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Digital Prescription</h3>
                <p className="text-gray-600">Receive official digital prescriptions delivered to your email</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Available</h3>
                <p className="text-gray-600">Get dental consultation anytime, anywhere in the world</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Digital Prescription Modal */}
      {showPrescription && (
        <DigitalPrescription
          patientData={patientData}
          onClose={() => setShowPrescription(false)}
          onSend={handlePrescriptionSend}
        />
      )}
    </div>
  );
};

export default OnlineConsultation;
