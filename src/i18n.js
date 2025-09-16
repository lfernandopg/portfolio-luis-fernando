import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Importa tus archivos de traducción aquí
import enTranslation from './locales/en/translation';
import esTranslation from './locales/es/translation';

i18n
  .use(initReactI18next) // Pasa i18n a react-i18next.
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de respaldo si la traducción no está disponible

    interpolation: {
      escapeValue: false, // React ya escapa los valores por defecto
    },
  });

export default i18n;