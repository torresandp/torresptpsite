// app/tax-forms/page.tsx

'use client';

import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer'; // You can keep this import if BookingModal or other components rely on it, but the Footer component itself will be removed from here.

export default function TaxFormsPage() {
  // ... (state and data definitions) ...

  return (
    <>
      <Navigation /> {/* Navigation is also in layout, you might want to remove it from here too */}
      <div className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* ... all your page content ... */}

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white text-center">
            {/* ... call to action section ... */}
          </div>
        </div>
      </div>

      {/* REMOVE THE FOOTER FROM HERE: */}
      {/* <Footer /> */}

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
