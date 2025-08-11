import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaStethoscope, FaCertificate, FaMapMarkerAlt, FaPhone, FaEnvelope, FaStar, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

const PatientConsultationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dentist, problem, speciality, other } = location.state || {};
  
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    nationality: '',
    passportNumber: '',
    email: '',
    phone: '',
    chiefComplaint: problem || '',
    medicalHistory: '',
    currentMedications: '',
    allergies: '',
    symptoms: '',
    painLevel: '',
    urgency: 'routine',
    preferredLanguage: 'english',
    images: []
  });
  const [loading, setLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    if (!dentist) {
      navigate('/dentist-list');
      return;
    }
  }, [dentist, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handlePayment = async (paymentMethod) => {
    setLoading(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to video consultation with form data
      navigate('/video-consultation', {
        state: {
          dentist: dentist,
          patient: formData,
          consultationId: `CONS${Date.now()}`,
          paymentStatus: 'paid',
          problem,
          speciality,
          other
        }
      });
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!dentist) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Dentist Selected</h2>
          <button
            onClick={() => navigate('/consult')}
            className="bg-[#2C73D2] text-white px-6 py-2 rounded-md"
          >
            Back to Consultation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Online Dental Consultation</h1>
          <p className="text-gray-600">Fill the form below to start your video consultation</p>
        </div>

        {!showPayment ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dentist Information Panel */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#2C73D2] to-[#F4A300] p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <FaUser className="text-3xl text-[#2C73D2]" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{dentist.name}</h2>
                <p className="text-[#2C73D2] font-medium">{dentist.qualification}</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(dentist.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-gray-600">{dentist.rating} ({dentist.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FaCertificate className="text-[#F4A300] w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Registration</p>
                    <p className="text-gray-600">{dentist.registration}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaStethoscope className="text-[#2C73D2] w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Experience</p>
                    <p className="text-gray-600">{dentist.experience} years</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-red-500 w-5 h-5 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{dentist.clinic}</p>
                    <p className="text-gray-600">{dentist.address}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaPhone className="text-green-500 w-5 h-5 mr-3" />
                  <p className="text-gray-600">{dentist.phone}</p>
                </div>

                <div className="flex items-center">
                  <FaEnvelope className="text-blue-500 w-5 h-5 mr-3" />
                  <p className="text-gray-600">{dentist.email}</p>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-bold text-gray-900 mb-2">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {dentist.specialization && dentist.specialization.map((spec, index) => (
                      <span key={index} className="bg-[#2C73D2] bg-opacity-10 text-[#2C73D2] px-3 py-1 rounded-full text-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-bold text-gray-900 mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {dentist.languages && dentist.languages.map((lang, index) => (
                      <span key={index} className="bg-[#F4A300] bg-opacity-10 text-[#F4A300] px-3 py-1 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] rounded-lg p-4 text-white text-center">
                  <p className="text-lg font-bold">Consultation Fee</p>
                  <p className="text-2xl font-bold">₹{dentist.consultationFee.inr} / ${dentist.consultationFee.usd}</p>
                </div>
              </div>
            </div>

            {/* Patient Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      min="1"
                      max="120"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                      placeholder="Your age"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality *
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                      placeholder="Your nationality"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Passport Number
                    </label>
                    <input
                      type="text"
                      name="passportNumber"
                      value={formData.passportNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                      placeholder="For international patients"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Medical Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Chief Complaint *
                      </label>
                      <textarea
                        name="chiefComplaint"
                        value={formData.chiefComplaint}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                        placeholder="Describe your main dental problem..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pain Level (1-10)
                        </label>
                        <select
                          name="painLevel"
                          value={formData.painLevel}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                        >
                          <option value="">Select pain level</option>
                          {[...Array(10)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1} - {i === 0 ? 'No pain' : i < 3 ? 'Mild' : i < 7 ? 'Moderate' : 'Severe'}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Urgency
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                        >
                          <option value="routine">Routine</option>
                          <option value="urgent">Urgent</option>
                          <option value="emergency">Emergency</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Medical History
                      </label>
                      <textarea
                        name="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                        placeholder="Any past medical conditions, surgeries, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Medications
                      </label>
                      <textarea
                        name="currentMedications"
                        value={formData.currentMedications}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                        placeholder="List any medications you're currently taking"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Allergies
                      </label>
                      <input
                        type="text"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                        placeholder="Any known allergies (medications, latex, etc.)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Images (Optional)
                      </label>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                      />
                      <p className="text-sm text-gray-500 mt-1">Upload photos of your dental problem if available</p>
                      
                      {formData.images.length > 0 && (
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {formData.images.map((image, index) => (
                            <div key={index} className="relative">
                              <img
                                src={URL.createObjectURL(image)}
                                alt={`Upload ${index + 1}`}
                                className="w-full h-20 object-cover rounded-md"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Language
                      </label>
                      <select
                        name="preferredLanguage"
                        value={formData.preferredLanguage}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C73D2]"
                      >
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="gujarati">Gujarati</option>
                        <option value="arabic">Arabic</option>
                        <option value="russian">Russian</option>
                        <option value="french">French</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="border-t pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white py-3 px-6 rounded-md font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <FaCreditCard className="mr-2" />
                    Proceed to Payment (₹{dentist.consultationFee.inr} / ${dentist.consultationFee.usd})
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          /* Payment Section */
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <FaShieldAlt className="w-16 h-16 text-[#2C73D2] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Secure Payment</h2>
              <p className="text-gray-600">Complete your payment to start the consultation</p>
            </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">Consultation with {dentist.name}</span>
                  <span className="font-semibold">₹{dentist.consultationFee.inr}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">Platform fee</span>
                  <span className="font-semibold">₹0</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount</span>
                    <div>
                      <span className="text-[#2C73D2]">₹{dentist.consultationFee.inr}</span>
                      <span className="text-gray-500 text-sm ml-2">(${dentist.consultationFee.usd})</span>
                    </div>
                  </div>
                </div>
              </div>            <div className="space-y-4">
              <button
                onClick={() => handlePayment('razorpay')}
                disabled={loading}
                className="w-full bg-[#2C73D2] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#1e5ba8] transition-colors flex items-center justify-center"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                ) : (
                  <FaCreditCard className="mr-2" />
                )}
                {loading ? 'Processing...' : 'Pay with Razorpay'}
              </button>

              <button
                onClick={() => handlePayment('paypal')}
                disabled={loading}
                className="w-full bg-[#F4A300] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#e6930a] transition-colors flex items-center justify-center"
              >
                <FaCreditCard className="mr-2" />
                Pay with PayPal (International)
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <FaShieldAlt className="inline w-4 h-4 mr-1" />
              Your payment is secured with 256-bit SSL encryption
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientConsultationForm;
