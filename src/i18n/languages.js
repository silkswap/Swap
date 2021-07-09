import intl from 'react-intl-universal'
import zh from './zh'
import en from './en'

// 获取语言
export function getLanguage() {
  // const lang = (navigator.languages && navigator.languages[0]) || navigator.language
  // var newLang = lang.split('-')[0];
  const newLang = 'en'
  const localStorageLang = localStorage.getItem('lang')
  const defaultLang = localStorageLang || newLang
  return defaultLang
}

// 设置语言
export function setLanguage(lang) {
  if (lang) {
    localStorage.setItem('lang', JSON.stringify(lang))
    initIntl()
  }
}
export function initIntl() {
  intl.init({
    currentLocale: getLanguage(),
    locales: {
      zh,
      en,
    },
  })
}
