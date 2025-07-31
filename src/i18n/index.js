import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import hiTranslations from './locales/hi.json';
import esTranslations from './locales/es.json';
import frTranslations from './locales/fr.json';
import deTranslations from './locales/de.json';
import ptTranslations from './locales/pt.json';
import ruTranslations from './locales/ru.json';
import jaTranslations from './locales/ja.json';
import koTranslations from './locales/ko.json';
import zhTranslations from './locales/zh.json';
import arTranslations from './locales/ar.json';
import itTranslations from './locales/it.json';
import nlTranslations from './locales/nl.json';
import svTranslations from './locales/sv.json';
import noTranslations from './locales/no.json';
import daTranslations from './locales/da.json';
import fiTranslations from './locales/fi.json';
import plTranslations from './locales/pl.json';
import csPtTranslations from './locales/cs.json';
import huTranslations from './locales/hu.json';
import roTranslations from './locales/ro.json';
import bgTranslations from './locales/bg.json';
import hrTranslations from './locales/hr.json';
import skTranslations from './locales/sk.json';
import slTranslations from './locales/sl.json';
import etTranslations from './locales/et.json';
import lvTranslations from './locales/lv.json';
import ltTranslations from './locales/lt.json';
import ukTranslations from './locales/uk.json';
import beTranslations from './locales/be.json';
import srTranslations from './locales/sr.json';
import mkTranslations from './locales/mk.json';
import sqTranslations from './locales/sq.json';
import mtTranslations from './locales/mt.json';
import cyTranslations from './locales/cy.json';
import gaTranslations from './locales/ga.json';
import euTranslations from './locales/eu.json';
import caTranslations from './locales/ca.json';
import glTranslations from './locales/gl.json';
import trTranslations from './locales/tr.json';
import heTranslations from './locales/he.json';
import faTranslations from './locales/fa.json';
import urTranslations from './locales/ur.json';
import thTranslations from './locales/th.json';
import viTranslations from './locales/vi.json';
import idTranslations from './locales/id.json';
import msTranslations from './locales/ms.json';
import tlTranslations from './locales/tl.json';
import swTranslations from './locales/sw.json';
import amTranslations from './locales/am.json';
import bnTranslations from './locales/bn.json';
import guTranslations from './locales/gu.json';
import knTranslations from './locales/kn.json';
import mlTranslations from './locales/ml.json';
import mrTranslations from './locales/mr.json';
import orTranslations from './locales/or.json';
import paTranslations from './locales/pa.json';
import taTranslations from './locales/ta.json';
import teTranslations from './locales/te.json';
import asTranslations from './locales/as.json';
import bhoTranslations from './locales/bho.json';
import maiTranslations from './locales/mai.json';
import neTranslations from './locales/ne.json';
import siTranslations from './locales/si.json';

const resources = {
  en: { translation: enTranslations },
  hi: { translation: hiTranslations },
  es: { translation: esTranslations },
  fr: { translation: frTranslations },
  de: { translation: deTranslations },
  pt: { translation: ptTranslations },
  ru: { translation: ruTranslations },
  ja: { translation: jaTranslations },
  ko: { translation: koTranslations },
  zh: { translation: zhTranslations },
  ar: { translation: arTranslations },
  it: { translation: itTranslations },
  nl: { translation: nlTranslations },
  sv: { translation: svTranslations },
  no: { translation: noTranslations },
  da: { translation: daTranslations },
  fi: { translation: fiTranslations },
  pl: { translation: plTranslations },
  cs: { translation: csPtTranslations },
  hu: { translation: huTranslations },
  ro: { translation: roTranslations },
  bg: { translation: bgTranslations },
  hr: { translation: hrTranslations },
  sk: { translation: skTranslations },
  sl: { translation: slTranslations },
  et: { translation: etTranslations },
  lv: { translation: lvTranslations },
  lt: { translation: ltTranslations },
  uk: { translation: ukTranslations },
  be: { translation: beTranslations },
  sr: { translation: srTranslations },
  mk: { translation: mkTranslations },
  sq: { translation: sqTranslations },
  mt: { translation: mtTranslations },
  cy: { translation: cyTranslations },
  ga: { translation: gaTranslations },
  eu: { translation: euTranslations },
  ca: { translation: caTranslations },
  gl: { translation: glTranslations },
  tr: { translation: trTranslations },
  he: { translation: heTranslations },
  fa: { translation: faTranslations },
  ur: { translation: urTranslations },
  th: { translation: thTranslations },
  vi: { translation: viTranslations },
  id: { translation: idTranslations },
  ms: { translation: msTranslations },
  tl: { translation: tlTranslations },
  sw: { translation: swTranslations },
  am: { translation: amTranslations },
  bn: { translation: bnTranslations },
  gu: { translation: guTranslations },
  kn: { translation: knTranslations },
  ml: { translation: mlTranslations },
  mr: { translation: mrTranslations },
  or: { translation: orTranslations },
  pa: { translation: paTranslations },
  ta: { translation: taTranslations },
  te: { translation: teTranslations },
  as: { translation: asTranslations },
  bho: { translation: bhoTranslations },
  mai: { translation: maiTranslations },
  ne: { translation: neTranslations },
  si: { translation: siTranslations }
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'sl', name: 'Slovenščina', flag: '🇸🇮' },
  { code: 'et', name: 'Eesti', flag: '🇪🇪' },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
  { code: 'lt', name: 'Lietuvių', flag: '🇱🇹' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'be', name: 'Беларуская', flag: '🇧🇾' },
  { code: 'sr', name: 'Српски', flag: '🇷🇸' },
  { code: 'mk', name: 'Македонски', flag: '🇲🇰' },
  { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
  { code: 'mt', name: 'Malti', flag: '🇲🇹' },
  { code: 'cy', name: 'Cymraeg', flag: '🏴󐁧󐁢󐁷󐁬󐁳󐁿' },
  { code: 'ga', name: 'Gaeilge', flag: '🇮🇪' },
  { code: 'eu', name: 'Euskera', flag: '🏴󐁧󐁢󐁥󐁳󐁿' },
  { code: 'ca', name: 'Català', flag: '🏴󐁧󐁢󐁣󐁴󐁴󐁿' },
  { code: 'gl', name: 'Galego', flag: '🏴󐁧󐁢󐁧󐁬󐁣󐁿' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'tl', name: 'Filipino', flag: '🇵🇭' },
  { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
  { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'as', name: 'অসমীয়া', flag: '🇮🇳' },
  { code: 'bho', name: 'भोजपुरी', flag: '🇮🇳' },
  { code: 'mai', name: 'मैथिली', flag: '🇮🇳' },
  { code: 'ne', name: 'नेपाली', flag: '🇳🇵' },
  { code: 'si', name: 'සිංහල', flag: '🇱🇰' }
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
