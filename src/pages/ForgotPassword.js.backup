import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setSuccess('If this email is registered, you will receive a password reset link.');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ede7f6] to-[#fff3e0] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-[#6548ee] text-center mb-2">Forgot Password?</h2>
        <p className="text-center text-[#6548ee] mb-4">Enter your email and we'll send you a reset link.</p>
        {error && <div className="bg-red-100 text-red-700 p-2 rounded text-center">{error}</div>}
        {success && <div className="bg-green-100 text-green-700 p-2 rounded text-center">{success}</div>}
        {!submitted && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800] text-lg"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6548ee] to-[#ff9800] text-white py-3 rounded-lg font-semibold shadow hover:from-[#ff9800] hover:to-[#6548ee] transition text-lg"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        )}
        {submitted && (
          <div className="text-center text-[#6548ee] text-lg mt-4">
            <span>Check your email for a password reset link.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
