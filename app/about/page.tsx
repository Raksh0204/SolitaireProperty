import AboutSection from '../components/AboutSection';

export default function About() {
    return (
        <div className="min-h-screen">
            <AboutSection />

            {/* Additional CTA Section */}
            <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-xl mb-8 text-teal-100">
                        Experience professional property management that puts your needs first
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-10 py-4 bg-white text-teal-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
}
