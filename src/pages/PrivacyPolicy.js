import React, { useEffect, useState } from 'react';
import FullPageLoader from '../components/FullPageLoader';

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <div className="text-sm text-gray-600">
            <p><strong>Platform Name:</strong> Dental Tourism Clinics India</p>
            <p><strong>Jurisdiction:</strong> Mohali, Punjab, India</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Dental Tourism Clinics India is committed to protecting the privacy of our users, which includes both:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 ml-4">
              <li>Patients seeking dental care through our platform.</li>
              <li>Dental Clinics enrolled to offer services via our platform.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              This Privacy Policy outlines how we collect, use, store, and disclose your information.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">2. Information We Collect</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">A. For Patients</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Full name, contact number, email ID</li>
                <li>Country of origin</li>
                <li>Preferred location for treatment</li>
                <li>Medical/dental history (only if voluntarily submitted)</li>
                <li>Appointment or inquiry details</li>
                <li>Travel plans, if shared</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">B. For Dental Clinics</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Clinic name, address, contact information</li>
                <li>Dentist(s) name, qualifications, and license details</li>
                <li>Clinic registration certificates (if submitted)</li>
                <li>Services offered, pricing, and treatment packages</li>
                <li>Photos, testimonials, or reviews</li>
              </ul>
            </div>
          </section>

          {/* 3. How We Use the Information */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">3. How We Use the Information</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">A. For Patients</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>To connect you with suitable dental clinics</li>
                <li>To communicate booking details or treatment updates</li>
                <li>To provide travel assistance if applicable</li>
                <li>To improve our services and tailor recommendations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">B. For Clinics</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>To verify and list your clinic on our platform</li>
                <li>To showcase your services to international patients</li>
                <li>To share patient leads or inquiries</li>
                <li>To communicate about promotions, updates, or platform changes</li>
              </ul>
            </div>
          </section>

          {/* 4. Sharing of Information */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">4. Sharing of Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We do not sell or rent your information to any third party.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">However, we may share:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Patient inquiries with relevant dental clinics for treatment purposes</li>
              <li>Clinic profiles with interested patients</li>
              <li>Information with legal authorities if required under Indian law</li>
              <li>Data with trusted third-party service providers (e.g., payment gateways, CRM tools) strictly for business operations</li>
            </ul>
          </section>

          {/* 5. Data Storage & Security */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">5. Data Storage & Security</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>All information is stored on secure servers with encrypted access.</li>
              <li>We use firewalls, data encryption, and access controls to protect your information.</li>
              <li>Only authorized staff may access sensitive data.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Despite our efforts, no system is 100% secure, and we cannot guarantee absolute data security.
            </p>
          </section>

          {/* 6. Patient Consent */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">6. Patient Consent</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              By using our platform and submitting your information, you:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Grant permission to Dental Tourism Clinics India to process and share your data with selected clinics</li>
              <li>Confirm that the information provided is accurate and truthful</li>
              <li>Acknowledge the inherent risks of sharing medical information online</li>
            </ul>
          </section>

          {/* 7. Clinic Consent */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">7. Clinic Consent</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              By enrolling your clinic, you:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Authorize us to display your clinic data on our platform and promotional materials</li>
              <li>Confirm that all documents and licenses shared are valid and lawful</li>
              <li>Agree to maintain patient privacy for any leads provided through the platform</li>
            </ul>
          </section>

          {/* 8. Cookies & Analytics */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">8. Cookies & Analytics</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>We use cookies and tracking tools (e.g., Google Analytics) to improve user experience.</li>
              <li>You may choose to disable cookies via your browser, but some features may not work properly.</li>
            </ul>
          </section>

          {/* 9. Third-Party Links */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">9. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party services (e.g., travel partners, insurance). We are not responsible for their privacy practices. Please review their policies separately.
            </p>
          </section>

          {/* 10. Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">10. Data Retention</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Patient and clinic data will be retained for up to 2 years or as long as required for legal/compliance purposes.</li>
              <li>You may request deletion of your data unless retention is required by law.</li>
            </ul>
          </section>

          {/* 11. Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">11. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              As a user, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Access your data</li>
              <li>Correct inaccuracies</li>
              <li>Request data deletion (subject to legal exceptions)</li>
              <li>Withdraw consent for marketing communication</li>
            </ul>
          </section>

          {/* 12. Updates to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">12. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Updates will be posted on our website, and continued use implies acceptance of changes.
            </p>
          </section>

          {/* 13. Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              For any queries or concerns, contact:
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
          {/* Hidden admin access in the footer of privacy policy */}
          <div className="mt-4">
            <span className="text-xs text-gray-400">
              For technical support or platform issues, please{" "}
              <a href="/admin/login" className="text-gray-400 hover:text-gray-600 transition-colors">
                contact our technical team
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
