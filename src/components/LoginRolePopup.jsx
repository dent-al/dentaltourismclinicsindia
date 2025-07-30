import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginRolePopup = ({ open, onClose, onShowLogin }) => {
  const navigate = useNavigate();
  const [showCBCTForm, setShowCBCTForm] = useState(false);
  const [showDiagnosticForm, setShowDiagnosticForm] = useState(false);
  const [cbctForm, setCbctForm] = useState({
    centerName: '',
    ownerName: '',
    email: '',
    phone: '',
    altPhone: '',
    website: '',
  });
  const [diagnosticForm, setDiagnosticForm] = useState({
    labName: '',
    ownerName: '',
    email: '',
    phone: '',
    altPhone: '',
    website: '',
  });

  if (!open) return null;

  const handleDentistClick = () => {
    onClose();
    navigate('/dentist-registration');
  };

  const handleCBCTClick = () => {
    onClose();
    navigate('/cbct-registration');
  };

  const handleChange = (e) => {
    setCbctForm({ ...cbctForm, [e.target.name]: e.target.value });
  };

  const handleDiagnosticChange = (e) => {
    setDiagnosticForm({ ...diagnosticForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle CBCT form submission logic here
    setShowCBCTForm(false);
  };

  const handleDiagnosticSubmit = (e) => {
    e.preventDefault();
    // Handle Diagnostic Lab form submission logic here
    setShowDiagnosticForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start backdrop-blur-3xl bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white w-full max-w-md flex flex-col items-center p-0 shadow-xl rounded-2xl mt-32 border border-[#2C73D2] py-12" style={{ minHeight: '410px' }}>
        {/* Added py-12 for equal vertical padding (top and bottom) */}
        {!showCBCTForm && !showDiagnosticForm ? (
          <>
            <h3 className="text-2xl font-bold text-[#2C73D2] mb-4 mt-8 text-center">Who are you?</h3>
            <div className="flex flex-col gap-3 w-full px-6">
              <button
                onClick={handleDentistClick}
                className="w-full py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] font-semibold text-lg bg-white hover:bg-[#2C73D2] hover:text-white transition"
              >
                For Dental Profession
              </button>
              <button
                onClick={handleCBCTClick}
                className="w-full py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] font-semibold text-lg bg-white hover:bg-[#2C73D2] hover:text-white transition"
              >
                For CBCT & OPG
              </button>
              <button
                onClick={() => { onClose(); navigate('/login'); }}
                className="w-full py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] font-semibold text-lg bg-white hover:bg-[#2C73D2] hover:text-white transition"
              >
                For Patient
              </button>
              <button
                onClick={() => { onClose(); navigate('/diagnostic-lab-registration'); }}
                className="w-full py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] font-semibold text-lg bg-white hover:bg-[#2C73D2] hover:text-white transition"
              >
                For Diagnostic Lab
              </button>
              <button
                onClick={() => { onClose(); navigate('/pharma-brands-registration'); }}
                className="w-full py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] font-semibold text-lg bg-white hover:bg-[#2C73D2] hover:text-white transition"
              >
                For Pharma & Brands
              </button>
            </div>
          </>
        ) : showCBCTForm ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full p-6">
            <h3 className="text-xl font-bold text-[#2C73D2] mb-4 text-center">CBCT Registration</h3>
            <input
              type="text"
              name="centerName"
              value={cbctForm.centerName}
              onChange={handleChange}
              placeholder="Center Name"
              required
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <input
              type="text"
              name="ownerName"
              value={cbctForm.ownerName}
              onChange={handleChange}
              placeholder="Owner Name"
              required
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <input
              type="email"
              name="email"
              value={cbctForm.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <input
              type="tel"
              name="phone"
              value={cbctForm.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <input
              type="tel"
              name="altPhone"
              value={cbctForm.altPhone}
              onChange={handleChange}
              placeholder="Alternative Phone"
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <input
              type="text"
              name="website"
              value={cbctForm.website}
              onChange={handleChange}
              placeholder="Website"
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <button
              type="submit"
              className="w-full py-2 rounded-lg border-2 border-[#2C73D2] bg-white text-[#2C73D2] font-semibold hover:bg-[#2C73D2] hover:text-white transition-all duration-200"
            >
              Register CBCT Center
            </button>
          </form>
        ) : (
          <form onSubmit={handleDiagnosticSubmit} className="flex flex-col gap-4 w-full p-6">
            <h3 className="text-xl font-bold text-[#2C73D2] mb-4 text-center">Diagnostic Lab Registration</h3>
            <input
              type="text"
              name="labName"
              value={diagnosticForm.labName}
              onChange={handleDiagnosticChange}
              placeholder="Lab Name"
              required
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <input
              type="text"
              name="ownerName"
              value={diagnosticForm.ownerName}
              onChange={handleDiagnosticChange}
              placeholder="Owner Name"
              required
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <input
              type="email"
              name="email"
              value={diagnosticForm.email}
              onChange={handleDiagnosticChange}
              placeholder="Email"
              required
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <input
              type="tel"
              name="phone"
              value={diagnosticForm.phone}
              onChange={handleDiagnosticChange}
              placeholder="Phone"
              required
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <input
              type="tel"
              name="altPhone"
              value={diagnosticForm.altPhone}
              onChange={handleDiagnosticChange}
              placeholder="Alternative Phone"
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <input
              type="text"
              name="website"
              value={diagnosticForm.website}
              onChange={handleDiagnosticChange}
              placeholder="Website"
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#2C73D2] focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            />
            <button
              type="submit"
              className="w-full py-2 rounded-lg border-2 border-[#2C73D2] bg-white text-[#2C73D2] font-semibold hover:bg-[#2C73D2] hover:text-white transition-all duration-200"
            >
              Register Diagnostic Lab
            </button>
          </form>
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#F4A300] font-bold text-xl bg-white/70 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#F4A300] hover:text-white transition-all duration-200 z-20"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default LoginRolePopup;
