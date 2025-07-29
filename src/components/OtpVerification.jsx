import React, { useState, useRef, useEffect } from 'react';

const OtpVerification = ({ phoneNumber, onVerify, onBack }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    // Focus first input on mount
    inputRefs[0].current?.focus();
  }, []);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    
    if (otpString.length !== 4) {
      setError('Please enter all 4 digits');
      return;
    }

    // Here you would typically verify the OTP with your backend
    // For demo, we'll accept any 4-digit code
    onVerify(otpString);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#232ba5]">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center pt-12 pb-8">
        {/* Logo */}
        <img src="/logo-dental-tourism.png" alt="Dental Tourism Clinics India Logo" className="w-32 h-32 mb-4" />
        <h2 className="text-white text-xl font-semibold text-center max-w-xs mb-2">
          Enter verification code
        </h2>
      </div>

      {/* White Card Section */}
      <div className="flex-1 flex flex-col justify-end">
        <div className="w-full max-w-md mx-auto bg-white rounded-t-3xl shadow-lg p-8 pb-12">
          <p className="text-center text-gray-600 mb-6">
            We've sent a 4-digit code to {phoneNumber}
          </p>

          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div className="flex justify-center gap-3 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#0a7ffb] focus:outline-none"
                />
              ))}
            </div>

            {error && (
              <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-[#0a7ffb] text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-[#005fa3] transition text-lg"
            >
              Verify
            </button>

            <button
              type="button"
              onClick={onBack}
              className="mt-4 text-[#232ba5] underline"
            >
              Change phone number
            </button>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => {
                  // Here you would typically trigger resend OTP
                  alert('OTP resent!');
                }}
                className="text-[#232ba5] underline text-sm"
              >
                Resend OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
