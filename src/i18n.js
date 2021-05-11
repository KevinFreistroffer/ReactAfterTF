import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nLanguageDetector from './i18n.languageDetector';

const languageDetector = new LanguageDetector();
languageDetector.addDetector(i18nLanguageDetector)
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(languageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    detection: {
      order: [ 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      lookupCookie: 'LANG_CODE',
      lookupLocalStorage: 'LANG_CODE',
      lookupSessionStorage: 'LANG_CODE',
      caches: ['cookie', 'localStorage'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
    
    
      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement,
    
      // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
      cookieOptions: { path: '/', sameSite: 'strict' }
    }
  });


export default i18n;