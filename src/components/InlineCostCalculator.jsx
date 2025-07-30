import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InlineCostCalculator = () => {
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedCity, setSelectedCity] = useState('mumbai');
  const [estimatedCost, setEstimatedCost] = useState(null);

  const quickTreatments = {
    'dental-cleaning': {
      name: 'Dental Cleaning',
      costs: { mumbai: 1200, delhi: 1100, bangalore: 1000, chennai: 900 }
    },
    'tooth-filling': {
      name: 'Tooth Filling',
      costs: { mumbai: 2500, delhi: 2300, bangalore: 2200, chennai: 2000 }
    },
    'root-canal': {
      name: 'Root Canal',
      costs: { mumbai: 8000, delhi: 7500, bangalore: 7000, chennai: 6500 }
    },
    'dental-implant': {
      name: 'Dental Implant',
      costs: { mumbai: 35000, delhi: 33000, bangalore: 32000, chennai: 30000 }
    },
    'braces': {
      name: 'Dental Braces',
      costs: { mumbai: 55000, delhi: 52000, bangalore: 50000, chennai: 48000 }
    },
    'teeth-whitening': {
      name: 'Teeth Whitening',
      costs: { mumbai: 5000, delhi: 4800, bangalore: 4500, chennai: 4200 }
    }
  };

  const cities = [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'chennai', label: 'Chennai' }
  ];

  const handleCalculate = () => {
    if (selectedTreatment && selectedCity) {
      const cost = quickTreatments[selectedTreatment].costs[selectedCity];
      setEstimatedCost(cost);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] p-6 rounded-xl text-white shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Quick Cost Calculator</h3>
        <p className="opacity-90">Get instant treatment cost estimates</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2 opacity-90">Treatment</label>
          <select 
            value={selectedTreatment}
            onChange={(e) => setSelectedTreatment(e.target.value)}
            className="w-full p-3 rounded-lg text-gray-800 border-0 focus:ring-2 focus:ring-white"
          >
            <option value="">Select Treatment</option>
            {Object.entries(quickTreatments).map(([key, treatment]) => (
              <option key={key} value={key}>{treatment.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 opacity-90">City</label>
          <select 
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full p-3 rounded-lg text-gray-800 border-0 focus:ring-2 focus:ring-white"
          >
            {cities.map(city => (
              <option key={city.value} value={city.value}>{city.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-center">
        <button 
          onClick={handleCalculate}
          disabled={!selectedTreatment}
          className="bg-white text-[#2C73D2] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
        >
          Calculate Cost
        </button>

        {estimatedCost && (
          <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-4">
            <div className="text-2xl font-bold">₹{estimatedCost.toLocaleString()}</div>
            <div className="text-sm opacity-90">Estimated Cost</div>
          </div>
        )}

        <Link 
          to="/cost-calculator"
          className="inline-block bg-[#F4A300] text-white font-medium py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Advanced Calculator →
        </Link>
      </div>
    </div>
  );
};

export default InlineCostCalculator;
