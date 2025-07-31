import React from 'react';
import { Helmet } from 'react-helmet';

const RefundPolicyPage = () => {
  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Refund Policy | Dental Tourism Clinics India</title>
        <meta name="description" content="Read our comprehensive refund policy to understand our payment terms and conditions for dental tourism services." />
        <meta name="keywords" content="refund policy, payment terms, dental tourism, booking policy, cancellation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.origin}/refund-policy`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-[#F4A300] rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-[#2C73D2] mb-2">Refund Policy</h1>
              <p className="text-gray-600 text-lg">Payment terms and refund conditions</p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v6m6-6v6M5 7h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
                  </svg>
                  <span>Platform: Dental Tourism Clinics India</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Applies to all bookings</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9v2a2 2 0 002 2h4a2 2 0 002-2v-2m-6 0V9a2 2 0 012-2h4a2 2 0 012 2v6m-6 0h6" />
                  </svg>
                  <span>Last Updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <p className="text-red-800 font-semibold text-center">
                <strong>Applies To:</strong> All bookings and payments made through Dental Tourism Clinics India and associated dental clinics.
              </p>
            </div>
          </div>

          {/* No Refund Policy */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">1</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">No Refund After Payment</h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
                  <p className="text-red-800 font-semibold">
                    Once payment is successfully made, it is considered full and final. We do not offer refunds under any circumstances.
                  </p>
                </div>
                <p className="text-gray-700 mb-4">This includes but is not limited to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Change of mind by the patient</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Patient no longer able to travel</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Visa denial or travel issues</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Dissatisfaction with treatment results</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Delay, rescheduling, or change in treatment plan</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Procedures deemed unsuitable upon clinical examination</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Assessment Clause */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Medical Assessment Clause</h2>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 8l2 2 4-4" />
                    </svg>
                    <div>
                      <p className="text-blue-800 font-semibold mb-2">Important Notice:</p>
                      <p className="text-blue-700">
                        Treatment plans and prices shared online or through consultation are preliminary and subject to clinical evaluation upon arrival.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800">
                    If a procedure is changed or cancelled due to medical reasons (e.g., bone loss, infection, or contraindication), 
                    <strong> no refund will be issued</strong>, but an alternative treatment option may be offered at the discretion of the clinic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rescheduling & Non-Transferable */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Rescheduling Policy */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Rescheduling Policy</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Patients may request to reschedule their appointment up to <strong>7 days in advance</strong>, subject to clinic availability.</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm">No rescheduling or adjustments will be allowed for no-shows or last-minute cancellations.</span>
                </div>
              </div>
            </div>

            {/* Non-Transferable */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Non-Transferable</h2>
              </div>
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 18l-5-5 5-5m-5 5l5 5M9 9l-5-5" />
                  </svg>
                  <div>
                    <p className="text-purple-800 font-semibold">All payments made are non-transferable.</p>
                    <p className="text-purple-700 text-sm mt-1">Bookings cannot be transferred to another patient or person.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exception Clause */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-lg">5</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Exception Clause</h2>
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <p className="text-orange-800 font-semibold mb-2">Rare Exceptions Only:</p>
                      <p className="text-orange-700">
                        In rare, exceptional cases (such as a verified emergency or clinic cancellation), refund requests may be considered 
                        at the sole discretion of Dental Tourism Clinics India, but <strong>there is no guarantee of approval</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Binding */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">6</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Legal Binding</h2>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                  <p className="text-gray-800 mb-3">
                    By completing the booking and payment, you confirm that you have:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Read, understood, and accepted this refund policy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Waived all rights to dispute or reverse payments via payment gateways or credit card chargebacks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Contact Section */}
          <div className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] rounded-2xl shadow-lg p-6 text-white mb-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Questions About Our Refund Policy?</h3>
              <p className="mb-4">For any queries or concerns regarding our refund policy, contact us:</p>
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
              This Refund Policy is effective as of {lastUpdated} and applies to all bookings made through Dental Tourism Clinics India.
              <br />
              <span className="font-semibold">Please read this policy carefully before making any payment or booking.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicyPage;
