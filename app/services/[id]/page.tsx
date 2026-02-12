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
      <div className="max-w-4xl mx-auto px-6 py-20">
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-teal-100 mb-6 flex items-center gap-2 text-sm">
            <a href="/" className="hover:text-white transition">Home</a>
            <span>→</span>
            <a href="/#services" className="hover:text-white transition">Services</a>
            <span>→</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>

          <p className="text-xl text-teal-100 max-w-3xl">
            {service.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* What We Offer */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
            <span className="text-teal-600">✓</span>
            What We Offer
          </h2>

          <div className="grid gap-4">
            {service.points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-teal-50 transition group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold group-hover:bg-teal-500 group-hover:text-white transition">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-lg pt-1">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose This Service */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-gray-700 text-sm">
              Experienced professionals dedicated to excellence
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Quick Service</h3>
            <p className="text-gray-700 text-sm">
              Prompt response and efficient execution
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-gray-900 mb-2">Fair Pricing</h3>
            <p className="text-gray-700 text-sm">
              Transparent and competitive rates
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a customized solution for your needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-teal-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us Now
            </a>

            <a
              href="tel:+918904147299"
              className="inline-block px-10 py-4 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-400 transition border-2 border-white/30"
            >
              📞 Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
