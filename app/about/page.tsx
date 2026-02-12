import AboutSection from '../components/AboutSection';

export default function About() {
    return (
        <div className="min-h-screen">
            <AboutSection />

            {/* Additional CTA Section - DARK */}
            <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(245 158 11) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
                        <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Partner With Us</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-xl mb-8 text-gray-300">
                        Experience professional property management that puts your needs first
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold rounded-xl transition shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
}
