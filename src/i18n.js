import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation';
import esTranslation from './locales/es/translation';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    fallbackLng: 'en', // Idioma por defecto si no se detecta
    detection: {
      // Orden de prioridad para detectar el idioma
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      // Nombre de la clave en localStorage
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;