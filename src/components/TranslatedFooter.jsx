import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TranslatedFooter = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              {t('meta.title')}
            </h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                {t('footer.followUs')}
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/clinics" className="text-gray-300 hover:text-white transition">
                  {t('nav.clinics')}
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white transition">
                  {t('nav.shop')}
                </Link>
              </li>
              <li>
                <Link to="/consult" className="text-gray-300 hover:text-white transition">
                  {t('nav.consultation')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-300">{t('services.implants.title')}</li>
              <li className="text-gray-300">{t('services.orthodontics.title')}</li>
              <li className="text-gray-300">{t('services.cosmetic.title')}</li>
              <li className="text-gray-300">{t('services.surgery.title')}</li>
              <li className="text-gray-300">{t('services.pediatric.title')}</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {t('meta.title')}. {t('footer.rights')}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4 text-orange-400">
            {t('footer.contact')}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h5 className="font-semibold text-white">{t('contact.phone')}</h5>
              <p className="text-gray-300">+91 9999999999</p>
            </div>
            <div>
              <h5 className="font-semibold text-white">{t('contact.email')}</h5>
              <p className="text-gray-300">info@dentaltourismclinicsindia.com</p>
            </div>
            <div>
              <h5 className="font-semibold text-white">{t('contact.hours')}</h5>
              <p className="text-gray-300">24/7 {t('common.available')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TranslatedFooter;
