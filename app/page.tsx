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
    iconBg: 'bg-gradient-to-br from-blue-100 to-blue-200',
    shortDesc:
      'Complete management of apartments and individual houses, ensuring cleanliness, safety, and smooth daily operations.',
  },
  {
    id: 'property-management',
    title: 'Property Management',
    icon: '🏢',
    iconBg: 'bg-gradient-to-br from-green-100 to-green-200',
    shortDesc:
      'Professional support for buying, selling, and managing property transactions with transparency and guidance.',
  },
  {
    id: 'event-management',
    title: 'Event Management',
    icon: '🎉',
    iconBg: 'bg-gradient-to-br from-purple-100 to-purple-200',
    shortDesc:
      'Professional event management services including program organization and food arrangements for seamless events.',
  },
  {
    id: 'interior-home-makeover',
    title: 'Interior & Home Makeover',
    icon: '🎨',
    iconBg: 'bg-gradient-to-br from-orange-100 to-orange-200',
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

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />

      {/* Text Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
          Where Property Meets <span className="text-teal-400">Professional Management</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8 animate-fadeIn">
          Expert handling of apartments, property transactions, events, and complete home transformations - all under one roof.
        </p>

        <div className="flex gap-4 animate-fadeIn">
          <a
            href="/#services"
            className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition border border-white/30"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all ${index === currentImage
                ? 'bg-teal-400 w-8'
                : 'bg-white/50 w-2 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-teal-600">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive property management solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-teal-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl">{service.icon}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {service.shortDesc}
                </p>

                <div className="flex items-center text-teal-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-teal-400">Solitaire</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We combine traditional responsibility with modern execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Professional Excellence</h3>
              <p className="text-gray-300">
                Expert team dedicated to delivering top-notch property management services with attention to detail.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Trusted Partnership</h3>
              <p className="text-gray-300">
                We manage your property as if it were our own, with reliability, transparency, and genuine care.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Solutions</h3>
              <p className="text-gray-300">
                One-stop solution for all your property needs - from daily management to complete transformations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Let us help you manage your property with professional care and expertise
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-white text-teal-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
