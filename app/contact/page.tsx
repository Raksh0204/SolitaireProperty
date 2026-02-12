'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);

        const form = event.target;
        const data = new FormData(form);

        await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data as any).toString(),
        });

        router.push('/thank-you');
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-teal-600">Touch</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Have a question or need our services? We're here to help you with all your property management needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* CONTACT FORM */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>

                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    name="name"
                                    required
                                    pattern="[A-Za-z\s]+"
                                    title="Name should contain only alphabets"
                                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-teal-500 focus:outline-none transition"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    name="phone"
                                    required
                                    pattern="\d{10}"
                                    title="Phone number must be exactly 10 digits"
                                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-teal-500 focus:outline-none transition"
                                    placeholder="10-digit mobile number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    name="email"
                                    required
                                    type="email"
                                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-teal-500 focus:outline-none transition"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-teal-500 focus:outline-none transition resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl shadow-xl p-8 text-white">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 rounded-lg p-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Phone Numbers</h3>
                                        <p className="text-teal-100">
                                            <a href="tel:+918904147299" className="hover:text-white transition">
                                                +91 8904147299
                                            </a>
                                        </p>
                                        <p className="text-teal-100">
                                            <a href="tel:+919876543210" className="hover:text-white transition">
                                                +91 9876543210
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 rounded-lg p-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Email</h3>
                                        <a
                                            href="mailto:solitairepm@gmail.com"
                                            className="text-teal-100 hover:text-white transition break-all"
                                        >
                                            solitairepm@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 rounded-lg p-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Business Hours</h3>
                                        <p className="text-teal-100">Monday - Saturday</p>
                                        <p className="text-teal-100">9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Info Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center">
                                <div className="text-3xl mb-2">⚡</div>
                                <div className="font-semibold text-gray-900">Quick Response</div>
                                <div className="text-sm text-gray-600 mt-1">Within 24 hours</div>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center">
                                <div className="text-3xl mb-2">🤝</div>
                                <div className="font-semibold text-gray-900">Free Consultation</div>
                                <div className="text-sm text-gray-600 mt-1">No obligations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
