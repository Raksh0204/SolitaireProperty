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
    iconBg: 'bg-gradient-to-br from-amber-500/20 to-amber-600/20',
    shortDesc:
      'Complete management of apartments and individual houses, ensuring cleanliness, safety, and smooth daily operations.',
  },
  {
    id: 'property-management',
    title: 'Property Management',
    icon: '🏢',
    iconBg: 'bg-gradient-to-br from-orange-500/20 to-orange-600/20',
    shortDesc:
      'Professional support for buying, selling, and managing property transactions with transparency and guidance.',
  },
  {
    id: 'event-management',
    title: 'Event Management',
    icon: '🎉',
    iconBg: 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/20',
    shortDesc:
      'Professional event management services including program organization and food arrangements for seamless events.',
  },
  {
    id: 'interior-home-makeover',
    title: 'Interior & Home Makeover',
    icon: '🎨',
    iconBg: 'bg-gradient-to-br from-amber-400/20 to-amber-700/20',
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Text Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
        <div className="inline-block mb-4 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Premium Property Solutions</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fadeIn">
          Where Property Meets{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Excellence
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 animate-fadeIn">
          Expert handling of apartments, property transactions, events, and complete home transformations - all under one roof.
        </p>

        <div className="flex gap-4 animate-fadeIn">
          <a
            href="/#services"
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold rounded-xl transition shadow-lg hover:shadow-amber-500/50 transform hover:-translate-y-1"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition border border-amber-500/30 hover:border-amber-500/50"
          >
            Get in Touch
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
              ? 'bg-amber-500 w-8'
              : 'bg-white/30 w-2 hover:bg-white/60'
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
      {/* HERO SECTION - DARK */}
      <section className="relative h-[85vh] flex items-center bg-black">
        <HeroSlider />
      </section>

      {/* ABOUT SECTION - LIGHT */}
      <AboutSection />

      {/* SERVICES SECTION - DARK */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive property management solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-gray-800 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-16 h-16 ${service.iconBg} border border-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl">{service.icon}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-500 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {service.shortDesc}
                </p>

                <div className="flex items-center text-amber-500 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION - LIGHT */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Solitaire</span> Difference
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We combine traditional responsibility with modern execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-amber-500 shadow-lg hover:shadow-xl transition group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Excellence</h3>
              <p className="text-gray-600">
                Expert team dedicated to delivering top-notch property management services with attention to detail.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-amber-500 shadow-lg hover:shadow-xl transition group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Trusted Partnership</h3>
              <p className="text-gray-600">
                We manage your property as if it were our own, with reliability, transparency, and genuine care.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-amber-500 shadow-lg hover:shadow-xl transition group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comprehensive Solutions</h3>
              <p className="text-gray-600">
                One-stop solution for all your property needs - from daily management to complete transformations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - DARK */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(245 158 11) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Get Started Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let us help you manage your property with professional care and expertise
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold rounded-xl transition shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
