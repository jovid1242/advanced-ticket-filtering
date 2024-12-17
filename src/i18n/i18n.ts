import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '@locales/en.json'
import ru from '@locales/ru.json'

const savedLang = localStorage.getItem('lang') || 'en'

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
})

export const changeLanguage = (lang: string) => {
  i18n.changeLanguage(lang)
  localStorage.setItem('lang', lang)
}

export default i18n
