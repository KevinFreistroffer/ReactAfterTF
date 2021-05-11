const i18nLanguageDetector = {
  name: 'myDetectorsName',

  lookup() {
    // options -> are passed in options
    return 'en';
  },
  cacheUserLanguage(lng: string) {
    // options -> are passed in options
    // lng -> current language, will be called after init and on changeLanguage
    // store it
  },
};

export default i18nLanguageDetector;
