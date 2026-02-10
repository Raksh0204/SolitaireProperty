'use client';

import Link from 'next/link';
import AboutSection from './components/AboutSection';

interface Service {
  id: string;
  title: string;
  icon: string;
  iconBg: string;
  shortDesc: string;
}

const services: Service[] = [
  {
    id: 'apartment-house-management',
    title: 'Apartment & House Management',
    icon: '🏘️',
    iconBg: 'bg-blue-100',
    shortDesc:
      'Complete management of apartments and individual houses, ensuring cleanliness, safety, and smooth daily operations.',
  },
  {
    id: 'property-management',
    title: 'Property Management',
    icon: '🏢',
    iconBg: 'bg-green-100',
    shortDesc:
      'Professional support for buying, selling, and managing property transactions with transparency and guidance.',
  },
  {
    id: 'event-management',
    title: 'Event Management',
    icon: '🎉',
    iconBg: 'bg-purple-100',
    shortDesc:
      'Professional event management services including program organization and food arrangements for seamless events.',
  },
  {
    id: 'interior-home-makeover',
    title: 'Interior & Home Makeover',
    icon: '🎨',
    iconBg: 'bg-orange-100',
    shortDesc:
      'Interior design and complete home makeover services to transform spaces into functional and beautiful homes.',
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Professional Services That Drive{' '}
            <span className="text-teal-600">Business Growth</span>
          </h2>

          <p className="text-xl text-gray-600 mb-10">
            Reliable, transparent, and premium property management
            solutions tailored to modern needs.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#services"
              className="px-8 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition"
            >
              View Services
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <AboutSection />

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-white rounded-2xl p-8 border hover:border-teal-200 hover:shadow-xl transition"
              >
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
