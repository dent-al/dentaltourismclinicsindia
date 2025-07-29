import React, { useState, useEffect } from "react";
import FullPageLoader from "../components/FullPageLoader";

const HelpSupport = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  if (loading) return <FullPageLoader />;

  return (
    <div className="flex flex-col items-center justify-start bg-white px-2" style={{ minHeight: '0', paddingTop: 0 }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 mt-2">
        <h2 className="text-2xl font-bold text-[#2C73D2] mb-4 text-center">
          Contact Our Support
        </h2>
        <p className="text-gray-600 text-center mb-6">
          We're here to help! Fill out the form and our team will get back to you
          soon.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border-2 border-[#2C73D2] focus:border-[#F4A300] outline-none text-[#2C73D2] bg-white transition-all duration-300 focus:shadow-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border-2 border-[#2C73D2] focus:border-[#F4A300] outline-none text-[#2C73D2] bg-white transition-all duration-300 focus:shadow-lg"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            rows={4}
            className="px-4 py-3 rounded-lg border-2 border-[#2C73D2] focus:border-[#F4A300] outline-none text-[#2C73D2] bg-white transition-all duration-300 focus:shadow-lg"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold text-lg shadow-lg hover:from-[#F4A300] hover:to-[#2C73D2] transition-all duration-300"
          >
            Send Message
          </button>
          {submitted && (
            <div className="text-green-600 text-center font-semibold">
              Thank you! We'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default HelpSupport;
