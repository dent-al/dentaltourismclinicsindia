import React from 'react';
import { Helmet } from 'react-helmet';

const DentistRefundPolicyPage = () => {
  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Dentist Refund Policy | Dental Tourism Clinics India</title>
        <meta name="description" content="Read our comprehensive refund policy for dental clinics and service providers registered with our platform." />
        <meta name="keywords" content="dentist refund policy, clinic fees, registration policy, dental clinic terms" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.origin}/dentist-refund-policy`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#2C73D2] to-purple-600 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-[#2C73D2] mb-2">Non-Refundable Fee & Refund Policy</h1>
              <p className="text-lg text-gray-600 mb-2">For Dental Clinics & Service Providers</p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Platform: Dental Tourism Clinics India</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <span>For Registered Clinics</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9v2a2 2 0 002 2h4a2 2 0 002-2v-2m-6 0V9a2 2 0 012-2h4a2 2 0 012 2v6m-6 0h6" />
                  </svg>
                  <span>Last Updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold text-center">
                <strong>Applicable To:</strong> All dental clinics, hospitals, or service providers registered with Dental Tourism Clinics India.
              </p>
            </div>
          </div>

          {/* Non-Refundable Nature */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">1</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Non-Refundable Nature of Fees</h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
                  <p className="text-red-800 font-semibold">
                    All payments made to Dental Tourism Clinics India are <strong>strictly non-refundable under any circumstances</strong>.
                  </p>
                </div>
                <p className="text-gray-700 mb-4">This includes payments for services such as:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-[#2C73D2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 8l2 2 4-4" />
                      </svg>
                      <span>Registration or onboarding fees</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-[#2C73D2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Listing or visibility charges</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-[#2C73D2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                      <span>Marketing or promotional packages</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-[#2C73D2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>Lead generation or inquiry handling</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-[#2C73D2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      <span>Featured placement or ad spots</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-[#2C73D2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v6m6-6v6M5 7h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
                      </svg>
                      <span>Annual or monthly subscription plans</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Acknowledgment by Clinic */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Acknowledgment by Clinic</h2>
                <p className="text-gray-700 mb-4">By making payment, the clinic/service provider acknowledges that:</p>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div>
                        <p className="text-blue-800 font-semibold mb-2">Immediate Digital Services:</p>
                        <p className="text-blue-700 text-sm">
                          The platform offers digital services that begin immediately upon payment (such as listing, promotion, SEO placement, etc.), 
                          and therefore, the fees are not eligible for cancellation or refund under consumer protection or contract laws.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <div>
                        <p className="text-yellow-800 font-semibold mb-2">No Performance Guarantees:</p>
                        <p className="text-yellow-700 text-sm">
                          No refunds shall be issued for dissatisfaction with lead volume, patient response, or results of any promotional campaign, 
                          unless specifically guaranteed in writing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cancellation & Termination */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Cancellation by Clinic */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold">3</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Cancellation by Clinic</h2>
              </div>
              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                <p className="text-orange-800 text-sm">
                  If a clinic decides to cancel, suspend, or discontinue its participation with the platform for any reason, 
                  <strong> no part of the payment will be refunded</strong>, and no pro-rata refund will be applicable.
                </p>
              </div>
            </div>

            {/* Termination by Platform */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold">4</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Termination by Platform</h2>
              </div>
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-red-800 text-sm mb-2">
                  If a clinic is found violating the platform's ethics, guidelines, or service agreement:
                </p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Patient complaints</li>
                  <li>• Malpractice</li>
                  <li>• False advertising</li>
                </ul>
                <p className="text-red-800 text-sm mt-2 font-semibold">
                  The platform reserves the right to terminate the clinic's access or listing without any refund.
                </p>
              </div>
            </div>
          </div>

          {/* Attestation & Acceptance */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">5</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Attestation & Acceptance</h2>
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg mb-6">
                  <p className="text-purple-800 font-semibold">
                    The undersigned clinic agrees to and accepts the above refund policy. The clinic understands that 
                    <strong> no payment shall be refunded once received by Dental Tourism Clinics India</strong>.
                  </p>
                </div>
                
                {/* Digital Agreement Form */}
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Digital Agreement Form</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Authorized Person Name:</label>
                        <div className="w-full h-8 border-b-2 border-gray-300"></div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Clinic Name:</label>
                        <div className="w-full h-8 border-b-2 border-gray-300"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Designation:</label>
                        <div className="w-full h-8 border-b-2 border-gray-300"></div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date:</label>
                        <div className="w-full h-8 border-b-2 border-gray-300"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Digital Signature:</label>
                    <div className="w-full h-12 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Digital signature will be captured during registration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Contact Section */}
          <div className="bg-gradient-to-r from-[#2C73D2] to-purple-600 rounded-2xl shadow-lg p-6 text-white mb-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Questions About Our Clinic Refund Policy?</h3>
              <p className="mb-4">For any queries regarding clinic registration or refund policies, contact us:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@dentaltourismclinicsindia.com</span>
                </div>
                <div className="flex items-center gap-2">
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
              This Clinic Refund Policy is effective as of {lastUpdated} and applies to all dental clinics registered with Dental Tourism Clinics India.
              <br />
              <span className="font-semibold">All clinic registrations require digital acceptance of this policy before activation.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DentistRefundPolicyPage;
