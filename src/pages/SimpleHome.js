import React from "react";

const SimpleHome = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Dental Tourism Clinics India
        </h1>
        <p className="text-gray-600 mb-8">
          Welcome to our dental tourism platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Video Consultation</h3>
            <p className="text-sm text-blue-600">Consult dentist online from anywhere</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Dental Clinics</h3>
            <p className="text-sm text-green-600">Book appointments with leading clinics</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">3D Dental Scan</h3>
            <p className="text-sm text-purple-600">CBCT & OPG scan centers</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-2">Blood Test</h3>
            <p className="text-sm text-orange-600">Book blood tests near you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHome;
