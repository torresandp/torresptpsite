'use client';

import { useState } from 'react';
// import BookingModal from './BookingModal'; // Keep commented out if not used

// REMOVE THIS LINE: import Navigation from './Navigation';

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div id="hero" className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 min-h-screen flex items-center pt-16">
        {/*
          IMPORTANT: Ensure the content of your Hero component (all the divs, images, text, buttons etc.)
          is inside this div. I've used '...' for brevity here.
        */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-top opacity-15"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Ultra%20professional%20modern%20accounting%20office%20with%20elegant%20executive%20desk%2C%20sophisticated%20financial%20documents%2C%20premium%20calculator%2C%20and%20warm%20golden%20lighting%20creating%20an%20atmosphere%20of%20trust%20and%20expertise%2C%20minimalist%20luxurious%20interior%20design%20with%20cream%20and%20gold%20accents%2C%20high-end%20business%20environment&width=1200&height=800&seq=hero-bg-premium&orientation=landscape')`
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-800/60 to-amber-900/80"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="https://static.readdy.ai/image/a74396dc2a8ffe0cd229d1e48a84a3ac/ad6010ee28855d5ffb906867a9043050.png"
                alt="T&P Professional Services"
                className="h-28 mx-auto mb-6 drop-shadow-lg"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Excellence in <br />
              <span className="text-amber-200 relative">
                Financial Services
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              Trusted by over 500 clients across Pennsylvania for comprehensive tax preparation,
              bookkeeping, and strategic financial consulting. Experience the difference of working
              with certified professionals who prioritize your financial success.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={() => window.location.href = 'https://outlook.office.com/book/TorresPService@torresptp.com/?ismsaljsauthenabled'}
                className="whitespace-nowrap bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Free Consultation
              </button>
              <a
                href="#services"
                className="whitespace-nowrap border-2 border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-amber-900 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Services
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-amber-200/20">
                <div className="text-3xl font-bold text-amber-200 mb-2">500+</div>
                <div className="text-amber-100 font-medium">Satisfied Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-amber-200/20">
                <div className="text-3xl font-bold text-amber-200 mb-2">15+</div>
                <div className="text-amber-100 font-medium">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-amber-200/20">
                <div className="text-3xl font-bold text-amber-200 mb-2">24/7</div>
                <div className="text-amber-100 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
