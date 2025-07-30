import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const AccreditationPage = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  // Platform Certifications & Accreditations
  const platformCertifications = [
    {
      id: 1,
      name: "ISO 27001:2013",
      title: "Information Security Management",
      description: "International standard for information security management systems, ensuring the highest level of data protection for our users.",
      icon: "🔒",
      status: "Certified",
      validUntil: "2025-12-31",
      certifyingBody: "International Organization for Standardization"
    },
    {
      id: 2,
      name: "ISO 9001:2015",
      title: "Quality Management System",
      description: "Demonstrates our commitment to quality management and continuous improvement in service delivery.",
      icon: "⭐",
      status: "Certified", 
      validUntil: "2025-08-15",
      certifyingBody: "International Organization for Standardization"
    },
    {
      id: 3,
      name: "GDPR Compliance",
      title: "Data Protection Regulation",
      description: "Full compliance with European Union General Data Protection Regulation for international patient privacy.",
      icon: "🛡️",
      status: "Compliant",
      validUntil: "Ongoing",
      certifyingBody: "European Union Commission"
    },
    {
      id: 4,
      name: "HIPAA Readiness",
      title: "Health Insurance Portability",
      description: "Platform designed with HIPAA-ready infrastructure for secure handling of protected health information.",
      icon: "🏥",
      status: "Ready",
      validUntil: "Ongoing",
      certifyingBody: "U.S. Department of Health & Human Services"
    }
  ];

  // Partner Clinic Accreditations
  const clinicAccreditations = [
    {
      id: 1,
      name: "NABH",
      title: "National Accreditation Board for Hospitals",
      description: "Premier healthcare accreditation body in India, ensuring world-class quality standards.",
      icon: "🏨",
      partneredClinics: 150,
      countries: ["India"],
      website: "https://nabh.co"
    },
    {
      id: 2,
      name: "JCI",
      title: "Joint Commission International",
      description: "Gold standard for global healthcare quality and patient safety accreditation.",
      icon: "🌟",
      partneredClinics: 45,
      countries: ["India", "Thailand", "Malaysia"],
      website: "https://jointcommissioninternational.org"
    },
    {
      id: 3,
      name: "ISO 15189",
      title: "Medical Laboratory Standards",
      description: "International standard for quality and competence in medical testing laboratories.",
      icon: "🔬",
      partneredClinics: 85,
      countries: ["India", "Singapore"],
      website: "https://iso.org"
    },
    {
      id: 4,
      name: "NABL",
      title: "National Accreditation Board for Testing",
      description: "Accreditation for testing and calibration laboratories in India.",
      icon: "⚗️",
      partneredClinics: 200,
      countries: ["India"],
      website: "https://nabl-india.org"
    }
  ];

  // International Partnerships
  const partnerships = [
    {
      id: 1,
      name: "Medical Tourism Association (MTA)",
      type: "Global Healthcare Network",
      description: "Premier global organization advancing medical tourism industry standards and best practices.",
      logo: "🌍",
      partnership: "Certified Member",
      since: "2023",
      benefits: ["Global standards compliance", "International patient referrals", "Industry best practices"]
    },
    {
      id: 2,
      name: "International Medical Travel Journal",
      type: "Industry Publication",
      description: "Leading publication covering medical tourism trends, destinations, and patient success stories.",
      logo: "📰",
      partnership: "Featured Partner",
      since: "2023",
      benefits: ["Industry visibility", "Expert content collaboration", "Patient testimonial features"]
    },
    {
      id: 3,
      name: "Global Healthcare Accreditation (GHA)",
      type: "Quality Assurance",
      description: "International organization focused on improving medical tourism quality and patient experience.",
      logo: "🏆",
      partnership: "Accredited Platform",
      since: "2024",
      benefits: ["Quality certification", "Patient safety protocols", "Global recognition"]
    },
    {
      id: 4,
      name: "India Healthcare Federation",
      type: "National Healthcare Body",
      description: "Apex healthcare industry body representing hospitals, diagnostic centers, and healthcare services.",
      logo: "🇮🇳",
      partnership: "Associate Member",
      since: "2023",
      benefits: ["Industry advocacy", "Policy compliance", "Healthcare standards"]
    }
  ];

  // Government Recognitions
  const governmentRecognitions = [
    {
      id: 1,
      name: "Digital India Initiative",
      authority: "Government of India",
      description: "Recognized as a digital healthcare platform contributing to India's digital transformation goals.",
      year: "2024",
      icon: "🇮🇳"
    },
    {
      id: 2,
      name: "Startup India Recognition",
      authority: "Department for Promotion of Industry",
      description: "Recognized startup contributing to healthcare innovation and digital health solutions.",
      year: "2023",
      icon: "🚀"
    },
    {
      id: 3,
      name: "Export Promotion Council",
      authority: "Ministry of Commerce & Industry",
      description: "Registered with Services Export Promotion Council for promoting healthcare services export.",
      year: "2024",
      icon: "📈"
    }
  ];

  const tabData = {
    certifications: {
      title: "Platform Certifications",
      description: "Our quality and security certifications ensuring the highest standards",
      data: platformCertifications
    },
    clinics: {
      title: "Partner Clinic Accreditations", 
      description: "Quality accreditations of our network clinics",
      data: clinicAccreditations
    },
    partnerships: {
      title: "Industry Partnerships",
      description: "Strategic partnerships with leading healthcare organizations",
      data: partnerships
    },
    government: {
      title: "Government Recognitions",
      description: "Official recognitions and registrations",
      data: governmentRecognitions
    }
  };

  return (
    <>
      <Helmet>
        <title>Accreditations & Partnerships | Dental Tourism Clinics India</title>
        <meta name="description" content="View our certifications, accreditations, and partnerships that ensure quality, safety, and trust in dental tourism services across India." />
        <meta name="keywords" content="dental accreditation, ISO certification, NABH, JCI, medical tourism partnerships, healthcare quality standards" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.origin}/accreditations`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C73D2] mb-4">Accreditations & Partnerships</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensuring quality, safety, and trust through internationally recognized certifications and strategic healthcare partnerships.
            </p>
          </div>

          {/* Trust Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#2C73D2] mb-2">4+</div>
              <div className="text-gray-600">Platform Certifications</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#F4A300] mb-2">480+</div>
              <div className="text-gray-600">Accredited Clinics</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#2C73D2] mb-2">4+</div>
              <div className="text-gray-600">Industry Partnerships</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#F4A300] mb-2">3+</div>
              <div className="text-gray-600">Government Recognitions</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-2xl shadow-lg mb-8">
            <div className="flex flex-wrap border-b border-gray-200">
              {Object.keys(tabData).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium text-sm sm:text-base transition-colors flex-1 min-w-max ${
                    activeTab === tab
                      ? 'text-[#2C73D2] border-b-2 border-[#2C73D2] bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tabData[tab].title}
                </button>
              ))}
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{tabData[activeTab].title}</h2>
                <p className="text-gray-600">{tabData[activeTab].description}</p>
              </div>

              {/* Platform Certifications */}
              {activeTab === 'certifications' && (
                <div className="grid md:grid-cols-2 gap-6">
                  {platformCertifications.map(cert => (
                    <div key={cert.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{cert.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-800">{cert.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              cert.status === 'Certified' ? 'bg-green-100 text-green-800' : 
                              cert.status === 'Compliant' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {cert.status}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-[#2C73D2] mb-2">{cert.title}</h4>
                          <p className="text-gray-600 mb-3">{cert.description}</p>
                          <div className="text-sm text-gray-500">
                            <div>Certifying Body: {cert.certifyingBody}</div>
                            <div>Valid Until: {cert.validUntil}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Clinic Accreditations */}
              {activeTab === 'clinics' && (
                <div className="grid md:grid-cols-2 gap-6">
                  {clinicAccreditations.map(accred => (
                    <div key={accred.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{accred.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{accred.name}</h3>
                          <h4 className="text-lg font-semibold text-[#2C73D2] mb-2">{accred.title}</h4>
                          <p className="text-gray-600 mb-4">{accred.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <span className="font-medium text-[#F4A300]">{accred.partneredClinics}+</span>
                              <span>Partner Clinics</span>
                            </div>
                            <div>Countries: {accred.countries.join(', ')}</div>
                          </div>
                          <a 
                            href={accred.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#2C73D2] hover:text-[#F4A300] font-medium text-sm"
                          >
                            Visit Website
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Industry Partnerships */}
              {activeTab === 'partnerships' && (
                <div className="grid md:grid-cols-2 gap-6">
                  {partnerships.map(partner => (
                    <div key={partner.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{partner.logo}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-800">{partner.name}</h3>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                              {partner.partnership}
                            </span>
                          </div>
                          <div className="text-sm text-gray-500 mb-2">{partner.type} • Since {partner.since}</div>
                          <p className="text-gray-600 mb-4">{partner.description}</p>
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-2">Partnership Benefits:</h5>
                            <ul className="space-y-1">
                              {partner.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Government Recognitions */}
              {activeTab === 'government' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {governmentRecognitions.map(recognition => (
                    <div key={recognition.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                      <div className="text-4xl mb-4">{recognition.icon}</div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{recognition.name}</h3>
                      <div className="text-sm text-[#2C73D2] font-medium mb-2">{recognition.authority}</div>
                      <div className="text-xs text-gray-500 mb-3">Year: {recognition.year}</div>
                      <p className="text-sm text-gray-600">{recognition.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Verification Section */}
          <div className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Verification & Transparency</h3>
            <p className="mb-6 opacity-90">
              All certifications and partnerships are independently verified. You can verify our credentials directly with the certifying bodies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2C73D2] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Verify Certifications
              </button>
              <button className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-30 transition-colors">
                Download Certificates
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccreditationPage;
