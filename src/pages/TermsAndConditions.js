import React, { useEffect, useState } from 'react';
import FullPageLoader from '../components/FullPageLoader';

const TermsAndConditions = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Dental Tourism Clinics India, a platform connecting international patients with reputed dental clinics across India for affordable and high-quality dental care. By using this website/platform, you agree to the following Terms and Conditions.
            </p>
          </section>

          {/* 2. Scope of Services */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">2. Scope of Services</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>We provide a platform to list, promote, and connect patients with dental clinics offering dental tourism services in India.</li>
              <li>We are not a medical/dental service provider. We do not perform any medical/dental procedures and do not interfere with the clinic-patient relationship.</li>
              <li>All consultations, treatments, and decisions are solely between the patient and the dental clinic.</li>
            </ul>
          </section>

          {/* 3. User Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">3. User Eligibility</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Users must be 18 years or older or be accompanied by a legal guardian.</li>
              <li>Users must provide accurate, truthful information during bookings or inquiries.</li>
            </ul>
          </section>

          {/* 4. Booking & Payments */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">4. Booking & Payments</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Some clinics may require advance payment for appointment confirmation.</li>
              <li>All payment terms are governed by the individual clinics. The platform may facilitate payment gateways but is not responsible for disputes.</li>
              <li>Cancellation and refund policies will vary by clinic and should be reviewed before booking.</li>
            </ul>
          </section>

          {/* 5. Responsibilities & Disclaimer */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">5. Responsibilities & Disclaimer</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>We do not guarantee outcomes of any dental treatment.</li>
              <li>We do not take responsibility for medical negligence, complications, or dissatisfaction with treatment.</li>
              <li>It is the patient's responsibility to:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Research the clinic and doctor qualifications.</li>
                  <li>Understand the procedure, costs, and recovery expectations.</li>
                  <li>Ensure they are medically fit to travel and undergo dental treatment.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* 6. Liability Limitation */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">6. Liability Limitation</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              To the fullest extent permissible under law:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>We shall not be liable for any direct, indirect, incidental, special or consequential damages arising from the use of our platform or the clinics listed on it.</li>
              <li>All transactions, treatments, and communications are solely between the user and the clinic.</li>
            </ul>
          </section>

          {/* 7. Clinic Information Accuracy */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">7. Clinic Information Accuracy</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>We strive to ensure all information listed by clinics is accurate.</li>
              <li>However, we do not warrant that clinic listings, pricing, or qualifications are always accurate or up-to-date.</li>
              <li>Clinics are solely responsible for maintaining and updating their information.</li>
            </ul>
          </section>

          {/* 8. Travel & Visa */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">8. Travel & Visa</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Patients are responsible for obtaining the necessary visas, insurance, and travel documents.</li>
              <li>We are not responsible for travel delays, visa rejections, or immigration issues.</li>
            </ul>
          </section>

          {/* 9. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">9. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this platform (logos, texts, images, videos) is the property of Dental Tourism Clinics India and cannot be reproduced or distributed without written permission.
            </p>
          </section>

          {/* 10. Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">10. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              By using this platform, you consent to our{" "}
              <a href="/privacy-policy" className="text-[#2C73D2] hover:underline font-semibold">
                Privacy Policy
              </a>{" "}
              which outlines how we collect, use, and protect your personal data.
            </p>
          </section>

          {/* 11. Governing Law & Jurisdiction */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">11. Governing Law & Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions are governed by the laws of India. Any disputes arising shall be subject to the jurisdiction of courts in Mohali, Punjab, India.
            </p>
          </section>

          {/* 12. Modification of Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">12. Modification of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or update these Terms at any time. Continued use of the platform implies acceptance of any changes.
            </p>
          </section>

          {/* 13. Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">13. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              For any questions or concerns, contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">📧 <strong>Email:</strong> info@dentaltourismclinicsindia.com</p>
              <p className="text-gray-700">📞 <strong>Phone:</strong> +91-7087117423</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Last updated: July 30, 2025
          </p>
          {/* Another hidden admin access point */}
          <div className="mt-4">
            <span className="text-xs text-gray-400">
              For legal compliance queries or platform management, please{" "}
              <a href="/admin/login" className="text-gray-400 hover:text-gray-600 transition-colors">
                contact our legal team
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
