import { useState, useEffect } from 'react'
import { changeLanguage } from '@i18n/i18n'
import './LanguageSwitcherStyles.scss'

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem('lang') || 'en'
  )

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang)
    localStorage.setItem('lang', lang)
    changeLanguage(lang)
  }

  useEffect(() => {
    changeLanguage(currentLang)
  }, [currentLang])

  return (
    <div className="LanguageSwitcher">
      <div className="LanguageSwitcher-wrapper">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`btn-lang ${currentLang === 'en' ? 'active' : ''}`}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange('ru')}
          className={`btn-lang ${currentLang === 'ru' ? 'active' : ''}`}
        >
          Русский
        </button>
      </div>
    </div>
  )
}

export default LanguageSwitcher
