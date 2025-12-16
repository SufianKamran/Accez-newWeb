'use client'

import { useState } from 'react'
import Script from 'next/script'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is Accez.cloud and how does it work?',
      answer: 'Accez.cloud is a unified property management SaaS platform that streamlines operations for property managers, landlords, and HOAs. It integrates booking management across 400+ channels (Airbnb, Booking.com, Expedia), automated rent collection, maintenance scheduling, and a service marketplace to generate additional revenue.',
    },
    {
      question: 'How much does Accez.cloud cost?',
      answer: 'We offer flexible pricing plans starting from $10/month for the Basic plan (3 properties with 5 units each). Our Professional plan is $40/month (6 properties with 5 units each), and we offer custom Enterprise solutions for larger portfolios. All plans include a 14-day free trial with no credit card required.',
    },
    {
      question: 'Which booking platforms does Accez.cloud integrate with?',
      answer: 'Accez.cloud integrates with 400+ channels including major platforms like Airbnb, Booking.com, Expedia, VRBO, HomeAway, and many more. This allows you to manage all your bookings from a single centralized dashboard.',
    },
    {
      question: 'How can I earn additional revenue with the service marketplace?',
      answer: 'Our service marketplace connects property owners with local service providers for cleaning, maintenance, repairs, and other services. Property managers can earn 15-30% commission on every transaction, creating a new revenue stream within the first year.',
    },
    {
      question: 'Is my property and tenant data secure?',
      answer: 'Yes, security is our top priority. All data is encrypted in transit and at rest. We are GDPR compliant and follow industry best practices for data protection. Enterprise plans include additional security features and on-premise deployment options.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time with no cancellation fees or penalties. If you cancel during your 14-day trial period, you will not be charged. We also offer a 30-day money-back guarantee.',
    },
  ]

  // Generate JSON-LD structured data for FAQ
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Accez AI
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Contact Support
            </button>
          </div> */}
        </div>
      </section>
    </>
  )
}
