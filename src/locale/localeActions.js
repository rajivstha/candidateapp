export const CHANGE_LOCALE = 'CHANGE_LOCALE';

export function changeLocale(locale) {
  return {
    type: CHANGE_LOCALE,
    locale
  };
}