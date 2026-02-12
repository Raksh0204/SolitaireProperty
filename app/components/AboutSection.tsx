export default function AboutSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-teal-600">Us</span>
                    </h2>
                    <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
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

                        <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl">
                            <p className="text-gray-800 font-medium italic">
                                "We believe that a well-managed space creates a better living experience, and that's exactly what we deliver."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Key Points */}
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">🏠</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Property Excellence</h3>
                                    <p className="text-gray-600">
                                        Beyond property and home management, we provide end-to-end event
                                        management services, ensuring every program runs seamlessly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">✨</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Complete Transformations</h3>
                                    <p className="text-gray-600">
                                        We offer interior and overall home makeovers, helping transform
                                        houses into well-designed, functional, and beautiful living spaces.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">💼</div>
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
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
                        <div className="text-gray-600 font-medium">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
                        <div className="text-gray-600 font-medium">Support Available</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="text-4xl font-bold text-teal-600 mb-2">4+</div>
                        <div className="text-gray-600 font-medium">Core Services</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="text-4xl font-bold text-teal-600 mb-2">∞</div>
                        <div className="text-gray-600 font-medium">Trust & Care</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
