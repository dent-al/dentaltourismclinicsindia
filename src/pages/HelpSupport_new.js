import React, { useState } from "react";

const HelpSupport = () => {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "",
    subject: "",
    message: "" 
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2C73D2] mb-4">
            Help & Support
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Need assistance? We're here to help! Fill out the form below and our support team will get back to you within 24 hours.
          </p>
        </div>

        {/* Support Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Our Support Team
            </h2>
            <p className="text-gray-600">
              Tell us how we can help you. Whether you have questions about our services, 
              need technical support, or want to provide feedback, we're here for you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C73D2] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C73D2] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C73D2] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C73D2] focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="appointment-help">Appointment Help</option>
                  <option value="billing-question">Billing Question</option>
                  <option value="clinic-information">Clinic Information</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C73D2] focus:border-transparent transition-all duration-300"
                placeholder="Please describe your question or issue in detail..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white px-12 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              <p className="text-gray-500 text-sm mt-3">
                We'll respond to your inquiry within 24 hours during business days.
              </p>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#2C73D2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Support</h3>
            <p className="text-gray-600 text-sm mb-3">Get help via email</p>
            <a href="mailto:support@dentaltourismclinicsindia.com" className="text-[#2C73D2] font-medium hover:underline">
              support@dentaltourismclinicsindia.com
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone Support</h3>
            <p className="text-gray-600 text-sm mb-3">Call us directly</p>
            <a href="tel:+911234567890" className="text-green-600 font-medium hover:underline">
              +91 1234 567 890
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Response Time</h3>
            <p className="text-gray-600 text-sm mb-3">How quickly we respond</p>
            <p className="text-purple-600 font-medium">
              Within 24 hours
            </p>
          </div>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600">
                  Thank you for contacting us. Our support team will respond to your inquiry within 24 hours.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpSupport;
