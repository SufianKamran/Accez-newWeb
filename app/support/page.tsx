'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function SupportPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Support',
      subtitle: 'Need help? Submit a support ticket and our team will get back to you as soon as possible.',
      contactName: 'Contact Name',
      email: 'Email',
      phone: 'Phone',
      subject: 'Subject',
      description: 'Description',
      company: 'Company',
      submit: 'Submit Ticket',
      placeholders: {
        name: 'Your full name',
        email: 'your@email.com',
        phone: '+1 (555) 123-4567',
        subject: 'Brief summary of your issue',
        description: 'Please describe your issue in detail...',
        company: 'Your company name',
      },
    },
    ar: {
      title: 'الدعم',
      subtitle: 'هل تحتاج مساعدة؟ قدم تذكرة دعم وسيتواصل معك فريقنا في أقرب وقت ممكن.',
      contactName: 'اسم جهة الاتصال',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      subject: 'الموضوع',
      description: 'الوصف',
      company: 'الشركة',
      submit: 'إرسال التذكرة',
      placeholders: {
        name: 'اسمك الكامل',
        email: 'بريدك@الإلكتروني.com',
        phone: '+966 5X XXX XXXX',
        subject: 'ملخص موجز لمشكلتك',
        description: 'يرجى وصف مشكلتك بالتفصيل...',
        company: 'اسم شركتك',
      },
    },
  }

  const t = content[language]

  useEffect(() => {
    // Timestamp function for reCAPTCHA
    const timestamp = () => {
      const response = document.getElementById('g-recaptcha-response') as HTMLTextAreaElement | null
      if (response == null || response.value.trim() == '') {
        const captchaSettings = document.getElementsByName('captcha_settings')[0] as HTMLInputElement
        if (captchaSettings) {
          const elems = JSON.parse(captchaSettings.value)
          elems['ts'] = JSON.stringify(new Date().getTime())
          captchaSettings.value = JSON.stringify(elems)
        }
      }
    }

    const interval = setInterval(timestamp, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      <Script src="https://www.google.com/recaptcha/api.js" strategy="lazyOnload" />

      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t.title}
              </h1>
              <p className="text-lg text-gray-600">
                {t.subtitle}
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form
                action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00D41000002kA0p"
                method="POST"
                className="space-y-6"
              >
                {/* Hidden fields */}
                <input
                  type="hidden"
                  name="captcha_settings"
                  value='{"keyname":"AccezV2","fallback":"true","orgId":"00D41000002kA0p","ts":""}'
                />
                <input type="hidden" name="orgid" value="00D41000002kA0p" />
                <input type="hidden" name="retURL" value="https://accez.cloud/thankyou" />

                {/* Contact Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contactName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    maxLength={80}
                    name="name"
                    type="text"
                    required
                    placeholder={t.placeholders.name}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    maxLength={80}
                    name="email"
                    type="email"
                    required
                    placeholder={t.placeholders.email}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.phone}
                  </label>
                  <input
                    id="phone"
                    maxLength={40}
                    name="phone"
                    type="tel"
                    placeholder={t.placeholders.phone}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.company}
                  </label>
                  <input
                    id="company"
                    maxLength={80}
                    name="company"
                    type="text"
                    placeholder={t.placeholders.company}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.subject} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    maxLength={80}
                    name="subject"
                    type="text"
                    required
                    placeholder={t.placeholders.subject}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.description} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    placeholder={t.placeholders.description}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none text-gray-900 bg-white"
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LdtnJAqAAAAAJe1H98R4i-d0Ge3hiGZUTWS3btY"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {t.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
