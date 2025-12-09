'use client'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for small property managers',
      price: 10,
      originalPrice: null,
      discount: null,
      currency: '$',
      period: '/month',
      features: [
        'Access for Admins, Managers, and Tenants',
        '3 Properties (5 units each)',
        'Booking Management',
        'Maintenance Scheduling',
        'Reports & Analytics',
        'Property Feeds Display',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For growing portfolios',
      price: 40,
      originalPrice: null,
      discount: null,
      currency: '$',
      period: '/month',
      features: [
        'Everything in Basic, plus:',
        '6 Properties (5 units each)',
        'Integrated Communications',
        'Online Payments',
        'Multi-platform Calendar Sync',
        'Services Booking',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large property portfolios',
      price: 'Custom',
      originalPrice: null,
      discount: null,
      currency: '',
      period: '',
      features: [
        'Everything in Professional, plus:',
        'Custom Branded Domain',
        'White-label Mobile App',
        'Priority 24/7 Support',
        'Bulk Data Import',
        'Custom Development',
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Flexible Pricing for Every Portfolio Size
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start Your Free 14-Day Trial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                  MOST POPULAR
                </div>
              )}

              {plan.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Save {plan.discount}%
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.originalPrice && (
                    <div className="text-gray-400 line-through text-lg mb-1">
                      {plan.currency}{plan.originalPrice}
                    </div>
                  )}
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      {typeof plan.price === 'number' ? plan.currency : ''}{plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
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
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
