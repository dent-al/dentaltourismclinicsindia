import React, { useState, useEffect } from "react";
import FullPageLoader from "../components/FullPageLoader";
import RotatingTeeth from "../components/RotatingTeeth";
import Interactive3DTeeth from "../components/Interactive3DTeeth";

const FixMyTeeth = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [otherProblemText, setOtherProblemText] = useState("");
  const [selectedTeeth, setSelectedTeeth] = useState([]);
  const [showTeethSelector, setShowTeethSelector] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

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
    const newSelectedProblems = selectedProblems.includes(problemId) 
      ? selectedProblems.filter(id => id !== problemId)
      : [...selectedProblems, problemId];
    
    setSelectedProblems(newSelectedProblems);
    
    // Show 3D teeth selector when any problem is selected
    if (newSelectedProblems.length > 0 && !showTeethSelector) {
      setShowTeethSelector(true);
    }
    
    // Hide selector if no problems selected
    if (newSelectedProblems.length === 0) {
      setShowTeethSelector(false);
      setSelectedTeeth([]);
    }
  };

  const handleTeethSelection = (teeth) => {
    setSelectedTeeth(teeth);
  };

  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    // Create preview URLs
    const imageUrls = files.map(file => ({
      file,
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size
    }));

    setUploadedImages(prev => [...prev, ...imageUrls]);
    
    // Start analysis
    setIsAnalyzing(true);
    
    try {
      // Simulate AI analysis (replace with actual AI service)
      const analysisResult = await analyzeTeethImages(files);
      setAnalysisResults(analysisResult);
      
      // Auto-select problem teeth found in analysis
      if (analysisResult.problemTeeth && analysisResult.problemTeeth.length > 0) {
        setSelectedTeeth(prev => {
          const newTeeth = [...new Set([...prev, ...analysisResult.problemTeeth])];
          return newTeeth;
        });
        setShowTeethSelector(true);
      }
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const analyzeTeethImages = async (images) => {
    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock analysis results with patient-friendly descriptions
    const mockResults = {
      problemTeeth: ['u1', 'u2', 'u3l', 'l6', 'l6l'], // Using patient-friendly IDs
      confidence: 0.85,
      detectedIssues: [
        { 
          tooth: 'u1', 
          issue: 'Dark spot visible (possible cavity)', 
          patientFriendly: 'Your right front tooth has a dark spot that might be tooth decay',
          confidence: 0.9 
        },
        { 
          tooth: 'u2', 
          issue: 'Discoloration detected', 
          patientFriendly: 'Your front tooth appears darker than others',
          confidence: 0.7 
        },
        { 
          tooth: 'u3l', 
          issue: 'Crack line visible', 
          patientFriendly: 'Your left eye tooth (sharp tooth) may have a small crack',
          confidence: 0.8 
        },
        { 
          tooth: 'l6', 
          issue: 'Large dark area - filling needed', 
          patientFriendly: 'Your bottom right chewing tooth has a large dark area that needs treatment',
          confidence: 0.85 
        },
        { 
          tooth: 'l6l', 
          issue: 'Deep cavity detected', 
          patientFriendly: 'Your bottom left chewing tooth has a deep cavity that needs immediate attention',
          confidence: 0.9 
        }
      ],
      imageQuality: 'Good',
      recommendations: [
        '🚨 Two of your back chewing teeth need immediate attention for cavities',
        '⚠️ Your front teeth show signs of early decay - easy to fix if treated soon',
        '🔍 One of your eye teeth may have a crack - should be checked by a dentist',
        '✅ Most of your other teeth look healthy in the photos'
      ]
    };
    
    return mockResults;
  };

  const removeImage = (index) => {
    setUploadedImages(prev => {
      const newImages = prev.filter((_, i) => i !== index);
      // Cleanup URL
      URL.revokeObjectURL(prev[index].url);
      return newImages;
    });
  };

  if (loading) return <FullPageLoader />;

  return (
    <div 
      className="min-h-screen py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6 transition-colors duration-300 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2 text-[#2C73D2]"
          >
            Fix My Teeth - Complete Dental Solution
          </h1>
          <p 
            className="text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-4 text-gray-700"
          >
            Get expert dental advice, personalized treatment plans, and comprehensive support for all your dental needs
          </p>
        </div>

        {/* Quick Treatment Plan Section */}
        <div 
          className="rounded-2xl shadow-xl p-8 mb-12 theme-card bg-white"
        >
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
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 px-2 text-center sm:text-left">
                Tell Us What Dental Problems You're Facing
              </h3>
              
              {/* Dental Problems Grid */}
              <div className="mb-6 sm:mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {dentalProblems.map((problem) => (
                    <button
                      key={problem.id}
                      onClick={() => toggleProblem(problem.id)}
                      className={`p-2 sm:p-3 rounded-lg border-2 transition-all duration-300 text-center hover:shadow-md active:scale-95 ${
                        selectedProblems.includes(problem.id)
                          ? 'border-[#2C73D2] bg-blue-50 text-[#2C73D2] shadow-md'
                          : 'border-gray-200 hover:border-[#2C73D2] hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-lg sm:text-xl mb-1">{problem.icon}</div>
                      <div className="font-medium text-xs sm:text-sm leading-tight">{problem.name}</div>
                    </button>
                  ))}
                </div>
                {selectedProblems.length > 0 && (
                  <div className="text-xs sm:text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                    <span className="font-semibold">Selected: </span>
                    {selectedProblems.map(id => 
                      dentalProblems.find(p => p.id === id)?.name
                    ).join(', ')}
                  </div>
                )}
              </div>

              {/* 3D Teeth Selector - Shows when problems are selected */}
              {selectedProblems.length > 0 && (
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left">
                      🦷 Specify Problem Teeth
                    </h4>
                    <label className="flex items-center gap-2 cursor-pointer justify-center sm:justify-start">
                      <input
                        type="checkbox"
                        checked={showTeethSelector}
                        onChange={(e) => setShowTeethSelector(e.target.checked)}
                        className="w-4 h-4 text-[#2C73D2] rounded focus:ring-[#2C73D2]"
                      />
                      <span className="text-sm text-gray-600">Show 3D Teeth Selector</span>
                    </label>
                  </div>
                  
                  {showTeethSelector && (
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl border-2 border-blue-200 shadow-lg">
                      <div className="text-center mb-4 sm:mb-6">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                          🦷 Advanced 3D Teeth Selector
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base mb-2">
                          Click on the specific teeth that are causing problems
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          This helps us provide more accurate treatment recommendations and cost estimates
                        </p>
                      </div>
                      
                      {/* Usage Instructions for better UX */}
                      <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-200">
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <span className="text-sm sm:text-base">🖱️</span>
                            <span className="hidden sm:inline">Drag to rotate</span>
                            <span className="sm:hidden">Touch & drag</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-sm sm:text-base">👆</span>
                            <span>Click/Tap teeth</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-sm sm:text-base">🔄</span>
                            <span>Reset view button</span>
                          </div>
                        </div>
                      </div>
                      
                      <Interactive3DTeeth 
                        onTeethSelection={handleTeethSelection}
                        selectedTeeth={selectedTeeth}
                        analyzedTeeth={analysisResults?.problemTeeth || []}
                      />
                      
                      {selectedTeeth.length > 0 && (
                        <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-200">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">🎯</span>
                            <h5 className="font-semibold text-gray-800">
                              Targeted Treatment Plan
                            </h5>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            You've selected {selectedTeeth.length} specific teeth with problems.
                          </p>
                          <div className="text-xs text-blue-700 bg-blue-100 px-3 py-2 rounded-md">
                            💡 Tip: Our dentists will now provide tooth-specific treatment recommendations and precise cost breakdowns for each affected tooth.
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {!showTeethSelector && (
                    <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 text-center">
                      <p className="text-gray-600 mb-2">
                        💡 Want more precise treatment recommendations?
                      </p>
                      <p className="text-sm text-gray-500">
                        Enable the 3D teeth selector above to specify exactly which teeth have problems
                      </p>
                    </div>
                  )}
                </div>
              )}

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

              {/* AI-Powered Image Analysis Section */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  🤖 Smart Dental Photo Analysis <span className="text-gray-500">(Optional)</span>
                </h4>
                <p className="text-gray-600 mb-4">
                  Upload photos of your teeth and our AI will automatically find problem areas and show them on the tooth model!
                </p>
                
                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#2C73D2] transition-all duration-300 cursor-pointer">
                  <input 
                    type="file" 
                    id="dental-images" 
                    className="hidden" 
                    accept="image/*" 
                    multiple 
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="dental-images" className="cursor-pointer">
                    <div className="text-4xl mb-4">📱</div>
                    <p className="text-gray-600 mb-2">Take a photo with your phone or upload existing pictures</p>
                    <p className="text-sm text-gray-500 mb-4">Best results: Good lighting, close-up shots, multiple angles</p>
                    <div className="inline-flex items-center px-6 py-3 bg-[#2C73D2] text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <span className="mr-2">📷</span>
                      Upload Photos & Analyze
                    </div>
                  </label>
                </div>

                {/* Analysis Loading */}
                {isAnalyzing && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2C73D2]"></div>
                      </div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">🔍 Analyzing Your Teeth Photos...</h5>
                      <p className="text-gray-600 mb-4">Our AI is looking for cavities, cracks, and other dental problems</p>
                      <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
                        <span>✓ Checking photo quality</span>
                        <span>✓ Finding teeth</span>
                        <span>🔄 Detecting problems</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Uploaded Images Preview */}
                {uploadedImages.length > 0 && (
                  <div className="mt-6">
                    <h5 className="font-semibold text-gray-800 mb-3">📸 Your Dental Photos ({uploadedImages.length})</h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={image.url} 
                            alt={`Your dental photo ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg border-2 border-gray-200 hover:border-[#2C73D2] transition-all duration-300"
                          />
                          <button
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            ×
                          </button>
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg">
                            Photo {index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* AI Analysis Results */}
                {analysisResults && (
                  <div className="mt-6 p-6 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 rounded-xl border-2 border-green-200 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">🎯</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-gray-800">Analysis Complete!</h5>
                        <p className="text-sm text-gray-600">AI Confidence: {(analysisResults.confidence * 100).toFixed(0)}% • Photo Quality: {analysisResults.imageQuality}</p>
                      </div>
                    </div>

                    {/* Patient-Friendly Problem Description */}
                    <div className="mb-6">
                      <h6 className="font-semibold text-gray-800 mb-3">🔍 What We Found in Your Photos:</h6>
                      <div className="space-y-3">
                        {analysisResults.detectedIssues.map((issue, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                            <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-800 mb-1">{issue.patientFriendly}</p>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <span>Confidence: {(issue.confidence * 100).toFixed(0)}%</span>
                                <span className={`px-2 py-1 rounded text-xs ${
                                  issue.confidence > 0.8 ? 'bg-red-100 text-red-700' : 
                                  issue.confidence > 0.6 ? 'bg-yellow-100 text-yellow-700' : 
                                  'bg-blue-100 text-blue-700'
                                }`}>
                                  {issue.confidence > 0.8 ? 'High Priority' : 
                                   issue.confidence > 0.6 ? 'Medium Priority' : 
                                   'Low Priority'}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Auto-detected Problem Teeth */}
                    <div className="mb-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🦷</span>
                        <h6 className="font-semibold text-gray-800">Problem Teeth Found</h6>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Our AI found {analysisResults.problemTeeth.length} teeth that may need attention
                      </p>
                      <div className="text-xs text-green-700 bg-green-100 px-3 py-2 rounded-md">
                        ✅ These teeth have been automatically highlighted in the 3D model above - you can click to see them!
                      </div>
                    </div>

                    {/* Easy-to-Understand Recommendations */}
                    <div className="mb-4">
                      <h6 className="font-semibold text-gray-800 mb-2">💡 What This Means for You:</h6>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {analysisResults.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2 p-2 bg-white rounded-lg">
                            <span className="text-base mt-0.5">{rec.charAt(0)}</span>
                            <span>{rec.substring(2)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button 
                        onClick={() => setShowTeethSelector(true)}
                        className="flex-1 bg-[#2C73D2] text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        📍 View Problem Teeth on 3D Model
                      </button>
                      <button 
                        onClick={() => setAnalysisResults(null)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Clear Analysis
                      </button>
                    </div>
                  </div>
                )}

                {/* Photo Tips */}
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h6 className="font-semibold text-gray-800 mb-2">📋 Tips for Better Analysis:</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                    <ul className="space-y-1">
                      <li>📱 Use your phone's camera for best results</li>
                      <li>💡 Take photos in good lighting (near a window works great)</li>
                      <li>🔍 Get close-up shots of problem areas</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>📸 Take photos from different angles</li>
                      <li>🩻 X-rays provide the most accurate analysis</li>
                      <li>😊 Open your mouth wide for clear tooth visibility</li>
                    </ul>
                  </div>
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
            <a href="mailto:info@dentaltourismclinicsindia.com" className="text-[#2C73D2] font-semibold hover:underline break-words text-sm leading-tight">
              info@dentaltourismclinicsindia.com
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
