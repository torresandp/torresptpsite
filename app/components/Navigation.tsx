'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // For hamburger icons

export default function Navigation() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu on mobile
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://static.readdy.ai/image/a74396dc2a8ffe0cd229d1e48a84a3ac/ad6010ee28855d5ffb906867a9043050.png"
              alt="T&P Professional Services"
              className="h-14 cursor-pointer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="nav-link">Home</Link>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <Link href="/pricing" className="nav-link">Pricing</Link>
            <Link href="/tax-forms" className="nav-link">Tax Forms</Link>
            <Link href="/about" className="nav-link">About</Link>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-amber-600">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Book Button (Always visible) */}
          <div className="hidden md:block ml-4">
            <button
              onClick={() =>
                window.location.href =
                  'https://outlook.office.com/book/TorresPService@torresptp.com/?ismsaljsauthenabled'
              }
              className="whitespace-nowrap bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-6 space-y-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block text-lg font-medium text-gray-800">Home</Link>
          <button onClick={() => scrollToSection('services')} className="block text-lg font-medium text-gray-800">Services</button>
          <Link href="/pricing" onClick={() => setMenuOpen(false)} className="block text-lg font-medium text-gray-800">Pricing</Link>
          <Link href="/tax-forms" onClick={() => setMenuOpen(false)} className="block text-lg font-medium text-gray-800">Tax Forms</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-lg font-medium text-gray-800">About</Link>
          <button onClick={() => scrollToSection('contact')} className="block text-lg font-medium text-gray-800">Contact</button>
          <button
            onClick={() =>
              window.location.href =
                'https://outlook.office.com/book/TorresPService@torresptp.com/?ismsaljsauthenabled'
            }
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold shadow-md"
          >
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
}
const navLinkStyle = `
  text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-200 
  cursor-pointer relative group
`;
