interface ServiceContent {
  title: string;
  description: string;
  points: string[];
}

const services: Record<string, ServiceContent> = {
  'apartment-house-management': {
    title: 'Apartment & House Management',
    description:
      'We provide complete apartment and house management services to ensure smooth day-to-day operations, cleanliness, and safety for residents and owners.',
    points: [
      'Daily operational support and supervision',
      'Housekeeping and cleanliness coordination',
      'House Deep Cleaning and Maintenance',
      'Gardening and common area maintenance',
      'Waste management oversight',
      'Security coordination and monitoring',
    ],
  },

  'property-management': {
    title: 'Property Management',
    description:
      'We assist clients in buying and selling residential and commercial properties by providing professional guidance, coordination, and end-to-end transaction support.',
    points: [
      'Property buying assistance and consultation',
      'Property selling support and coordination',
      'Market guidance and property evaluation',
      'Documentation and process coordination',
      'Transparent and reliable transaction support',
    ],
  },

  'event-management': {
    title: 'Event Management',
    description:
      'We offer end-to-end event management services to ensure smooth planning and execution of community and private events.',
    points: [
      'Event planning and coordination',
      'Program organization',
      'Food and catering arrangements',
      'On-site event supervision',
      'Smooth and hassle-free execution',
    ],
  },

  'interior-home-makeover': {
    title: 'Interior & Home Makeover',
    description:
      'Our overall makeover services help transform houses into well-designed, functional, and beautiful living spaces.',
    points: [
      'Interior design consultation',
      'Complete home makeover solutions',
      'Space planning and optimization',
      'Execution and quality supervision',
      'End-to-end transformation support',
    ],
  },
};

export function generateStaticParams() {
  return [
    { id: 'apartment-house-management' },
    { id: 'property-management' },
    { id: 'event-management' },
    { id: 'interior-home-makeover' },
  ];
}

export default function ServicePage({
  params,
}: {
  params: { id: string };
}) {
  const service = services[params.id];

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 bg-white">
        <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl">
          <h1 className="text-3xl font-bold text-red-900 mb-4">Service Not Found</h1>
          <p className="text-red-700 mb-6">
            The service you are looking for does not exist.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - DARK */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(245 158 11) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <nav className="text-gray-400 mb-6 flex items-center gap-2 text-sm">
            <a href="/" className="hover:text-amber-500 transition">Home</a>
            <span>→</span>
            <a href="/#services" className="hover:text-amber-500 transition">Services</a>
            <span>→</span>
            <span className="text-amber-500">{service.title}</span>
          </nav>

          <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Premium Service</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>

          <p className="text-xl text-gray-300 max-w-3xl">
            {service.description}
          </p>
        </div>
      </div>

      {/* Content Section - LIGHT */}
      <div className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* What We Offer */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
              <span className="text-amber-600">✓</span>
              What We Offer
            </h2>

            <div className="grid gap-4">
              {service.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-amber-50 transition group border border-gray-100 hover:border-amber-200"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg pt-1">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose This Service */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200 hover:border-amber-400 transition shadow-md hover:shadow-lg group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-700 text-sm">
                Experienced professionals dedicated to excellence
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border-2 border-yellow-200 hover:border-yellow-400 transition shadow-md hover:shadow-lg group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-gray-700 text-sm">
                Prompt response and efficient execution
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200 hover:border-orange-400 transition shadow-md hover:shadow-lg group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-700 text-sm">
                Transparent and competitive rates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - DARK */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(245 158 11) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and get a customized solution for your needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold rounded-xl transition shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1"
              >
                Contact Us Now
              </a>

              <a
                href="tel:+918904147299"
                className="inline-block px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition border border-amber-500/30 hover:border-amber-500/50"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
