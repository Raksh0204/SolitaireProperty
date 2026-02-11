export default function ThankYou() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="bg-white p-10 rounded-xl shadow-md text-center max-w-lg">
                <h1 className="text-3xl font-bold mb-4 text-teal-600">
                    Thank You!
                </h1>
                <p className="text-gray-700 mb-6">
                    We have received your message. Our team will connect with you soon.
                </p>
                <a
                    href="/"
                    className="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
}
