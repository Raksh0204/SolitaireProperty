export default function ThankYou() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6">
            <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-lg border border-gray-100">
                {/* Success Icon */}
                <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Thank You!
                </h1>

                <p className="text-gray-600 text-lg mb-3">
                    We've received your message successfully.
                </p>

                <p className="text-gray-500 mb-8">
                    Our team will connect with you soon to discuss your requirements.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/"
                        className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition shadow-lg hover:shadow-xl"
                    >
                        Back to Home
                    </a>

                    <a
                        href="/#services"
                        className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition"
                    >
                        View Services
                    </a>
                </div>

                {/* Additional Info */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-3">
                        Need immediate assistance?
                    </p>
                    <div className="flex flex-col gap-2 text-sm">
                        <a href="tel:+918904147299" className="text-teal-600 hover:text-teal-700 font-medium">
                            📞 +91 8904147299
                        </a>
                        <a href="mailto:solitairepm@gmail.com" className="text-teal-600 hover:text-teal-700 font-medium">
                            ✉️ solitairepm@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
