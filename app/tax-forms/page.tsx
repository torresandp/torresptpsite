'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

export default function TaxFormsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const taxForms = [
    { name: 'Form 1040', title: 'U.S. Individual Income Tax Return', category: 'individual', popular: true, url: 'https://www.irs.gov/pub/irs-pdf/f1040.pdf' },
    { name: 'Schedule 1', title: 'Additional Income and Adjustments to Income', category: 'individual' },
    { name: 'Schedule 2', title: 'Additional Taxes', category: 'individual' },
    { name: 'Schedule 3', title: 'Additional Credits and Payments', category: 'individual' },
    { name: 'Schedule A', title: 'Itemized Deductions', category: 'individual', popular: true },
    { name: 'Schedule B', title: 'Interest and Ordinary Dividends', category: 'individual' },
    { name: 'Schedule C', title: 'Profit or Loss from Business (Sole Proprietorship)', category: 'business', popular: true },
    { name: 'Schedule D', title: 'Capital Gains and Losses', category: 'individual' },
    { name: 'Schedule E', title: 'Supplemental Income and Loss', category: 'individual' },
    { name: 'Schedule F', title: 'Profit or Loss from Farming', category: 'business' },
    { name: 'Schedule 8812', title: 'Credits for Qualifying Children and Other Dependents', category: 'individual' },
    { name: 'Schedule 8995', title: 'Qualified Business Income Deduction Simplified Computation', category: 'business' },
    { name: 'Schedule 8995-A', title: 'Qualified Business Income Deduction', category: 'business' },
    { name: 'Form 1040-ES', title: 'Estimated Tax for Individuals', category: 'individual' },
    { name: 'Form 1040-X', title: 'Amended U.S. Individual Income Tax Return', category: 'individual' },
    { name: 'Form W-2', title: 'Wage and Tax Statement', category: 'employment' },
    { name: 'Form W-4', title: 'Employee\'s Withholding Certificate', category: 'employment' },
    { name: 'Form W-7', title: 'Application for IRS Individual Taxpayer Identification Number', category: 'individual' },
    { name: 'Form W-9', title: 'Request for Taxpayer Identification Number and Certification', category: 'business' },
    { name: 'Form 1095-A', title: 'Health Insurance Marketplace Statement', category: 'health' },
    { name: 'Form 1095-B', title: 'Health Coverage', category: 'health' },
    { name: 'Form 1095-C', title: 'Employer-Provided Health Insurance Offer and Coverage', category: 'health' },
    { name: 'Form 8962', title: 'Premium Tax Credit (PTC)', category: 'health' },
    { name: 'Form 1098', title: 'Mortgage Interest Statement', category: 'individual' },
    { name: 'Form 1099-NEC', title: 'Nonemployee Compensation', category: 'business' },
    { name: 'Form 1099-MISC', title: 'Miscellaneous Income', category: 'business' },
    { name: 'Form 1099-INT', title: 'Interest Income', category: 'individual' },
    { name: 'Form 1099-DIV', title: 'Dividends and Distributions', category: 'individual' },
    { name: 'Form 1099-B', title: 'Proceeds from Broker and Barter Exchange Transactions', category: 'individual' },
    { name: 'Form 1099-G', title: 'Certain Government Payments', category: 'individual' },
    { name: 'Form 1099-R', title: 'Distributions From Pensions, Annuities, Retirement, etc.', category: 'individual' },
    { name: 'Form 1099-SA', title: 'Distributions From an HSA, Archer MSA, or Medicare MSA', category: 'health' },
    { name: 'Form 2441', title: 'Child and Dependent Care Expenses', category: 'individual' },
    { name: 'Form 8863', title: 'Education Credits (American Opportunity and Lifetime Learning Credits)', category: 'education' },
    { name: 'Form 8862', title: 'Information to Claim Certain Credits After Disallowance', category: 'individual' },
    { name: 'Form 8880', title: 'Credit for Qualified Retirement Savings Contributions', category: 'individual' },
    { name: 'Form 8889', title: 'Health Savings Accounts (HSAs)', category: 'health' }
  ];

  const categories = [
    { id: 'all', name: 'All Forms', count: taxForms.length },
    { id: 'individual', name: 'Individual', count: taxForms.filter(form => form.category === 'individual').length },
    { id: 'business', name: 'Business', count: taxForms.filter(form => form.category === 'business').length },
    { id: 'employment', name: 'Employment', count: taxForms.filter(form => form.category === 'employment').length },
    { id: 'health', name: 'Health', count: taxForms.filter(form => form.category === 'health').length },
    { id: 'education', name: 'Education', count: taxForms.filter(form => form.category === 'education').length }
  ];

  const filteredForms = taxForms.filter(form => {
    const matchesSearch = form.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         form.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || form.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularForms = taxForms.filter(form => form.popular);

  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              IRS Tax Forms & Schedules
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete directory of IRS tax forms and schedules. We help you understand and prepare all necessary tax documents.
            </p>
          </div>

          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <div className="relative">
                    <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
                    <input
                      type="text"
                      placeholder="Search forms by name or description..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-amber-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {searchTerm === '' && selectedCategory === 'all' && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Tax Forms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularForms.map((form, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{form.name}</h3>
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      </div>
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <i className="ri-file-text-line text-amber-600 text-xl"></i>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{form.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Tax Forms' : `${categories.find(c => c.id === selectedCategory)?.name} Forms`}
              </h2>
              <span className="text-gray-600">{filteredForms.length} forms found</span>
            </div>
            
           <div className="grid grid-cols-1 gap-4">
             {filteredForms.map((form, index) => (
      <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
              <i className="ri-file-text-line text-amber-600"></i>
            </div>
            <div>
            <h3 className="text-lg font-bold text-gray-900">{form.name}</h3>
            <p className="text-gray-600 text-sm">{form.title}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {form.popular && (
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
              Popular
            </span>
          )}
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold capitalize">
            {form.category}
          </span>
        </div>
      </div>
      {form.url && (
        <div className="mt-4">
          <a 
            href={form.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-amber-600 font-semibold hover:underline text-sm"
          >
            View Form (PDF)
          </a>
        </div>
      )}
    </div>
  ))}
</div> {/* Close the .grid container here */}

{/* This should be OUTSIDE of the .map and .grid */}
            
<div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white text-center mt-12">
  <h2 className="text-3xl font-bold mb-4">Need Help with Tax Forms?</h2>
  <p className="text-xl mb-6 text-amber-100">
    Do not navigate complex tax forms alone. Our certified professionals are here to help you understand and complete any tax document.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button 
      onClick={() => setIsBookingOpen(true)}
      className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
    >
      Schedule Consultation
    </button>
    <a 
      href="tel:(484) 767-1741"
      className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
    >
      Call Now: (484) 767-1741
    </a>
  </div>
</div>


          <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with Tax Forms?</h2>
            <p className="text-xl mb-6 text-amber-100">
              Do not navigate complex tax forms alone. Our certified professionals are here to help you understand and complete any tax document.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
              >
                Schedule Consultation
              </button>
              <a 
                href="tel:(484) 767-1741"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
              >
                Call Now: (484) 767-1741
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
