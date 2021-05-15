import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nLanguageDetector from './i18n.languageDetector';
import Cookie from 'js-cookie';
// import { getLangCode } from '../src/utility/getLangCode';

const languageDetector = new LanguageDetector();
languageDetector.addDetector(i18nLanguageDetector)
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(languageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({  
    lng: window.localStorage.getItem('LANG_CODE') || Cookie.get('LANG_CODE'),
    //load: "currentOnly",
    //allbackLng: 'en',
    //preload: ['en'],
    supportedLngs: ['en', 'de', 'es', 'fr', 'zh', 'zh-CN', 'zh-TW'],
    debug: true,
    detection: {
      order: [ 'localStorage', 'cookie'],
      lookupCookie: 'LANG_CODE',
      lookupLocalStorage: 'LANG_CODE',
      lowerCaseLng: true,
      whitelist: ['en', 'de', 'es', 'fr', 'zh-cn', 'zh-tw'],
      //caches: [ 'localStorage', 'cookie'],  
      // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
      //cookieOptions: { path: '/', sameSite: 'strict' }
    },
    react: {
      //wait: true,
      useSuspense: true
    }
  });


export default i18n;