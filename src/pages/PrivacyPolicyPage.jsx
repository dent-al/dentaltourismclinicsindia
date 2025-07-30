import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicyPage = () => {
  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Dental Tourism Clinics India</title>
        <meta name="description" content="Read our comprehensive privacy policy to understand how we collect, use, and protect your personal information on our dental tourism platform." />
        <meta name="keywords" content="privacy policy, data protection, dental tourism, patient privacy, clinic privacy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.origin}/privacy-policy`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-[#2C73D2] mb-2">Privacy Policy</h1>
              <p className="text-gray-600 text-lg">Protecting your privacy is our priority</p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v6m6-6v6M5 7h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
                  </svg>
                  <span>Platform: Dental Tourism Clinics India</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Jurisdiction: Mohali, Punjab, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9v2a2 2 0 002 2h4a2 2 0 002-2v-2m-6 0V9a2 2 0 012-2h4a2 2 0 012 2v6m-6 0h6" />
                  </svg>
                  <span>Last Updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-[#2C73D2] font-bold text-lg">1</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Dental Tourism Clinics India is committed to protecting the privacy of our users, which includes both:
                  </p>
                  <div className="bg-blue-50 border-l-4 border-[#2C73D2] p-4 rounded-r-lg">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#2C73D2] rounded-full"></span>
                        <span><strong>Patients</strong> seeking dental care through our platform</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#F4A300] rounded-full"></span>
                        <span><strong>Dental Clinics</strong> enrolled to offer services via our platform</span>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4">
                    This Privacy Policy outlines how we collect, use, store, and disclose your information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">2</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Information We Collect</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* For Patients */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-[#2C73D2] mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      For Patients
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#2C73D2] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Full name, contact number, email ID</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#2C73D2] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Country of origin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#2C73D2] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Preferred location for treatment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#2C73D2] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Medical/dental history (only if voluntarily submitted)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#2C73D2] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Appointment or inquiry details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#2C73D2] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Travel plans, if shared</span>
                      </li>
                    </ul>
                  </div>

                  {/* For Dental Clinics */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-[#F4A300] mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      For Dental Clinics
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Clinic name, address, contact information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Dentist(s) name, qualifications, and license details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Clinic registration certificates (if submitted)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Services offered, pricing, and treatment packages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#F4A300] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Photos, testimonials, or reviews</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Use the Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* For Patients */}
                  <div className="border border-blue-200 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-[#2C73D2] mb-4">For Patients</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>To connect you with suitable dental clinics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>To communicate booking details or treatment updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>To provide travel assistance if applicable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>To improve our services and tailor recommendations</span>
                      </li>
                    </ul>
                  </div>

                  {/* For Clinics */}
                  <div className="border border-orange-200 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-[#F4A300] mb-4">For Clinics</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>To verify and list your clinic on our platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>To showcase your services to international patients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>To share patient leads or inquiries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>To communicate about promotions, updates, or platform changes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continue with more sections... */}
          {/* I'll continue with the remaining sections in the next part */}

          {/* Sharing of Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">4</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sharing of Information</h2>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                  <p className="text-red-800 font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    We do not sell or rent your information to any third party.
                  </p>
                </div>
                <p className="text-gray-700 mb-4">However, we may share:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Patient inquiries with relevant dental clinics for treatment purposes</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>Clinic profiles with interested patients</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <span>Information with legal authorities if required under Indian law</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Data with trusted third-party service providers (e.g., payment gateways, CRM tools) strictly for business operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Storage & Security */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-lg">5</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Storage & Security</h2>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg text-center">
                    <svg className="w-8 h-8 text-indigo-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    <h3 className="font-semibold text-indigo-800">Secure Servers</h3>
                    <p className="text-sm text-indigo-600">Encrypted access</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                    <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="font-semibold text-green-800">Protection</h3>
                    <p className="text-sm text-green-600">Firewalls & encryption</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg text-center">
                    <svg className="w-8 h-8 text-orange-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m-2-2a2 2 0 00-2 2m2-2H9a2 2 0 00-2 2v0a2 2 0 002 2h2m-2-4v0a2 2 0 002 2m0 0v0a2 2 0 002-2m-2 2H9a2 2 0 01-2-2v0m2 2v4a2 2 0 002 2m2-6a2 2 0 012 2v4a2 2 0 01-2 2m-2-4a2 2 0 00-2 2v0a2 2 0 002 2h2m-2-4H9a2 2 0 01-2-2v0" />
                    </svg>
                    <h3 className="font-semibold text-orange-800">Access Control</h3>
                    <p className="text-sm text-orange-600">Authorized staff only</p>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <p className="text-yellow-800">
                    <strong>Disclaimer:</strong> Despite our efforts, no system is 100% secure, and we cannot guarantee absolute data security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Consent */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">6</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Patient Consent</h2>
                <p className="text-gray-700 mb-4">By using our platform and submitting your information, you:</p>
                <div className="space-y-3">
                  {[
                    "Grant permission to Dental Tourism Clinics India to process and share your data with selected clinics",
                    "Confirm that the information provided is accurate and truthful",
                    "Acknowledge the inherent risks of sharing medical information online"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Clinic Consent */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-lg">7</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Clinic Consent</h2>
                <p className="text-gray-700 mb-4">By enrolling your clinic, you:</p>
                <div className="space-y-3">
                  {[
                    "Authorize us to display your clinic data on our platform and promotional materials",
                    "Confirm that all documents and licenses shared are valid and lawful",
                    "Agree to maintain patient privacy for any leads provided through the platform"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cookies & Analytics */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold text-lg">8</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies & Analytics</h2>
                <div className="bg-pink-50 border border-pink-200 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>We use cookies and tracking tools (e.g., Google Analytics) to improve user experience.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>You may choose to disable cookies via your browser, but some features may not work properly.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-bold text-lg">9</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Links</h2>
                <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg">
                  <p className="text-teal-800">
                    Our website may contain links to third-party services (e.g., travel partners, insurance). 
                    We are not responsible for their privacy practices. Please review their policies separately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Retention, Your Rights, Updates, Contact sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Data Retention */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold">10</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Data Retention</h2>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Patient and clinic data will be retained for up to 2 years or as long as required for legal/compliance purposes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>You may request deletion of your data unless retention is required by law.</span>
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">11</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Your Rights</h2>
              </div>
              <p className="text-gray-700 mb-3">As a user, you have the right to:</p>
              <ul className="space-y-2 text-gray-700">
                {["Access your data", "Correct inaccuracies", "Request data deletion (subject to legal exceptions)", "Withdraw consent for marketing communication"].map((right, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Updates & Contact */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Updates */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 font-bold">12</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Updates to This Policy</h2>
              </div>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Updates will be posted on our website, 
                and continued use implies acceptance of changes.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-[#2C73D2] to-[#F4A300] rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">13</span>
                </div>
                <h2 className="text-xl font-bold">Contact Us</h2>
              </div>
              <p className="mb-4">For any queries or concerns, contact:</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@dentaltourismclinicsindia.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91-7087117423</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-6 text-center">
            <p className="text-gray-600 text-sm">
              This Privacy Policy is effective as of {lastUpdated} and applies to all users of the Dental Tourism Clinics India platform.
              <br />
              <span className="font-semibold">Your privacy is important to us, and we are committed to protecting your personal information.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
