export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

            {/* CONTACT FORM (Netlify Forms) */}
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-4"
            >
                <input type="hidden" name="form-name" value="contact" />

                <input
                    name="name"
                    required
                    className="w-full border p-3"
                    placeholder="Your Name"
                />

                <input
                    name="phone"
                    required
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
                    Send Message
                </button>
            </form>

            {/* DIRECT CONTACT DETAILS */}
            <h2 className="text-4xl font-bold mb-8 text-center">
                Contact Us
            </h2>
            <div className="mt-10 text-gray-700">
                <p className="mb-2">
                    📞 Phones:{' '}
                    <a href="tel:+918904147299" className="text-teal-600">+91 8904147299</a>
                    {' / '}
                    <a href="tel:+919876543210" className="text-teal-600">+91 9876543210</a>
                </p>

                <p>
                    ✉️ Email:{' '}
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
