import React, { useState, useEffect } from "react";
import FullPageLoader from "../components/FullPageLoader";
import RotatingTeeth from "../components/RotatingTeeth";

const FixMyTeeth = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [otherProblemText, setOtherProblemText] = useState("");

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

  const dentalProblems = [
    // Common Problems
    { id: 'toothache', name: 'Toothache', icon: '😣', category: 'common' },
    { id: 'tooth-cavities', name: 'Tooth Cavities', icon: '🦷', category: 'common' },
    { id: 'bleeding-gums', name: 'Bleeding Gums', icon: '🩸', category: 'common' },
    { id: 'missing-tooth', name: 'Missing Tooth', icon: '🦷', category: 'common' },
    { id: 'broken-chipped', name: 'Broken/Chipped Tooth', icon: '💔', category: 'common' },
    { id: 'crooked-teeth', name: 'Crooked Teeth', icon: '↪️', category: 'common' },
    { id: 'yellow-teeth', name: 'Yellow Teeth', icon: '🟡', category: 'common' },
    { id: 'gaps-between-teeth', name: 'Gaps Between Teeth', icon: '↔️', category: 'common' },
    
    // Gum Problems
    { id: 'gum-disease', name: 'Gum Disease', icon: '🦷', category: 'gum' },
    { id: 'swollen-gums', name: 'Swollen Gums', icon: '🔴', category: 'gum' },
    { id: 'receding-gums', name: 'Receding Gums', icon: '⬇️', category: 'gum' },
    { id: 'gum-infection', name: 'Severe Gum Infection', icon: '🦠', category: 'gum' },
    { id: 'gum-pocket', name: 'Gum Pocket', icon: '🕳️', category: 'gum' },
    { id: 'bad-breath', name: 'Bad Breath', icon: '💨', category: 'gum' },
    
    // Jaw & TMJ Problems
    { id: 'jaw-pain', name: 'Jaw Pain', icon: '😖', category: 'jaw' },
    { id: 'tmj-disorder', name: 'TMJ Disorder', icon: '⚙️', category: 'jaw' },
    { id: 'jaw-lock', name: 'Jaw Lock', icon: '🔒', category: 'jaw' },
    { id: 'teeth-grinding', name: 'Teeth Grinding', icon: '😬', category: 'jaw' },
    { id: 'jaw-clenching', name: 'Jaw Clenching', icon: '💪', category: 'jaw' },
    
    // Tooth Problems
    { id: 'tooth-sensitivity', name: 'Tooth Sensitivity', icon: '❄️', category: 'tooth' },
    { id: 'wisdom-tooth', name: 'Wisdom Tooth Problems', icon: '🦷', category: 'tooth' },
    { id: 'tooth-wear', name: 'Tooth Wear', icon: '⚡', category: 'tooth' },
    { id: 'loose-tooth', name: 'Loose Tooth', icon: '🪫', category: 'tooth' },
    { id: 'fractured-tooth', name: 'Fractured Tooth', icon: '💥', category: 'tooth' },
    { id: 'tooth-pain', name: 'Severe Tooth Pain', icon: '⚡', category: 'tooth' },
    
    // Cosmetic Problems
    { id: 'smile-makeover', name: 'Smile Makeover', icon: '✨', category: 'cosmetic' },
    { id: 'teeth-whitening', name: 'Teeth Whitening', icon: '⚪', category: 'cosmetic' },
    { id: 'gummy-smile', name: 'Gummy Smile', icon: '😊', category: 'cosmetic' },
    { id: 'front-tooth-gap', name: 'Front Tooth Gap', icon: '↔️', category: 'cosmetic' },
    { id: 'dental-jewellery', name: 'Dental Jewellery', icon: '💎', category: 'cosmetic' },
    { id: 'white-spots', name: 'White Spots on Teeth', icon: '⚪', category: 'cosmetic' },
    
    // Treatment Needs
    { id: 'root-canal', name: 'Root Canal Treatment', icon: '🔧', category: 'treatment' },
    { id: 'dental-implants', name: 'Dental Implants', icon: '🦷', category: 'treatment' },
    { id: 'dental-braces', name: 'Dental Braces', icon: '🦷', category: 'treatment' },
    { id: 'tooth-extraction', name: 'Tooth Extraction', icon: '🔧', category: 'treatment' },
    { id: 'dental-crown', name: 'Dental Crown', icon: '👑', category: 'treatment' },
    { id: 'tooth-filling', name: 'Tooth Filling', icon: '🔧', category: 'treatment' },
    
    // Children's Problems
    { id: 'kids-cavities', name: 'Children\'s Cavities', icon: '👶', category: 'kids' },
    { id: 'thumb-sucking', name: 'Thumb Sucking', icon: '👍', category: 'kids' },
    { id: 'mouth-breathing', name: 'Mouth Breathing', icon: '💨', category: 'kids' },
    { id: 'baby-teeth', name: 'Baby Teeth Problems', icon: '🍼', category: 'kids' },
    
    // Oral Health Issues
    { id: 'dry-mouth', name: 'Dry Mouth', icon: '🏜️', category: 'oral' },
    { id: 'mouth-sores', name: 'Mouth Sores', icon: '🔴', category: 'oral' },
    { id: 'burning-sensation', name: 'Burning Sensation', icon: '🔥', category: 'oral' },
    { id: 'oral-cancer', name: 'Oral Cancer Screening', icon: '🔍', category: 'oral' },
    
    // Other
    { id: 'other', name: 'Other', icon: '📝', category: 'other' }
  ];

  const steps = [
    { number: 1, title: 'Choose Dental Problems', icon: '🦷', color: 'bg-blue-500' },
    { number: 2, title: 'Select Preferred Location', icon: '📍', color: 'bg-green-500' },
    { number: 3, title: 'Upload Photos (X-rays optional)', icon: '📷', color: 'bg-purple-500' },
    { number: 4, title: 'Pay ₹149', icon: '💳', color: 'bg-orange-500' },
    { number: 5, title: 'Receive Report in 24 hrs', icon: '📄', color: 'bg-red-500' }
  ];

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh',
    'Andaman and Nicobar Islands', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep'
  ];

  const toggleProblem = (problemId) => {
    setSelectedProblems(prev => 
      prev.includes(problemId) 
        ? prev.filter(id => id !== problemId)
        : [...prev, problemId]
    );
  };

  if (loading) return <FullPageLoader />;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2C73D2] mb-4">
            Fix My Teeth - Complete Dental Solution
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get expert dental advice, personalized treatment plans, and comprehensive support for all your dental needs
          </p>
        </div>

        {/* Quick Treatment Plan Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left side - Hero content */}
            <div className="lg:w-1/2">
              <div className="mb-6">
                <RotatingTeeth size={300} speed={3} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Get Your Dental Treatment Plan + Quote in 24 Hours - Only ₹149
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Select your dental problems, preferred location, and receive a detailed treatment 
                plan and estimate from top clinics in India.
              </p>
              <button 
                onClick={() => setShowQuoteForm(!showQuoteForm)}
                className="bg-[#2C73D2] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Start Now - ₹149 Only
              </button>
            </div>

            {/* Right side - Steps */}
            <div className="lg:w-1/2">
              <div className="relative">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10 shadow-lg`}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{step.title}</h3>
                      </div>
                    </div>
                    
                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-6 bg-gradient-to-b from-gray-300 to-gray-400 transform -translate-x-0.5 z-0">
                        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#2C73D2] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Treatment Plan Form */}
          {showQuoteForm && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Tell Us What Dental Problems You're Facing
              </h3>
              
              {/* Dental Problems Grid */}
              <div className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                  {dentalProblems.map((problem) => (
                    <button
                      key={problem.id}
                      onClick={() => toggleProblem(problem.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 text-center hover:shadow-md ${
                        selectedProblems.includes(problem.id)
                          ? 'border-[#2C73D2] bg-blue-50 text-[#2C73D2] shadow-md'
                          : 'border-gray-200 hover:border-[#2C73D2] hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-xl mb-1">{problem.icon}</div>
                      <div className="font-medium text-xs leading-tight">{problem.name}</div>
                    </button>
                  ))}
                </div>
                {selectedProblems.length > 0 && (
                  <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                    <span className="font-semibold">Selected: </span>
                    {selectedProblems.map(id => 
                      dentalProblems.find(p => p.id === id)?.name
                    ).join(', ')}
                  </div>
                )}
              </div>

              {/* Other Problem Text Input */}
              {selectedProblems.includes('other') && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Please describe your dental problem:
                  </h4>
                  <textarea
                    value={otherProblemText}
                    onChange={(e) => setOtherProblemText(e.target.value)}
                    placeholder="Describe your specific dental problem in detail..."
                    rows={3}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2C73D2] outline-none transition-all duration-300"
                  />
                </div>
              )}

              {/* State Selection */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Where Would You Prefer to Get Treated?
                </h4>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#2C73D2] outline-none"
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* Upload Section */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Upload X-rays or Tooth Photos <span className="text-gray-500">(Optional)</span>
                </h4>
                <p className="text-gray-600 mb-4">Clear images help us give a more accurate estimate.</p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">📷</div>
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                  <input type="file" className="hidden" accept="image/*" multiple />
                </div>
              </div>

              {/* Contact Form */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 border-2 border-gray-200 rounded-lg focus:border-[#2C73D2] outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border-2 border-gray-200 rounded-lg focus:border-[#2C73D2] outline-none"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-yellow-500 transition-all duration-300">
                Get Treatment Plan - Pay ₹149
              </button>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#2C73D2] mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">How does the treatment plan work?</h4>
                <p className="text-gray-600 text-sm">Simply select your dental problems and preferred location. Our expert dentists will review your case and provide a detailed treatment plan within 24 hours.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Is the ₹149 fee refundable?</h4>
                <p className="text-gray-600 text-sm">The consultation fee is non-refundable, but it will be adjusted against your final treatment cost if you proceed with any of our partner clinics.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">How accurate are the cost estimates?</h4>
                <p className="text-gray-600 text-sm">Our estimates are based on current market rates and expert analysis. Final costs may vary after in-person examination.</p>
              </div>
            </div>
          </div>

          {/* Contact Support Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#2C73D2] mb-4">Need Help & Support?</h3>
            <p className="text-gray-600 mb-4">
              We're here to help! Fill out the form and our team will get back to you soon.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#2C73D2] outline-none transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#2C73D2] outline-none transition-all duration-300"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#2C73D2] outline-none transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold hover:from-blue-700 hover:to-yellow-500 transition-all duration-300"
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

        {/* Additional Help Resources */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">Speak directly with our support team</p>
            <a href="tel:+911234567890" className="text-[#2C73D2] font-semibold hover:underline">
              +91 123 456 7890
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Get instant help from our team</p>
            <button className="text-[#2C73D2] font-semibold hover:underline">
              Start Chat
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Send us your questions</p>
            <a href="mailto:supportinfo@dentaltourismclinicsindia.com" className="text-[#2C73D2] font-semibold hover:underline break-words text-sm leading-tight">
              supportinfo@dentaltourismclinicsindia.com
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🦷</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Emergency Care</h3>
            <p className="text-gray-600 mb-4">24/7 dental emergency support</p>
            <a href="tel:emergency" className="text-[#2C73D2] font-semibold hover:underline">
              Emergency Line
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixMyTeeth;
