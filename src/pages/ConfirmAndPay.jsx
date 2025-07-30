import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ApiService from '../services/api';

export default function ConfirmAndPay() {
  const location = useLocation();
  const navigate = useNavigate();
  const dentist = location.state?.dentist;
  const problem = location.state?.problem;
  
  const [patientName, setPatientName] = useState('User');
  const [coupon, setCoupon] = useState('');
  const [showCoupon, setShowCoupon] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fee = 499; // Demo fee, can be dynamic

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      // Create appointment
      const appointmentData = {
        dentistId: dentist?.id,
        problem: problem,
        patientName: patientName,
        fee: fee,
        coupon: coupon || null,
        status: 'pending'
      };

      const appointment = await ApiService.createAppointment(appointmentData);

      // Create payment order
      const paymentData = {
        appointmentId: appointment.id,
        amount: fee,
        currency: 'INR'
      };

      const paymentOrder = await ApiService.createPaymentOrder(paymentData);

      // Redirect to payment gateway or show success
      // For now, just navigate to a success page
      navigate('/payment-success', { 
        state: { 
          appointment: appointment,
          paymentOrder: paymentOrder 
        } 
      });

    } catch (err) {
      console.error('Payment failed:', err);
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6fa] py-8 px-2">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>Confirm & Pay</span>
            </h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-semibold text-[#2563d6]">Verified Dentists online now</span>
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
            </div>
            <div className="flex items-center mb-2">
              {dentist && (
                <img src={dentist.image} alt={dentist.name} className="w-12 h-12 rounded-full border-2 border-white" />
              )}
            </div>
            <div className="mb-3 text-gray-700 text-sm">
              {dentist ? `Dr. ${dentist.name} will speak to you shortly.` : 'One of them will speak to you shortly.'}
            </div>
            <div className="flex items-center gap-2 mb-1 text-green-600 text-sm">
              <span className="text-lg">💡</span>
              <span>93% of users found online consultation helpful</span>
            </div>
            <div className="flex items-center gap-2 mb-4 text-green-600 text-sm">
              <span className="text-lg">📱</span>
              <span>Consultation will happen only on mobile app</span>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-1">Patient name</label>
              <input
                type="text"
                value={patientName}
                onChange={e => setPatientName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563d6]"
              />
            </div>
            <div className="mb-2">
              <button
                type="button"
                className="text-[#2563d6] text-sm hover:underline"
                onClick={() => setShowCoupon(!showCoupon)}
              >
                Have a coupon code?
              </button>
              {showCoupon && (
                <input
                  type="text"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  placeholder="Enter coupon code"
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563d6]"
                />
              )}
            </div>
            <div className="mb-2 text-gray-500 text-sm">Final Fee</div>
            <div className="mb-4 text-2xl font-bold text-gray-800">₹{fee}</div>
            <button
              className="w-full py-3 rounded-lg bg-[#2563d6] text-white font-bold text-lg shadow hover:bg-[#F4A300] hover:text-white transition"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Continue to payment'}
            </button>
            {error && (
              <div className="mt-2 text-red-500 text-sm">{error}</div>
            )}
          </div>
        </div>
        {/* Right Section */}
        <div className="hidden md:flex flex-col items-center justify-center flex-1 bg-[#f5f6fa] border-l border-gray-200 p-8">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="20" width="60" height="20" rx="8" fill="#E3F0FF" />
                <text x="40" y="35" textAnchor="middle" fontSize="20" fill="#2563d6">₹</text>
              </svg>
            </div>
            <div className="text-lg font-bold text-[#2563d6] mb-2">3x more affordable!</div>
            <div className="text-gray-600 text-center max-w-xs">
              Get affordable healthcare online, with fees up to 3 times less than in clinic fees.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
