'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const content = {
    en: {
      // badge: 'Smart Property Management SaaS',
      title1: 'Enhance Property Management',
      title2: 'Through Smart SaaS Solutions',
      subtitle: 'Unified platform for booking management, rent collection, maintenance scheduling, and marketplace services',
      startTrial: 'Start Free Trial',
      watchDemo: 'Watch Demo',
      stat1: '400+',
      stat1Label: 'Integrated Channels',
      stat2: '30%',
      stat2Label: 'Revenue Increase',
      stat3: '24/7',
      stat3Label: 'Automated Operations',
    },
    ar: {
      badge: 'منصة SaaS ذكية لإدارة العقارات',
      title1: 'تعزيز إدارة العقارات',
      title2: 'من خلال حلول SaaS الذكية',
      subtitle: 'منصة موحدة لإدارة الحجوزات وتحصيل الإيجارات وجدولة الصيانة وخدمات السوق',
      startTrial: 'ابدأ التجربة المجانية',
      watchDemo: 'شاهد العرض التوضيحي',
      stat1: '+400',
      stat1Label: 'قناة متكاملة',
      stat2: '30%',
      stat2Label: 'زيادة في الإيرادات',
      stat3: '24/7',
      stat3Label: 'عمليات آلية',
    },
  }

  const t = content[language]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div
            className={`inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            {t.badge}
          </div> */}

          {/* Main heading */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {t.title1}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t.title2}
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              {t.startTrial}
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border border-gray-200">
              {t.watchDemo}
            </button>
          </div>

          {/* Stats */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">{t.stat1}</div>
              <div className="text-gray-600">{t.stat1Label}</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">{t.stat2}</div>
              <div className="text-gray-600">{t.stat2Label}</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">{t.stat3}</div>
              <div className="text-gray-600">{t.stat3Label}</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
