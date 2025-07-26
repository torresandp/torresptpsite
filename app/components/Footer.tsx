
'use client';

export default function Footer() {
  const services = [
    'Tax Preparation',
    'Bookkeeping Services',
    'Payroll Processing',
    'Financial Consulting',
    'Business Planning',
    'Audit Support'
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Schedule Consultation', href: '#booking' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 lg:col-span-2">
              <img 
                src="https://static.readdy.ai/image/a74396dc2a8ffe0cd229d1e48a84a3ac/ad6010ee28855d5ffb906867a9043050.png" 
                alt="T&P Professional Services" 
                className="h-20 mb-6"
              />
              <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                Your trusted partner for comprehensive tax preparation, bookkeeping, and financial consulting services. 
                We help individuals and businesses achieve their financial goals with expertise and integrity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-amber-600 transition-all duration-300 cursor-pointer group">
                  <i className="ri-facebook-fill text-xl group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-amber-600 transition-all duration-300 cursor-pointer group">
                  <i className="ri-twitter-fill text-xl group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-amber-600 transition-all duration-300 cursor-pointer group">
                  <i className="ri-linkedin-fill text-xl group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-amber-600 transition-all duration-300 cursor-pointer group">
                  <i className="ri-instagram-fill text-xl group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer hover:pl-2 duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer hover:pl-2 duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <h5 className="font-bold text-amber-400 mb-3">Contact Info</h5>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-gray-300">
                    <i className="ri-phone-line mr-2 text-amber-400"></i>
                    (484) 767-1741
                  </p>
                  <p className="flex items-center text-gray-300">
                    <i className="ri-mail-line mr-2 text-amber-400"></i>
                    richard.torres@torresptp.com
                  </p>
                  <p className="flex items-center text-gray-300">
                    <i className="ri-map-pin-line mr-2 text-amber-400"></i>
                    Lehigh County, PA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 T&P Professional Services. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors cursor-pointer">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors cursor-pointer">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
