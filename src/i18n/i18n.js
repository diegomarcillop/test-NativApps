import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

import {en} from './resources/en';
import {es} from './resources/es';

i18n
  .use(initReactI18next)
  .use(RNLanguageDetector)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {translation: en},
      es: {translation: es},
    },
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
