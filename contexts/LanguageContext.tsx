'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Language, Translations } from '@/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const detectLanguage = async () => {
      // Check localStorage for saved language preference first
      const savedLang = localStorage.getItem('language') as Language
      if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
        setLanguage(savedLang)
        return
      }

      // If no saved preference, detect country by IP
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()

        // Set Arabic for Saudi Arabia (SA) and other Arabic-speaking countries
        const arabicCountries = ['SA', 'AE', 'KW', 'QA', 'BH', 'OM', 'EG', 'JO', 'LB', 'IQ']
        if (arabicCountries.includes(data.country_code)) {
          setLanguage('ar')
        }
      } catch (error) {
        // If geolocation fails, keep default English
        console.log('Could not detect location, defaulting to English')
      }
    }

    detectLanguage()
  }, [])

  useEffect(() => {
    // Save language preference
    localStorage.setItem('language', language)
    // Update document direction
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const value = {
    language,
    setLanguage,
    t: translations[language],
    isRTL: language === 'ar',
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
