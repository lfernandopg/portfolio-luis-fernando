import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation';
import esTranslation from './locales/es/translation';

// Detectar idioma del navegador
const savedLang = localStorage.getItem('i18nextLng'); // idioma guardado
const browserLang = navigator.language || navigator.userLanguage; // ejemplo: "es-ES"
const language = savedLang || (browserLang.startsWith('es') ? 'es' : 'en');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    lng: language, // idioma inicial
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

// Función para cambiar idioma y guardarlo
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem('i18nextLng', lng);
};

export default i18n;