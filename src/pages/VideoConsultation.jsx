import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaVideo, FaMicrophone, FaMicrophoneSlash, FaVideoSlash, FaPhone, FaDownload, FaWhatsapp, FaEnvelope, FaQrcode } from 'react-icons/fa';
import DigitalPrescription from '../components/DigitalPrescription';

const VideoConsultation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dentist, patient, consultationId, paymentStatus } = location.state || {};
  
  const [consultationStatus, setConsultationStatus] = useState('waiting'); // waiting, active, completed
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [consultationTime, setConsultationTime] = useState(0);
  const [showPrescription, setShowPrescription] = useState(false);
  const [consultationNotes, setConsultationNotes] = useState('');
  const [prescriptionData, setPrescriptionData] = useState(null);
  
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!dentist || !patient || paymentStatus !== 'paid') {
      navigate('/');
      return;
    }

    // Start video consultation after 3 seconds (simulate doctor joining)
    const timeout = setTimeout(() => {
      setConsultationStatus('active');
      startTimer();
    }, 3000);

    return () => {
      clearTimeout(timeout);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [dentist, patient, paymentStatus, navigate]);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setConsultationTime(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
  };

  const endConsultation = () => {
    setConsultationStatus('completed');
    stopTimer();
    setShowPrescription(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePrescriptionGenerated = (prescriptionData) => {
    setPrescriptionData(prescriptionData);
  };

  if (!dentist || !patient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Invalid Session</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-[#2C73D2] text-white px-6 py-2 rounded-md"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {consultationStatus === 'waiting' && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold mb-2">Connecting to Dr. {dentist.name}</h2>
            <p className="text-gray-300">Please wait while we establish the connection...</p>
          </div>
        </div>
      )}

      {consultationStatus === 'active' && (
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#2C73D2] rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">{dentist.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <h3 className="font-semibold">{dentist.name}</h3>
                <p className="text-sm text-gray-300">Online - {formatTime(consultationTime)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Consultation ID: {consultationId}</span>
            </div>
          </div>

          {/* Video Area */}
          <div className="flex-1 flex">
            {/* Main Video */}
            <div className="flex-1 relative bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                {isVideoOn ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#2C73D2] to-[#F4A300] flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold">{dentist.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <p className="text-xl font-semibold">{dentist.name}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-white text-center">
                    <FaVideoSlash className="w-16 h-16 mx-auto mb-4" />
                    <p>Video is off</p>
                  </div>
                )}
              </div>

              {/* Patient Video (Picture-in-Picture) */}
              <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-700 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F4A300] rounded-full flex items-center justify-center mb-2">
                      <span className="text-lg font-bold">{patient.patientName.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <p className="text-sm">{patient.patientName}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-80 bg-white p-4 overflow-y-auto">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Patient Information</h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Name:</span>
                  <span className="ml-2">{patient.patientName}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Age:</span>
                  <span className="ml-2">{patient.age} years</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Nationality:</span>
                  <span className="ml-2">{patient.nationality}</span>
                </div>
                {patient.passportNumber && (
                  <div>
                    <span className="font-medium text-gray-700">Passport:</span>
                    <span className="ml-2">{patient.passportNumber}</span>
                  </div>
                )}
                <div>
                  <span className="font-medium text-gray-700">Chief Complaint:</span>
                  <p className="mt-1 text-gray-600">{patient.chiefComplaint}</p>
                </div>
                {patient.painLevel && (
                  <div>
                    <span className="font-medium text-gray-700">Pain Level:</span>
                    <span className="ml-2">{patient.painLevel}/10</span>
                  </div>
                )}
                {patient.medicalHistory && (
                  <div>
                    <span className="font-medium text-gray-700">Medical History:</span>
                    <p className="mt-1 text-gray-600">{patient.medicalHistory}</p>
                  </div>
                )}
                {patient.currentMedications && (
                  <div>
                    <span className="font-medium text-gray-700">Current Medications:</span>
                    <p className="mt-1 text-gray-600">{patient.currentMedications}</p>
                  </div>
                )}
                {patient.allergies && (
                  <div>
                    <span className="font-medium text-gray-700">Allergies:</span>
                    <p className="mt-1 text-gray-600">{patient.allergies}</p>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-gray-700 mb-2">Consultation Notes</h4>
                <textarea
                  value={consultationNotes}
                  onChange={(e) => setConsultationNotes(e.target.value)}
                  className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                  placeholder="Add notes during consultation..."
                />
              </div>

              <button
                onClick={endConsultation}
                className="w-full mt-4 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white py-2 px-4 rounded-md font-semibold"
              >
                End Consultation & Generate Prescription
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-gray-800 p-4">
            <div className="flex justify-center space-x-4">
              <button
                onClick={toggleAudio}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isAudioOn ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-600 hover:bg-red-500'
                } text-white transition-colors`}
              >
                {isAudioOn ? <FaMicrophone /> : <FaMicrophoneSlash />}
              </button>

              <button
                onClick={toggleVideo}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isVideoOn ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-600 hover:bg-red-500'
                } text-white transition-colors`}
              >
                {isVideoOn ? <FaVideo /> : <FaVideoSlash />}
              </button>

              <button
                onClick={endConsultation}
                className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center transition-colors"
              >
                <FaPhone className="transform rotate-135" />
              </button>
            </div>
          </div>
        </div>
      )}

      {consultationStatus === 'completed' && showPrescription && (
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Consultation Completed</h2>
              <p className="text-gray-600">Duration: {formatTime(consultationTime)}</p>
            </div>

            <DigitalPrescription
              dentist={dentist}
              patient={patient}
              consultationId={consultationId}
              consultationNotes={consultationNotes}
              onPrescriptionGenerated={handlePrescriptionGenerated}
            />

            <div className="mt-8 text-center">
              <button
                onClick={() => navigate('/')}
                className="bg-[#2C73D2] text-white px-6 py-2 rounded-md mr-4"
              >
                Back to Home
              </button>
              <button
                onClick={() => navigate('/my-consultations')}
                className="bg-[#F4A300] text-white px-6 py-2 rounded-md"
              >
                View My Consultations
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoConsultation;