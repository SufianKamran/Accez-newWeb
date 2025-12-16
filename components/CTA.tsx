'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              {t.cta.startFreeTrial}
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200">
              {t.cta.scheduleDemo}
            </button>
          </div>

          <p className="text-blue-100 mt-6 text-sm">
            {t.cta.trialNote}
          </p>
        </div>
      </div>
    </section>
  )
}
