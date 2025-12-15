'use client'

import { useState } from 'react'

interface Feature {
  text: string
  highlight: boolean
  suffix?: string
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Basic',
      icon: 'check',
      monthly: {
        price: 10,
        originalPrice: 20,
        period: '/month',
        billingNote: 'Billed monthly',
      },
      yearly: {
        price: 120,
        originalPrice: 240,
        period: '/year',
        billingNote: 'Billed annually (save 50%)',
      },
      discount: '50% OFF Launch Discount',
      features: [
        { text: '3 Properties', highlight: true, suffix: ' (5 units each)' },
        { text: 'Property Management', highlight: false, suffix: '' },
        { text: 'Work Orders Management', highlight: false, suffix: '' },
        { text: 'Move-In/Out Tracking', highlight: false, suffix: '' },
        { text: 'Announcements', highlight: false, suffix: '' },
        { text: 'Document Library', highlight: false, suffix: '' },
        { text: 'Tenant Perks', highlight: false, suffix: '' },
        { text: 'Community News Feed', highlight: false, suffix: '' },
      ] as Feature[],
      popular: false,
      current: false,
    },
    {
      name: 'Professional',
      icon: 'star',
      monthly: {
        price: 40,
        originalPrice: 80,
        period: '/month',
        billingNote: 'Billed monthly',
      },
      yearly: {
        price: 480,
        originalPrice: 960,
        period: '/year',
        billingNote: 'Billed annually (save 50%)',
      },
      discount: '50% OFF Launch Discount',
      features: [
        { text: 'Everything in Basic', highlight: false, suffix: '' },
        { text: '6 Properties', highlight: true, suffix: ' (5 units each)' },
        { text: 'Integrated Communications', highlight: false, suffix: '' },
        { text: 'Amenities Booking', highlight: false, suffix: '' },
        { text: 'Services Management', highlight: false, suffix: '' },
        { text: 'Auto Calendar Sync (iCal)', highlight: false, suffix: '' },
        { text: 'Property Owner Portal', highlight: false, suffix: '' },
      ] as Feature[],
      popular: true,
      current: false,
    },
    {
      name: 'Enterprise',
      icon: 'building',
      monthly: {
        price: 'Custom',
        originalPrice: null,
        period: '',
        billingNote: 'Tailored to your needs',
      },
      yearly: {
        price: 'Custom',
        originalPrice: null,
        period: '',
        billingNote: 'Tailored to your needs',
      },
      discount: null,
      features: [
        { text: 'Everything in Professional', highlight: false, suffix: '' },
        { text: 'Custom Branded Domain', highlight: false, suffix: '' },
        { text: 'White-label Mobile App', highlight: false, suffix: '' },
        { text: 'Dedicated Account Manager', highlight: false, suffix: '' },
        { text: 'Priority 24/7 Support', highlight: false, suffix: '' },
        { text: 'API Access', highlight: false, suffix: '' },
        { text: 'Custom Development', highlight: false, suffix: '' },
        { text: 'Bulk Data Import', highlight: false, suffix: '' },
      ] as Feature[],
      popular: false,
      current: false,
    },
  ]

  const PlanIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'check':
        return (
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )
      case 'star':
        return (
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        )
      case 'building':
        return (
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Flexible Pricing for Every Portfolio Size
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start Your Free 14-Day Trial
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="inline-flex items-center bg-gray-900 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const pricing = isYearly ? plan.yearly : plan.monthly
            const isCustom = pricing.price === 'Custom'

            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-gray-900' : 'border border-gray-200'
                }`}
              >
                {/* Popular/Current Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-1 text-xs font-bold rounded-b-lg">
                    {isYearly ? 'POPULAR' : 'CURRENT'}
                  </div>
                )}

                <div className="p-8 pt-10 text-center">
                  {/* Plan Icon */}
                  <PlanIcon type={plan.icon} />

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {plan.name}
                  </h3>

                  {/* Pricing */}
                  <div className="mb-2">
                    {pricing.originalPrice && (
                      <div className="text-gray-400 line-through text-lg">
                        ${pricing.originalPrice}
                      </div>
                    )}
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {isCustom ? '' : '$'}{pricing.price}
                      </span>
                      {!isCustom && (
                        <span className="text-gray-500 ml-1">{pricing.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Discount Badge */}
                  {plan.discount && (
                    <div className="text-emerald-600 text-sm font-semibold mb-1">
                      {plan.discount}
                    </div>
                  )}

                  {/* Billing Note */}
                  <div className="text-gray-500 text-sm mb-6">
                    {pricing.billingNote}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {isCustom ? 'Contact Sales' : 'Start Free Trial'}
                  </button>

                  {/* Features */}
                  <div className="space-y-4 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          {feature.highlight ? (
                            <>
                              <strong>{feature.text}</strong>
                              {feature.suffix && <span>{feature.suffix}</span>}
                            </>
                          ) : (
                            feature.text
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
