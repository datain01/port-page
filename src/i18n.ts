import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationKO from './locales/ko/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ko: {
    translation: translationKO
  }
};

i18n
  .use(initReactI18next) // react-i18next와 함께 i18next를 사용하도록 설정
  .init({
    resources,
    lng: "en", // 기본 언어 설정
    fallbackLng: "en", // 기본 언어를 찾을 수 없을 때 사용할 언어

    interpolation: {
      escapeValue: false // React에서는 필요 없음
    }
  });

export default i18n;
