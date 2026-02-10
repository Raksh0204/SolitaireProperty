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
        <h1 className="text-3xl font-bold">Service Not Found</h1>
        <p className="mt-4 text-gray-600">
          The service you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>

      <p className="text-gray-700 text-lg mb-8">
        {service.description}
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        What We Offer
      </h2>

      <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
        {service.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <div className="mt-12">
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition"
        >
          Contact Us for This Service
        </a>
      </div>
    </div>
  );
}
