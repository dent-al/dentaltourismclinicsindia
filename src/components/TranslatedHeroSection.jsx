import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroSectionImg from '../assets/hero section.jpg';

const TranslatedHeroSection = () => {
  const { t } = useTranslation();

  // Features array with translations
  const features = [
    {
      image: require("../assets/consult.png"),
      title: t('nav.consultation'),
      desc: t('hero.features.consultation'),
      link: "/consult"
    },
    {
      image: require("../assets/clinic.png"), 
      title: t('nav.clinics'),
      desc: t('hero.features.clinics'),
      link: "/clinics"
    },
    {
      image: require("../assets/scan.png"),
      title: t('nav.scans'),
      desc: t('hero.features.scans'),
      link: "/cbct-opg-lab"
    },
    {
      image: require("../assets/bloodtest.png"),
      title: t('nav.bloodTest'),
      desc: t('hero.features.bloodTest'),
      link: "/blood-test-lab"
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-white flex flex-col md:flex-row items-center justify-center px-2 md:px-2 py-2 md:py-4 md:gap-2">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-lg order-2 md:order-1 md:pr-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2563d6] mb-4 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full">
            <Link to="/clinics" className="px-8 py-3 rounded-md bg-gradient-to-r from-[#F4A300] to-[#2C73D2] text-white font-semibold text-lg shadow hover:from-[#2C73D2] hover:to-[#F4A300] transition text-center">
              {t('hero.exploreClinics')}
            </Link>
            <Link to="/consult" className="px-8 py-3 rounded-md bg-gradient-to-r from-[#F4A300] to-[#2C73D2] text-white font-semibold text-lg shadow hover:from-[#2C73D2] hover:to-[#F4A300] transition text-center">
              {t('hero.cta')}
            </Link>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex items-center justify-center w-full md:w-auto mt-4 md:mt-0 order-1 md:order-2">
          <img src={heroSectionImg} alt={t('hero.title')} className="max-w-[420px] md:max-w-[480px] lg:max-w-[540px] rounded-lg shadow-lg" />
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="w-full bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2C73D2] mb-8">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link 
                key={index}
                to={feature.link} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-16 h-16 mx-auto mb-4" 
                />
                <h3 className="text-lg font-semibold text-[#2C73D2] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY INDIA SECTION ================= */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C73D2] mb-4">
              {t('services.whyIndia')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Affordable Treatments */}
            <div className="flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 min-h-[340px] justify-start">
              <img 
                src={(() => { try { return require('../assets/Affordable Treatment.png'); } catch { return require('../logo.svg'); } })()} 
                alt={t('hero.features.affordable')} 
                className="w-[160px] h-[160px] object-contain mb-4" 
              />
              <div className="text-lg font-bold text-[#2C73D2] mb-2 text-center">
                {t('hero.features.affordable')}
              </div>
              <div className="text-base text-gray-700 text-center">
                {t('services.saveUpTo')}
              </div>
            </div>
            
            {/* Expert Dentists */}
            <div className="flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 min-h-[340px] justify-start">
              <img 
                src={(() => { try { return require('../assets/Expert Dentist.png'); } catch { return require('../logo.svg'); } })()} 
                alt={t('hero.features.experienced')} 
                className="w-[160px] h-[160px] object-contain mb-4" 
              />
              <div className="text-lg font-bold text-[#2C73D2] mb-2 text-center">
                {t('hero.features.experienced')}
              </div>
              <div className="text-base text-gray-700 text-center">
                {t('hero.features.expertDesc')}
              </div>
            </div>
            
            {/* World-Class Facilities */}
            <div className="flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 min-h-[340px] justify-start">
              <img 
                src={(() => { try { return require('../assets/Tourism + Treatment.png'); } catch { return require('../logo.svg'); } })()} 
                alt={t('hero.features.worldClass')} 
                className="w-[160px] h-[160px] object-contain mb-4" 
              />
              <div className="text-lg font-bold text-[#2C73D2] mb-2 text-center">
                {t('hero.features.worldClass')}
              </div>
              <div className="text-base text-gray-700 text-center">
                {t('hero.features.facilitiesDesc')}
              </div>
            </div>
            
            {/* Assisted Travel */}
            <div className="flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 min-h-[340px] justify-start">
              <img 
                src={(() => { try { return require('../assets/Assisted Travel Plans.png'); } catch { return require('../logo.svg'); } })()} 
                alt={t('hero.features.travel')} 
                className="w-[160px] h-[160px] object-contain mb-4" 
              />
              <div className="text-lg font-bold text-[#2C73D2] mb-2 text-center">
                {t('hero.features.travel')}
              </div>
              <div className="text-base text-gray-700 text-center">
                {t('hero.features.travelDesc')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TranslatedHeroSection;
