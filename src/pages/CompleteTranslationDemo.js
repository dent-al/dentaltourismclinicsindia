import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import heroSectionImg from '../assets/hero section.jpg';

const CompleteTranslationDemo = () => {
  const { t } = useTranslation();

  // Sample clinic data that will translate
  const clinicFeatures = [
    {
      title: t('hero.features.affordable'),
      description: t('services.saveUpTo'),
      icon: '💰'
    },
    {
      title: t('hero.features.experienced'),
      description: t('hero.features.expertDesc'),
      icon: '👨‍⚕️'
    },
    {
      title: t('hero.features.worldClass'),
      description: t('hero.features.facilitiesDesc'),
      icon: '🏥'
    },
    {
      title: t('hero.features.travel'),
      description: t('hero.features.travelDesc'),
      icon: '✈️'
    }
  ];

  const services = [
    {
      name: t('services.implants.title'),
      description: t('services.implants.description'),
      price: '₹15,000 - ₹50,000'
    },
    {
      name: t('services.orthodontics.title'),
      description: t('services.orthodontics.description'),
      price: '₹25,000 - ₹80,000'
    },
    {
      name: t('services.cosmetic.title'),
      description: t('services.cosmetic.description'),
      price: '₹10,000 - ₹45,000'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Language Switcher in Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Header with translated navigation */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={require('../logo.svg')} alt="Logo" className="h-10 w-10" />
              <h1 className="text-xl font-bold text-[#2C73D2]">
                {t('meta.title')}
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-[#2C73D2] font-medium">
                {t('nav.home')}
              </Link>
              <Link to="/clinics" className="text-gray-700 hover:text-[#2C73D2] font-medium">
                {t('nav.clinics')}
              </Link>
              <Link to="/shop" className="text-gray-700 hover:text-[#2C73D2] font-medium">
                {t('nav.shop')}
              </Link>
              <Link to="/consult" className="text-gray-700 hover:text-[#2C73D2] font-medium">
                {t('nav.consultation')}
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#2C73D2] font-medium">
                {t('nav.contact')}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Offers Banner - Completely Translated */}
      <div className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white py-2">
        <div className="max-w-6xl mx-auto px-4">
          <marquee className="text-sm font-medium">
            {t('offers.latest')} {t('offers.smile10')} | {t('offers.pearlFree')} | {t('offers.brightCheckup')}
          </marquee>
        </div>
      </div>

      {/* Hero Section - COMPLETELY TRANSLATED */}
      <section className="w-full bg-white flex flex-col md:flex-row items-center justify-center px-4 py-8 md:py-12">
        <div className="flex-1 flex flex-col items-start justify-center max-w-lg order-2 md:order-1 md:pr-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2563d6] mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full">
            <Link 
              to="/clinics" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#F4A300] to-[#2C73D2] text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:from-[#2C73D2] hover:to-[#F4A300] transition-all text-center"
            >
              {t('hero.exploreClinics')}
            </Link>
            <Link 
              to="/consult" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:from-[#F4A300] hover:to-[#2C73D2] transition-all text-center"
            >
              {t('hero.cta')}
            </Link>
          </div>
          
          {/* Additional CTA */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-[#2C73D2] font-medium hover:text-[#F4A300] transition">
              <span>📞</span>
              <span>{t('common.callNow')}</span>
            </button>
            <button className="flex items-center space-x-2 text-[#2C73D2] font-medium hover:text-[#F4A300] transition">
              <span>💬</span>
              <span>{t('common.whatsapp')}</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-center w-full md:w-auto mt-8 md:mt-0 order-1 md:order-2">
          <img 
            src={heroSectionImg} 
            alt={t('hero.title')} 
            className="max-w-[420px] md:max-w-[480px] lg:max-w-[540px] rounded-xl shadow-2xl" 
          />
        </div>
      </section>

      {/* Features Section - COMPLETELY TRANSLATED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C73D2] mb-4">
              {t('services.whyIndia')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#2C73D2] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - COMPLETELY TRANSLATED */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C73D2] mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#2C73D2] mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#F4A300]">
                    {service.price}
                  </span>
                  <button className="px-4 py-2 bg-[#2C73D2] text-white rounded-lg hover:bg-[#F4A300] transition">
                    {t('common.learnMore')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section - COMPLETELY TRANSLATED */}
      <section className="py-16 bg-[#2C73D2] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('search.findClinics')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('search.selectState')}
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder={t('search.placeholder')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <select className="px-4 py-3 rounded-lg text-gray-900">
              <option>{t('search.allStates')}</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
            <button className="px-8 py-3 bg-[#F4A300] text-white rounded-lg hover:bg-orange-500 transition font-semibold">
              {t('common.search')}
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section - COMPLETELY TRANSLATED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#2C73D2] mb-2">10,000+</div>
              <div className="text-gray-600">{t('about.stats.patients')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2C73D2] mb-2">50+</div>
              <div className="text-gray-600">{t('about.stats.doctors')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2C73D2] mb-2">15+</div>
              <div className="text-gray-600">{t('about.stats.experience')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2C73D2] mb-2">98%</div>
              <div className="text-gray-600">{t('about.stats.success')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - COMPLETELY TRANSLATED */}
      <section className="py-16 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            {t('consultation.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('consultation.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#2C73D2] font-semibold rounded-lg hover:bg-gray-100 transition">
              {t('hero.cta')}
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#2C73D2] transition">
              {t('common.callNow')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer - COMPLETELY TRANSLATED */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                {t('meta.title')}
              </h3>
              <p className="text-gray-300 mb-4">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">{t('nav.home')}</Link></li>
                <li><Link to="/clinics" className="text-gray-300 hover:text-white">{t('nav.clinics')}</Link></li>
                <li><Link to="/shop" className="text-gray-300 hover:text-white">{t('nav.shop')}</Link></li>
                <li><Link to="/consult" className="text-gray-300 hover:text-white">{t('nav.consultation')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">
                {t('contact.title')}
              </h4>
              <div className="space-y-2 text-gray-300">
                <p>{t('contact.phone')}: +91 9999999999</p>
                <p>{t('contact.email')}: info@example.com</p>
                <p>{t('contact.address')}: New Delhi, India</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 {t('meta.title')}. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Language Note */}
      <div className="fixed bottom-4 left-4 bg-[#2C73D2] text-white p-4 rounded-lg shadow-lg max-w-xs">
        <p className="text-sm font-medium mb-2">
          🌍 {t('nav.language')} Demo
        </p>
        <p className="text-xs opacity-90">
          {t('nav.language')} → EVERY text changes instantly!
        </p>
      </div>
    </div>
  );
};

export default CompleteTranslationDemo;
