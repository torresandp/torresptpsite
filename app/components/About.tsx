
'use client';

export default function About() {
  const achievements = [
    { number: '500+', label: 'Satisfied Clients', icon: 'ri-user-star-line' },
    { number: '15+', label: 'Years Experience', icon: 'ri-award-line' },
    { number: '99%', label: 'Client Retention', icon: 'ri-heart-line' },
    { number: '24/7', label: 'Support Available', icon: 'ri-customer-service-line' }
  ];

  const certifications = [
    { name: 'Certified Public Accountant (CPA)', abbr: 'CPA' },
    { name: 'Enrolled Agent (EA)', abbr: 'EA' },
    { name: 'QuickBooks ProAdvisor', abbr: 'QPA' },
    { name: 'Tax Professional', abbr: 'TP' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <span className="text-amber-600 font-semibold text-lg tracking-wide uppercase">About Us</span>
              <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                Excellence in Financial Services Since 2009
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 15 years of dedicated service in tax preparation and bookkeeping, T&P Professional Services 
              has established itself as a trusted partner for individuals and businesses throughout Lehigh County, PA.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of certified professionals combines extensive experience with cutting-edge technology to deliver 
              accurate, efficient, and personalized financial solutions. We pride ourselves on building lasting relationships 
              through transparency, integrity, and exceptional results.
            </p>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center bg-amber-50 p-4 rounded-xl">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">{cert.abbr}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{cert.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl border border-amber-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                      <i className={`${achievement.icon} text-white text-sm`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-amber-900">{achievement.number}</h3>
                  </div>
                  <p className="text-amber-800 font-semibold">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20senior%20tax%20accountant%20in%20elegant%20business%20suit%20working%20at%20luxurious%20modern%20office%20with%20premium%20financial%20documents%2C%20sophisticated%20calculator%2C%20and%20warm%20golden%20lighting%20creating%20atmosphere%20of%20expertise%20and%20trust%2C%20high-end%20workspace%20with%20accounting%20materials%2C%20elegant%20gold%20and%20cream%20color%20scheme%2C%20executive%20business%20environment&width=600&height=700&seq=about-professional-image&orientation=portrait"
                alt="Professional tax services"
                className="rounded-3xl shadow-2xl object-cover object-top w-full h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent rounded-3xl"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-amber-100">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-shield-check-line text-white text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Trusted & Secure</p>
                  <p className="text-sm text-gray-600">Fully Licensed & Insured</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-amber-100">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Quick Turnaround</p>
                  <p className="text-sm text-gray-600">Same Day Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
