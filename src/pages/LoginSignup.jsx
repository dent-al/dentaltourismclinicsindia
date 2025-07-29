import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [remember, setRemember] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fc]">
      <div className="w-full max-w-4xl flex rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Left Panel - Animated Gradient */}
        <div className="w-1/2 hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-[#2C73D2] via-[#A259FF] to-[#F4A300] p-12 animate-slide-in-left transition-all duration-700">
          <div className="text-white text-4xl font-extrabold mb-4 drop-shadow-lg animate-fade-in">Welcome Back!</div>
        </div>
        {/* Right Panel - Login Form */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-10 animate-slide-in-right transition-all duration-700">
          <h2 className="text-3xl font-bold text-[#2C73D2] mb-2">Login</h2>
          <p className="text-[#2C73D2] mb-6">Welcome back! Please login to your account.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-[#2C73D2] text-sm font-semibold">User Name</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="username@gmail.com"
              required
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#A259FF]"
            />
            <label className="text-[#2C73D2] text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="py-2 px-4 rounded-lg border border-[#2C73D2] bg-white text-[#2C73D2] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#A259FF]"
            />
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center text-[#2C73D2] text-sm">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="mr-2 accent-[#A259FF]"
                />
                Remember Me
              </label>
              <button type="button" className="text-[#A259FF] text-sm font-semibold hover:underline" onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-[#2C73D2] via-[#A259FF] to-[#F4A300] text-white font-bold text-lg mt-4 shadow-md hover:scale-105 transition-transform duration-200"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center text-[#2C73D2]">
            New User?{' '}
            <button className="text-[#A259FF] font-semibold hover:underline" onClick={() => navigate('/signup')}>Signup</button>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        .animate-slide-in-left { animation: slideInLeft 1s ease; }
        .animate-slide-in-right { animation: slideInRight 1s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInLeft { from { transform: translateX(-60px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInRight { from { transform: translateX(60px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default LoginPage;
