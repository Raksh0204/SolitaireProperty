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
      <body className="bg-white text-gray-100">
        {/* HEADER - Dark with Amber accents */}
        <header className="bg-black border-b border-amber-900/30 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src="/logo.jpg"
                alt="Solitaire Property Management Logo"
                className="h-14 w-auto rounded-lg shadow-lg"
              />
              <div>
                <h1 className="text-xl font-bold uppercase tracking-tight text-amber-500">
                  Solitaire
                </h1>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Property Management</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-amber-500 font-medium hover:text-amber-400 transition">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-amber-500 transition">
                About
              </Link>
              <Link href="/#services" className="text-gray-400 hover:text-amber-500 transition">
                Services
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-amber-500 transition">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-black text-gray-300 py-12 mt-20 border-t border-amber-900/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.jpg"
                  alt="Solitaire Property Management Logo"
                  className="h-12 w-auto rounded-lg"
                />
                <div>
                  <span className="font-bold text-lg text-amber-500">SOLITAIRE</span>
                  <p className="text-xs text-gray-500 uppercase">Property Management</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Premium property care and management services you can trust.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-amber-500">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-amber-500 transition">Home</a></li>
                <li><a href="/about" className="hover:text-amber-500 transition">About Us</a></li>
                <li><a href="/#services" className="hover:text-amber-500 transition">Services</a></li>
                <li><a href="/contact" className="hover:text-amber-500 transition">Contact</a></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-amber-500">Contact Us</h3>
              <p className="text-gray-400 mb-2">
                📞{' '}
                <a href="tel:+918904147299" className="hover:text-amber-500 transition">
                  +91 8904147299
                </a>
              </p>
              <p className="text-gray-400 mb-2">
                📞{' '}
                <a href="tel:+919876543210" className="hover:text-amber-500 transition">
                  +91 9876543210
                </a>
              </p>
              <p className="text-gray-400">
                ✉️{' '}
                <a
                  href="mailto:solitairepm@gmail.com"
                  className="hover:text-amber-500 transition"
                >
                  solitairepm@gmail.com
                </a>
              </p>
            </div>

          </div>

          <div className="text-center text-gray-600 text-sm mt-10 pt-8 border-t border-gray-800">
            © 2026 Solitaire Property Management. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  )
}
