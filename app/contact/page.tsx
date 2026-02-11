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
        <div className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

            {/* CONTACT FORM */}
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <input type="hidden" name="form-name" value="contact" />

                <input
                    name="name"
                    required
                    pattern="[A-Za-z\s]+"
                    title="Name should contain only alphabets"
                    className="w-full border p-3"
                    placeholder="Your Name"
                />

                <input
                    name="phone"
                    required
                    pattern="\d{10}"
                    title="Phone number must be exactly 10 digits"
                    className="w-full border p-3"
                    placeholder="Phone Number"
                />

                <input
                    name="email"
                    required
                    type="email"
                    className="w-full border p-3"
                    placeholder="Email Address"
                />

                <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full border p-3"
                    placeholder="Message"
                />

                <button
                    type="submit"
                    className="bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-700"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            {/* DIRECT CONTACT DETAILS */}
            <div className="mt-12 text-gray-700">
                <h2 className="text-2xl font-bold mb-4">Direct Contact</h2>

                <p className="mb-2">
                    📞{' '}
                    <a href="tel:+918904147299" className="text-teal-600">
                        +91 8904147299
                    </a>{' '}
                    /{' '}
                    <a href="tel:+919876543210" className="text-teal-600">
                        +91 9876543210
                    </a>
                </p>

                <p>
                    ✉️{' '}
                    <a
                        href="mailto:solitairepm@gmail.com"
                        className="text-teal-600 font-medium"
                    >
                        solitairepm@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}
