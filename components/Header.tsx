'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { name: t.header.features, href: '#features' },
    { name: t.header.pricing, href: '#pricing' },
    { name: t.header.faq, href: '#faq' },
    { name: t.header.blog, href: '/blog' },
    { name: t.header.support, href: '/support' },
    { name: t.header.contact, href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900">
            <Image src="/images/accez-logo.png" alt="Accez Logo" width={32} height={32} className="rounded-lg" />
            Accez.cloud
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side - Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>

            <Link
              href="#pricing"
              className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
            >
              {t.header.startFreeTrial}
            </Link>
          </div>

          {/* Mobile - Language Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Switcher - Mobile Header */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="p-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              {language === 'en' ? 'العربية' : 'EN'}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}

              <Link
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 text-center mt-2"
              >
                {t.header.startFreeTrial}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
