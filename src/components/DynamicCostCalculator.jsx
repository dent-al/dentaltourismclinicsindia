import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DynamicCostCalculator = () => {
  const { t } = useTranslation();
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const [selectedCity, setSelectedCity] = useState('mumbai');
  const [clinicTier, setClinicTier] = useState('standard');
  const [totalCost, setTotalCost] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Treatment data with pricing for different cities and tiers
  const treatments = {
    'dental-cleaning': {
      name: 'Dental Cleaning',
      category: 'Preventive',
      pricing: {
        mumbai: { budget: 800, standard: 1200, premium: 2000 },
        delhi: { budget: 750, standard: 1100, premium: 1800 },
        bangalore: { budget: 700, standard: 1000, premium: 1600 },
        chennai: { budget: 650, standard: 900, premium: 1400 },
        hyderabad: { budget: 600, standard: 850, premium: 1300 },
        pune: { budget: 650, standard: 950, premium: 1500 },
        kolkata: { budget: 550, standard: 800, premium: 1200 },
        ahmedabad: { budget: 600, standard: 900, premium: 1400 }
      },
      duration: '30-45 mins',
      description: 'Professional teeth cleaning and plaque removal'
    },
    'tooth-filling': {
      name: 'Tooth Filling',
      category: 'Restorative',
      pricing: {
        mumbai: { budget: 1500, standard: 2500, premium: 4000 },
        delhi: { budget: 1400, standard: 2300, premium: 3800 },
        bangalore: { budget: 1300, standard: 2200, premium: 3500 },
        chennai: { budget: 1200, standard: 2000, premium: 3200 },
        hyderabad: { budget: 1100, standard: 1900, premium: 3000 },
        pune: { budget: 1250, standard: 2100, premium: 3300 },
        kolkata: { budget: 1000, standard: 1800, premium: 2800 },
        ahmedabad: { budget: 1150, standard: 1950, premium: 3100 }
      },
      duration: '45-60 mins',
      description: 'Composite or amalgam filling for cavities'
    },
    'root-canal': {
      name: 'Root Canal Treatment',
      category: 'Endodontic',
      pricing: {
        mumbai: { budget: 5000, standard: 8000, premium: 12000 },
        delhi: { budget: 4800, standard: 7500, premium: 11000 },
        bangalore: { budget: 4500, standard: 7000, premium: 10500 },
        chennai: { budget: 4200, standard: 6500, premium: 9500 },
        hyderabad: { budget: 4000, standard: 6200, premium: 9000 },
        pune: { budget: 4300, standard: 6800, premium: 10000 },
        kolkata: { budget: 3800, standard: 6000, premium: 8500 },
        ahmedabad: { budget: 4100, standard: 6400, premium: 9200 }
      },
      duration: '60-90 mins',
      description: 'Complete root canal therapy with crown'
    },
    'dental-implant': {
      name: 'Dental Implant',
      category: 'Implantology',
      pricing: {
        mumbai: { budget: 25000, standard: 35000, premium: 50000 },
        delhi: { budget: 24000, standard: 33000, premium: 48000 },
        bangalore: { budget: 22000, standard: 32000, premium: 45000 },
        chennai: { budget: 20000, standard: 30000, premium: 42000 },
        hyderabad: { budget: 19000, standard: 28000, premium: 40000 },
        pune: { budget: 21000, standard: 31000, premium: 44000 },
        kolkata: { budget: 18000, standard: 27000, premium: 38000 },
        ahmedabad: { budget: 20000, standard: 29000, premium: 41000 }
      },
      duration: '2-3 hours',
      description: 'Complete dental implant with crown'
    },
    'teeth-whitening': {
      name: 'Teeth Whitening',
      category: 'Cosmetic',
      pricing: {
        mumbai: { budget: 3000, standard: 5000, premium: 8000 },
        delhi: { budget: 2800, standard: 4800, premium: 7500 },
        bangalore: { budget: 2600, standard: 4500, premium: 7000 },
        chennai: { budget: 2400, standard: 4200, premium: 6500 },
        hyderabad: { budget: 2200, standard: 4000, premium: 6200 },
        pune: { budget: 2500, standard: 4300, premium: 6800 },
        kolkata: { budget: 2000, standard: 3800, premium: 6000 },
        ahmedabad: { budget: 2300, standard: 4100, premium: 6400 }
      },
      duration: '60-90 mins',
      description: 'Professional teeth whitening treatment'
    },
    'braces': {
      name: 'Dental Braces',
      category: 'Orthodontic',
      pricing: {
        mumbai: { budget: 35000, standard: 55000, premium: 80000 },
        delhi: { budget: 33000, standard: 52000, premium: 75000 },
        bangalore: { budget: 32000, standard: 50000, premium: 72000 },
        chennai: { budget: 30000, standard: 48000, premium: 68000 },
        hyderabad: { budget: 28000, standard: 45000, premium: 65000 },
        pune: { budget: 31000, standard: 49000, premium: 70000 },
        kolkata: { budget: 27000, standard: 43000, premium: 62000 },
        ahmedabad: { budget: 29000, standard: 47000, premium: 67000 }
      },
      duration: '18-24 months',
      description: 'Complete orthodontic treatment with braces'
    },
    'wisdom-tooth': {
      name: 'Wisdom Tooth Extraction',
      category: 'Oral Surgery',
      pricing: {
        mumbai: { budget: 3000, standard: 5000, premium: 8000 },
        delhi: { budget: 2800, standard: 4800, premium: 7500 },
        bangalore: { budget: 2600, standard: 4500, premium: 7000 },
        chennai: { budget: 2400, standard: 4200, premium: 6500 },
        hyderabad: { budget: 2200, standard: 4000, premium: 6200 },
        pune: { budget: 2500, standard: 4300, premium: 6800 },
        kolkata: { budget: 2000, standard: 3800, premium: 6000 },
        ahmedabad: { budget: 2300, standard: 4100, premium: 6400 }
      },
      duration: '30-60 mins',
      description: 'Surgical removal of wisdom tooth'
    },
    'dentures': {
      name: 'Complete Dentures',
      category: 'Prosthodontic',
      pricing: {
        mumbai: { budget: 15000, standard: 25000, premium: 40000 },
        delhi: { budget: 14000, standard: 23000, premium: 38000 },
        bangalore: { budget: 13000, standard: 22000, premium: 35000 },
        chennai: { budget: 12000, standard: 20000, premium: 32000 },
        hyderabad: { budget: 11000, standard: 19000, premium: 30000 },
        pune: { budget: 12500, standard: 21000, premium: 33000 },
        kolkata: { budget: 10000, standard: 18000, premium: 28000 },
        ahmedabad: { budget: 11500, standard: 19500, premium: 31000 }
      },
      duration: '2-3 visits',
      description: 'Complete set of upper and lower dentures'
    }
  };

  const cities = [
    { value: 'mumbai', label: 'Mumbai', state: 'Maharashtra' },
    { value: 'delhi', label: 'Delhi', state: 'Delhi' },
    { value: 'bangalore', label: 'Bangalore', state: 'Karnataka' },
    { value: 'chennai', label: 'Chennai', state: 'Tamil Nadu' },
    { value: 'hyderabad', label: 'Hyderabad', state: 'Telangana' },
    { value: 'pune', label: 'Pune', state: 'Maharashtra' },
    { value: 'kolkata', label: 'Kolkata', state: 'West Bengal' },
    { value: 'ahmedabad', label: 'Ahmedabad', state: 'Gujarat' }
  ];

  const clinicTiers = [
    { value: 'budget', label: 'Budget Clinic', description: 'Basic facilities, qualified dentists' },
    { value: 'standard', label: 'Standard Clinic', description: 'Modern equipment, experienced doctors' },
    { value: 'premium', label: 'Premium Clinic', description: 'Luxury facilities, specialist doctors' }
  ];

  // Calculate total cost whenever selections change
  useEffect(() => {
    const total = selectedTreatments.reduce((sum, treatmentId) => {
      const treatment = treatments[treatmentId];
      if (treatment && treatment.pricing[selectedCity]) {
        return sum + treatment.pricing[selectedCity][clinicTier];
      }
      return sum;
    }, 0);
    setTotalCost(total);
    setShowResults(selectedTreatments.length > 0);
  }, [selectedTreatments, selectedCity, clinicTier]);

  const handleTreatmentChange = (treatmentId) => {
    setSelectedTreatments(prev => 
      prev.includes(treatmentId) 
        ? prev.filter(id => id !== treatmentId)
        : [...prev, treatmentId]
    );
  };

  const getTreatmentsByCategory = () => {
    const categories = {};
    Object.entries(treatments).forEach(([id, treatment]) => {
      if (!categories[treatment.category]) {
        categories[treatment.category] = [];
      }
      categories[treatment.category].push({ id, ...treatment });
    });
    return categories;
  };

  const handleSaveEstimate = () => {
    const estimate = {
      treatments: selectedTreatments.map(id => treatments[id].name),
      city: cities.find(c => c.value === selectedCity)?.label,
      clinicTier: clinicTiers.find(t => t.value === clinicTier)?.label,
      totalCost,
      date: new Date().toLocaleDateString(),
      patientInfo
    };
    
    // Save to localStorage
    const savedEstimates = JSON.parse(localStorage.getItem('dentalEstimates') || '[]');
    savedEstimates.push(estimate);
    localStorage.setItem('dentalEstimates', JSON.stringify(savedEstimates));
    
    alert('Estimate saved successfully! You can view it in your profile.');
  };

  const categorizedTreatments = getTreatmentsByCategory();

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#2C73D2] mb-2">
          Dynamic Dental Cost Calculator
        </h1>
        <p className="text-gray-600">
          Get instant pricing estimates for dental treatments across India
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Treatment Selection */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Select Treatments</h2>
            
            {Object.entries(categorizedTreatments).map(([category, treatmentList]) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-medium text-[#2C73D2] mb-3 border-b pb-2">
                  {category} Treatments
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {treatmentList.map(treatment => (
                    <div key={treatment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <label className="flex items-start cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedTreatments.includes(treatment.id)}
                          onChange={() => handleTreatmentChange(treatment.id)}
                          className="mt-1 mr-3 text-[#2C73D2]"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{treatment.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{treatment.description}</p>
                          <div className="text-xs text-[#2C73D2] mt-2">
                            Duration: {treatment.duration}
                          </div>
                          {selectedTreatments.includes(treatment.id) && (
                            <div className="text-sm font-medium text-green-600 mt-2">
                              ₹{treatment.pricing[selectedCity][clinicTier].toLocaleString()}
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Location & Results */}
        <div className="space-y-6">
          {/* Location Selection */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Location & Clinic Type</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">City</label>
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2C73D2]"
              >
                {cities.map(city => (
                  <option key={city.value} value={city.value}>
                    {city.label}, {city.state}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Clinic Type</label>
              <div className="space-y-2">
                {clinicTiers.map(tier => (
                  <label key={tier.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="clinicTier"
                      value={tier.value}
                      checked={clinicTier === tier.value}
                      onChange={(e) => setClinicTier(e.target.value)}
                      className="mr-3 text-[#2C73D2]"
                    />
                    <div>
                      <div className="font-medium">{tier.label}</div>
                      <div className="text-xs text-gray-600">{tier.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Cost Results */}
          {showResults && (
            <div className="bg-[#2C73D2] text-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Cost Estimate</h3>
              
              <div className="space-y-3">
                {selectedTreatments.map(treatmentId => {
                  const treatment = treatments[treatmentId];
                  const cost = treatment.pricing[selectedCity][clinicTier];
                  return (
                    <div key={treatmentId} className="flex justify-between items-center border-b border-blue-300 pb-2">
                      <span className="text-sm">{treatment.name}</span>
                      <span className="font-medium">₹{cost.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-blue-300 pt-4 mt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total Cost:</span>
                  <span>₹{totalCost.toLocaleString()}</span>
                </div>
                <div className="text-sm opacity-90 mt-2">
                  * Prices may vary based on individual case complexity
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button 
                  onClick={handleSaveEstimate}
                  className="w-full bg-white text-[#2C73D2] font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Save Estimate
                </button>
                <button 
                  onClick={() => window.location.href = '/book-appointment'}
                  className="w-full bg-[#F4A300] text-white font-medium py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          )}

          {/* Patient Info Form */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Get Detailed Quote</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={patientInfo.name}
                onChange={(e) => setPatientInfo(prev => ({...prev, name: e.target.value}))}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2C73D2]"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={patientInfo.email}
                onChange={(e) => setPatientInfo(prev => ({...prev, email: e.target.value}))}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2C73D2]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={patientInfo.phone}
                onChange={(e) => setPatientInfo(prev => ({...prev, phone: e.target.value}))}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2C73D2]"
              />
              <button 
                className="w-full bg-[#2C73D2] text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => alert('Quote request submitted! We will contact you soon.')}
              >
                Request Detailed Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4">
          <div className="text-2xl mb-2">💰</div>
          <h4 className="font-medium">Transparent Pricing</h4>
          <p className="text-sm text-gray-600">No hidden costs, upfront estimates</p>
        </div>
        <div className="p-4">
          <div className="text-2xl mb-2">🏥</div>
          <h4 className="font-medium">Verified Clinics</h4>
          <p className="text-sm text-gray-600">All clinics are verified and certified</p>
        </div>
        <div className="p-4">
          <div className="text-2xl mb-2">📍</div>
          <h4 className="font-medium">Pan-India Coverage</h4>
          <p className="text-sm text-gray-600">Available in 100+ cities across India</p>
        </div>
      </div>
    </div>
  );
};

export default DynamicCostCalculator;
