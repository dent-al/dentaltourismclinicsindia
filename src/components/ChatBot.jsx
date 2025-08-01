import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Dental Tourism Clinics India! I'm your AI dental assistant with complete knowledge of our platform. I can help you with:\n\n🦷 Finding dentists & booking appointments\n💰 Treatment costs & pricing\n🏥 CBCT centers & blood test labs\n💻 Online consultations (₹449)\n🛒 Dental products shopping\n📚 Educational articles\n🚨 Emergency dental care\n👨‍⚕️ Professional registration\n\nHow can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Predefined responses for common dental queries
  const botResponses = {
    greeting: [
      "Hello! 👋 Welcome to Dental Tourism Clinics India! I'm your AI dental assistant. How can I help you find the perfect dental care today?",
      "Hi there! I'm here to guide you through our comprehensive dental platform. What dental services are you looking for?",
      "Welcome to India's premier dental tourism platform! I can help you with appointments, treatments, costs, and finding the best dentists across India."
    ],
    appointment: [
      "I can help you book an appointment! 📅 Visit our 'Search Dentist' page to find verified dentists near you. You can filter by location, speciality, and availability, then book directly through their profiles.",
      "To book an appointment: 1) Go to 'Search Dentist' 2) Enter your city/area 3) Choose a dentist 4) Click 'Book Appointment' 5) Select your preferred time slot. It's that simple!",
      "Our platform has 500+ verified dentists across India. Browse by specialty (General, Orthodontist, Oral Surgeon, etc.) and book instantly!"
    ],
    cost: [
      "Treatment costs vary by procedure and location. 💰 Our dentists display transparent pricing on their profiles. You can also use our 'Consult Now' feature for ₹449 to get cost estimates from verified dentists.",
      "We believe in transparent pricing! Each dentist profile shows estimated costs for common procedures. For complex treatments, book a consultation to get detailed quotes.",
      "Costs depend on treatment complexity and clinic location. Our platform ensures competitive pricing across India. Check individual dentist profiles for specific rates."
    ],
    emergency: [
      "For dental emergencies 🚨, use our search to find 24/7 dental clinics near you. We have emergency dental services listed across major Indian cities. For severe emergencies, call 102 (national emergency) first!",
      "Emergency dental care is available! Search for 'emergency' or '24/7' in our clinic listings. Many of our partner clinics offer urgent care services.",
      "In case of severe dental emergency, seek immediate medical attention. Our platform lists emergency dental services, but prioritize calling emergency services for life-threatening situations."
    ],
    location: [
      "We cover all major Indian cities! 🇮🇳 Search by state: Maharashtra, Delhi, Karnataka, Tamil Nadu, Gujarat, Rajasthan, UP, West Bengal, and more. Over 28 states covered with 1000+ verified clinics!",
      "Our network spans across India - from metros like Mumbai, Delhi, Bangalore to smaller cities. Use our location filter to find dentists in your exact area.",
      "Available in 28+ Indian states! Popular locations include: Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad, Kolkata, Jaipur, and many more."
    ],
    services: [
      "We connect you with comprehensive dental services: 🦷 General Dentistry, Orthodontics (Braces), Oral Surgery, Cosmetic Dentistry, Implants, Root Canal, Teeth Whitening, Pediatric Dentistry, Periodontics, and specialized treatments!",
      "Our platform offers: Routine checkups, Dental cleanings, Fillings, Crowns, Bridges, Veneers, Invisalign, Wisdom tooth extraction, Gum treatment, Oral cancer screening, and 80+ other dental procedures.",
      "Complete dental care including: Preventive care, Restorative treatments, Cosmetic procedures, Surgical interventions, Emergency care, Pediatric dentistry, and specialized treatments for all age groups."
    ],
    registration: [
      "For Healthcare Professionals: 👨‍⚕️ Dentists can register at '/dentist-registration', CBCT & OPG centers at '/cbct-registration', Diagnostic labs at '/diagnostic-lab-registration', and Pharma brands at '/pharma-brands-registration'. Choose from Basic (₹2,999/year), Featured (₹5,999/year), or Premium (₹14,999/year) plans!",
      "Join our network! We offer registration for: Dentists, CBCT centers, Blood test labs, Dental product companies. Each gets a professional profile, patient booking system, and marketing support.",
      "Healthcare provider registration includes: Professional profile creation, patient booking system, social media promotion, priority in search results, and verified badges. Multiple pricing plans available!"
    ],
    cbct: [
      "Our CBCT & OPG centers offer advanced dental imaging! 📸 These centers provide 3D dental scans, panoramic X-rays, and detailed jaw imaging. Search for 'CBCT' in our platform to find certified imaging centers near you.",
      "CBCT (Cone Beam CT) provides 3D imaging for complex dental procedures. Our partner centers offer: 3D dental scans, Panoramic X-rays, TMJ imaging, Implant planning scans, and orthodontic analysis."
    ],
    bloodtest: [
      "Our blood test labs provide pre-dental procedure screening! 🩸 Many dental procedures require blood tests for safety. Our partner labs offer: Complete Blood Count, Bleeding time, Clotting time, Blood sugar tests, and infection screening.",
      "Blood tests are important for dental surgery safety. Our certified labs provide: CBC, PT/INR, Blood glucose, Hepatitis screening, and other pre-procedure tests as recommended by your dentist."
    ],
    shop: [
      "Visit our Dental Products Shop! 🛒 We partner with leading dental brands to offer: Electric toothbrushes, Water flossers, Whitening kits, Mouth guards, Dental accessories, and professional-grade oral care products at competitive prices.",
      "Our shop features: Premium oral care products, Professional dental tools, Teeth whitening solutions, Orthodontic accessories, and exclusive deals from top dental brands."
    ],
    articles: [
      "Check our Articles section! 📚 We publish expert content on: Dental care tips, Treatment guides, Oral hygiene best practices, Latest dental technologies, Post-treatment care, and health advice from certified dentists.",
      "Our educational content covers: Preventive dental care, Treatment explanations, Oral health tips, Dental technology updates, and expert advice to help you make informed decisions about your dental health."
    ],
    consultation: [
      "Try our Online Consultation! 💻 For just ₹449, get expert dental advice from verified dentists. 93% of users found it helpful! Consultations happen via our mobile app with qualified dental professionals.",
      "Online dental consultation includes: Expert advice, Treatment planning, Cost estimates, Second opinions, and follow-up guidance. Available 24/7 with verified dentists across India."
    ],
    pricing: [
      "We offer transparent pricing! 💳 Dental costs vary by treatment: Cleaning (₹500-1500), Fillings (₹800-3000), Root Canal (₹3000-8000), Implants (₹15000-50000), Braces (₹20000-80000). Exact costs depend on location and complexity.",
      "Our pricing philosophy: No hidden costs, transparent quotes, competitive rates across India. Most procedures cost 30-50% less than international rates while maintaining high quality standards."
    ],
    features: [
      "Platform features: 🌟 Verified dentist profiles, Online booking system, Cost transparency, Patient reviews, Multiple payment options, Appointment reminders, Online consultations, Educational content, and 24/7 customer support.",
      "Key benefits: Quality assurance, Verified professionals, Competitive pricing, Easy booking, Multiple locations, Expert guidance, and comprehensive dental care solutions all in one platform."
    ],
    help: [
      "Need help? 🆘 Visit our Help & Support section for: Booking assistance, Payment help, Technical support, Account management, and general queries. You can also contact our support team directly!",
      "Support available for: Platform navigation, Booking issues, Payment problems, Account setup, Technical difficulties, and general inquiries. We're here to help 24/7!"
    ],
    specialties: [
      "Our dental specialties include: 🔬 General Dentistry, Orthodontics (Braces specialist), Periodontist (Gum specialist), Endodontist (Root canal specialist), Prosthodontist (Crown/Bridge specialist), Oral Surgeon, Pedodontist (Child dentist), and Oral Radiologist.",
      "Find specialists for: Teeth straightening, Gum diseases, Root canal treatments, Dental implants, Cosmetic procedures, Oral surgery, Children's dentistry, and advanced dental imaging."
    ],
    default: [
      "I'm your comprehensive dental guide! 🦷 I can help with: Finding dentists, Booking appointments, Treatment costs, Emergency care, CBCT centers, Blood tests, Online consultations, Dental products, Educational articles, and platform navigation. What would you like to know?",
      "I have complete knowledge about our platform! Ask me about: Appointments, Costs, Treatments, Locations, Specialties, Registration, Emergency care, Consultations, Products, Articles, or any dental-related questions!",
      "Feel free to ask about: Dentist search, Appointment booking, Treatment options, Pricing, Emergency services, CBCT imaging, Lab tests, Online consultations, Dental products, Educational content, or platform features!"
    ]
  };

  const getQuickReplies = () => [
    "Book an appointment",
    "Find dentists near me", 
    "Treatment costs",
    "Online consultation ₹449",
    "Emergency dental care",
    "CBCT & X-ray centers",
    "Blood test labs",
    "Dental products shop",
    "Dentist registration",
    "Available specialties"
  ];

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('namaste')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    }
    
    // Appointment and booking
    if (message.includes('appointment') || message.includes('book') || message.includes('schedule') || message.includes('reserve')) {
      return botResponses.appointment[Math.floor(Math.random() * botResponses.appointment.length)];
    }
    
    // Cost and pricing
    if (message.includes('cost') || message.includes('price') || message.includes('fee') || message.includes('charge') || message.includes('₹') || message.includes('rupee')) {
      return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)];
    }
    
    // Emergency services
    if (message.includes('emergency') || message.includes('urgent') || message.includes('pain') || message.includes('severe') || message.includes('immediate')) {
      return botResponses.emergency[Math.floor(Math.random() * botResponses.emergency.length)];
    }
    
    // Location and area searches
    if (message.includes('near') || message.includes('location') || message.includes('city') || message.includes('area') || message.includes('mumbai') || message.includes('delhi') || message.includes('bangalore') || message.includes('chennai') || message.includes('hyderabad') || message.includes('pune') || message.includes('kolkata') || message.includes('ahmedabad')) {
      return botResponses.location[Math.floor(Math.random() * botResponses.location.length)];
    }
    
    // Services and treatments
    if (message.includes('service') || message.includes('treatment') || message.includes('dental') || message.includes('teeth') || message.includes('tooth') || message.includes('cleaning') || message.includes('filling') || message.includes('root canal') || message.includes('braces') || message.includes('implant') || message.includes('whitening')) {
      return botResponses.services[Math.floor(Math.random() * botResponses.services.length)];
    }
    
    // CBCT and imaging
    if (message.includes('cbct') || message.includes('xray') || message.includes('x-ray') || message.includes('scan') || message.includes('imaging') || message.includes('opg')) {
      return botResponses.cbct[Math.floor(Math.random() * botResponses.cbct.length)];
    }
    
    // Blood tests
    if (message.includes('blood') || message.includes('test') || message.includes('lab') || message.includes('cbc') || message.includes('screening')) {
      return botResponses.bloodtest[Math.floor(Math.random() * botResponses.bloodtest.length)];
    }
    
    // Online consultation
    if (message.includes('consult') || message.includes('online') || message.includes('video') || message.includes('call') || message.includes('chat') || message.includes('449')) {
      return botResponses.consultation[Math.floor(Math.random() * botResponses.consultation.length)];
    }
    
    // Shopping and products
    if (message.includes('shop') || message.includes('buy') || message.includes('product') || message.includes('toothbrush') || message.includes('paste') || message.includes('mouthwash')) {
      return botResponses.shop[Math.floor(Math.random() * botResponses.shop.length)];
    }
    
    // Articles and information
    if (message.includes('article') || message.includes('read') || message.includes('information') || message.includes('tips') || message.includes('guide') || message.includes('advice')) {
      return botResponses.articles[Math.floor(Math.random() * botResponses.articles.length)];
    }
    
    // Registration (dentists, labs, etc.)
    if (message.includes('register') || message.includes('join') || message.includes('dentist registration') || message.includes('become') || message.includes('partner')) {
      return botResponses.registration[Math.floor(Math.random() * botResponses.registration.length)];
    }
    
    // Specialties
    if (message.includes('specialist') || message.includes('orthodont') || message.includes('surgeon') || message.includes('endodont') || message.includes('periodont') || message.includes('prosthodont') || message.includes('pediatric') || message.includes('child')) {
      return botResponses.specialties[Math.floor(Math.random() * botResponses.specialties.length)];
    }
    
    // Help and support
    if (message.includes('help') || message.includes('support') || message.includes('problem') || message.includes('issue') || message.includes('contact')) {
      return botResponses.help[Math.floor(Math.random() * botResponses.help.length)];
    }
    
    // Platform features
    if (message.includes('feature') || message.includes('how') || message.includes('what') || message.includes('platform') || message.includes('app') || message.includes('website')) {
      return botResponses.features[Math.floor(Math.random() * botResponses.features.length)];
    }
    
    // Default response for unmatched queries
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const handleSendMessage = (messageText = inputValue) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const QuickReply = ({ text, onClick }) => (
    <button
      onClick={() => onClick(text)}
      className="bg-[#eaf2fb] text-[#2C73D2] px-3 py-1 rounded-full text-sm border border-[#2C73D2]/20 hover:bg-[#2C73D2] hover:text-white transition-all duration-200 mr-2 mb-2"
    >
      {text}
    </button>
  );

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#2C73D2] text-white p-4 rounded-full shadow-lg hover:bg-[#2056AE] transition-all duration-300 hover:scale-110 animate-pulse"
          style={{ boxShadow: '0 4px 20px rgba(44, 115, 210, 0.3)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-[#2C73D2]/20 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-[#2C73D2] text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#2C73D2] text-sm font-bold">🦷</span>
          </div>
          <div>
            <h3 className="font-bold text-sm">Dental Assistant</h3>
            <p className="text-xs opacity-90">Online now</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg text-sm ${
                message.isBot
                  ? 'bg-[#eaf2fb] text-[#2C73D2] rounded-bl-none'
                  : 'bg-[#2C73D2] text-white rounded-br-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#eaf2fb] text-[#2C73D2] p-3 rounded-lg rounded-bl-none text-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#2C73D2] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#2C73D2] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-[#2C73D2] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        
        {/* Quick Replies */}
        {messages.length <= 2 && (
          <div className="mt-3">
            <p className="text-xs text-gray-500 mb-2">Quick options:</p>
            <div className="flex flex-wrap">
              {getQuickReplies().map((reply, index) => (
                <QuickReply
                  key={index}
                  text={reply}
                  onClick={handleSendMessage}
                />
              ))}
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2C73D2] focus:ring-1 focus:ring-[#2C73D2]"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim()}
            className="bg-[#2C73D2] text-white p-2 rounded-lg hover:bg-[#2056AE] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
