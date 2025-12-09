'use client'

export default function Features() {
  const features = [
    {
      icon: '🏢',
      title: 'Multi-Channel Booking',
      description: 'Centralized management across 400+ channels including Airbnb, Booking.com, Expedia, and more.',
    },
    {
      icon: '💳',
      title: 'Automated Rent Collection',
      description: 'Streamline payment processing with automated rent collection and secure transaction handling.',
    },
    {
      icon: '🛠️',
      title: 'Maintenance Scheduling',
      description: 'Efficiently manage property maintenance with automated scheduling and service provider coordination.',
    },
    {
      icon: '🏪',
      title: 'Service Marketplace',
      description: 'Generate 15-30% additional revenue through commission-based local service marketplace.',
    },
    {
      icon: '📊',
      title: 'Multi-Property Analytics',
      description: 'Comprehensive dashboards tracking performance, occupancy rates, and revenue across all properties.',
    },
    {
      icon: '📱',
      title: 'Custom Branded Apps',
      description: 'White-label mobile apps and websites with your branding for seamless tenant experience.',
    },
  ]

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Property Management Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline operations and maximize property revenue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
