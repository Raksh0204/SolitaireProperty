'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AboutSection from './components/AboutSection';

interface Service {
  id: string;
  title: string;
  icon: string;
  iconBg: string;
  shortDesc: string;
}

/* ---------------- HERO IMAGES ---------------- */

const heroImages = [
  '/images/hero/image1h.jpg',
  '/images/hero/image2h.jpg',
  '/images/hero/image3h.jpg',
  '/images/hero/image4h.jpg',
  '/images/hero/image5h.jpg',
];

/* ---------------- SERVICES ---------------- */

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

/* ---------------- HERO SLIDER COMPONENT ---------------- */

function HeroSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Where Property Meets Professional Management
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
          Expert handling of apartments, property transactions, events, and complete home transformations - all under one roof.
        </p>
      </div>
    </>
  );
}

/* ---------------- HOME PAGE ---------------- */

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center">
        <HeroSlider />
      </section>

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-white rounded-2xl p-8 border hover:border-teal-200 hover:shadow-xl transition"
              >
                <div
                  className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <span className="text-3xl">{service.icon}</span>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {service.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
