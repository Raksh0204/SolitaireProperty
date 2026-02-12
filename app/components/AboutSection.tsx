export default function AboutSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
                        <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Solitaire</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <div className="space-y-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            <span className="font-semibold text-gray-900">Solitaire Property Management</span> is a one-stop solution for complete
                            property care and management. We specialize in managing apartments,
                            individual houses, and properties with a strong focus on cleanliness,
                            safety, and smooth day-to-day operations.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Our team handles everything from deep cleaning, housekeeping,
                            gardening, waste management, and security services to ensure homes
                            and communities are well maintained and comfortable.
                        </p>

                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-md">
                            <p className="text-gray-800 font-medium italic">
                                "We believe that a well-managed space creates a better living experience, and that's exactly what we deliver."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Key Points */}
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500 hover:shadow-lg transition group">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl group-hover:scale-110 transition-transform">🏠</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Property Excellence</h3>
                                    <p className="text-gray-600">
                                        Beyond property and home management, we provide end-to-end event
                                        management services, ensuring every program runs seamlessly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition group">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl group-hover:scale-110 transition-transform">✨</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Complete Transformations</h3>
                                    <p className="text-gray-600">
                                        We offer interior and overall home makeovers, helping transform
                                        houses into well-designed, functional, and beautiful living spaces.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600 hover:shadow-lg transition group">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl group-hover:scale-110 transition-transform">💼</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Our Commitment</h3>
                                    <p className="text-gray-600">
                                        We combine traditional responsibility with modern execution,
                                        managing your property with reliability, transparency, and care.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats/Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-amber-100 hover:border-amber-300 group">
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 mb-2 group-hover:scale-110 transition-transform">100%</div>
                        <div className="text-gray-600 font-medium">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-amber-100 hover:border-amber-300 group">
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 mb-2 group-hover:scale-110 transition-transform">24/7</div>
                        <div className="text-gray-600 font-medium">Support Available</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-amber-100 hover:border-amber-300 group">
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 mb-2 group-hover:scale-110 transition-transform">4+</div>
                        <div className="text-gray-600 font-medium">Core Services</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-amber-100 hover:border-amber-300 group">
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 mb-2 group-hover:scale-110 transition-transform">∞</div>
                        <div className="text-gray-600 font-medium">Trust & Care</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
