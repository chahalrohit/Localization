import * as RNLocalize from 'react-native-localize';
import I18n from 'i18n-js';
import en from './en';
import da from './da';
import hi from './hi';

const locales = RNLocalize.getLocales();
if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.translations = {
  default: da,
  'en-US': en,
  en,
  da,
  hi,
};

I18n.fallbacks = true;
export default I18n;
