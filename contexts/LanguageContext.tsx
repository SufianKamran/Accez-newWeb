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
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLanguage(savedLang)
    }
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
