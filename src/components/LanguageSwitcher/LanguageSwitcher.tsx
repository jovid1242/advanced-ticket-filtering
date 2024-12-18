import { useState, useEffect } from 'react'
import { changeLanguage } from '@i18n/i18n'

import './LanguageSwitcherStyles.scss'
import Button from '@components/Button'

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
        <Button
          onClick={() => handleLanguageChange('en')}
          label="English"
          active={currentLang === 'en'}
        />
        <Button
          onClick={() => handleLanguageChange('ru')}
          label="Русский"
          active={currentLang === 'ru'}
        />
      </div>
    </div>
  )
}

export default LanguageSwitcher
