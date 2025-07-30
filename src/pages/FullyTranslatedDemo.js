import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import TranslatedHeroSection from '../components/TranslatedHeroSection';
import TranslatedFooter from '../components/TranslatedFooter';
import LanguageSwitcher from '../components/LanguageSwitcher';

const FullyTranslatedDemo = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Language Switcher */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-4">
            <img 
              src={require('../logo.svg')} 
              alt={t('meta.title')} 
              className="h-10 w-10" 
            />
            <h1 className="text-xl font-bold text-[#2C73D2]">
              {t('meta.title')}
            </h1>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Navigation Header */}
      <Header />

      {/* Hero Section with Complete Translation */}
      <TranslatedHeroSection />

      {/* Services Section - Completely Translated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C73D2] mb-4">
              {t('services.title')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dental Implants */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-center">
                <img 
                  src={(() => { try { return require('../assets/Dental Implants.png'); } catch { return require('../logo.svg'); } })()} 
                  alt={t('services.implants.title')} 
                  className="w-20 h-20 mx-auto mb-4" 
                />
                <h3 className="text-xl font-semibold text-[#2C73D2] mb-2">
                  {t('services.implants.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.implants.description')}
                </p>
                <button className="mt-4 px-6 py-2 bg-[#2C73D2] text-white rounded-lg hover:bg-[#F4A300] transition">
                  {t('common.learnMore')}
                </button>
              </div>
            </div>

            {/* Orthodontics */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-center">
                <img 
                  src={(() => { try { return require('../assets/Dental Braces.png'); } catch { return require('../logo.svg'); } })()} 
                  alt={t('services.orthodontics.title')} 
                  className="w-20 h-20 mx-auto mb-4" 
                />
                <h3 className="text-xl font-semibold text-[#2C73D2] mb-2">
                  {t('services.orthodontics.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.orthodontics.description')}
                </p>
                <button className="mt-4 px-6 py-2 bg-[#2C73D2] text-white rounded-lg hover:bg-[#F4A300] transition">
                  {t('common.learnMore')}
                </button>
              </div>
            </div>

            {/* Cosmetic Dentistry */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-center">
                <img 
                  src={(() => { try { return require('../assets/Cosmetic Dentist.png'); } catch { return require('../logo.svg'); } })()} 
                  alt={t('services.cosmetic.title')} 
                  className="w-20 h-20 mx-auto mb-4" 
                />
                <h3 className="text-xl font-semibold text-[#2C73D2] mb-2">
                  {t('services.cosmetic.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.cosmetic.description')}
                </p>
                <button className="mt-4 px-6 py-2 bg-[#2C73D2] text-white rounded-lg hover:bg-[#F4A300] transition">
                  {t('common.learnMore')}
                </button>
              </div>
            </div>

            {/* Oral Surgery */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-center">
                <img 
                  src={(() => { try { return require('../assets/Oral Surgeon.png'); } catch { return require('../logo.svg'); } })()} 
                  alt={t('services.surgery.title')} 
                  className="w-20 h-20 mx-auto mb-4" 
                />
                <h3 className="text-xl font-semibold text-[#2C73D2] mb-2">
                  {t('services.surgery.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.surgery.description')}
                </p>
                <button className="mt-4 px-6 py-2 bg-[#2C73D2] text-white rounded-lg hover:bg-[#F4A300] transition">
                  {t('common.learnMore')}
                </button>
              </div>
            </div>

            {/* Pediatric Dentistry */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-center">
                <img 
                  src={(() => { try { return require('../assets/Children\'s Dentistry.png'); } catch { return require('../logo.svg'); } })()} 
                  alt={t('services.pediatric.title')} 
                  className="w-20 h-20 mx-auto mb-4" 
                />
                <h3 className="text-xl font-semibold text-[#2C73D2] mb-2">
                  {t('services.pediatric.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.pediatric.description')}
                </p>
                <button className="mt-4 px-6 py-2 bg-[#2C73D2] text-white rounded-lg hover:bg-[#F4A300] transition">
                  {t('common.learnMore')}
                </button>
              </div>
            </div>

            {/* Endodontics */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-center">
                <img 
                  src={(() => { try { return require('../assets/Endodontist.png'); } catch { return require('../logo.svg'); } })()} 
                  alt={t('services.endodontics.title')} 
                  className="w-20 h-20 mx-auto mb-4" 
                />
                <h3 className="text-xl font-semibold text-[#2C73D2] mb-2">
                  {t('services.endodontics.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.endodontics.description')}
                </p>
                <button className="mt-4 px-6 py-2 bg-[#2C73D2] text-white rounded-lg hover:bg-[#F4A300] transition">
                  {t('common.learnMore')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Completely Translated */}
      <section className="py-16 bg-[#2C73D2] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            {t('consultation.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('consultation.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#F4A300] text-white font-semibold rounded-lg hover:bg-orange-500 transition">
              {t('hero.cta')}
            </button>
            <button className="px-8 py-3 bg-white text-[#2C73D2] font-semibold rounded-lg hover:bg-gray-100 transition">
              {t('common.callNow')}
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section - Completely Translated */}
      <section className="py-16 bg-white">
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

      {/* Testimonials Section - Completely Translated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2C73D2] mb-12">
            {t('testimonials.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "{t('testimonials.review1')}"
              </p>
              <div className="font-semibold text-[#2C73D2]">- John Smith, USA</div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "{t('testimonials.review2')}"
              </p>
              <div className="font-semibold text-[#2C73D2]">- Maria Garcia, Spain</div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "{t('testimonials.review3')}"
              </p>
              <div className="font-semibold text-[#2C73D2]">- Ahmed Khan, UAE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Completely Translated Footer */}
      <TranslatedFooter />
    </div>
  );
};

export default FullyTranslatedDemo;
