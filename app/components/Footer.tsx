'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <img
              src="https://static.readdy.ai/image/a74396dc2a8ffe0cd229d1e48a84a3ac/ad6010ee28855d5ffb906867a9043050.png"
              alt="T&P Logo"
              className="h-16 mb-4"
            />
            <p className="text-gray-200 text-sm">
              T&P Professional Services, your trusted partner in tax preparation, planning, and financial support.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li><Link href="/" className="hover:text-amber-400">Home</Link></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-400">Services</button></li>
              <li><Link href="/pricing" className="hover:text-amber-400">Pricing</Link></li>
              <li><Link href="/tax-forms" className="hover:text-amber-400">Tax Forms</Link></li>
              <li><Link href="/about" className="hover:text-amber-400">About</Link></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-400">Contact</button></li>
              <li>
                <a
                  href="https://outlook.office.com/book/TorresPService@torresptp.com/?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Email: <a href="mailto:info@torresptp.com" className="hover:text-amber-400">info@torresptp.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-amber-400">(123) 456-7890</a></li>
              <li>Location: Allentown, PA (Virtual & Local Services)</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-700 pt-6 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} T&P Professional Services LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
