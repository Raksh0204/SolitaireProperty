import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solitaire Property Management - Premium Property Services',
  description: 'Your trusted partner for comprehensive property care and management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* HEADER - Dark background to match logo */}
        <header className="bg-gray-900 border-b border-gray-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Solitaire Property Management Logo"
                className="h-14 w-auto rounded-lg"
              />
              <h1 className="text-xl font-bold uppercase tracking-tight text-white">
                Solitaire Property Management
              </h1>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-teal-400 font-medium hover:text-teal-300 transition">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
              <Link href="/#services" className="text-gray-300 hover:text-white transition">Services</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-12 mt-20 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.jpg"
                  alt="Solitaire Property Management Logo"
                  className="h-12 w-auto rounded-lg"
                />
                <span className="font-bold text-lg">SOLITAIRE PROPERTY</span>
              </div>
              <p className="text-gray-400 text-sm">
                Premium property care and management services you can trust.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-teal-400">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-teal-400 transition">Home</a></li>
                <li><a href="/about" className="hover:text-teal-400 transition">About Us</a></li>
                <li><a href="/#services" className="hover:text-teal-400 transition">Services</a></li>
                <li><a href="/contact" className="hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-teal-400">Contact Us</h3>
              <p className="text-gray-400 mb-2">
                📞{' '}
                <a href="tel:+918904147299" className="hover:text-teal-400 transition">
                  +91 8904147299
                </a>
              </p>
              <p className="text-gray-400 mb-2">
                📞{' '}
                <a href="tel:+919876543210" className="hover:text-teal-400 transition">
                  +91 9876543210
                </a>
              </p>
              <p className="text-gray-400">
                ✉️{' '}
                <a
                  href="mailto:solitairepm@gmail.com"
                  className="hover:text-teal-400 transition"
                >
                  solitairepm@gmail.com
                </a>
              </p>
            </div>

          </div>

          <div className="text-center text-gray-500 text-sm mt-10 pt-8 border-t border-gray-800">
            © 2026 Solitaire Property Management. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  )
}
