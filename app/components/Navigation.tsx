'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
//import BookingModal from './BookingModal';

export default function Navigation() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/">
                <img 
                  src="https://static.readdy.ai/image/a74396dc2a8ffe0cd229d1e48a84a3ac/ad6010ee28855d5ffb906867a9043050.png" 
                  alt="T&P Professional Services" 
                  className="h-14 cursor-pointer"
                />
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-10">
              <Link href="/" className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-200 cursor-pointer relative group">
                Home
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-200 cursor-pointer relative group"
              >
                Services
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
              <Link href="/pricing" className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-200 cursor-pointer relative group">
                Pricing
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
              <Link href="/tax-forms" className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-200 cursor-pointer relative group">
                Tax Forms
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
              <Link href="/about"
                className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-200 cursor-pointer relative group">
                About
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>

              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-200 cursor-pointer relative group"
              >
                Contact
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
            </div>
            
            <div className="flex items-center">
              <button onClick={() => window.location.href = 'https://outlook.office.com/book/TorresPService@torresptp.com/?ismsaljsauthenabled'}
                className="whitespace-nowrap bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Consultation
              </button>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
