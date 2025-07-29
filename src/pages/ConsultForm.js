import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConsultForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dentist = location.state?.dentist;

  if (!dentist) {
    return <div className="p-8 text-center">No dentist selected. <button className="text-blue-500 underline" onClick={() => navigate(-1)}>Go Back</button></div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xl flex flex-col md:flex-row p-6 relative">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
          <img src={dentist.image} alt={dentist.name} className="w-24 h-24 rounded-full object-cover border-2 border-blue-200 mb-2" />
          <div className="font-bold text-lg text-[#15396A] text-center mb-1">{dentist.name}</div>
          <div className="text-sm text-gray-600 text-center mb-2 whitespace-pre-line">{dentist.title || dentist.speciality}</div>
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 p-4">
          <h3 className="text-xl font-bold text-[#2C73D2] mb-2">Confirm & Pay</h3>
          <div className="mb-2 text-green-600 flex items-center gap-2">
            <span className="text-lg">●</span>
            Verified Dentist online now
          </div>
          <div className="mb-2 text-gray-700 text-sm">One of them will speak to you shortly.</div>
          <div className="mb-2 flex items-center gap-2 text-sm">
            <span className="text-green-500">&#x1F4A1;</span>
            93% of users found online consultation helpful
          </div>
          <div className="mb-2 flex items-center gap-2 text-sm">
            <span className="text-green-500">&#x1F4F1;</span>
            Consultation will happen only on mobile app
          </div>
          <form className="flex flex-col gap-2 mt-2">
            <label htmlFor="patientName" className="text-sm font-semibold">Patient name</label>
            <input id="patientName" type="text" className="border rounded px-3 py-2" defaultValue="User" required />
            <label htmlFor="phoneNumber" className="text-sm font-semibold">Phone number</label>
            <input id="phoneNumber" type="tel" className="border rounded px-3 py-2" placeholder="Enter phone number" required />
            <a href="#" className="text-blue-500 text-xs">Have a coupon code?</a>
            
            {/* Disclaimer Checkbox */}
            <div className="flex items-start gap-2 mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <input 
                type="checkbox" 
                id="patientDisclaimer" 
                className="mt-1 text-[#2C73D2] focus:ring-[#2C73D2]"
                required 
              />
              <label htmlFor="patientDisclaimer" className="text-xs text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#2C73D2]">Disclaimer:</span> I hereby declare that all the information provided is true and accurate. I understand that this is not for emergency use and agree to the terms and conditions of the consultation service.
              </label>
            </div>
            
            <div className="mt-2 text-gray-600 text-xs">Final Fee</div>
            <div className="text-2xl font-bold text-[#2C73D2]">₹449</div>
            <button type="submit" className="bg-[#2C73D2] text-white font-semibold px-4 py-2 rounded-lg shadow mt-4">Continue to payment</button>
          </form>
          <div className="mt-4 text-xs text-gray-500">
            Dental Tourism Clinics India Guarantee: 100% Money back if no response<br />
            Not for emergency use<br />
            The contents of your consultations are private and confidential. Dental Tourism Clinics India's team of doctors may carry out routine anonymised audits to improve service quality. T&C apply
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultForm;
