import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import ES_US from "./locales/EN_US/translation.json";
import PT_BR from "./locales/PT_BR/translation.json";

// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const languages = ["EN-US", "PT-BR"];
const resources = {
  EN_US: {
    translation: ES_US
  },
  PT_BR: {
    translation: PT_BR
  }
};

i18n
  /*
     load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
     learn more: https://github.com/i18next/i18next-http-backend
    */
  .use(Backend)
  /*
     detect user language
     learn more: https://github.com/i18next/i18next-browser-languageDetector
    */
  .use(LanguageDetector)
  /*
     pass the i18n instance to react-i18next.
    */
  .use(initReactI18next)
  /*
     init i18next
     for all options read: https://www.i18next.com/overview/configuration-options
    */
  .init({
    resources,
    lng: "EN_US",
    fallbackLng: "EN_US", // use et if detected lng is not available
    saveMissing: true, // send not translated keys to endpoint
    debug: false,
    whitelist: languages,

    // backend: {
    //     // for all available options read the backend's repository readme file
    //     loadPath: '/locales/{{lng}}/{{ns}}.json'
    // },

    react: {
      useSuspense: false
    }
  });

export default i18n;