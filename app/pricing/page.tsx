'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
// Removed BookingModal import

export default function PricingPage() {
  // Removed isBookingOpen and selectedService state as they are no longer needed
  // Removed setIsBookingOpen and setSelectedService setters

  const pricingPlans = [
    {
      name: 'Basic Tax Preparation',
      price: '$150',
      originalPrice: '$200',
      description: 'Perfect for individuals with straightforward tax situations',
      features: [
        'Form 1040 Individual Tax Return',
        'Standard Deduction or Itemized',
        'W-2 and 1099 Forms',
        'Basic Schedule A (if needed)',
        'Electronic Filing (e-file)',
        'Direct Deposit Setup',
        'Email Support',
        'Tax Planning Tips'
      ],
      highlight: false,
      serviceValue: 'tax-preparation',
      icon: 'ri-file-text-line'
    },
    {
      name: 'Premium Tax Services',
      price: '$275',
      description: 'Comprehensive tax preparation for complex situations',
      features: [
        'All Basic Services Included',
        'Schedule B (Interest & Dividends)',
        'Schedule C (Business Income)',
        'Schedule D (Capital Gains)',
        'Schedule E (Rental Income)',
        'Form 8812 (Child Tax Credit)',
        'Multiple State Returns',
        'Quarterly Tax Planning',
        'IRS Audit Support',
        'Priority Phone Support'
      ],
      highlight: true,
      serviceValue: 'tax-preparation',
      icon: 'ri-vip-crown-line'
    },
    {
      name: 'Business Tax Package',
      price: '$450',
      originalPrice: '$600',
      description: 'Complete business tax solutions for all entity types',
      features: [
        'Business Tax Returns (1120, 1120S, 1065)',
        'Schedule K-1 Preparation',
        'Payroll Tax Returns',
        'Sales Tax Filings',
        'Business Deduction Optimization',
        'Financial Statement Preparation',
        'Year-end Tax Planning',
        'Quarterly Business Reviews',
        'Dedicated Account Manager',
        'Same-day Response Guarantee'
      ],
      highlight: false,
      serviceValue: 'business-tax',
      icon: 'ri-building-line'
    }
  ];

  const additionalServices = [
    { name: 'Bookkeeping Services', price: '$200', period: 'per month', description: 'Monthly financial record maintenance' },
    { name: 'Payroll Processing', price: '$150', period: 'per month', description: 'Complete payroll management' },
    { name: 'Financial Consulting', price: '$125', period: 'per hour', description: 'Strategic financial guidance' },
    { name: 'IRS Representation', price: '$175', period: 'per hour', description: 'Professional IRS communication' },
    { name: 'Tax Planning Session', price: '$100', period: 'per session', description: 'Personalized tax strategy' },
    { name: 'Amended Tax Return', price: '$75', period: 'per form', description: 'Corrections to filed returns' }
  ];

  // Modified handleGetStarted function to directly redirect
  const handleGetStarted = () => {
    window.location.href = 'https://outlook.office.com/book/TorresPService@torresptp.com/?ismsaljsauthenabled';
  };

  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing for Quality Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect package for your tax and financial needs. All prices include comprehensive support and satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                plan.highlight ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-gray-200'
              }`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className={`${plan.icon} text-3xl text-amber-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-xl font-bold text-amber-600">Starting at</span>
                    <span className="text-4xl font-bold text-amber-600">{plan.price}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-amber-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={handleGetStarted} // No longer passing serviceValue as it's a direct redirect
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 whitespace-nowrap ${
                    plan.highlight 
                      ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                    <div className="text-right">
                      <span className="text-xl font-bold text-amber-600">{service.price}</span>
                      <span className="text-sm text-gray-600 block">{service.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Quote?</h2>
            <p className="text-xl mb-6 text-amber-100">
              Every business is unique. Let us create a personalized service package that
