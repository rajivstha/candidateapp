import I18n from 'react-native-i18n';
import en from './en';
import np from './np';

I18n.fallbacks = true;

I18n.translations = {
  en,
  np
};

export default I18n;