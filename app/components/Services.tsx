
'use client';

import { useState, useEffect } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const services = [
    {
      icon: 'ri-file-text-line',
      title: 'Tax Preparation',
      description: 'Comprehensive tax preparation services for individuals and businesses. We maximize deductions while ensuring full compliance with current tax regulations.',
      features: ['Individual Tax Returns', 'Business Tax Returns', 'Tax Planning & Strategy', 'IRS Representation'],
      highlight: 'Most Popular',
      serviceValue: 'tax-preparation',
      detailedDescription: 'Our expert tax professionals provide comprehensive tax preparation services designed to maximize your refunds while ensuring full compliance with IRS regulations. We stay current with the latest tax laws and changes to provide you with the most accurate and beneficial tax preparation experience.',
      benefits: [
        'Maximum deduction identification and optimization',
        'Year-round tax planning and strategy consultation',
        'Electronic filing with direct deposit options',
        'Audit support and IRS representation if needed',
        'Tax document organization and storage',
        'Estimated tax payment calculations'
      ],
      pricing: 'Starting at $150 for individual returns'
    },
    {
      icon: 'ri-calculator-line',
      title: 'Bookkeeping',
      description: 'Professional bookkeeping services to maintain accurate financial records and provide clear insights into your business performance.',
      features: ['Monthly Financial Statements', 'Account Reconciliation', 'Expense Management', 'Cash Flow Analysis'],
      highlight: null,
      serviceValue: 'bookkeeping',
      detailedDescription: 'Our professional bookkeeping services ensure your financial records are accurate, up-to-date, and compliant with accounting standards. We provide detailed financial insights to help you make informed business decisions and maintain healthy cash flow.',
      benefits: [
        'Monthly financial statements and reports',
        'Bank and credit card reconciliation',
        'Accounts payable and receivable management',
        'Expense tracking and categorization',
        'Cash flow analysis and forecasting',
        'Integration with popular accounting software'
      ],
      pricing: 'Starting at $200 per month'
    },
    {
      icon: 'ri-team-line',
      title: 'Payroll Services',
      description: 'Complete payroll management ensuring accurate, timely payments and full compliance with employment tax requirements.',
      features: ['Payroll Processing', 'Tax Withholdings', 'Direct Deposit Setup', 'Quarterly Tax Reports'],
      highlight: null,
      serviceValue: 'payroll',
      detailedDescription: 'Our comprehensive payroll services handle all aspects of employee compensation, from calculating wages and deductions to filing required tax forms. We ensure your payroll is processed accurately and on time, every time.',
      benefits: [
        'Bi-weekly or monthly payroll processing',
        'Direct deposit and check printing options',
        'Automatic tax calculations and withholdings',
        'Quarterly and annual tax form preparation',
        'Employee self-service portal access',
        'Workers compensation and benefits administration'
      ],
      pricing: 'Starting at $50 per month + $5 per employee'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Financial Consulting',
      description: 'Strategic financial guidance to help your business achieve sustainable growth and long-term financial success.',
      features: ['Business Planning', 'Financial Forecasting', 'Investment Strategy', 'Risk Assessment'],
      highlight: 'Premium',
      serviceValue: 'consulting',
      detailedDescription: 'Our financial consulting services provide strategic guidance to help your business achieve sustainable growth and long-term financial success. We analyze your current financial position and develop customized strategies to optimize your financial performance.',
      benefits: [
        'Comprehensive financial analysis and planning',
        'Cash flow optimization strategies',
        'Investment and expansion planning',
        'Risk management and assessment',
        'Budget development and monitoring',
        'Financial performance benchmarking'
      ],
      pricing: 'Starting at $150 per hour'
    }
  ];

  const handleLearnMore = (service: any) => {
    if (isMounted) {
      setSelectedService(service);
    }
  };

  const closeModal = () => {
    if (isMounted) {
      setSelectedService(null);
    }
  };

  const handleContactUs = () => {
    if (typeof window !== 'undefined' && isMounted) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive financial services designed to help individuals and businesses 
              achieve their financial goals with confidence and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                {service.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {service.highlight}
                    </span>
                  </div>
                )}

                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-amber-600 group-hover:to-amber-700 transition-all duration-300">
                  <i className={`${service.icon} text-3xl text-amber-600 group-hover:text-white transition-colors duration-300`}></i>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-900 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <i className="ri-check-line text-amber-600 text-sm"></i>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button 
                    onClick={() => handleLearnMore(service)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-6">
                We offer tailored financial services to meet your specific business needs and requirements.
              </p>
              <button 
                onClick={handleContactUs}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-100">
            <div className="p-8 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mr-6">
                    <i className={`${selectedService.icon} text-3xl text-amber-600`}></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                    <p className="text-amber-600 font-semibold mt-1">{selectedService.pricing}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-200"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Overview</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{selectedService.detailedDescription}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <i className="ri-check-line text-amber-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-4">
                  Contact us today to schedule a free consultation and learn how we can help you with {selectedService.title.toLowerCase()}.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      closeModal();
                      handleContactUs();
                    }}
                    className="whitespace-nowrap bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={closeModal}
                    className="whitespace-nowrap bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-semibold transition-all duration-200 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
